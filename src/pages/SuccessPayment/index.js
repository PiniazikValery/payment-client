// Core
import React, {useEffect} from 'react';
import {Box} from '@material-ui/core';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {resetPayment} from '../../redux/actions';

// Styles
import styles from './styles';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const SuccessPaymentPage = ({resetPayment, payment}) => {
  const classes = useStyles();

  const history = useHistory();

  useEffect(() => {
    if (!payment) {
      history.replace('/');
    }
    return function destroy() {
      resetPayment();
    };
  }, []);

  return (
    payment &&
        <Box className={classes.root} >
          <h1 className={classes.header}>Success</h1>
          <Box className={classes.info}>
            <img src='/success_kid.png' />
            <Box className='description'>
              <p>Payment id: {payment.id}</p>
              <p>Payment amount: {payment.amount/100} $</p>
            </Box>
          </Box>
        </Box>
  );
};

export default connect(
    (state) => ({
      payment: state.payment.data,
    }),
    (dispatch) => ({
      resetPayment: () => dispatch(resetPayment()),
    }),
)(SuccessPaymentPage);
