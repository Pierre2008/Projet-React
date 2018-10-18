import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {devJsonData} from '../assets/Data/devQuizData';


export default class ClassicScreen extends React.Component {

   /* constructor(props) {
        super(props);
        this.questionNumber = 0;
        score : 0;

        const devJsonData = data.games.quiz1;
        dataArray = Object.keys(devJsonData).map(function (keys) {
            return devJsonData[keys]
        });
        this.state = {
            question: dataArray[this.questionNumber].question,
            questionNumber: dataArray[this.questionNumber].questionNumber,
            options: dataArray[this.questionNumber].options,
            correctoption: dataArray[this.questionNumber].correctoption,
            countCheck: 0
        }
        console.log(dataArray);
    }*/


   /* _nextQuestion() {
        if (this.questionNumber < dataArray.length - 1) {
            this.questionNumber++;
            this.setState({
                countCheck: 0,
                question: dataArray[this.questionNumber].question,
                options: dataArray[this.questionNumber].options,
                correctoption: dataArray[this.questionNumber].correctoption,
                questionNumber: dataArray[this.questionNumber].questionNumber
            });
        } else {
            this.props._scoreMessage(this.score);
        }
    }*/

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
                        <Text>{}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.answersButtons}>
                        <Text>{}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.goodAnswerContainer}>
                    <Text style={styles.goodAnswerText}>{}</Text>
                </View>

                <View style={{flex: 1}}>
                    <TouchableOpacity
                        style={styles.buttonNext}
                        onPress={() => this.next()}>
                        <Text>Suivant</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
<<<<<<< Updated upstream
      flex: 1,
      backgroundColor: '#ff9f44',
      alignItems: 'center',
=======
        flex: 1,
        backgroundColor: '#FFCC66',
        alignItems: 'center',
>>>>>>> Stashed changes
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
        width: 90,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
});    