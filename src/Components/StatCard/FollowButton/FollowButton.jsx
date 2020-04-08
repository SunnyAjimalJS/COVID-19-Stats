import React, { Component } from 'react';
import styles from "./FollowButton.module.scss";

export default class FollowButton extends Component {
    constructor() {
      super();
      this.state = {
        liked: false
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
      this.setState({
        followed: !this.state.followed
      });
    }
    
    //need a function here to add to a list/myCountries like we did with TopTrumps
    //need to set up GoogleAuth
    //Figure out to make a handleclick method which adds it to another array of myCountries 
    
    render() {
      const text = this.state.followed ? 'un-follow' : 'follow';
      const label = this.state.followed ? 'Following' : 'Follow'
      return (
        <div className="customContainer">
          <button className="btn-primary" onClick={this.handleClick} >
            {label}</button>
          <p className={styles.followText}>
            Click to {text} this Country (must be logged in to follow)
          </p>
        </div>
      );
    }
   
  }