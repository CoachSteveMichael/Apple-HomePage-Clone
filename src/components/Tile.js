import React from "react";

function Tile(props) {
  let Background = props.background;

  const styles = {
    backgroundImage: 'url("' + Background + '")',
    color: props.dark && "white",
    display: props.invert && "flex",
    flexDirection: props.invert && "column",
    justifyContent: props.invert && "flex-end"
  };
  return (
    <div className="hero tile" style={styles}>
      <div className="copy-wrapper">
        {props.logo && <img className="logo" src={props.logo} alt="logo" />}
        <h4>
          {props.heading}
          {props.subheadingPic && (
            <span
              style={{ backgroundImage: 'url("' + props.subheadingPic + '")' }}
            ></span>
          )}
        </h4>
        <h5>{props.subheading}</h5>
        <div className="links">
          <a href={props.learnLink}>Learn more></a>
          <a href={props.buyNowLink}>Buy></a>
        </div>
      </div>
    </div>
  );
}

export { Tile };
