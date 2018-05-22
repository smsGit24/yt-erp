import React, { Component } from 'react';
import { Router, Route, NavLink } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class PageNav extends Component {
  state = {
    childPath: '',
    breadcrumbs: []
  }
  componentWillMount () {
    const path = this.props.history.location.pathname
    const breadcrumbs = path.split('/')
    breadcrumbs.shift()
    this.setState({
      childPath: path,
      breadcrumbs
    })
  }
  menuSelect = ({key}) => {
    const breadcrumbs = key.split('/')
    breadcrumbs.shift()
    this.setState({
      breadcrumbs
    })
  }
  render() {
    const {routes, history} = this.props
    const {childPath, breadcrumbs} = this.state
    return (
      <Layout style={{ flex: 1 }}>
        <Sider width={200} style={{ background: '#fff' }}>
          {
            routes && (
              <Menu
                mode="inline"
                defaultSelectedKeys={[childPath]}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                onSelect={this.menuSelect}
              >
                {
                  routes.map((route, index) => {
                    return (
                      <Menu.Item key={route.link}>
                        <NavLink
                          to={route.link}
                          style={{ display: "inline-block" }}
                        >
                          {route.title}
                        </NavLink>
                      </Menu.Item>
                    )
                  })
                }
              </Menu>
            )
          }
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {
              breadcrumbs && breadcrumbs.map((breadcrumb, index) => {
                return <Breadcrumb.Item key={index}>{breadcrumb}</Breadcrumb.Item>
              })
            }
          </Breadcrumb>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            {routes && routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.link}
                  component={route.component}
                />
              );
            })}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default PageNav;