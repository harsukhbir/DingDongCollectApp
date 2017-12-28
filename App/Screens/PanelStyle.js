import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  touchableContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    padding: 4,
    paddingLeft:20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'white',
    borderBottomWidth:1,
    borderBottomColor:'white',
    borderStyle:'solid',
    borderRadius:10,
  },
  label: {
    flex: 5,
    fontWeight:'bold',
    fontSize:17,
    color:'#6f6f6f'
   },
  value: {
    flex: 5,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  buttonImage: {
    flex: 1,
    textAlign: 'right',
  },
  body: {
    padding: 0,
  }
})
