import React from 'react'
import styles from "./base-page.module.css"
import { Loading } from './../loading/index';
import { Helmet } from 'react-helmet';

export const BasePage = ({ title, isLoading, className = "container", children }) => {
    return (
        <div className={className}>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title}/>
            </Helmet>
            <h2 className={styles.title}><span>{title}</span></h2>
            {isLoading && <Loading />}
            {children}
        </div>
    )
}
