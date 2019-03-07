import React, { Component} from "react";

class SidebarMain extends Component {
	constructor(props){
		super(props);
		this.state={
			visible: false,
			 
		}
	}
	sideBarAction=()=>{
		this.setState({visible: !this.state.visible})

	}
    render() {
        return (
            <div>
				<div className={"button-bar " + (this.state.visible ? 'slide-btn' : '')} onClick={this.sideBarAction}><img src={"assets/images/"+(this.state.visible ? 'close-bar.png': 'toggal-bar.png' )}/></div>
                <div className={"col-lg-2 col-md-3 vs_left_panel " + (this.state.visible ? 'open-left-panel' : '')} >
				<div className="logo_dashboard">
					<a href="#"><img src="assets/images/logo.png"/></a>
				</div>
				<ul className="main_navigation">
					<li className="">
						<a href="#"><img src="assets/images/Home.svg"/>Home</a>
					</li>
					<li className="active">
						<a href="#"><img src="assets/images/Candidates.svg"/>Candidates</a>
					</li>
					<li className="">
						<a href="#"><img src="assets/images/Notifications.svg"/>Notifications</a>
					</li>
					<li className="">
						<a href="#"><img src="assets/images/Questions.svg"/>Questions From Recruiters</a>
					</li>
					<li className="">
						<a href="#"><img src="assets/images/onboarding.svg"/>Onboarding Settings</a>
					</li>
					<li className="">
						<a href="#"><img src="assets/images/recruiters.svg"/>Recruiters</a>
					</li>
					<li className="">
						<a href="#"><img src="assets/images/Logout.svg"/>Logout</a>
					</li>
				</ul>
			</div>

            </div>
        );
    }
}

export default SidebarMain; 