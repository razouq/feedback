import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import SurveyNew from "./components/survey/SurveyNew";
import Dashboard from "./components/Dashboard";
import { fetchUser } from "./actions/index";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  });

  return (
    <div>
      <Router>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route exact path="/surveys/new" component={SurveyNew} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
