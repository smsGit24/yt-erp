import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class index extends Component {
  state = {
    rootPath: ''
  }
  componentWillMount () {
    const path = this.props.history.location.pathname
    const rootPath = path.split('/')[1]
    this.setState({
      rootPath: `/${rootPath}`
    })
  }
  render() {
    const {routes, history} = this.props
    const {rootPath} = this.state
    return (
      <Layout style={{height: '100%'}}>
        <Header className="header" style={{height: '50px'}}>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '50px' }}
            defaultSelectedKeys={[rootPath]}
          >
            {
              routes && routes.map((route, index) => {
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
        </Header>
        <Content style={{ background: '#fff', margin: 0, display: 'flex' }}>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default index;