// Core
import React, {useState} from 'react';
import {Box, TextField, Button} from '@material-ui/core';
import {
  CardCvcElement,
  CardNumberElement,
  CardExpiryElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {stripeInput} from '../';
import {connect} from 'react-redux';
import {makePaymentRoutine} from '../../redux/actions';

// Styles
import styles from './styles';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const CheckoutForm = ({product, makePayment, payment}) => {
  const classes = useStyles();

  const stripe = useStripe();
  const elements = useElements();

  const [billingDetails, setBillingDetails] = useState({
    address: '',
    city: '',
    street: '',
    zip: '',
    cardNumber: false,
    expiration: false,
    cvc: false,
  });

  const detailsFilled = () => {
    for (const property in billingDetails) {
      if (!billingDetails[property]) {
        return false;
      }
    }
    return true;
  };

  const changeBillingDetails = (propName, value) => {
    setBillingDetails({...billingDetails, [propName]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    makePayment({
      cardElement,
      productId: product._id,
      type: 'card',
      stripe,
      amount: product.price * 100,
      paymentDetails: {
        address: billingDetails.address,
        city: billingDetails.city,
        street: billingDetails.street,
        zip: billingDetails.zip,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.info}>
      <Box className={classes.infoContent}>
        <TextField
          className={classes.input}
          placeholder="Your address"
          value={billingDetails.address}
          onChange={(e) => changeBillingDetails('address', e.target.value)}
        />
        <Box className={classes.halfDivided}>
          <TextField
            style={{paddingRight: 10}}
            className={classes.input}
            placeholder="City"
            value={billingDetails.city}
            onChange={(e) => changeBillingDetails('city', e.target.value)}
          />
          <Box className={classes.halfDivided}>
            <TextField
              style={{paddingRight: 10}}
              className={classes.input}
              placeholder="Your street"
              value={billingDetails.street}
              onChange={(e) => changeBillingDetails('street', e.target.value)}
            />
            <TextField
              className={classes.input}
              placeholder="Your zip code"
              value={billingDetails.zip}
              onChange={(e) => changeBillingDetails('zip', e.target.value)}
            />
          </Box>
        </Box>
        <TextField
          style={{paddingRight: 10}}
          className={classes.input}
          InputProps={{
            inputComponent: stripeInput,
            inputProps: {
              component: CardNumberElement,
              placeholder: 'Card number',
              onChange: (e) =>
                changeBillingDetails('cardNumber', e.complete),
            },
          }}
          InputLabelProps={{shrink: true}}
        />
        <Box className={classes.halfDivided}>
          <TextField
            style={{paddingRight: 10}}
            className={classes.input}
            InputProps={{
              inputProps: {
                component: CardExpiryElement,
                placeholder: 'Expiration',
                onChange: (e) =>
                  changeBillingDetails('expiration', e.complete),
              },
              inputComponent: stripeInput,
            }}
            InputLabelProps={{shrink: true}}
          />
          <TextField
            className={classes.input}
            InputProps={{
              inputProps: {
                component: CardCvcElement,
                placeholder: 'CVC',
                onChange: (e) =>
                  changeBillingDetails('cvc', e.complete),
              },
              inputComponent: stripeInput,
            }}
            InputLabelProps={{shrink: true}}
          />
        </Box>
        <Button
          type='submit'
          className={classes.payButton}
          disabled={!stripe || payment.loading || !detailsFilled()}
        >
          Pay {product.price}$
        </Button>
      </Box>
    </form>
  );
};

export default connect(
    (state) => ({
      payment: state.payment,
    }),
    (dispatch) => ({
      makePayment: (payload) => dispatch(makePaymentRoutine(payload)),
    }),
)(CheckoutForm);
