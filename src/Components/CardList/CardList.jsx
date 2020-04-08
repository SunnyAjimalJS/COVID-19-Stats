import React, { Component } from "react";
import styles from "./CardList.module.scss";
import StatCard from "../StatCard/StatCard";
import Searchbar from "../Searchbar/Seearchbar";

export default class CardList extends Component {
  state = {
    countries: [],
    searchText: "",
    filteredResults: []
  };

  setSearchText = event => {
    const searchText = event.target.value.toLowerCase();
    this.setState({ ...this.state, searchText }, this.filterResults);
  };

  filterResults = () => {
    let filteredResults = this.state.countries.filter(countries => {
      return countries.Country.toLowerCase().includes(this.state.searchText);
    });
    this.setState({ filteredResults });
  };

  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then(response => response.json())
      .then(data => {
        this.setState({
          countries: data.Countries,
          filteredResults: data.Countries
        });
      });
  }

  render() {
    return (
      <>
        <Searchbar
          searchText={this.state.searchText}
          setSearchText={this.setSearchText}
        />
        <section className={styles.CardList}>
          {this.state.filteredResults.map((countryData, index) => (
            <StatCard countryData={countryData} key={index} />
            
          ))}
        </section>
      </>
    );
  }
}
