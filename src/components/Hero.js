import React from "react";

function Hero(props) {
  let Background = props.background;

  const styles = {
    backgroundImage: 'url("' + Background + '")',
    color: props.dark && "white",
    display: props.invert && "flex",
    flexDirection: props.invert && "column",
    justifyContent: props.invert && "flex-end"
  };
  return (
    <div className="hero" style={styles}>
      <div className="copy-wrapper">
        {props.logo && <img src={props.logo} alt="logo" />}
        <h2>
          {props.heading}
          {props.subheadingPic && (
            <span
              style={{ backgroundImage: 'url("' + props.subheadingPic + '")' }}
            ></span>
          )}
        </h2>
        <h3>{props.subheading}</h3>
        <div className="links">
          <a href={props.learnLink}>Learn more></a>
          <a href={props.buyNowLink}>Buy></a>
        </div>
      </div>
    </div>
  );
}

export { Hero };
