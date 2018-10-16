import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';


export default class Shop extends React.Component {
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.coinsContainer}>
                    <Image
                        source={require('../assets/Images/coin.png')}
                    />
                    <Text style= {styles.quantityCoins}>200,000</Text>
                </View>

                <View style={styles.answersContainer}>
                    <TouchableOpacity style={styles.answersButtons}>
                        <Text>HTML/CSS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Image  style={{width: 45, height: 45}}
                        source={require('../assets/Images/Shop.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.answersButtons}>
                        <Text>JavaScript</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Image  style={{width: 45, height: 45}}
                        source={require('../assets/Images/Shop.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.answersButtons}>
                        <Text>PHP</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Image  style={{width: 45, height: 45}}
                        source={require('../assets/Images/Shop.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.answersButtons}>
                        <Text>React Native</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Image  style={{width: 45, height: 45}}
                        source={require('../assets/Images/Shop.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.answersButtons}>
                        <Text>Marketing</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image  style={{width: 45, height: 45}}
                                source={require('../assets/Images/Shop.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.answersButtons}>
                        <Text>C#</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image  style={{width: 45, height: 45}}
                                source={require('../assets/Images/Shop.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.answersButtons}>
                        <Text>C++</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image  style={{width: 45, height: 45}}
                                source={require('../assets/Images/Shop.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.answersButtons}>
                        <Text>Unity</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image  style={{width: 45, height: 45}}
                                source={require('../assets/Images/Shop.png')}/>
                    </TouchableOpacity>


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
        justifyContent: 'center',
    },

    quantityCoins: {
        fontSize: 16,
        marginLeft: 7,
    },


    answersContainer: {
        flex: 2,
        marginTop:10,
        marginLeft:10,
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    answersButtons: {
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#FFF'

    },

});
