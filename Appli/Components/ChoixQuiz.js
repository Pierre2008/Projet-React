import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Button} from "react-native-elements";

export default class ChoixQuiz extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.buttonsPlay}
                        onPress={() => this.props.navigation.navigate('DevQuiz')}>
                        <Text style={styles.buttonsText}>Developpement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsPlay}
                                      onPress={() => this.props.navigation.navigate('DesignQuiz')}>
                        <Text style={styles.buttonsText}>Design</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsPlay}
                                      onPress={() => this.props.navigation.navigate('MarketingQuiz')}>
                        <Text style={styles.buttonsText}>Marketing</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Button
                        onPress={() => this.props.navigation.navigate('Contact')}
                        title="Contacter Staff"
                        color="#FFF"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCC66',
    },

    buttonsContainer: {
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    buttonsPlay: {
        width: 140,
        height: 100,
        backgroundColor: '#4267B2',
        alignItems: 'center',
        justifyContent: 'center',

    },

});
