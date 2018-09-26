import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
                source={require('../assets/Images/logo.png')}
                style={{marginBottom: 30}}
            />
            <Text style={styles.label}>Découvre le domaine du Web en t'amusant</Text>
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonInvite}>
                <Text style={styles.label}>Invité</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonFacebook}>
                <Text style={styles.label}>Connexion avec Facebook</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFCC66',
  },

  header: {
    flex: 2, 
    alignItems: 'center',
    marginTop: 30,
  },

  buttons: {
    flex: 1,  
},

  buttonInvite: {
    height: 50,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    marginBottom: 30,
    borderRadius: 5,
  },

  buttonFacebook: {
    height: 50,
    backgroundColor: '#4267B2',
    borderRadius: 5
  },

  label: {
    fontSize: 16,
    fontWeight: 'normal',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF'
  },
});