import {designJsonData} from "../assets/Data/designQuizData";
import React from "react";
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";

export default class DesignQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            count: 0,
            response: false,
            score: 0,
        })
    }

    nextQuestion() {
        if (this.state.count === 4) {
            this.props.navigation.navigate('Resultat');

        }
        else {
            this.setState({
                count: this.state.count + 1,
                response: false,
            })
        }
    }

    scoring() {
        if (designJsonData.questions.response === this.state.response) {
            this.setState({
                score: this.state.score + 1,
            })
        }
        else if (designJsonData.questions.response !== this.state.response) {
            this.setState({
                score: this.state.score - 2,
            })
        }
        else {
            console.log('error');
        }
    }

    render() {
        console.log(this.state.score);
        return (
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.questionTitle}></Text>
                </View>

                <View style={styles.questionContainer}>
                    <Text>{designJsonData.questions[this.state.count].title}</Text>
                </View>
                <View style={styles.answersContainer}>
                    {designJsonData.questions[this.state.count].answer.map((el) => {
                        return (
                            <TouchableHighlight
                                style={[styles.answersButtons, {backgroundColor: (el.goodAnswer === true && this.state.response === true) ? "#006400" : "white"}]}
                                onPress={() => {
                                    this.setState({response: true});
                                    this.scoring()
                                }}
                                underlayColor={'white'}
                            >
                                <Text>{el.nom}</Text>
                            </TouchableHighlight>
                        )
                    })
                    }
                </View>

                <View style={{flex: 1}}>
                    <TouchableOpacity
                        onPress={() => this.nextQuestion()}>
                        <Text>Question Suivante</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
};

const
    styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: '#FFCC66',
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


        },
        buttonNext: {
            backgroundColor: '#4267B2',
            width: 90,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
        }
    });