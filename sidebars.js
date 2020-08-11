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
            "intro/versions",
            "intro/import",
            "intro/model",
            "intro/node",
            "intro/workflow"
        ],
        Model: [
            "model/model_overview",
            "model/new",
            "model/node",
            "model/data-series",
            "model/settings",
            "model/general"
        ],
        Plan: [
            "planning/plan_overview",
            "planning/access",
            "planning/plan_features",
            "planning/time_series",
            "planning/business_cases",
            "planning/update"

        ],
        Simulate: [
            "simulation/simulate_overview",
            "simulation/sim_features"
        ],
        Analyze: [
            "analysis/analyze_overview",
            "analysis/variance_analysis"
        ],
        "Storage and Collaboration": [
            "storage/storage-collaboration"
        ],
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
        ]
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
