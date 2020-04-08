import React, { Component } from "react";
import styles from "../TestCardList/TestCardList.module.scss"
import TestCard from "../TestCard";

export default class TestCardList extends Component {

    render () {
        return (
                
                <section className={styles.CardList}>
                    {this.props.data.Countries.map((data, index) => (
                          <TestCard data={data} key={index} />
                    ))}
                </section>
         
        )
    }
}