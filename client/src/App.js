import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import SurveyNew from "./components/survey/SurveyNew";
import SurveyList from "./components/survey/SurveyList";
import SideNav from "./components/SideNav";
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
          <div className="container" style={{marginTop: '2rem'}}>
            <div className="row">
              <div className="col s3" >
                <SideNav/>
              </div>
              <div className="col s9">
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/surveys" component={SurveyList} />
                  <Route exact path="/surveys/new" component={SurveyNew} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
