import React from "react";
import createClass from "create-react-class";
var Main = createClass({
  render: function() {
    return <div>{this.props.children}</div>;
  }
});
export default Main;
