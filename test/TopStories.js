import React, { PureComponent, Fragment } from 'react';
import { FlatList, View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';

import styles from './TopStoriesStyles';

class TopStories extends PureComponent {
  constructor() {
    super();
    this.state = {
      stories: [],
      isLoading: true,
      // offset: 0,
      // limit: 15,
    };
  }

  componentDidMount() {
    this.getTopStories()
      .then(result => result.json())
      .then(async res => {
        const stories = await Promise.all(
          res.map(id => {
            const singleRequest = fetch(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
            );
            return singleRequest.then(article => article.json());
          }),
        );
        this.setState({ isLoading: false, stories });
      });
  }

  getTopStories = () =>
    fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$key"&limitToFirst=30',
    );

  openDetails = story => {
    this.props.navigation.navigate('Story', { story });
  };

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    return (
      <Fragment>
        <View style={styles.centeredImage}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
            }}
          />
        </View>
        {this.state.isLoading && !this.state.stories.length ? (
          <ActivityIndicator
            style={styles.indicator}
            color="#009688"
            size="large"
            animating={this.state.loading}
          />
        ) : (
          <FlatList
            data={this.state.stories}
            renderItem={({ item }) => (
              <View style={styles.storyTitleContainer}>
                <TouchableOpacity onPress={() => this.openDetails(item)}>
                  <Text style={styles.sectionTitle}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            )}
            ItemSeparatorComponent={this.renderSeparator}
            keyExtractor={item => item.id.toString()}
            style={styles.flatList}
          />
        )}
      </Fragment>
    );
  }
}

export default TopStories;
