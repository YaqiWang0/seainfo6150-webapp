import React from "react";

const ArticleListItem = (props) => {
    return (
        <li key={props.key}>
                <h3>{props.article.title}</h3>
                <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
                <p>{props.article.shortText}</p>
        </li>
        //<DynamicArticle article = {props.article}/>
    );
};

export default ArticleListItem;