import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class ClassicScreen extends React.Component {

    render() {
      return (

          <View style={styles.container}>
             <Text>Bravo</Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFCC66',
    },
})