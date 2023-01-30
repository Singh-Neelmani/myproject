import React from 'react';
import { WebView } from 'react-native-webview';
import {Platform,View} from 'react-native';
const WebViewComponentWeb = (props:any) => {
    
    
        // if(Platform.OS === 'web' )
        // {
        //     return (<iframe src="https://m.timesofindia.com/toi-plus/plans" height={'100%'} width={'100%'} />)
        // }


        return <WebView for ios source={{ uri: 'https://m.timesofindia.com/toi-plus/plans' }} />
}
 
export default WebViewComponentWeb;