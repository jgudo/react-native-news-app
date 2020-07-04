import React from 'react';
import { FlatList, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native';
import { NEWS_API } from 'react-native-dotenv';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewsItem from './NewsItem';

class News extends React.Component {
  state = {
    news: [],
    loading: false,
    isRefreshing: false
  };

  componentDidMount() {
    console.log('TOP NEWS MOUNTED')
    if (this.state.news.length === 0) {
      this.setState({ loading: true });
      this.fetchNews(); 
    }
  }

  fetchNews = async() => {
    const url = new URL('https://newsapi.org/v2/top-headlines');
    const params = {
      country: 'ph',
      apiKey: NEWS_API
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    try {
      const res = await fetch(url);
      const data = await res.json();

      this.setState({ 
        news: data.articles,
        loading: false,
        isRefreshing: false
      });
      console.log(data);
      // alert(JSON.stringify(data));
    } catch(e) {
      alert(e);
    }
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true });
    this.fetchNews();
  }

  render() {
    const { loading } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0034c2" />
        ) : (
          <FlatList 
            data={this.state.news} 
            initialNumToRender={10}
            extraData={this.state.news}
            renderItem={({ item }) => <NewsItem news={item}/>}
            keyExtractor={(news) => news.url}
            refreshControl={<RefreshControl 
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh}
                tintColor="#0034c2"
                colors={['#0034c2']}
                progressBackgroundColor="#fff"
            />}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    justifyContent: 'center'
  }
});

export default React.memo(News);
