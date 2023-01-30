import React, { useState, useEffect} from 'react';
import {ActivityIndicator, ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';

const HomeScreen = (props:any) => {
    const [news, setNews] = useState([])
    
    useEffect(() => {
        fetch(
            'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1f804abc9bf5432db60cbe929928d81f',
          )
            .then(res => res.json())
            .then(response => {
              setNews(response.articles)
            })
            .catch(error => {
              console.log(error);
            });
    }, [])
    

    return (
      <View>
        {news.length === 0 ? (
          <ActivityIndicator color="black" size="large" />
        ) : (
        <ScrollView>
          {news.map((item:any, index) => (
                 <TouchableOpacity key={index} onPress={() => props.navigation.navigate('GetNews',{
                    data: item,
                  })}>
              <View style={{margin: 10}}>
                <Image
                  source={{uri: `${item.urlToImage}`}}
                  style={{height: 200, width: 200, borderRadius: 10}}
                />
                <Text style={{width: 200, textAlign: 'justify'}}>
                  {item.title}
                </Text>
              </View>
              </TouchableOpacity>
          ))}
        </ScrollView>
        )}
      </View>
    );
}

export default HomeScreen;