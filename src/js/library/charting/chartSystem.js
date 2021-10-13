/* 

Software in the Sustain Ecosystem are Released Under Terms of Apache Software License 

This research has been supported by funding from the US National Science Foundation's CSSI program through awards 1931363, 1931324, 1931335, and 1931283. The project is a joint effort involving Colorado State University, Arizona State University, the University of California-Irvine, and the University of Maryland - Baltimore County. All redistributions of the software must also include this information. 

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION


1. Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.

3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

You must give any other recipients of the Work or Derivative Works a copy of this License; and
You must cause any modified files to carry prominent notices stating that You changed the files; and
You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and
If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License. 

You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.
5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability. 

END OF TERMS AND CONDITIONS

*/

import SingleChartManager from "./singleChartManager";
import SingleChartArea from "./singleChartArea";
import LineGraph from "./lineGraph";
import Histogram from "./histogram";
import Scatterplot from "./scatterplot";
import ScatterplotManager from "./scatterplotManager";
import ScatterplotArea from "./scatterplotArea";
import LineChartManager from "./lineChartManager";
import LineChartArea from "./lineChartArea";
import ValidFeatureManager from "./validFeatureManager";
import Feature from "./feature";
import resizable from "../resizable";
import ChartFrame from "./chartFrame";
import CovidDataSource from "./covidDataSource"
import MapDataSource from "./mapDataSource"

// An enumeration of each type of data source recognized by the ChartSystem.
// See DataSource for more information about what a "data source" is.
// DataSources are singleton with respect to each ChartSystem - only one
// exists at a time, and it's stored within these objects.
export const DataSourceType = {
    MAP_FEATURES: {
        name: "map_features",
        sourceType: MapDataSource,
        sourceInstance: undefined,
        supplementObjectType: ValidFeatureManager,
        supplementObjectInstance: undefined,
    },
    COUNTY_COVID: {
        name: "county_covid",
        sourceType: CovidDataSource,
        sourceInstance: undefined,
        supplementObjectType: undefined,
        supplementObjectInstance: undefined,
    }
};

// An enumeration of the each type of chart recognzied by the ChartSystem.
// Each type has a type of manager, area, and chart, as well as a list of each
// kind of DataSource it can use.  (At the moment, charts only support one data
// source at a time.) These objects are passed into ChartSystem's getFrame
// function to create new charts.
export const ChartingType = {
    LINE: {
        name: "line",
        managerType: LineChartManager,
        areaType: SingleChartArea,
        chartType: LineGraph,
        wantsSources: [ DataSourceType.COUNTY_COVID ],
    },
    HISTOGRAM: {
        name: "histogram",
        managerType: SingleChartManager,
        areaType: SingleChartArea,
        chartType: Histogram,
        wantsSources: [ DataSourceType.MAP_FEATURES ],
    },
    SCATTERPLOT: {
        name: "scatterplot",
        managerType: ScatterplotManager,
        areaType: ScatterplotArea,
        chartType: Scatterplot,
        wantsSources: [ DataSourceType.MAP_FEATURES ],
    },
};

// Chart message types that any chart can accept.
export const CommonChartMessageType = {
    // Notify the chart that a query has started/ended.
    // Has:
    //  started: true if a query began, false if a query ended
    NOTIFY_QUERY_STATE: 1 << 10,
};

/**
 * The brains that holds the entire charting operation together.
 * Every chart lives underneath this class. All ChartFrames originate from
 * this class. All data flows from this class to underlying charts. This class 
 * is your only god. 
 *
 * A single instance of this is instantiated in index.js, which is used for all
 * charting in Aperture. Creating another ChartSystem instance will create an 
 * entirely new, isolated charting ecosystem, and may cause horrible issues as
 * such a thing has not been properly tested.
 *
 * Construction of a ChartSystem automatically also creates a resizable. You
 * do not need to manually create and attach any resizables.
 *
 * This class contains a few useful properties:
 * - this.catalog: The charting catalog, in raw object form
 * - this.graphable: A list of every graphable feature, as reported from the
 *   charting catalog
 * - this.resizable: The resizable that this ChartSystem lives in
 *
 * @author Pierce Smith and Matt Young
 * @file An orchestrator for all charting operations
 */
export default class ChartSystem {
    // In pixels.
    static MAX_CHART_HEIGHT = 350;

