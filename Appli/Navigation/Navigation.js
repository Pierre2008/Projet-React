import { createStackNavigator } from 'react-navigation'
import  ClassicQuiz from '../Components/ClassicQuiz'
import  CompetQuiz from '../Components/CompetQuiz'
import  ProlileScreen from '../Components/ProfileScreen'
import  HomeScreen from '../Components/HomeScreen'
import  LoginForm from '../Components/LoginForm'


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