import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import { Tabs, Tab, Sonnet } from 'react-bootstrap';
import Calls from "./calls";
import QuestionAns from "./question-answer";
import ProfileInfo from "./profile-info";
import AuthService from "../../services/loginService";
const Auth = new AuthService();
class MainContent extends Component {

	componentDidMount() {
		// if(!Auth.getProfile().email){
		// 	this.setState({ userEmail: Auth.getProfile().email })
		// }
		//console.log('xxxxxxxxxx login', Auth.loggedIn());
		
        // if (!Auth.loggedIn()) {
        //     this.props.history.replace('/login');
        // }

	}
	render() {
		return (
			<div>
				<div className="col-lg-10 col-md-9 vs_right_panel">
					<div className="dash_head">
						<h2> John Smith</h2>
						<p><strong>Status:</strong> Batch End <img src="assets/images/title_status.svg" /></p>
					</div>

					<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
						<Tab eventKey="profile" title="Profile">
							<div className="tab-content">
								<div id="profile" className="tab-pane fade in active">
									<ProfileInfo />
									<Calls />
									<QuestionAns />
								</div>
							</div>
						</Tab>
						<Tab eventKey="calls" title="Calls">
							<div className="tab-content"><h2>Calls</h2></div>
						</Tab>
						<Tab eventKey="resume" title="Resume">
							<div className="tab-content"><h2>Resume</h2></div>
						</Tab>
						<Tab eventKey="QA" title="Q & A">
							<div className="tab-content"><h2>Q & A</h2></div>
						</Tab>
						<Tab eventKey="criteria" title="Criteria">
							<div className="tab-content"><h2>Criteria</h2></div>
						</Tab>
						<Tab eventKey="NTR" title="Notes to recruiters">
							<div className="tab-content"><h2>Notes to recruiters</h2></div>
						</Tab>
						<Tab eventKey="availableTimes" title="Available Times">
							<div className="tab-content"><h2>Available Times</h2></div>
						</Tab>
						<Tab eventKey="QFR" title="Questions From Recruiters">
							<div className="tab-content"><h2>Questions From Recruiters</h2></div>
						</Tab>
						<Tab eventKey="opportunity" title="Opportunity">
							<div className="tab-content"><h2>Opportunity</h2></div>
						</Tab>
						<Tab eventKey="mailbox" title="Mailbox">
							<div className="tab-content"><h2>Mailbox</h2></div>
						</Tab>
						<Tab eventKey="setting" title="Setting">
							<div className="tab-content"><h2>Setting</h2></div>
						</Tab>
					</Tabs>
				</div>
			</div>
		);
	}
}

export default withRouter(MainContent);