    // Do not call this directly.
    constructor(map, chartCatalogFilename) {
        this.map = map;

        this.chartFrames = [];

        this.resizable = new resizable(resizable.minimum_width, resizable.minimum_height + 200, "white");
        this.resizable.setResizeCallback(this.rerenderAll.bind(this));

        $.getJSON(chartCatalogFilename, (catalog) => {
            this.initializeUpdateHooks();
            this.catalog = catalog;
            this.graphable = catalog.map(e => {
                return Object.entries(e.constraints).map(kv => {
                    return Feature.compose(e.collection, kv[0], kv[1].label);
                })
            }).flat();

            this.createDataSources();
        });

        this.doNotUpdate = false;

    }

    /** 
     * Initialize every needed data source for the ChartSytem's charts.
     * This is only to be called once, and is done so in the constructor.
     * Do not call this manually.
     * @memberof ChartSystem
     * @method createDataSource
     */
    createDataSources() {
        Object.values(DataSourceType).forEach(source => {
            source.sourceInstance = new source.sourceType(this.map, this.graphable);
            if (source.supplementObjectType) {
                source.supplementObjectInstance = new source.supplementObjectType();
            }
        });
    }

    /**
     * Create a new chart frame for a given type of chart.
     * This is how you are intended to put new charts into the UI. Call this,
     * get a ChartFrame, and attach the frame's DOM node to some other node.
     * See ChartFrame for a few more details.
     * See chartBtnCreateChart.js for examples of how this function is used.
     * @memberof ChartSystem
     * @method getChartFrame
     * @param type {object} A ChartType for the type of chart you wish to create
     * @returns {object} A ChartFrame
     */
    getChartFrame(type) {
        let node = document.createElement("div");
        node.className = `${type.name}-chart-area`;

        let area = new type.areaType();
        area.attachTo(node);
        let manager = new type.managerType(this.catalog, area, type.wantsSources[0].supplementObjectInstance, this, type.chartType);
        let frame = new ChartFrame(node, area, manager, type);
        this.chartFrames.push(frame);

        return frame;
    }

    initializeUpdateHooks() {
        this.map.on('move', e => { 
            this.update(); 
        });

        this.map.on('zoomstart', e => { 
            this.doNotUpdate = true;
        });

        this.map.on('zoomend', e => { 
            this.doNotUpdate = false; 
            this.update(); 
        });

        window.setInterval(() => {
            this.rerenderAll();
        }, 1500);
    }

    /**
     * Refreshes every data source and re-renders every chart.
     * If something related to data sources changes, this function should be
     * called. It is also called naturally every 2 seconds, and whenever the
     * map moves.
     * It is safe to call this function from inside chart code.
     * @memberof ChartSystem
     * @method update
     * @param {object=} parameters An optional object with extra information
     * for this update event
     */
    async update(parameters = {}) {
        if (this.doNotUpdate && !parameters.force) {
            return;
        }

        this.rerenderAll();

        Object.values(DataSourceType).forEach(async source => {
            this.chartFrames.forEach(async frame => {
                if (frame.getChartType().wantsSources.find(wanted => wanted.name === source.name)) {
                    let sourceParams = frame.manager.getSourceParameters();
                    if (!parameters.periodic) {
                        frame.passMessage({ type: CommonChartMessageType.NOTIFY_QUERY_STATE, started: true });
                    }

                    frame.manager.update(await source.sourceInstance.get(...sourceParams));

                    if (!parameters.periodic) {
                        frame.passMessage({ type: CommonChartMessageType.NOTIFY_QUERY_STATE, started: false });
                    }
                    source.sourceInstance.updateSupplement(source.supplementObjectInstance);
                }
            });
        });

        this.doNotUpdate = true;
        window.setTimeout(() => { this.doNotUpdate = false; }, 200);
    }

    rerenderAll(width, height) {
        let hasNewDimensions = width && height;

        this.chartFrames.forEach(frame => {
            if (hasNewDimensions) {
                let newHeight = height - 200;
                if (newHeight > ChartSystem.MAX_CHART_HEIGHT) {
                    newHeight = ChartSystem.MAX_CHART_HEIGHT;
                }

                frame.setSize(width - 200, newHeight);
            }
            frame.resize();
        });
    }


    /**
     * Toggle whether or not the charting window is visible.
     * @memberof ChartSystem
     * @method toggleVisible
     */
    toggleVisible() {
        this.resizable.toggleVisible();
    }
}
