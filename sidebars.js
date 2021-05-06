/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    sideBar: {
        Introduction: [
            "intro/introduction",
            "intro/valq-workspace",
            "intro/install",
            "intro/model",
            "intro/node",
            "intro/workflow",
        ],
        Model: [
            "model/model_overview",
            "model/new",
            "model/node",
            "model/data-series",
            "model/settings",
            "model/general",
        ],
        Plan: [
            "planning/plan_overview",
            "planning/create_new_series",
            "planning/plan_features",
            "planning/time_series",
            "planning/business_cases",
            "planning/update",
        ],
        Simulate: [
            "simulation/simulate_overview",
            "simulation/simulation_canvas",
            "simulation/navigation_panel",
            "simulation/tableview",
            "simulation/touch-support",
        ],
        Analyze: [
            "analysis/analyze_overview",
            "analysis/variance_analysis",
            "analysis/attribution-analysis",
            "analysis/sensitivity-analysis"
        ],
        "Storage and Collaboration": [
            "storage/valq-collaborate",            
            "storage/save-model",
	    "storage/user-security",
            "storage/scenario-collab",
            "storage/export",
            "storage/commenting",
            "storage/history-logs",
            "storage/model-merge",
                            
        ],
        Administration: ["storage/admin-console"],
        Resources: [
            "faq/formula-list",
            "faq/definitions",
            "faq/known-issues",
        ],
        "How To Videos": [
            "how_to_videos/get-started",
            {
                type: "category",
                label: "Model",
                items: [
                    "how_to_videos/model/modelling-basics",
                    "how_to_videos/model/nodes",
                    "how_to_videos/model/nodes-config",
                    "how_to_videos/model/settings",
                    "how_to_videos/model/general",
                    "how_to_videos/model/data-series",
                ],
            },

            {
                type: "category",
                label: "Plan",
                items: [
                    "how_to_videos/plan/data-series",
                    "how_to_videos/plan/planning-toolbar",
                    "how_to_videos/plan/allocate-by-weight",
                    "how_to_videos/plan/equal-allocation",
                    "how_to_videos/plan/trend-allocation",
                    "how_to_videos/plan/copy-allocation",
                ],
            },
            {
                type: "category",
                label: "Simulate",
                items: [
                    "how_to_videos/simulate/intro",
                    "how_to_videos/simulate/scenario-planning",
                    "how_to_videos/simulate/sub-models",
                    "how_to_videos/simulate/simulation_period",
                    "how_to_videos/simulate/display-scaling",
                    "how_to_videos/simulate/kpi",
                    "how_to_videos/simulate/constraints",
                    "how_to_videos/simulate/visualization",
                ],
            },
            /*            {
                                                                                                          type: "category",
                                                                                                          label: "Analyze",
                                                                                                          items: ["how_to_videos/analyze/intro"]
                                                                                          
                                                                                                      },
                                                                                          */
        ],
    },
    functionSideBar: {
        "Logical Functions": [
            "references/formulas/if",
            "references/formulas/and",
            "references/formulas/switch",
            "references/formulas/or",
            "references/formulas/not",
            "references/formulas/xor",
            "references/formulas/isnan",
        ],
        "Math Functions": [
            "references/formulas/sum",
            "references/formulas/average",
            "references/formulas/averageexzero",
            "references/formulas/averageexneg",
            "references/formulas/averageexzeroneg",
            "references/formulas/count",
            "references/formulas/abs",
            "references/formulas/min",
            "references/formulas/max",
            "references/formulas/power",
            "references/formulas/sqrt",
            "references/formulas/exp",
            "references/formulas/log",
        ],
        "Finance Functions": [
            "references/formulas/irr",
            "references/formulas/npv",
            "references/formulas/pmt",
            "references/formulas/ipmt",
            "references/formulas/fv",
            "references/formulas/pv",
            "references/formulas/cumipmt",
            "references/formulas/cumprinc",
            "references/formulas/rate",
        ],
        "Range Functions": [
            "references/formulas/range",
            "references/formulas/lastnperiods",
            "references/formulas/get",
            "references/formulas/foreach",
            "references/formulas/getrowvalue",
            "references/formulas/getcurrentrange",
            "references/formulas/findbyid",
            "references/formulas/findbytitle",
            "references/formulas/thisid",
            "references/formulas/thissourcekey",
        ],
        "Static Identifiers": [
            "references/formulas/this",
            "references/formulas/me",
            "references/formulas/current_series",
            "references/formulas/current_series_id",

            "references/formulas/current_period_index",
            "references/formulas/sim_from_to_index",
            "references/formulas/node-properties",
        ],
        "Additional Series": [
            "references/formulas/additional_series",

            "references/formulas/current_node_value",
            "references/formulas/node-properties",
        ],
    },
};
