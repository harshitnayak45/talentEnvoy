import React, { Component } from 'react';
class Calls extends Component {
    render() {
        return (
            <div>
                <div className="profile_call mt-30">
						<div className="p_call_head clearfix">
							<h2 className="pull-left">Calls</h2>
							<a href="#" className="pull-right">View All</a>
						</div>
						<div className="table-responsive">          
						  <table className="table">
						    <thead>
						      <tr>
						        <th>Call <img src="assets/images/Triangle.svg"/></th>
						        <th>Call Status <img src="assets/images/Triangle.svg"/></th>
						        <th>Recruiter name <img src="assets/images/Triangle.svg"/></th>
						        <th>Duration <img src="assets/images/Triangle.svg"/></th>
						        <th>Record <img src="assets/images/Triangle.svg"/></th>
						        <th>Position <img src="assets/images/Triangle.svg"/></th>
						        <th></th>
						      </tr>
						    </thead>
						    <tbody>
						      <tr>
						        <td className="red_text call_date"><img src="assets/images/missed_call.png"/>19th Feb 13:48</td>
						        <td><div className="cl_btn missed_btn">Missed</div></td>
						        <td>Ashley John</td>
						        <td>-</td>
						        <td>-</td>
						        <td>Google - UX Designer</td>
						        <td>
						        	<ul className="list-inline calls_link">
						        		<li><a href="#"><img src="assets/images/message.svg"/></a></li>
						        		<li><img src="assets/images/calling.svg"/></li>
						        	</ul>
						        </td>
						      </tr>
						      <tr>
						        <td className="call_date"><img src="assets/images/incoming_call.png"/>19th Feb 09:42</td>
						        <td><div className="cl_btn complete_btn">Completed</div></td>
						        <td>Ashley John</td>
						        <td>5 Min 42 Sec</td>
						        <td>
						        	<ul className="list-inline record_link">
						        		<li><a href="#">Play</a></li>
						        		<li>Copy</li>
						        	</ul>
						        </td>
						        <td>Google - UX Designer</td>
						        <td>
						        	<ul className="list-inline calls_link">
						        		<li><a href="#"><img src="assets/images/message.svg"/></a></li>
						        		<li><img src="assets/images/calling.svg"/></li>
						        	</ul>
						        </td>
						      </tr>
						      <tr>
						        <td className="call_date"><img src="assets/images/outgoing_call.png"/>19th Feb 08:34</td>
						        <td><div className="cl_btn Unavailable_btn">Unavailable</div></td>
						        <td>CeeCee Bass</td>
						        <td>-</td>
						        <td>-</td>
						        <td>Twitter - Product Designer</td>
						        <td>
						        	<ul className="list-inline calls_link">
						        		<li><a href="#"><img src="assets/images/message.svg"/></a></li>
						        		<li><img src="assets/images/calling.svg"/></li>
						        	</ul>
						        </td>
						      </tr>
						      <tr>
						        <td className="call_date"><img src="assets/images/outgoing_call.png"/>19th Feb 08:00</td>
						        <td><div className="cl_btn Unavailable_btn">Unavailable</div></td>
						        <td>CeeCee Bass</td>
						        <td>-</td>
						        <td>-</td>
						        <td>Twitter - Product Designer</td>
						        <td>
						        	<ul className="list-inline calls_link">
						        		<li><a href="#"><img src="assets/images/message.svg"/></a></li>
						        		<li><img src="assets/images/calling.svg"/></li>
						        	</ul>
						        </td>
						      </tr>
						      <tr>
						        <td className="call_date"><img src="assets/images/incoming_call.png"/>18th Feb 13:48</td>
						        <td><div className="cl_btn complete_btn">Completed</div></td>
						        <td>kay Totleben</td>
						        <td>42 Sec</td>
						        <td>
						        	<ul className="list-inline record_link">
						        		<li><a href="#">Play</a></li>
						        		<li>Copy</li>
						        	</ul>
						        </td>
						        <td>Facebook - Product Designer</td>
						        <td>
						        	<ul className="list-inline calls_link">
						        		<li><a href="#"><img src="assets/images/message.svg"/></a></li>
						        		<li><img src="assets/images/calling.svg"/></li>
						        	</ul>
						        </td>
						      </tr>
						    </tbody>
						  </table>
						</div>
					</div>

            </div>
        );
    }
}

export default Calls; 
