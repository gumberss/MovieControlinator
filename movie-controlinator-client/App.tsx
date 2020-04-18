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

  foward(type: string) {
    socket.emit('jump-forward', type)
  }

  back(type: string) {
    socket.emit('jump-back', type)
  }

  render() {
    return (

      <View style={styles.container}>
        <Text>Contro your computer!!</Text>
        <hr />
        <button onClick={this.playPause}>
          <Text>Play / Pause</Text>
        </button>
        <hr />
        <button onClick={() => this.foward('three-seconds')}>
          <Text>Jump 3 seconds</Text>
        </button>
        <hr />
        <button onClick={() => this.back('three-seconds')}>
          <Text>Back 3 seconds</Text>
        </button>
        <hr />
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
