import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';

class ActiveTabs extends Component{
  state = {
    displayTab:0
  }

  toggleTabs(){
    if(this.state.displayTab === 0){
      return(
        <div>
          <h3>hi</h3>
        </div>
      )
    }else if (this.state.displayTab === 1) {
      return(
        <div>
          <h3>hello</h3>
        </div>
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
        <div>
        <Tabs displayTab={this.state.displayTab} onChange={(tabId) => this.setState({ displayTab:tabId })}ripple>
          <Tab>1</Tab>
          <Tab>2</Tab>
          <Tab>3</Tab>
        </Tabs>
        <section>
        <div>
          {this.toggleTabs()}
        </div>
        </section>
        </div>
      </div>
    )
  }
}
export default ActiveTabs;
