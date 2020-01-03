/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useRef, useCallback} from 'react';
import classnames from 'classnames';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useHistory} from '@docusaurus/router';

let loaded = true;

const Search = props => {
  const initialized = useRef(false);
  const searchBarRef = useRef(null);
  const {siteConfig = {}} = useDocusaurusContext();
  const {
    themeConfig: {algolia},
  } = siteConfig;
  const history = useHistory();

  const initAlgolia = () => {
    if (!initialized.current) {  
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
    [props.isSearchBarExpanded],
  );

  return (
    <div className="navbar__search" key="search-box">
      <span
        aria-label="expand searchbar"
        role="button"
        className={classnames('search-icon', {
          'search-icon-hidden': props.isSearchBarExpanded,
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
          'navbar__search-input',
          {'search-bar-expanded': props.isSearchBarExpanded},
          {'search-bar': !props.isSearchBarExpanded},
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
