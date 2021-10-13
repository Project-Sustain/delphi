const assert = require('assert');
import MapDataFilter from '../../../../src/js/library/mapDataFilter.js';

const exampleData = [
    { properties: { median_income: 44000 }},
    { properties: { median_income: 43000 }},
    { properties: { median_income: 16000 }},
    { properties: { median_income: 73000 }},
    { properties: { median_income: 244000, NAMELSAD10: "Some Tract", NAME10: "65.0" }},
    { properties: { median_income: 8000, NAMELSAD10: "Some County" }},
    { properties: { population: 7000 }},
    { properties: { population: 65000, NAME10: "Some" }},
    { properties: { population: 9000 }},
    { properties: { population: 2000 }},
];

describe('MapDataFilter', () => {
    describe('add()', () => {
        it('can add single data points', () => {
            let filter = new MapDataFilter();
            filter.add(exampleData[0], "income");
            assert(filter.data.income.length === 1);
            assert(filter.data.income[0].properties.median_income === 44000);
            filter.add(exampleData[1], "income");
            assert(filter.data.income.length === 2);
            assert(filter.data.income[1].properties.median_income === 43000);
        });
        it ('can add multiple data points', () => {
            let filter = new MapDataFilter();
            filter.add(exampleData, "coll");
            assert(filter.data.coll.length === exampleData.length);
            assert(filter.data.coll[0].properties.median_income === 44000);
            assert(filter.data.coll[5].properties.median_income === 8000);
            assert(filter.data.coll[6].properties.population === 7000);
        });
    });
    
    describe('clear()', () => {
        it('removes all data points from the filter', () => {
            let filter = new MapDataFilter();
            filter.add(exampleData);
            filter.clear();
            assert(filter.data.length === 0);
        });
    });

    describe('discardOldData()', () => {
        it('can remove data', (done) => {
            let filter = new MapDataFilter();
            filter.add(exampleData, "coll");
            setTimeout(() => { 
                filter.discardOldData(100);
                assert(filter.data.coll.length === 0);
                done();
            }, 200);
        });

        it('properly removes only outdated data', (done) => {
            let filter = new MapDataFilter();

            filter.add(exampleData[0], "coll");
            setTimeout(() => { filter.add(exampleData[1], "coll"); }, 100);
            setTimeout(() => { filter.add(exampleData[2], "coll"); }, 200);
            setTimeout(() => { 
                filter.discardOldData(150); 
                assert(filter.data.coll.length === 1);
                assert(filter.data.coll[0].properties.median_income === 16000);
                done(); 
            }, 300);
        });
    });

    describe('getModel()', () => {
        it('can create single models', () => {
            let feature = "coll::median_income::x";

            let filter = new MapDataFilter();
            filter.add(exampleData, "coll");
            let model = filter.getModel(feature);
            assert(model[feature].length === 6);
            assert(model[feature][1].data === 43000);
        });

        it('can create multiple models', () => {
            let features = ['coll::median_income::x', 'coll::population::x'];

            let filter = new MapDataFilter();
            filter.add(exampleData, "coll");
            let model = filter.getModel(features);
            assert(model[features[0]].length === 6);
            assert(model[features[1]].length === 4);
        });

        it('properly records name and type', () => {
            let features = ['coll::median_income::x', 'coll::population::x'];

            let filter = new MapDataFilter();
            filter.add(exampleData, "coll");
            let model = filter.getModel(features);
            assert.equal(model[features[0]][4].type, "tract");
            assert.equal(model[features[0]][4].locationName, "65.0");
            assert.equal(model[features[0]][5].type, "county");
        });
    });

    describe('onGetNewData', () => {
        it('can set a data callback', () => {
            let filter = new MapDataFilter();

            let callbackedData = [];
            filter.onGetNewData((data) => { console.log(data); callbackedData.push(data); });
            filter.add(exampleData);

            assert.equal(callbackedData.length, exampleData.length);
        });
    });
});
