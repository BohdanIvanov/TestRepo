import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  flatList: {
    flex: 1,
    backgroundColor: '#eee',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
    textAlign: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
  },
  indicator: {
    flex: 1,
  },
  centeredImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  image: {
    width: 120,
    height: 120,
  },
  storyTitleContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
