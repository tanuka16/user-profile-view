import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';

class Tab extends Component{
  state={
    displayTab:0
  }

  toggleTabs(){
    if(this.state.displayTab === 0){
      return(
        <div></div>
      )
    }
  }
  render(){
    return(
      <div></div>
    )
  }
}
export default Tab;
