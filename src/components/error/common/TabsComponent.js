'use strict';

import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

require('styles/error/common/Tabs.scss');

class TabsComponent extends React.Component {
  render() {
    return (
      <nav id="error-common-tabs">
        <Nav bsStyle="tabs">
          <LinkContainer to="/error/list/all">
            <NavItem>
              <span className="tabs-title">全部</span>
              <span className="badge">400</span>
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/error/list/page">
            <NavItem>
              <span className="tabs-title">页面</span>
              <span className="badge">30</span>
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/error/list/browser">
            <NavItem>
              <span className="tabs-title">浏览器</span>
              <span className="badge">6</span>
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/error/list/system">
            <NavItem>
              <span className="tabs-title">操作系统</span>
              <span className="badge">3</span>
            </NavItem>
          </LinkContainer>
        </Nav>
      </nav>
    );
  }
}

TabsComponent.displayName = 'ErrorCommonTabsComponent';

// Uncomment properties you need
// TabsComponent.propTypes = {};
// TabsComponent.defaultProps = {};

export default TabsComponent;
