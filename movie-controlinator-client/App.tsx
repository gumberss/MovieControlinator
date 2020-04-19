import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

import io from 'socket.io-client'
import Constants from 'expo-constants';

const socket = io( `http://${location.hostname}:5000`);

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

  forward(type: string) {
    socket.emit('jump-forward', type)
  }

  back(type: string) {
    socket.emit('jump-back', type)
  }
  
  volumeUp() {
    socket.emit('volume-up')
  }

  volumeDown() {
    socket.emit('volume-down')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer} >
          <Text style={styles.title} >Contro your computer!!</Text>
          <Button title="Play / Pause" onPress={this.playPause} />
        </View>


        <View style={styles.groupButtonContainer} >
          <View style={styles.groupButton}>
            <Button title="Back 3 seconds" onPress={() => this.back('three-seconds')} />
          </View>

          <View style={styles.groupButton}>
            <Button title="Jump 3 seconds" onPress={() => this.forward('three-seconds')} />
          </View>

        </View >

        <View style={styles.groupButtonContainer}>
          <View style={styles.groupButton}>
            <Button title="Volume Down" onPress={this.volumeDown} />
          </View>

          <View style={styles.groupButton}>
            <Button title="Volume Up" onPress={this.volumeUp} />
          </View>
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  buttonContainer: {
    marginBottom: '10px',
  },
  groupButton: {
    width: '49%',
    height: 40
  },
  groupButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: '16px'

  },
  title: {
    alignSelf: 'center'
  }
});
