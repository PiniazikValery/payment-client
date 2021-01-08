import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  SelectProductPage, MakePaymentPage,
  SuccessPaymentPage, FailurePaymentPage,
} from './pages';
import {BrowserHistory} from './components';

function App() {
  return (
    <Router>
      <BrowserHistory />
      <Switch>
        <Route path="/success_payment">
          <SuccessPaymentPage />
        </Route>
        <Route path="/failure_payment">
          <FailurePaymentPage />
        </Route>
        <Route path="/checkout/:id">
          <MakePaymentPage />
        </Route>
        <Route path="/">
          <SelectProductPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
