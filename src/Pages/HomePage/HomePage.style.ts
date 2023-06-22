
export const style = ({
    container  : {
        height: '100%',
        maxWidth: '100%',
        minWidth: '529px'
    },
    headerContainer: {
        backgroundColor: '#edebeb',
        height: 350,
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        padding: 5,
    },
    headerLable: {
        paddingBottom: 5,
        fontWeight: 'bold',
        fontSize: '20px',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        textDecoration: 'none',
    },
    cards: {
        maxWidth: 200,
        maxHeight: 350, 
        margin: 3.4,
    },
    cardSummery: {
        flex: 1, 
        overflow: 'hidden', 
        textOverflow: 'ellipsis', 
        lineBreak: 'anywhere',
        paddingBottom: 2,
        maxHeight: "52px",
    },
}) 