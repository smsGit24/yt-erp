import React, { Component } from 'react';
import PageNav from '@/components/Layout/PageNav'
import Page1 from './Page1'
import Page2 from './Page2'

const routes = [
  {
    link: '/home/page1',
    title: 'page1',
    component: Page1
  },
  {
    link: '/home/page2',
    title: 'page2',
    component: Page2
  }
]

class Home extends Component {
  render() {
    return (
      <PageNav routes={routes} {...this.props}/>
    );
  }
}

export default Home;