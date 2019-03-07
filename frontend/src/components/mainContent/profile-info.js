import React, { Component } from 'react';
class ProfileInfo extends Component {
    render() {
        return (
            <div>
               <div className="profile_detail">
					    <div className="row">
					    	<div className="col-lg-3 col-md-4 col-sm-6">
					    		<div className="p_grid mt-30" style={{"background": "#5b43e6"}}>
					    			<h3>Total Profile Views</h3>
					    			<p>435</p>
					    		</div>
					    	</div>
					    	<div className="col-lg-3 col-md-4 col-sm-6">
					    		<div className="p_grid mt-30" style={{"background": "#42dcc4"}}>
					    			<h3>Per day the app opens</h3>
					    			<p>12</p>
					    		</div>
					    	</div>
					    	<div className="col-lg-3 col-md-4 col-sm-6">
					    		<div className="p_grid mt-30" style={{"background": "#43cee6"}}>
					    			<h3>Total call</h3>
					    			<p>32</p>
					    		</div>
					    	</div>
					    	<div className="col-lg-3 col-md-4 col-sm-6">
					    		<div className="p_grid mt-30" style={{"background": "#9243e6"}}>
					    			<h3>Total Schedule call</h3>
					    			<p>4</p>
					    		</div>
					    	</div>

					    	<div className="col-lg-3 col-md-4 col-sm-6">
					    		<div className="p_grid mt-30" style={{"background": "#e64343"}}>
					    			<h3>Did Not Come Schedule call</h3>
					    			<p>0</p>
					    		</div>
					    	</div>
					    	<div className="col-lg-3 col-md-4 col-sm-6">
					    		<div className="p_grid mt-30" style={{"background": "#f86c37"}}>
					    			<h3>Did Not Answer Phone</h3>
					    			<p>1</p>
					    		</div>
					    	</div>
					    	<div className="col-lg-3 col-md-4 col-sm-6">
					    		<div className="p_grid mt-30" style={{"background": "#e64359"}}>
					    			<h3>Questions From Rec.</h3>
					    			<p>32</p>
					    		</div>
					    	</div>
					    	<div className="col-lg-3 col-md-4 col-sm-6">
					    		<div className="p_grid mt-30" style={{"background": "#e6ca43"}}>
					    			<h3>Profile Complete ratio</h3>
					    			<p>% 80</p>
					    		</div>
					    	</div>
					    </div>
					</div>

            </div>
        );
    }
}

export default ProfileInfo; 
