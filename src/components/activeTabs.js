import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';

class ActiveTabs extends Component{
  state = {
    displayTab:0
  }

  toggleTabs(){
    if(this.state.displayTab === 0){
      return(
        <div>
        <hr/>
        <h3>tab 1</h3>
        </div>
      )
    }
    else if (this.state.displayTab === 1) {
      return(
        <div>
          <h3>hi</h3>
        </div>
      )
    }
    // else if (this.state.displayTab === 2) {
    //   return(
    //     <div></div>
    //   )
    //
    // }
  }
  render(){
    return(
      <div>
        <div>
        <Tabs displayTab={this.state.displayTab} onClick={(tabId) => this.setState({ displayTab:tabId })} ripple>
          <Tab>1</Tab>
          <Tab>1</Tab>
        </Tabs>
        {this.toggleTabs()}
        </div>
      </div>
    )
  }
}
export default ActiveTabs;
