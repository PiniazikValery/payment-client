const styles = () => ({
  info: {
    display: 'flex',
    paddingTop: 100,
    justifyContent: 'center',
  },
  infoContent: {
    width: '50%',
    height: '50%',
  },
  input: {
    'width': '100%',
    'marginTop': 10,
    '& input': {
      fontSize: 14,
      fontWeight: 100,
    },
  },
  halfDivided: {
    'display': 'flex',
    '&>*': {
      flexBasis: '50%',
    },
  },
  payButton: {
    'marginTop': 30,
    'width': '100%',
    'backgroundColor': '#4fb54f',
    'color': 'white',
    '&:hover': {
      backgroundColor: '#4fb54f',
    },
  },
});
export default styles;
