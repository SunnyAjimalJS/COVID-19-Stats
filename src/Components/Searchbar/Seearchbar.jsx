import React, { Component } from "react";
import styles from "./Searchbar.module.scss";

export default class SearchBar extends Component {
    render() {
        return(<input 
                    className={styles.searchBar}
                    placeholder="Search Countries..."
                    value={this.props.searchText}
                    onChange={this.props.setSearchText}
            />)
    }
}