import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

export default class ProfileScreen extends React.Component {
    render() {

        const barWidth = Dimensions.get('screen').width - 200;
        const progressCustomStyles = {
            backgroundColor: 'white', 
            borderRadius: 5, }
        return (
            <ScrollView style={styles.container}>
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
                        <Text style={{fontSize: 17, color:'#FFF'}}>{this.props.displayName}</Text>
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

                    <View style={styles.coursMainContainer}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color:'#4267B2'}}>Cours disponibles</Text>   
                            <View style={styles.coursContainer}>
                                <TouchableOpacity 
                                style= {styles.buttonsCours}
                                onPress={() => this.props.navigation.navigate('CoursDev')}>
                                <Text style={styles.buttonsText}>Dev</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity
                                style= {styles.buttonsCours}
                                onPress={() => this.props.navigation.navigate('CoursDesign')}>
                                <Text style= {styles.buttonsText}>Design</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity 
                                style= {styles.buttonsCours}
                                onPress={() => this.props.navigation.navigate('CoursMarketing')}>
                                <Text style= {styles.buttonsText}>Marketing</Text>
                                </TouchableOpacity>
                            </View>    
                    </View>
                </View>
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCC66',
    },

    coinsContainer: {
        marginTop: 10,
        marginLeft: 10,
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
      },

      achievementsContainer: {
        flexDirection:  'row',
        alignItems: 'center',
        justifyContent: 'center'

      },

      buttonsContainer: {
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-around'
      },

      buttonsPlay: {
        width: 140,
        height: 100,
        backgroundColor: '#4267B2',
        alignItems: 'center', 
        justifyContent: 'center',
        
      },

      buttonsText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
      },

      coursMainContainer: {
        marginTop: 70,
        alignItems: 'center',
      },

      coursContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
      },

      buttonsCours: {
        width: 100,
        height: 80,
        backgroundColor: '#4267B2',
        alignItems: 'center', 
        justifyContent: 'center',
      }

});    