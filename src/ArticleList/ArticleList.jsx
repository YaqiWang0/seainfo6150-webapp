import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (props) => {
    let displayContent;
    if(props.articles.length) {
        displayContent = (

            <div>
                <ul>
                {props.articles.map((item) => (
                        <ArticleListItem article={item} key={item.slug}/>
                    ))}
                 </ul>
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
