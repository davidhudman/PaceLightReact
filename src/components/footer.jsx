import React, { Component } from "react";

export class Footer extends Component {
	render() {
		return (
			<div>
				<div id="footer">
					<div className="container text-center">
						<p>
							&copy; 2020 {this.props.data ? this.props.data.companyName : "LSP"}. Design by{" "}
							<a href="http://www.github.com/davidhudman" rel="nofollow">
								Hudman
							</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
