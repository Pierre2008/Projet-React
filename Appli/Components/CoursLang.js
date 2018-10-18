import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';


export default class CoursLang extends React.Component {
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
                                <Text>HTML</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>CSS</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>JavaScript</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>PHP</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Java</Text>
                            </TouchableOpacity>


                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>React Native</Text>
                            </TouchableOpacity>


                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>C#</Text>
                            </TouchableOpacity>


                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>C++</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image  style={{width: 45, height: 45}}
                                        source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Unity</Text>
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
