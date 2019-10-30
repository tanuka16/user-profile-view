import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';

class Profile extends Component{
  state = {
    activeTab: 0
  };
  render(){
    return(
      <div>
        <div>
          <img src={process.env.PUBLIC_URL + 'http://hdqwalls.com/wallpapers/wonder-woman-gal-gadot-fanart-i9.jpg'} alt='avatar'
              className='avatar-img' style={{width:'400px'}}/>
              <h1>Nina</h1>
        </div>
        <div>
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
