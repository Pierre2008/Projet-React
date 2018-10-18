<<<<<<< Updated upstream
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
=======
import {createStackNavigator} from 'react-navigation'
import ClassicQuiz from '../Components/ClassicQuiz'
import ChoixQuiz from '../Components/ChoixQuiz'
import ProlileScreen from '../Components/ProfileScreen'
import HomeScreen from '../Components/HomeScreen'
import LoginForm from '../Components/LoginForm'
import Shop from '../Components/Shop'
import Contact from '../Components/Contact'
import DevQuiz from '../Components/DevQuiz'
import MarketingQuiz from "../Components/MarketingQuiz";
import DesignQuiz from "../Components/DesignQuiz";
import Resultat from "../Components/Resultat";


const Navigation = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
>>>>>>> Stashed changes
        },

        ProfileScreen: {
            screen: ProlileScreen,
            navigationOptions: {
                title: 'Profil',
            },
        },

        ClassicQuiz: {
            screen: ClassicQuiz

<<<<<<< Updated upstream

    CoursLang: {
        screen:CoursLang
    },

    ShopCate: {
        screen:ShopCate

    },

    FicheMet: {
        screen:FicheMet
    },
=======
        },

        Shop: {
            screen: Shop
        },
>>>>>>> Stashed changes

        Contact: {
            screen: Contact
        },

<<<<<<< Updated upstream
    Condition: {
        screen:Condition
    },

    LoginForm: {
        screen:LoginForm
    }
},
=======
        LoginForm: {
            screen: LoginForm
        },
        DevQuiz: {
            screen: DevQuiz
        },
        MarketingQuiz: {
            screen: MarketingQuiz
        },
        DesignQuiz: {
            screen: DesignQuiz
        },
        ChoixQuiz: {
            screen: ChoixQuiz
        },
        Resultat: {
            screen: Resultat
        },
    },
>>>>>>> Stashed changes



    {
        initialRouteName: "HomeScreen",
        navigationOptions: {
<<<<<<< Updated upstream
          headerStyle: {
            backgroundColor: '#ff8e40'
          },
          headerTintColor: "#FFF",
=======
            headerStyle: {
                backgroundColor: '#FFCC66'
            },
            headerTintColor: "#FFF",
>>>>>>> Stashed changes
        }
    }
);

export default Navigation