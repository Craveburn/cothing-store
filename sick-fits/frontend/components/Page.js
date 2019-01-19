import React, { Component } from "react";

import Meta from './Meta'
import Header from "../components/Header";

class Page extends Component {
  render() {
    return (
      <div>
        <Meta/>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
