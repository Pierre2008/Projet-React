import React from 'react';
import { StyleSheet, Text, View, Image, Button, StatusBar, ScrollView, Dimensions, TouchableOpacity, For } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
export default class Contact extends React.Component {


    render() {
            return (

                <View style={styles.mainContainer}>
                    <Text style={styles.headerLabel}>Nous Contacter</Text>

                    <View>

                    </View>
                    <FormLabel>Email</FormLabel>
                    <FormInput/>
                    <FormValidationMessage>{'Champs Requis'}</FormValidationMessage>
                    <FormLabel>Message </FormLabel>
                    <FormInput/>
                    <FormValidationMessage>{'Champs Requis'}</FormValidationMessage>

                </View>
            );


    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFCC66',
    },

    questionTitle: {
        flex: 1,
        justifyContent: 'center',
        fontSize: 17,

    },

    headerLabel: {
        fontSize: 35,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4267B2',
    },

});