import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// import SplashScreen from './screens/SplashScreen';
import VideoCall from './screens/VideoCall';
// import MainScreen from './screens/MainScreen';
// import SigninScreen from './screens/SigninScreen'

export default class App extends React.Component{
  render(){
    return <AppContainer />
  }
};


const MainStack = createStackNavigator({
  // mainscreen: {
  //   screen: MainScreen,
  //   navigationOptions: {
  //    header:null
  //   }
  // },
  video: {
    screen: VideoCall,
    navigationOptions: {
     header:null
    }
  }
});

// const AuthStack = createStackNavigator({
//   signinscreen: {
//     screen: SigninScreen,
//     navigationOptions: {
//       header: null
//     }
//   }
// })

const InitialNavigator = createSwitchNavigator({
  // Splash: SplashScreen,
  // Authentication: AuthStack,
  Main : MainStack
});

const AppContainer = createAppContainer(InitialNavigator);