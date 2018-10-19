import React from 'react';
import { StyleSheet, Text, View, Image, Button, StatusBar, ScrollView, Dimensions, TouchableOpacity, For } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
export default class CGU extends React.Component {


    render() {
        return (

            <View style={styles.mainContainer}>
                <Text style={styles.headerLabel}>Condition d'utilisation</Text>

                <View>

                </View>

            </View>
        );


    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFCC66',
        alignItems: 'center',
    },


    headerLabel: {
        fontSize: 35,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4267B2',
    },

});