import React, { Component } from "react";
import GlobeCount from "../GlobeCount/GlobeCount";
import CardList from "../CardList/CardList";
import styles from "./Main.module.scss";
import SearchBar from "../Searchbar/Seearchbar";

export default class Main extends Component {
  render() {
    return (
      <div className={styles.Main}>
        <h1 className={styles.Header}>
          Total Number of Covid-19 Cases confirmed globally:
        </h1>
        <GlobeCount totalNumber={this.props.totalNumber} />
        <h2 className={styles.Header}>
          The countries with the highest number of cases:
        </h2>
        <CardList countries={this.props.countries} />
      </div>
    );
  }
}
