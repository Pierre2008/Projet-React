import React from 'react';
<<<<<<< Updated upstream
import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView,} from 'react-native';
=======
import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
>>>>>>> Stashed changes
import ProgressBarAnimated from 'react-native-progress-bar-animated';

export default class ProfileScreen extends React.Component {
    render() {

        const barWidth = Dimensions.get('screen').width - 200;
        const progressCustomStyles = {
            backgroundColor: 'white',
            borderRadius: 5,
        };
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>

                    <View style={styles.coinsContainer}>
                        <TouchableOpacity
<<<<<<< Updated upstream
                            onPress={() => this.props.navigation.navigate('ShopCate')}>
                            <Image
                                source={require('../assets/Images/coin.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ShopCate')}>
                            <Text style={styles.quantityCoins}>2,000</Text>
=======
                            onPress={() => this.props.navigation.navigate('Shop')}>
                            <Image
                                source={require('../assets/Images/coin.png')}
                            />
                            <Text style={styles.quantityCoins}>200,000</Text>
>>>>>>> Stashed changes
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userContainer}>
                        <Image
                            source={require('../assets/Images/user.png')}
                        />
<<<<<<< Updated upstream
                        <Text style={{fontSize: 17, color: '#FFF'}}>{this.props.displayName}</Text>
=======
                        <Text style={{fontSize: 17, color: '#FFF'}}>{}</Text>
>>>>>>> Stashed changes
                    </View>
                    <View style={styles.achievementsMainContainer}>
                        <View style={styles.achievementsContainer}>
                            <ProgressBarAnimated
                                {...progressCustomStyles}
                                width={barWidth}
                                value={20}
                                backgroundColorOnComplete="#6CC644"
                            />
                            <View style={styles.img}>
                                <Image
                                    source={require('../assets/Images/podium.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.achievementsContainer}>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

                        <TouchableOpacity
                            style={styles.buttonsPlay}
                            onPress={() => this.props.navigation.navigate('ClassicQuiz')}>
                            <Text style={styles.buttonsText}>Jouer</Text>
=======
                        <TouchableOpacity
                            style={styles.buttonsPlay}
                            onPress={() => this.props.navigation.navigate('ChoixQuiz')}>
                            <Text style={styles.buttonsText}>Jouer au Quiz</Text>
>>>>>>> Stashed changes
                        </TouchableOpacity>

                    </View>

                    <View style={styles.lineStyle}

                    />
                    <View style={styles.coursMainContainer}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#4267B2'}}>Cours disponibles</Text>
<<<<<<< Updated upstream
                    </View>

                    <View style={styles.coursContainer}>
                        <TouchableOpacity
                            style={styles.buttonsCours}
                            onPress={() => this.props.navigation.navigate('CoursDev')}>
                            <Text style={styles.buttonsCoursText}>Dev</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonsCours}
                            onPress={() => this.props.navigation.navigate('CoursDesign')}>
                            <Text style={styles.buttonsCoursText}>Design</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonsCours}
                            onPress={() => this.props.navigation.navigate('CoursMarketing')}>
                            <Text style={styles.buttonsCoursText}>Marketing</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.lineStyle}
                    />
                    <View style={styles.ContainerEnd}>
                        <View>
                            <TouchableOpacity style={styles.buttonContact}
                                              onPress={() => this.props.navigation.navigate('Contact')}>
                                <Text
                                    style={styles.buttonContactText}>Contact Staff
                                </Text>
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity style={styles.buttonCondition}
                                          onPress={() => this.props.navigation.navigate('Condition')}>
                            <Text
                                style={styles.buttonContactText}>Condition d'utilisation
                            </Text>
                        </TouchableOpacity>
=======
                        <View style={styles.coursContainer}>
                            <TouchableOpacity
                                style={styles.buttonsCours}
                                onPress={() => this.props.navigation.navigate('CoursDev')}>
                                <Text style={styles.buttonsText}>Dev</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.buttonsCours}
                                onPress={() => this.props.navigation.navigate('CoursDesign')}>
                                <Text style={styles.buttonsText}>Design</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.buttonsCours}
                                onPress={() => this.props.navigation.navigate('CoursMarketing')}>
                                <Text style={styles.buttonsText}>Marketing</Text>
                            </TouchableOpacity>
                        </View>
                        /*<View>
                            <Button
                                onPress={() => this.props.navigation.navigate('Contact')}
                                title="Contacter Staff"
                                color="#FFF"
                            />
                        </View>*/
>>>>>>> Stashed changes
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
        marginTop: 20,
        marginLeft: 20,
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    quantityCoins: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 7,
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },

    buttonsContainer: {
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    buttonsPlay: {
<<<<<<< Updated upstream
        width: 250,
        height: 70,
        backgroundColor: '#4267B2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
        borderWidth: 1,
        borderColor: '#FFF',


=======
        width: 150,
        height: 80,
        backgroundColor: '#4267B2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,

>>>>>>> Stashed changes
    },

    buttonsText: {
        color: '#FFF',
        fontSize: 35,
        fontWeight: 'bold',
    },

    coursMainContainer: {
<<<<<<< Updated upstream
        marginTop: 20,
        alignItems: 'center',

    },

=======
        marginTop: 70,
        alignItems: 'center',
    },

>>>>>>> Stashed changes
    coursContainer: {
        marginTop: 20,

        flexDirection: 'row',
<<<<<<< Updated upstream
        justifyContent: 'space-around',

    },

    ContainerEnd: {
        marginTop: 20,
        alignItems: 'center',

    },

=======
        justifyContent: 'space-around'
    },

>>>>>>> Stashed changes
    buttonsCours: {
        width: 100,
        height: 80,
        backgroundColor: '#4267B2',
        alignItems: 'center',
<<<<<<< Updated upstream
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
    },

    buttonsCoursText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },


    buttonContactText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',


    },

    buttonContact: {
        width: 150,
        height: 40,
        marginTop: 50,
        backgroundColor: '#4267B2',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        justifyContent: 'center',
    },


    buttonCondition: {
        width: 250,
        height: 50,
        marginTop: 30,
        backgroundColor: '#4267B2',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFF',
        justifyContent: 'center',
    },

    lineStyle: {
        borderWidth: 2.5,
        borderColor: 'black',
        marginTop: 60,
    },

    img: {

        marginBottom: 10,
    }

=======
        justifyContent: 'center',
    }
>>>>>>> Stashed changes

});    