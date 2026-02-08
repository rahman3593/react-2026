import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"},
     [React.createElement("div", {id:"child1"},
        [React.createElement("h1", {id:"h1"}, "I adsssadsam h1 tag"),React.createElement("h2", {id:"h2"}, "I am h2 tag")],
     ),React.createElement("div", {id:"child2"},
        [React.createElement("h1", {id:"h3"}, "I am h3 tag"),React.createElement("h2", {id:"h4"}, "I am h4 tag")],
     )]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading =React.createElement("h1", {id:"heading"}, "Hello, Abdul Rahman from React!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);