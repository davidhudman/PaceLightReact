import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="video-container">
                  <span>
                    <a href="https://www.youtube.com/watch?v=wDAe4kw0W-E&feature=youtu.be&ab_channel=DavidHudman"><img src="vid/lspvid02.png" id="myVideo" alt="Video Thumbnail" /></a>
                    <br />
                    <a href="https://www.youtube.com/watch?v=wDAe4kw0W-E&feature=youtu.be&ab_channel=DavidHudman">Watch on Youtube</a>
                  </span>
                </div>
                <div className="col-md-8 col-md-offset-2 intro-text">
                   <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="#contact"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Contact Us
                  </a>{" "}
                  <br /><br />
                  <a
                    href="http://www.instagram.com/lightspeedpacing"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
                    <br />
                    Follow Us
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
