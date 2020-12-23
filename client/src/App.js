import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import Surveys from './components/Surveys';
import {fetchUser} from './actions/index';
import {useDispatch} from 'react-redux';

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
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Surveys} />
        </div>
      </Router>
    </div>
  );
}

export default App;