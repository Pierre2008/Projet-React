import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';


export default class FicheMet extends React.Component {
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
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Développeur Web</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Intégrateur Web</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Technicien Réseau</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Chef De Projet</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Webdesigner</Text>
                            </TouchableOpacity>


                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Webmarketeur</Text>
                            </TouchableOpacity>


                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Webmaster</Text>
                            </TouchableOpacity>


                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Community Manager</Text>
                            </TouchableOpacity>


                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Graphiste Web</Text>
                            </TouchableOpacity>


                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
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
        backgroundColor: '#ff9f44',

    },

    coinsContainer: {
        marginBottom:10,
        marginTop:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },

    quantityCoins: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 7,
    },


    answersContainer: {
        flex: 2,
        alignItems: 'center',

    },
    answersButtons: {
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#FFF'

    },
    containerShop: {
        flexDirection: 'row',
        justifyContent:'flex-end',
        marginBottom: 40,
        marginLeft: 10,

    },


});
