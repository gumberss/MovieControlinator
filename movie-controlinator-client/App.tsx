import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client'

const socket = io('http://192.168.100.77:5000');
/*
', {
  transports: ['websocket'], jsonp: false
}
*/
socket.connect();
socket.on('connect', () => {
  console.log('connected to socket server');
});

export default class App extends React.Component {

  playPause() {
    socket.emit('play-pause')
  }

  render() {
    return (
      
      <View style={styles.container}>
        <Text>Contro your computer!!</Text>
        <button onClick={this.playPause}>
          <Text>Play / Pause</Text>
        </button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
