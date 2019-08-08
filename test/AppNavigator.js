import { createStackNavigator, createAppContainer } from 'react-navigation';
import TopStories from './TopStories';
import Story from './Story';

const AppNavigator = createStackNavigator({
  TopStories: { screen: TopStories },
  Story: { screen: Story },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
