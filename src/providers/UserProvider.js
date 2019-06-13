import React, {Component} from 'react';

// set up the initial context 
export const UserContext = React.createContext(); 

// set up the exportable consumer 
export const UserConsumer = UserContext.Consumer; 

// create the provider in a class component 
class UserProvider extends Component {
  state = {
    username: "DD"
    email: "test@test.com", 
    firstName: "Doug", 
    lastName: "DimmaDome", 
    avatar: "Owner of Dimmsdale Dimmadome", 
  }

  render() {

    return(
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>

    )
  }
}

export default UserProvider; 