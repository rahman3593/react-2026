import UserClass from "./UserClass";
import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    // console.log("About constructor called");
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About Us Page- Class component</h1>
        <h2>
          We are a food delivery company that delivers food from your favourite
          restaurants to your doorstep.
        </h2>
        <User name="Abdul Rahman - functional" />
        <UserClass name="Abdul Rahman" location="India - class1" />
      </div>
    );
  }
}

export default About;
