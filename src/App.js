import React, { Component } from "react";
import Shuffle from "shufflejs";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
  


class App extends Component {
   // Setting this.state.friends to the friends json array
    state = {
      friends,
      hover: null
    };
    //shuffleInstance.filter(Shuffle.ALL_ITEMS);
  componentDidMount() {


  }


  // componentDidUpdate() {
  //   // Notify shuffle to dump the elements it's currently holding and consider
  //   // all elements matching the `itemSelector` as new.
  //   this.shuffle.resetItems();
  // }

  // componentWillUnmount() {
  //   // Dispose of shuffle when it will be removed from the DOM.
  //   this.shuffle.destroy();
  //   this.shuffle = null;
  // }

  mouseOut = () => {
    console.log("Mouse out!!!");
    this.setState({hover: false});
  }
  
  mouseOver = () => {
    console.log("Mouse over!!!");
    this.setState({hover: true});
  }
  


  resetFriends = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            onMouseEnter={this.mouseOver}
            onMouseLeave={this.mouseOut}
            removeFriend={this.removeFriend}
            // onClick={this.resetFriends(this.id)}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
