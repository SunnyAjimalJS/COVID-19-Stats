import React, { Component } from 'react';
import styles from "./Header.module.scss";

export default class Header extends Component{
    render() {
        return(
            <>
            <div className={styles.Header}>
                <div className={styles.headerText}>
                    <h1 className={styles.largeHeader}>COVID-19 Stats</h1>
                    <p className={styles.smallHeader}>Global statistics and live data (updated numerous times daily)</p>
                </div>
            </div>
            </>
        )

    }
}