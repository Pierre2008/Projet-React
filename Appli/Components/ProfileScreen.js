import React from 'react';
import { StyleSheet, Text, View, Image, Button, StatusBar, ScrollView, Dimensions } from 'react-native';


export default class ProfilScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center'  }}>
                <Button
                    title="Classique"
                    onPress={() => this.props.navigation.navigate('ClassicQuiz')}
                    />
                <Button
                    title="Competitive"
                    onPress={() => this.props.navigation.navigate('CompetQuiz')}
                    />
        </View>
    );
    }
}