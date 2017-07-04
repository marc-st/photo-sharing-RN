

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  menuText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
  cancelPicture: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  },
  sendButton: {
    backgroundColor: '#33AAFF',
    borderWidth: 10,
    borderRadius: 20,
    borderColor: '#33AAFF',
    padding: 5
  }
})
