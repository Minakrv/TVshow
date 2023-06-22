export const style = {
    'MuiListItem-root': {
        padding: 0,
    },
    container: {
      height: '100%',
      width: '100%',
    },
    headerContainer: {
      backgroundColor: '#edebeb',
      height: 430,
    },
    headerContent: {
      padding: '40px 0px 0px 40px',
    },
    headerLable: {
      paddingBottom: 5,
      fontWeight: 'bold',
      fontSize: '20px',
    },
    details: {
      margin: '30px 20px 0px 40px',
      display: 'flex',
      alignItems: 'flex-start',
    },
    topBox: {
      width: '50%',
      paddingLeft: 4,
    },
    // list: {
    //     padding: 1,
    // },
    moreDetails: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: '40px 20px 0px 15px',
    },
    starring: {
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineBreak: 'anywhere',
      paddingBottom: 2,
      maxHeight: '330px',
      maxWidth: '500px',
      margin: 3.4,
    },
    info: {
    //   marginTop: '30px',
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineBreak: 'anywhere',
      paddingBottom: 2,
      maxHeight: '330px',
      maxWidth: '500px',
      margin: 3.4,
    },
    avatar: {
      verticalAlign: 'middle',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
    },
  } as const;
  
  // Media query for changing flex direction to column
  (style.details as any)['@media (max-width: 600px)'] = {
    flexDirection: 'column',
    alignItems: 'center',
  };
  (style.topBox as any)['@media (max-width: 600px)'] = {
    width: '100%',
    paddingLeft: 0,
  };
  (style.moreDetails as any)['@media (max-width: 600px)'] = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  (style.starring as any)['@media (max-width: 600px)'] = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
  };
  
  export default style;
  