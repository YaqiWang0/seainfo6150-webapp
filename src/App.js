import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import Article from "./Article/Article";
import DynamicArticle from "./DynamicArticle/DynamicArticle";
import { isEmpty } from "lodash";

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
          "http://demo1390455.mockable.io/articles"
      )
      const responseJson = await response.json();
      setFetchedData(responseJson);
      // put data fetching code here!
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);
  let displayContent;
  if (!isEmpty(fetchedData)) {
    displayContent = (
        <div className="App">
          <Switch>
            <Route>
          {Object.values(fetchedData).map((item) => (
                      <DynamicArticle article={item} />

          ))}
            </Route>
          </Switch>
        </div>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }
  return isEmpty(fetchedData) ? null : (
    <div className="App">
      {displayContent}
    </div>
  );
}

export default App;
