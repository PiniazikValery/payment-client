// const styles = () => ({
//   media: {
//     height: 140,
//   },
//   cardMedia: {
//     backgroundSize: 'contain',
//   },
//   cardContentHead: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   cardContent: {
//     height: 160,
//   },
// });
const styles = () => ({
  root: {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    '& img': {
      width: 400,
      height: 400,
      objectFit: 'contain',
      border: 'solid 1px grey',
    },
  },
  titlePrice: {
    'display': 'flex',
    'width': 400,
    'flexDirection': 'row',
    'justifyContent': 'space-between',
    '& p': {
      opacity: 0.6,
      color: 'black',
    },
  },
  description: {
    marginTop: 0,
    width: 400,
    height: 150,
    opacity: 0.6,
    color: 'black',
  },
});
export default styles;
