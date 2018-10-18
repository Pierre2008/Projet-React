import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Button} from "react-native-elements";

export default class ChoixQuiz extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('../assets/Images/logo.png')}
                    />
                    <Text style={styles.headerLabel}>Veuillez choisir une catégorie de Quiz</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.buttonsPlay}
                        onPress={() => this.props.navigation.navigate('DevQuiz')}>
                        <Text style={styles.Label}>Développement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsPlay}
                                      onPress={() => this.props.navigation.navigate('DesignQuiz')}>
                        <Text style={styles.Label}>Design</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsPlay}
                                      onPress={() => this.props.navigation.navigate('MarketingQuiz')}>
                        <Text style={styles.Label}>Marketing</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContactContainer}>
                    <TouchableOpacity style={styles.buttonContact}
                                      onPress={() => this.props.navigation.navigate('Contact')}>
                        <Text style={styles.buttonContactText}>Contact Staff</Text>
                    </TouchableOpacity >
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCC66',
        alignItems: 'center'
    },
    header: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4267B2',
    },

    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },

    buttonsPlay: {
        width: 140,
        height: 100,
        backgroundColor: '#4267B2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },
    Label: {
        fontSize: 16,
        fontWeight: 'normal',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    buttonContactContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonContact: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150
    },

    buttonContactText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#4267B2'
    },
});
