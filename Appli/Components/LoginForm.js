import React from 'react';
import * as firebase from 'firebase';
import {StyleSheet, Text, Image} from 'react-native';
import {Container, Form, Input, Item, Button, Label,} from 'native-base';


// Initialize Firebase
export var firebaseConfig = {
    apiKey: "AIzaSyAgkujfeaXkfpVMvigcjxcXNuS-E6XtK9A",
    authDomain: "web-infos-quiz.firebaseapp.com",
    databaseURL: "https://web-infos-quiz.firebaseio.com",
    projectId: "web-infos-quiz",
    storageBucket: "web-infos-quiz.appspot.com",
};

firebase.initializeApp(firebaseConfig);


export default class LoginForm extends React.Component {

<<<<<<< Updated upstream
    constructor(props){
        super(props);
=======
    constructor(props) {
        super(props)
>>>>>>> Stashed changes

        this.state = ({
            email: '',
            password: ''
        })
    }

    signUpUser = (email, password) => {

        try {
            if (this.state.password.length < 6) {
                alert('Veuillez entrez un mot de passe de minimum 6 caractères.');
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email, password).then(firebase.auth().onAuthStateChanged((user) => {
                if (user != null) {
                    this.props.navigation.navigate("ProfileScreen");
                }
            }))

        }

        catch (error) {
            console.log(error.toString());
        }
<<<<<<< Updated upstream
        
    };
=======

    }
>>>>>>> Stashed changes

    signInUser = (email, password) => {
        try {

            firebase.auth().signInWithEmailAndPassword(email, password).then(firebase.auth().onAuthStateChanged((user) => {
                if (user != null) {
                    var email = user.email;
                    var uid = user.uid;
                    var providerData = user.providerData;
                    this.props.navigation.navigate("ProfileScreen");
                }
                console.log(email);
            }))
        }
        catch (error) {
            console.log(error.toString());
        }
<<<<<<< Updated upstream
    
    };
=======

    }
>>>>>>> Stashed changes

    render() {
        return (
            <Container style={styles.container}>
                <Image
                    style={{justifyContent: 'center',}}
                    source={require('../assets/Images/logo.png')}
                />
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
<<<<<<< Updated upstream
                        autoCorrect={false}
                        autoCapitalize= "none"
                        onChangeText= {(email) => this.setState({email})}
=======
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(email) => this.setState({email})}
>>>>>>> Stashed changes
                        >
                        </Input>
                    </Item>

                    <Item floatingLabel>
                        <Label>Mot de passe</Label>
                        <Input
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(password) => this.setState({password})}
                        >
                        </Input>
                    </Item>

                    <Button
                        style={{marginTop: 20}}
                        full
                        rounded
                        success
                        onPress={() => this.signInUser(this.state.email, this.state.password)}
                    >
                        <Text>Connexion</Text>
                    </Button>

                    <Button
                        style={{marginTop: 20}}
                        full
                        rounded
                        primary
                        onPress={() => this.signUpUser(this.state.email, this.state.password)}
                    >
                        <Text>Inscription</Text>
                    </Button>
                </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ff9f44',
    },


});