import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';
import ActiveTabs from './components/activeTab';

class Profile extends Component{
  state = {
    value:"username",
    isInEdit: false                       //default value false

  }
  changeEdit=() => {
    this.setState({
      isInEdit : !this.state.isInEdit
    })
    // console.log("change");
  }

  updateComponentValue = () => {
    this.setState({
      // close the edit view
      isInEdit: false,
      //set value here
      value: this.refs.theTextInput.value
    })
  }



  renderEditView = () =>{
    return(
      <div>
        <input
          type="text"
          defaultValue={this.state.value}
          ref="theTextInput"
        />
        <button onClick={this.changeEdit}>X</button>
        {/*update if the save button is clicked*/}
        <button onClick={this.updateComponentValue}>Save</button>
      </div>
    )
  }

  renderDefaultView = () =>{
    return(
      <div onDoubleClick={this.changeEdit}>
        <h1>{this.state.value}</h1>
      </div>
    )
  }


  render(){
    return(
      <div>
        <div>
          <img src={process.env.PUBLIC_URL + 'http://hdqwalls.com/wallpapers/wonder-woman-gal-gadot-fanart-i9.jpg'} alt='avatar'
              className='avatar-img' style={{width:'400px'}}/>

              {/* change the username with double click */}
              { this.state.isInEdit ?
                this.renderEditView() : this.renderDefaultView()
              }
        </div>
        <div>
          <ActiveTabs/>
        </div>
      </div>
    )
  }
}
export default Profile;








// <Tabs>
// <Tab>Stats</Tab>
// <Tab>Journey</Tab>
//
// </Tabs>
