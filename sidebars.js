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
            "intro/import",
            "intro/model",
            "intro/workflow"
        ],
        Quickstart: [
            "general/getting-started",
            "general/understanding-variances",
            "general/understanding-node-widget",
            "general/conducting-what-if",
            "general/more-info-value-driver",
            "general/saving-opening-scenarios",
            "general/workspace-in-valq",
            "general/valq-in-powerbi",
            "general/installation_guide_v1.8"
        ],
        "Model": [
            "model/model_tab",
            "model/new",
            "model/node",
            "model/data-series",
            "model/settings",
            "model/general"
        ],
        "Plan": [
            "planning/plan_tab",
            "planning/plan_features",
            "planning/overview",
            "planning/budget-allocation",
            {
                type: "category",
                label: "Other features",
                items: ["planning/others/adding-note", "planning/others/view-history"]
            }
        ],
        Simulate: ["simulation/simulation"],
        "Analyze": [
            "analysis/variance_analysis"
        ],
        "Storage and Collaboration": ["storage/storage-collaboration"],
        Resources: [
            "faq/formula-list",
            "faq/definitions",
            "faq/known-issues",
            {
                type: "category",
                label: "Videos",
                items: [
                    "faq/videos-overview",
                    "faq/videos-how-to",
                    "faq/videos-demo",
                    "faq/videos-income-statement",
                    "faq/videos-demand-planning",
                    "faq/videos-others"
                ]
            }
        ],
        "How To Videos": ["how_to_videos/get-started",
            {
                type: "category",
                label: "Model",
                items: [
                    "how_to_videos/model/modelling-basics",
                    "how_to_videos/model/nodes",
                    "how_to_videos/model/nodes-config",
                    "how_to_videos/model/settings",
                    "how_to_videos/model/general",
                    "how_to_videos/model/data-series"
                ]
            },

            {
                type: "category",
                label: "Plan",
                items: ["how_to_videos/plan/data-series",
                        "how_to_videos/plan/planning-toolbar",
                        "how_to_videos/plan/allocate-by-weight",
                        "how_to_videos/plan/equal-allocation",
                        "how_to_videos/plan/trend-allocation"
]

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
                    "how_to_videos/simulate/visualization"
                ]
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
            "references/formulas/xor"
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
            "references/formulas/log"
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
            "references/formulas/rate"
        ],
        "Range Functions": [
            "references/formulas/range",
            "references/formulas/lastnperiods",
            "references/formulas/get",
            "references/formulas/foreach"
        ],
        "Static Identifiers": [
            "references/formulas/this",
            "references/formulas/me",
            "references/formulas/current_series",
            "references/formulas/current_series_id",
            "references/formulas/current_period_index",
            "references/formulas/sim_from_to_index",
            "references/formulas/node-properties"
        ],
        "Additional Series": [
            "references/formulas/additional_series",
        ]
    }
};
