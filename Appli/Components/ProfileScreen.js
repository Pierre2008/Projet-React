import React from 'react';
import { StyleSheet, Text, View, Image, Button, StatusBar, ScrollView, Dimensions } from 'react-native';


export default class ProfilScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.coins}>
                    <Text>200,000</Text>
                    <Image
                        source={require('../assets/Images/coin.png')}
                    />
                </View>
                <View style={styles.user}>
                    <Image
                        source={require('../assets/Images/user.png')}
                    />
                    <Text>User Name</Text>
                </View>
                <View style={styles.buttonsPlay}>
                    <Button
                        title="Classique"
                        onPress={() => this.props.navigation.navigate('ClassicQuiz')}
                        />
                    <Button
                        title="Competitive"
                        onPress={() => this.props.navigation.navigate('CompetQuiz')}
                        />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFCC66',
    },

    coins: {
        flexDirection: 'row',
        backgroundColor: '#FFCC66',
        justifyContent: 'flex-end'
      },
     
      user: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFCC66',
      },  

      buttonsPlay: {
        flexDirection: 'row',
        backgroundColor: '#FFCC66',
        flex: 1 , 
        alignItems: 'center', 
        justifyContent: 'center'
      },

});    