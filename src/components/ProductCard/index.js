// Core
import React from 'react';
import Box from '@material-ui/core/Box';

// Styles
import styles from './styles';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const ProductCard = ({
  title, description, imageId,
  price, classes, ...other}) => {
  const _classes = useStyles();

  return (
    <Box className={_classes.root}>
      <img src={`${process.env.REACT_APP_API_URL}products-photos/${imageId}`} />
      <Box className={_classes.titlePrice}><p>{title}</p><p>{price} $</p></Box>
      <p className={_classes.description}>{description}</p>
    </Box>
  );
};

export default ProductCard;
