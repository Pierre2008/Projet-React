import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { data } from './Components/quizData'


export default class ClassicScreen extends React.Component {

    constructor(props) {
        super(props);
        question: 0;

    const question = data.quiz.title.question;
    const ListQuestions = question.map((question)) => {
        return <Text
    }

      render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity>
                    <Text>Quiz Developpement</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Quiz Developpement</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Quiz Developpement</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFCC66',
    },
})

