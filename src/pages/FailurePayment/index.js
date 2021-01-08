// Core
import React, {useEffect} from 'react';
import {Box} from '@material-ui/core';
import {resetPayment} from '../../redux/actions';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

// Styles
import styles from './styles';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const FailurePaymentPage = ({resetPayment, error}) => {
  const classes = useStyles();

  const history = useHistory();

  useEffect(() => {
    if (!error) {
      history.replace('/');
    }
    return function destroy() {
      resetPayment();
    };
  }, []);

  return (
    <Box className={classes.root} >
      <h1 className={classes.header}>Failure</h1>
      <Box>{error?.response?.data?.message || error?.message}</Box>
    </Box>
  );
};

export default connect(
    (state) => ({
      error: state.payment.error,
    }),
    (dispatch) => ({
      resetPayment: () => dispatch(resetPayment()),
    }),
)(FailurePaymentPage);
