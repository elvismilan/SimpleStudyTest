/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React from 'react';
import Share from 'react-native-share';

export default function App() {
  const share = async () => {
    const options = {
      title: 'Social Sharing Test',
      message: 'Simple Study a brilliant app!',
      url: 'https://simplestydy.ie',
      email: 'info@simplestudy.ie',
      subject: 'Social Sharing Task',
      recipient: '353877377612',
    };

    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    //Share.open(options)
    //  .then(res => console.log(res))
    //  .catch(err => console.log(err));
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          marginVertical: 40,
          color: 'blue',
          textAlign: 'center',
        }}>
        React Native Share
      </Text>
      <View style={{marginHorizontal: 40}}>
        <Button title="Share" onPress={share} />
      </View>
    </View>
  );
}
