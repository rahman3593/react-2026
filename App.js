import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
  <div>
    <h1 id="id1" className="heading">
      Actual JSX Heading
    </h1>
    <h1 id="id2" className="heading2">
      Actual JSX Heading 2
    </h1>
    <img
      src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      alt="Google Logo"
    />
    <a href="https://www.google.com" target="_blank">
      Visit Google
    </a>
  </div>
);

const Title = () => {
  return (
    <h1 id="id1" className="heading">
      Actual JSX Heading
    </h1>
  );
};

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google Logo"
      />
      <a href="https://www.google.com" target="_blank">
        Visit Google
      </a>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
