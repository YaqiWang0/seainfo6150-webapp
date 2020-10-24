import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import styles from "./ArticleList.module.css"

const ArticleList = (props) => {
    let displayContent;
    if(props.articles.length) {
        displayContent = (

            <div className={styles.container}>
                {props.articles.map((item) => (
                        <ArticleListItem article={item} key={item.slug}/>
                    ))}
            </div>
        )
    } else {
        displayContent = <div>You have no data!</div>
    }

    return props.articles.length ? (
        <div>
            {displayContent}
        </div>
    ) : null;
};

export default ArticleList;
