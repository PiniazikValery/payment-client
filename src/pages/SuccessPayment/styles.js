const styles = () => ({
  root: {
    padding: 10,
    paddingTop: 30,
    paddingRight: 40,
    paddingLeft: 40,
  },
  header: {
    fontWeight: 'bold',
    opacity: 0.6,
  },
  info: {
    'display': 'flex',
    'alignItems': 'center',
    'flexDirection': 'column',
    '& img': {
      width: '50%',
      paddingBottom: 30,
    },
    '& .description': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      opacity: 0.6,
    },
  },
});
export default styles;
