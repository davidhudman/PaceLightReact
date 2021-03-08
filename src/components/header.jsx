import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <br /><br /><br /><br /><br />
                   <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <div className="video-container">
                    <span>
                      <h2>Watch Race Footage:</h2>
                      <a href="https://youtu.be/228nXgaZR_4?t=1927" className="href">Emmanuel Bor #2 US all-time indoor 5k</a>
                      <br />
                      <a href="https://youtu.be/tSsfWStHXss?t=5665" className="href">2021 Austin Texas Qualifier</a>
                      <br />
                      <a href="https://www.youtube.com/watch?v=wDAe4kw0W-E&feature=youtu.be&ab_channel=DavidHudman">2020 Five and Dime</a>
                      <br /><br />
                      <h2>Used during multiple records:</h2>
                      <a href="https://youtu.be/Gd6hx1z8Jek?t=5002">2021 NCAA Men's D2 Nat'l Record</a>
                      <br />
                      <a href="https://youtu.be/oRto43Og0jg?t=10355" className="href">German Women's 10k</a>
                      <br />
                      <a href="http://www.lightspeedpacing.com" className="href">US HS Girls 5k</a>
                      <br /><br />
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Contact Us
                  </a>{" "}
                  <br /><br />
                  <div className="social">
                  <h3 className="text-center">Follow for updates!</h3>
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.instagram : "/"}
                      >
                        <i className="fa fa-instagram fa-3x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
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
