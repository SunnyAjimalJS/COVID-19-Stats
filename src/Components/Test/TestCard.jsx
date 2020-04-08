import React, { Component } from "react";
import styles from "../Test/TestCard.module.scss";
import CountTo from 'react-count-to';
import FollowButton from "../StatCard/FollowButton/FollowButton";


export default class TestCard extends Component {
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
            <p>{this.props.data.Countries}</p>
            <div className={styles.topSection}>
              {/* <p>Total number of cases</p>
              <CountTo className ={styles.cardNumber}to={this.props.countryData.TotalConfirmed} speed={1234} /> */}
            </div>
          </div>
          <div className={styles.cardBack}>
          </div>
        </article>
      <FollowButton className ={styles.followDiv}/>
      </div>
      </main>
    );
  }
}
