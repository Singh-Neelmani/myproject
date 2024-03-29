import {View, Text, Image, TouchableOpacity,Platform} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
const GetNews = (props:any) => {
  const route:any = useRoute();
  
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <Image
        source={{uri: route.params.data.urlToImage}}
        style={{width: '100%', height: 200}}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: '800',
          color: '#fff',
          marginTop: 10,
          alignSelf: 'center',

          width: '94%',
        }}>
        {route.params.data.title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: '#fff',
          marginTop: 10,
          alignSelf: 'center',

          width: '94%',
        }}>
        {route.params.data.description}
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontWeight: '600',
          color: '#fff',
          marginTop: 10,
          alignSelf: 'center',

          width: '94%',
        }}>
        {route.params.data.publishedAt}
      </Text>

      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: '#fff',
          marginTop: 10,
          alignSelf: 'center',

          width: '94%',
        }}>
        {route.params.data.content}
      </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('WebViewComponentWeb')}>
        <Text style={{
          fontSize: 16,
          fontWeight: '600',
          color: '#fff',
          marginTop: 10,
          alignSelf: 'center',

          width: '94%',
        }}>
        subscribe
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetNews;