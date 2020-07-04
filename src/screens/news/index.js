import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { NEWS_API } from 'react-native-dotenv';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewsItem from './NewsItem';

class News extends React.Component {
  state = {
    news: []
  };

  componentDidMount() {
    const url = new URL('https://newsapi.org/v2/top-headlines');
    const params = {
      country: 'us',
      apiKey: NEWS_API
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({ news: data.articles });
        console.log(data)
        alert(JSON.stringify(data))
      })
      .catch(e => alert(e)); 
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList 
          data={this.state.news} 
          extraData={this.state.news}
          renderItem={({ item }) => <NewsItem news={item}/>}
          keyExtractor={(news) => news.url}
        />
      </SafeAreaView>
    );
  }
}

export default News;
