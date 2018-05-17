"use strict";

console.log("this works");

// JSX = JavaScript XML
var temp = React.createElement(
  "h1",
  null,
  " Decision App "
);
var appRoot = document.getElementById('app');

ReactDOM.render(temp, appRoot);
