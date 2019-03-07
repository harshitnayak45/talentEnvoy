import React, { Component } from 'react';
import SidebarMain from '../sidebar/sidebar';
import MainContent from '../mainContent/mainContent';
class AppLayout extends Component {
    render() {
        return (
            <div>
              <SidebarMain />
              <MainContent />
            </div>
        );
    }
}

export default AppLayout; 
