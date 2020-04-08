import React, { Component } from "react";
import styles from "./StatCard.module.scss";
import CountTo from 'react-count-to';
import FollowButton from "./FollowButton/FollowButton";
export default class StatCard extends Component {
    state = {
        isFaceUp: true
      }
    
      handleClick = () => {
        this.setState({
          isFaceUp: !this.state.isFaceUp
        })
      }

  render() {    
    const rotateStyle = this.state.isFaceUp ? "" : styles.cardRotated; 
    return ( 
      <main>
        <div className={styles.scene}>
        <article
          onClick={this.handleClick}
          className={`${styles.card} ${rotateStyle}`}
        >
          <div className={styles.cardFront}>
            <h3>{this.props.countryData.Country}</h3>
            <div className={styles.topSection}>
              <p>Total number of cases</p>
              <CountTo className ={styles.cardNumber} to={this.props.countryData.TotalConfirmed} speed={1234} />
              <p>New Confirmed Cases </p>
               <CountTo className ={styles.cardNumber} to={this.props.countryData.NewConfirmed} speed={1234} />
              <p>Total Recovered </p>
              <CountTo className={styles.cardNumber} to={this.props.countryData.TotalRecovered} speed={1234} />
            </div>
          </div>
          <div className={styles.cardBack}>
          <p>New Recovered Cases: {this.props.countryData.NewRecovered}</p>
          <p>New Deaths: {this.props.countryData.NewDeaths}</p>
          <p>Total Deaths: {this.props.countryData.NewConfirmed}</p>
          </div>
        </article>
      <FollowButton className ={styles.followDiv}/>
      </div>
      </main>
    );
  }
}
