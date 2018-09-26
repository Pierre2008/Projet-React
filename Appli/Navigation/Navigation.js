import { createStackNavigator } from 'react-navigation'
import  ClassicQuiz from '../Components/ClassicQuiz'
import  CompetQuiz from '../Components/CompetQuiz'
import  ProlileScreen from '../Components/ProfileScreen'


 const Navigation = createStackNavigator(
    {

    Profile:{
        screen: ProlileScreen 
},

    ClassicQuiz: {
        screen:ClassicQuiz

},

    CompetQuiz: {
        screen:CompetQuiz }
})

export default Navigation