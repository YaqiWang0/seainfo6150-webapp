import React, { useState } from "react";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css"

const ArticleListItem = (props) => {
    const[buttonText, setButtonText] = useState("Show more");

    function onClick() {
        if(buttonText === "Show more") {
            setButtonText("Show less")
        } else {
            setButtonText("Show more")
        }
    }
    return (
        <div className={styles.container}>
                <h3 className={styles.title}>{props.article.title}</h3>
            {
            buttonText === "Show less" ?
                <div>
                    <p className={styles.shortText}>{props.article.shortText}</p>
                <time className={styles.time} dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
                </div>  : null
            }
            <ArticleTextToggleButton onClick = {onClick} buttonText = {buttonText}/>

        </div>
        //<DynamicArticle article = {props.article}/>
    );
};

export default ArticleListItem;