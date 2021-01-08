// Core
import React from 'react';
import {Box} from '@material-ui/core';
import {useParams, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {CheckoutForm} from '../../components';

// Styles
import styles from './styles';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const MakePaymentPage = ({products}) => {
  const classes = useStyles();

  const history = useHistory();

  const {id} = useParams();
  const product = products?.data &&
   products.data.find((product) => product._id === id);

  if (!product) {
    history.push('/');
  } else {
    return (
      <Box className={classes.root} >
        <h1 className={classes.header}>Make payment</h1>
        <CheckoutForm product={product} />
      </Box>
    );
  }
  return null;
};

export default connect(
    (state) => ({
      products: state.products,
    }),
)(MakePaymentPage);

