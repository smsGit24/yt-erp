import React, { Component } from "react";
import { Router, Route, NavLink, Redirect, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class PageNav extends Component {
  state = {
    childPath: "",
    breadcrumbs: []
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setBreadcrumbs(nextProps)
    }
  }
  componentWillMount() {
    this.setBreadcrumbs(this.props)
  }
  setBreadcrumbs = (props) => {
    const {location, routes} = props
    const path = location.pathname
    const childPath = (routes && routes.filter(route => route.link === path)[0]) ? path : routes[0].link
    this.setState({
      childPath
    });
  }
  render() {
    const { routes, history, redirect } = this.props;
    const { childPath, breadcrumbs } = this.state;
    return (
      <Layout style={{ flex: 1 }}>
        <Sider width={200} style={{ background: "#fff" }}>
          {routes && (
            <Menu
              mode="inline"
              defaultSelectedKeys={[childPath]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              onSelect={this.menuSelect}
            >
              {routes.map((route, index) => {
                return (
                  <Menu.Item key={route.link}>
                    <NavLink
                      to={route.link}
                      style={{ display: "inline-block" }}
                    >
                      {route.title}
                    </NavLink>
                  </Menu.Item>
                );
              })}
            </Menu>
          )}
        </Sider>
        <Layout style={{ padding: "0 0 0 24px" }}>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Switch>
              {routes &&
                routes.map((route, index) => {
                  return (
                    <Route
                      key={index}
                      exact={route.exact}
                      path={route.link}
                      component={route.component}
                    />
                  );
                })}
              <Redirect from="/home" to={redirect}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default PageNav;
