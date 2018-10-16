import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class ClassicScreen extends React.Component {


      render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.questionTitle}>{}</Text>
                </View>

                <View style={styles.questionContainer}>
                    <Text>{}</Text>
                </View>
                <View style={styles.answersContainer}>
                    <TouchableOpacity style={styles.answersButtons}>
                        <Text>{}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.answersButtons}> 
                        <Text>{}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.answersButtons}> 
                        <Text></Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.answersButtons}>                    
                        <Text>{}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.goodAnswerContainer}>
                    <Text style={styles.goodAnswerText}>{}</Text>
                </View>

                <View style= {{flex: 1}}>
                    <TouchableOpacity 
                    style={styles.buttonNext}
                    >
                        <Text>Suivant</Text>
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
        flex: 1,
        height: 100,
        marginTop: 50,
        width: 300,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },

    answersContainer: {
        flex: 2,
        marginTop: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    answersButtons: {
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#FFF'
        
    },

    goodAnswerContainer: {
        flex: 1,
    },
    
    goodAnswerText: {    
        fontSize: 20,
        fontWeight: 'bold',
    },

    buttonNext: {
        backgroundColor: '#4267B2', 
        width:90,
        height:40, 
        alignItems: 'center', 
        justifyContent: 'center',
    }
});    