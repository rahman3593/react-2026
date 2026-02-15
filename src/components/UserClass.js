import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "https://dummy-photo.com/avatar.png",
        bio: "Dummy Bio",
      },
    };
    // console.log(this.props.name + "UserClass constructor called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rahman3593");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(this.props.name + " component mounted");
  }
  componentDidUpdate() {
    console.log(this.props.name + " UserClass componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log(this.props.name + " UserClass componentWillUnmount called");
  }

  render() {
    // console.log(this.props.name + " UserClass render called");
    const { name, location, avatar_url, bio } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Bio: {bio}</h4>
      </div>
    );
  }
}

export default UserClass;
