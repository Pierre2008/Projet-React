import React from 'react';
<<<<<<< Updated upstream
import { StyleSheet, Text, View, Image, Button, StatusBar, ScrollView, Dimensions, TouchableOpacity, For } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import {Container, Form, Input, Item, Label} from "native-base";
=======
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    StatusBar,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    For
} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'

>>>>>>> Stashed changes
export default class Contact extends React.Component {


    render() {
        return (

<<<<<<< Updated upstream
                        <Form>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    autoCorrect={false}
                                    autoCapitalize= "none"

                                >
                                </Input>
                            </Item>

                            <Item floatingLabel>
                                <Label>Message</Label>
                                <Input
                                    secureTextEntry={true}
                                    autoCorrect={false}
                                    autoCapitalize= "none"

                                >
                                </Input>
                            </Item>
                        </Form>
                            <View style={styles.buttons}>
                            <TouchableOpacity style={styles.buttonInvite}>
                                <Text style={styles.label}>Envoyer</Text>
                            </TouchableOpacity>
                            </View>



=======
            <View style={styles.mainContainer}>
                <Text style={styles.headerLabel}>Nous Contacter</Text>

                <View>
>>>>>>> Stashed changes

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
        padding:10,
        backgroundColor: '#ff9f44',
    },


    headerLabel: {
        fontSize: 35,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4267B2',
    },

    label: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF',
    },

    buttonInvite: {
        width: 200,
        height: 70,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 5,
    },

    buttons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

});