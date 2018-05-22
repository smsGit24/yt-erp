import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'
import Layout from '@/components/Layout'
import Home from '@/views/Home';
import About from '@/views/About';
import Page1 from '@/views/Home/Page1'

const customHistory = createBrowserHistory()

const routes = [
  {
    link: '/home',
    title: '首页',
    component: Home
  },
  {
    link: '/about',
    title: '关于',
    component: About
  }
]
class RoutePage extends Component {
  render () {
    return (
      <Router history={customHistory}>
        <Layout routes={routes}  history={customHistory}>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.link}
                component={route.component}
              />
            );
          })}
        </Layout>
      </Router>
    )
  }
}

export default RoutePage;
