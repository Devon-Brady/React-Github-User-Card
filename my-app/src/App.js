import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    userData: [],
    followers:[],
  }
 
  componentDidMount(){
    axios.get('https://api.github.com/users/wlongmire')
    .then((res) =>{
        console.log(res.data);
      this.setState({
        userData: res.data
      });
    })
    axios.get('https://api.github.com/users/wlongmire/followers')
    .then((resp)=>{
      console.log(resp)
      this.setState({
        followers:resp.data
      })
    })
  } 
 
 
  render(){
    return(
      <div>
        <h1>{this.state.userData.login}</h1>
        <img width='200'src={this.state.userData.avatar_url} alt='Users avatar'/>
        <div>
        <p>Github:<a href={this.state.userData.html_url}> {this.state.userData.html_url}</a></p>
        </div>
        <div>
          Following:{this.state.userData.following}
        </div>
        <div>
          Followed by:{this.state.followers.map(follower =>(
            <div>
            <p>{follower.login}</p>
            <img width='50' src={follower.avatar_url} alt={follower.login} key={follower.ig}/>
            </div>
          )
          )
        }
        </div>
      </div>
    )
  }
}
export default App