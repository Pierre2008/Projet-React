import { createStackNavigator } from 'react-navigation'
import  ClassicQuiz from '../Components/ClassicQuiz'
import  CompetQuiz from '../Components/CompetQuiz'
import  ProlileScreen from '../Components/ProfileScreen'
import  HomeScreen from '../Components/HomeScreen'
import  LoginForm from '../Components/LoginForm'
import  Shop from '../Components/Shop'
import  Contact from '../Components/Contact'


 const Navigation = createStackNavigator(
{
    HomeScreen: {
        screen: HomeScreen, 
    },
    
    ProfileScreen:{
        screen: ProlileScreen,
        navigationOptions: {
            title: 'Profil',
        },
    },

    ClassicQuiz: {
        screen:ClassicQuiz

    },

    CompetQuiz: {
        screen:CompetQuiz 
    },

    Shop: {
        screen:Shop
    },

    Contact: {
        screen:Contact
    },

    LoginForm: {
        screen:LoginForm
    }
},

    {
        initialRouteName: "HomeScreen",
        navigationOptions: {
          headerStyle: {
            backgroundColor: '#FFCC66'
          },
          headerTintColor: "#FFF",
        }
      }
    );

export default Navigation