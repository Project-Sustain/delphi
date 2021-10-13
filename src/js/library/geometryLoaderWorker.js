//webworker that takes a list of geohashes (with their corresponding GISJOINS), and return 
import GeometryLoader from './geometryLoader.js';
import BoundsToGISJOIN from './boundsToGISJOIN.js';

console.log = function () { } //remove this is you want logging
let id;
let loader;

const errorMessage = (msg, senderID) => {
    console.log(`${id} - sender: ${senderID}, ERR: ${msg}`)
    postMessage({
        senderID: senderID,
        type: "err",
        message: msg
    });
}

const queryEndResponse = (senderID) => {
    console.log(`${id} - sending END response to senderID: ${senderID}`)
    postMessage({
        senderID: senderID,
        type: "end"
    });
}

const queryResponse = (data, senderID) => {
    if (data === "END") {
        queryEndResponse(senderID);
        return;
    }
    console.log(`${id} - sending ${data.data.length} records to ${senderID}`)
    postMessage({
        senderID: senderID,
        type: "data",
        data: data
    });
}

const performQuery = async (query, senderID) => {
    const cached = await loader.getCachedData(query)
    if (cached) {
        if (cached.data.length) {
            console.log(`${id} - found ${cached.data.length} records in cache for sender ${senderID}`)
            queryResponse(cached, senderID)
        }
        query = query.filter(geohash => !cached.geohashes.includes(geohash))
    }
    if (query.length) {
        //console.error("db was missing a geohash - fatal error")
    }
    queryEndResponse(senderID)
}

const configStatusResponse = (status, senderID) => {
    console.log(`${id} - sending preload status response @${status.pctDone}% to sender ${senderID}`);
    postMessage({
        senderID: senderID,
        type: "configStatus",
        status: status
    });
}

onmessage = function (msg) {
    const data = msg.data;
    const sID = data.senderID;
    switch (data.type) {
        case "config":
            loader = new GeometryLoader(data.collection);
            BoundsToGISJOIN.config(data.collection);
            id = data.id;
            loader.preloadData(
                (status) => {
                    configStatusResponse(status, sID)
                },
                () => {
                    queryEndResponse(sID)
                }
            );
            console.log(`${id} - set to use ${data.collection} collection.`)
            break;
        case "query":
            console.log(`${id} - received query from senderID: ${sID}`)
            if (!loader) {
                errorMessage("You must set up the worker with the 'config' message!", sID);
                break;
            }
            const queryData = BoundsToGISJOIN.boundsToLengthNGeohashes(
                data.bounds,
                data.blacklist
            );
            console.log(`${id} - found ${queryData.length} geohashes that match bounds for sender ${sID}`)
            //check to make sure map of geohashes & gisjoins is any good
            if (!queryData.length) {
                console.log(`${id} - No geohashes match for sender: ${sID}, sending END`)
                queryEndResponse(sID);
                break;
            }
            performQuery(queryData, sID)
            break;
    }
}

