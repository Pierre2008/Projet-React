import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';


export default class ProfilScreen extends React.Component {
    render() {

        const barWidth = Dimensions.get('screen').width - 200;
        const progressCustomStyles = {
            backgroundColor: 'white', 
            borderRadius: 5, }
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.coinsContainer}>
                        <Image
                            source={require('../assets/Images/coin.png')}
                        />
                        <Text style= {styles.quantityCoins}>200,000</Text>
                    </View>
                    <View style={styles.userContainer}>
                        <Image
                            source={require('../assets/Images/user.png')}
                        />
                        <Text style={{fontSize: 17}}>User Name</Text>
                    </View>
                    <View style= {styles.achievementsMainContainer}>
                        <View style= {styles.achievementsContainer}>
                            <ProgressBarAnimated
                                {...progressCustomStyles}
                                width={barWidth}
                                value={20}
                                backgroundColorOnComplete="#6CC644"
                            />
                            <Image
                                source={require('../assets/Images/podium.png')}
                            />
                        </View>
                        <View style= {styles.achievementsContainer}>
                            <ProgressBarAnimated
                            {...progressCustomStyles}
                            width={barWidth}
                            value={20}
                            backgroundColorOnComplete="#6CC644"
                            />
                            <Image
                            source={require('../assets/Images/trophy.png')}
                            />
                        </View>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity 
                        style= {styles.buttonsPlay}
                        onPress={() => this.props.navigation.navigate('ClassicQuiz')}>
                        <Text style={styles.buttonsText}>Classique</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style= {styles.buttonsPlay}
                        onPress={() => this.props.navigation.navigate('CompetQuiz')}>
                        <Text style= {styles.buttonsText}>Competition</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.coursContainer}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Cours disponibles</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFCC66',
    },

    coinsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },

      quantityCoins: {
        fontSize: 16,
        marginLeft: 7,
      },
     
      userContainer: {
        marginTop: 50,
        alignItems: 'center',
      },  

      achievementsMainContainer: {
        marginTop: 50,
        flexDirection: 'column',
        backgroundColor: '#000'
        
      },

      achievementsContainer: {
        flexDirection:  'row',
        alignItems: 'center',
        justifyContent: 'space-between'

      },

      buttonsContainer: {
        marginTop: 70,
        flexDirection: 'row',
      },

      buttonsPlay: {
        width: 120,
        height: 120,
        backgroundColor: '#4267B2',
        alignItems: 'center', 
        justifyContent: 'center',
        
      },

      buttonsText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
      },

      coursContainer: {
        alignItems: 'center',
        marginTop: 70,
      }

});    