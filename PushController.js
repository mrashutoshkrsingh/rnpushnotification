import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';

export default class PushController extends Component {
  componentDidMount() {
    PushNotification.configure({
         // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log(token)
      },
  
      onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
      },
      senderID: "684900815658",
    });
  }

  render() {
    return null;
  }
}

//"duUGdsmmEEE:APA91bGdJJDR3pFoVSbgIHTbkMiqfgCm1DThk2mSrFOYJMQV0-kENddh0WRdawGAyUacOL4ENvvuXomuWcEf537h8cTkzc9_0DYF1U-DXCDrr-cAq4xO6X1H0dY54suHTneTbebYL5xI