

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
  modalContent: {
    backgroundColor: 'white',
    padding: 15,
    height: 100,
    width: 230,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
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
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
