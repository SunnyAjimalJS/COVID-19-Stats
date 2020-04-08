import React, { Component } from 'react';
import styles from "./GlobeCount.module.scss";
import CountTo from 'react-count-to';
// import Globe from 'react-globe.gl';

export default class GlobeCount extends Component {
    render() {
        return(
            <>
            <CountTo className={styles.globalCount} to={this.props.totalNumber} speed={1000} />
            </>
        )
    }
}