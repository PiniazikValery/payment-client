import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

const BrowserHistory = ({_history}) => {
  const history = useHistory();
  useEffect(() => {
    _history.methodName &&
      history[_history.methodName].apply(history, _history.methodArguments);
  }, [_history, history]);
  return null;
};

export default connect((state) => ({
  _history: state.history,
}))(BrowserHistory);
