import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 30,
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  webview: {
    marginTop: 30,
    flex: 1,
    maxHeight: Dimensions.get('window').height - 200,
    width: 320,
  },
});
