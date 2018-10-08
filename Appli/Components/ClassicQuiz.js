import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ScrollView, Dimensions } from 'react-native';


export default class ClassicScreen extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.questionTitle}>Question n°5</Text>
                </View>

                <View style={styles.questionContainer}>
                    <Text>Web</Text>
                    <Text>Que signifie le sigle WWW ?</Text>
                </View>
                <View style={styles.answersContainer}>
                    <TouchableOpacity style={styles.answersButtons}>
                        <Text>World Wide Web</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.answersButtons}> 
                        <Text>Wild Wide Web</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.answersButtons}> 
                        <Text>World Wildlife Web</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.answersButtons}>                    
                        <Text>Ché pô</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.goodAnswerContainer}>
                    <Text>Le sigle WWW signifie World Wide Web, ou littéralement la « toile (d'araignée) mondiale</Text>
                </View>

                <View>
                    <TouchableOpacity style={{backgroundColor: '#4267B2'}}>
                        <Text style={styles.goodAnswerText}>Suivant</Text>
                    </TouchableOpacity>
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

    titleContainer: {
        alignItems: 'center',
        marginTop: 30,
    },

    questionTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#4267B2',
    },

    questionContainer: {
        height: 100,
        marginTop: 50,
        width: 300,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },

    answersContainer: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    answersButtons: {
        width: 300,
        height: 50,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
        
        
    },

    goodAnswerContainer: {
        flex: 1,
    },
    
    goodAnswerText: {    
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    }    
});    