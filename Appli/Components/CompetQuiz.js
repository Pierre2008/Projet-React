import React from 'react';
import { StyleSheet, Text, View, Image, Button, StatusBar, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

export default class CompetScreen extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View>
                    <Text style={styles.questionTitle}>Question n°5</Text>
                </View>
                <Text>Mode Compétition</Text>
            </View>
        );
    
    }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#FFCC66',
    },

    questionTitle: {
        flex: 1,
        justifyContent: 'center',
        fontSize: 17,
    }
});  