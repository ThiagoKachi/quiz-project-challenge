import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/Home';
import { QuizPage } from './pages/Quiz';
import { Results } from './pages/Results';

import './index.css';

function App() {
  return (
    <Switch>
      <Route exact path="/quiz" component={QuizPage} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
