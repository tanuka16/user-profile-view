import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';

class ActiveTab extends Component{
  state={
    displayTab:0
  }

  toggleTabs(){
    if(this.state.displayTab === 0){
      return(
        <div></div>
      )
    }
    else if (this.state.displayTab === 1) {
      return(
        <div></div>
      )
    }
    else if (this.state.displayTab === 2) {
      return(
        <div></div>
      )

    }
  }
  render(){
    return(
      <div>
        <div className="container-grid">
        <Tabs displayTab={this.state.displayTab} onClick={(tabId) => this.setState({displayTab:tabId})} ripple>
          <Tab>1</Tab>
          <Tab>1</Tab>
        </Tabs>

        </div>
      </div>
    )
  }
}
export default ActiveTab;
