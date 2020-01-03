/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  sideBar: {
    Quickstart: [
      "general/getting-started",
      "general/understanding-variances",
      "general/understanding-node-widget",
      "general/conducting-what-if",
      "general/more-info-value-driver",
      "general/saving-opening-scenarios",
      "general/valq-in-powerbi"
    ],
    "Model Tab": [
      "model/new",
      "model/node",
      "model/data-series",
      "model/settings",
      "model/general"
    ],
    "Plan Tab": [
      "planning/overview",
      "planning/budget-allocation",
      {
        type: "category",
        label: "Other features",
        items: ["planning/others/adding-note", "planning/others/view-history"]
      }
    ],
    Simulate: ["simulation/simulation"],
    "Analyze Tab": ["analysis/variance-analysis"],
    "Storage and Collaboration": ["storage/storage-collaboration"],
    "Resources": ["faq/known-issues"]
  }
};
