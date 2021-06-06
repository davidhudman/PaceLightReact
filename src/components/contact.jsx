import React, { Component } from "react";

export class Contact extends Component {
	render() {
		return (
			<div>
				<div id="contact">
					<div className="container">
						<div className="col-md-8">
							<div className="row">
								<div className="section-title">
									<h2>Get In Touch</h2>
									<p>
										Email us: lightspeedpacing@gmail.com
									</p>
									<p>Follow us on instagram and shoot us a message.</p>
									{this.props.data ? "" : ""}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
