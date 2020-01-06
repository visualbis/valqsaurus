/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useCallback } from "react";
import classnames from "classnames";
import { useHistory } from "@docusaurus/router";
import "./algolia.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import DocSearch from "./lunrSearch/lib/DocSearch";
import searchData from "./seaarch-data";

const Search = props => {
    const initialized = useRef(false);
    const searchBarRef = useRef(null);
    const history = useHistory();
    const { siteConfig = {} } = useDocusaurusContext();
    const { baseUrl } = siteConfig;
    const initAlgolia = () => {
        if (!initialized.current) {
            new DocSearch({
                searchData,
                inputSelector: "#search_input_react",
                // Override algolia's default selection event, allowing us to do client-side
                // navigation and avoiding a full page refresh.
                handleSelected: (_input, _event, suggestion) => {
                    const url = baseUrl + suggestion.url;
                    // Use an anchor tag to parse the absolute url into a relative url
                    // Alternatively, we can use new URL(suggestion.url) but its not supported in IE
                    const a = document.createElement("a");
                    a.href = url;
                    console.log(url, "sug");
                    // Algolia use closest parent element id #__docusaurus when a h1 page title does not have an id
                    // So, we can safely remove it. See https://github.com/facebook/docusaurus/issues/1828 for more details.

                    history.push(url);
                }
            });
            initialized.current = true;
        }
    };

    const loadAlgolia = () => {
        initAlgolia();
    };

    const toggleSearchIconClick = useCallback(
        e => {
            if (!searchBarRef.current.contains(e.target)) {
                searchBarRef.current.focus();
            }

            props.handleSearchBarToggle(!props.isSearchBarExpanded);
        },
        [props.isSearchBarExpanded]
    );

    return (
        <div className="navbar__search" key="search-box">
            <span
                aria-label="expand searchbar"
                role="button"
                className={classnames("search-icon", {
                    "search-icon-hidden": props.isSearchBarExpanded
                })}
                onClick={toggleSearchIconClick}
                onKeyDown={toggleSearchIconClick}
                tabIndex={0}
            />
            <input
                id="search_input_react"
                type="search"
                placeholder="Search"
                aria-label="Search"
                className={classnames(
                    "navbar__search-input",
                    { "search-bar-expanded": props.isSearchBarExpanded },
                    { "search-bar": !props.isSearchBarExpanded }
                )}
                onClick={loadAlgolia}
                onMouseOver={loadAlgolia}
                onFocus={toggleSearchIconClick}
                onBlur={toggleSearchIconClick}
                ref={searchBarRef}
            />
        </div>
    );
};

export default Search;
