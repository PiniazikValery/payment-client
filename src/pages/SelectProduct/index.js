// Core & utils
import React, {useEffect} from 'react';
import {Box} from '@material-ui/core';
import {connect} from 'react-redux';
import {fetchProductsRoutine} from '../../redux/actions';
import {ProductCard} from '../../components';
import {Link} from 'react-router-dom';

// Styles
import styles from './styles';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const SelectProductPage = ({fetchProducts, products}) => {
  const classes = useStyles();

  useEffect(() => fetchProducts(), [fetchProducts]);

  return (
    <Box className={classes.root} >
      <h1 className={classes.header}>Select a product</h1>
      <Box className={classes.listOfProducts}>
        {!products.loading && products.data.map((product) =>
          <Link
            className={classes.productCard}
            to={`/checkout/${product._id}`}
            key={product._id}
            style={{textDecoration: 'none'}}
          >
            <ProductCard
              price={product.price}
              title={product.name}
              description={product.description}
              imageId={product.photo}
            />
          </Link>
            ,
        )}
      </Box>
    </Box>);
};

export default connect(
    (state) => ({
      products: state.products,
    }),
    (dispatch) => ({
      fetchProducts: () => dispatch(fetchProductsRoutine()),
    }),
)(SelectProductPage);
