import {devJsonData} from "../assets/Data/devQuizData";
import React from "react";
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, Modal} from "react-native";

export default class DevQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            count: 0,
            response: false,
            score: 0,
            questionNumber: 0,
            visible: false,
            disable: false,
        })
    }

    _nextQuestion = () => {
        this._scoring();
        if (this.state.count === 4) {
            this.setState({visible: true})

        }
        else {
            console.log(this.state.questionNumber, 'next');
            this.setState({
                count: this.state.count + 1,
                response: false,
                questionNumber: false,
                disable: false,
                enable: false,
                visible: false,
            })
        }
    };

    _scoring = () => {
        if (this.state.questionNumber === true) {
            this.setState({
                score: this.state.score + 1,
            })
        }
        else {
            return(null)
        }
    };

    render() {
        console.log(this.state.score);
        return (
            <View style={styles.mainContainer}>
                <View style={styles.questionContainer}>
                    <Text>{devJsonData.questions[this.state.count].title}</Text>
                </View>
                <View style={styles.answersContainer}>
                    {devJsonData.questions[this.state.count].answer.map((el) => {
                        return (
                            <TouchableHighlight
                                style={[styles.answersButtons, {backgroundColor: (el.goodAnswer === true && this.state.response === true) ? "#006400" : "white"}]}
                                onPress={() => {
                                    this.setState({
                                        questionNumber: el.goodAnswer,
                                        response: true,
                                        disable: true,
                                        enable: true,
                                        visible: false
                                    });

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
                        onPress={() => this._nextQuestion()}>
                        <Text>Question Suivante</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.visible}
                >
                    <View style={styles.ModalScore}>
                        <Text>Votre score est de {this.state.score} /5</Text>
                        <TouchableOpacity
                            style={styles.buttonNextGame}
                            onPress={() => {
                                this.props.navigation.navigate('ChoixQuiz');
                                this.setState({visible: false})
                            }}
                        >
                            <Text>Jouer à un autre quizz</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>


        );
    }
};
const styles = StyleSheet.create({
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
    },

    ModalScore: {
        flex: 1,
        backgroundColor: '#4267B2',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonNextGame: {
        backgroundColor: '#FFF',
        width: 90,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});