import React, { PureComponent } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './StoryStyles';

class Story extends PureComponent {
  renderActivityIndicatorLoadingView = () => (
    <ActivityIndicator color="#009688" size="large" style={styles.ActivityIndicatorStyle} />
  );
  render() {
    const { story } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          <Text style={styles.title}>{story.title}</Text>
        </View>
        <WebView
          style={styles.webview}
          source={{ uri: story.url }}
          renderLoading={this.renderActivityIndicatorLoadingView}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
        />
      </View>
    );
  }
}

export default Story;
