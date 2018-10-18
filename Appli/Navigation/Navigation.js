import { createStackNavigator } from 'react-navigation'
import  ClassicQuiz from '../Components/ClassicQuiz'
import  ProlileScreen from '../Components/ProfileScreen'
import  HomeScreen from '../Components/HomeScreen'
import  LoginForm from '../Components/LoginForm'
import  ShopCate from '../Components/ShopCate'
import  Contact from '../Components/Contact'
import Condition from '../Components/Condition'
import FicheMet from "../Components/FicheMet";
import CoursLang from "../Components/CoursLang";



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


    CoursLang: {
        screen:CoursLang
    },

    ShopCate: {
        screen:ShopCate

    },

    FicheMet: {
        screen:FicheMet
    },

    Contact: {
        screen:Contact
    },

    Condition: {
        screen:Condition
    },

    LoginForm: {
        screen:LoginForm
    }
},



    {
        initialRouteName: "HomeScreen",
        navigationOptions: {
          headerStyle: {
            backgroundColor: '#ff8e40'
          },
          headerTintColor: "#FFF",
        }
      }
    );

export default Navigation