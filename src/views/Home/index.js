import React, { Component } from "react";
import PageNav from "@/components/Layout/PageNav";
import Overview from "./Overview";

const routes = [
  {
    link: "/home/overview",
    title: "概览",
    component: Overview
  }
];

class Home extends Component {
  render() {
    return <PageNav routes={routes} {...this.props} redirect="/home/overview" />;
  }
}

export default Home;
