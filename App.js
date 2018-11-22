import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sound: new Audio.Sound(),
    }
  }

  async componentDidMount() {
    await this.state.sound.loadAsync(require('./assets/muscle-car.mp3'));
  }

  _playOnPress = async() => {
    try {
      await this.state.sound.setPositionAsync(0);
      await this.state.sound.playAsync();
    } catch (err) {
      console.warn ("error: " + err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Press Button:</Text>
        <Button
          title='Press me'
          onPress={ () => this._playOnPress() }
        ></Button>
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
