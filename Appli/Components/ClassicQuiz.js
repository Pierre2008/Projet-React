import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { data } from '../assets/Data/quizData';

let newArray = [];

export default class ClassicScreen extends React.Component {

    constructor(props) {
        super(props);
        this.questionNumber = 0;
        quizFinish : false;
        score: 0;

    const jsonData = data.games.quiz1;
    newArray = Object.keys(jsonData).map( function(k) { return jsonData[k] });
    this.state = {
        question : newArray[this.questionNumber].question,
        questionNumber : newArray[this.questionNumber].questionNumber,
        options : newArray[this.questionNumber].options,
        correctoption : newArray[this.questionNumber].correctoption,
        countCheck : 0
        }
    }


    _quizFinish(score) {
        this.setState({ quizFinish: true, score : score });
      }
    
      next(){
        if(this.questionNumber < newArray.length-1) {
          this.questionNumber++;
          this.setState({ countCheck: 0, question: newArray[this.questionNumber].question, options: newArray[this.questionNumber].options, correctoption : newArray[this.questionNumber].correctoption, questionNumber : newArray[this.questionNumber].questionNumber});
        } else {
          this.props.quizFinish(this.score);
        }
      }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.questionTitle}>{this.state.questionNumber}</Text>
                </View>

                <View style={styles.questionContainer}>
                    <Text>{this.state.question}</Text>
                </View>
                <View style={styles.answersContainer}>
                    <TouchableOpacity style={styles.answersButtons}>
                        <Text>{this.state.option1}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.answersButtons}> 
                        <Text>{this.state.option2}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.answersButtons}> 
                        <Text>{this.state.option3}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.answersButtons}>                    
                        <Text>{this.state.option4}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.goodAnswerContainer}>
                    <Text style={styles.goodAnswerText}>{this.state.correctoption}</Text>
                </View>

                <View style= {{flex: 1}}>
                    <TouchableOpacity onPress={() => this.next()} style={{backgroundColor: '#4267B2'}}>
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
    }    
});    