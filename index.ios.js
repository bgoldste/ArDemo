
// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
// import ARKit from 'react-native-arkit';
// export default class App extends Component {
//   componentDidMount() {
//     // add a 3D box into the scene (unit in meter)
//     this.arkit.addBox({ x: 0, y: 0, z: 0, width: 0.1, height: 0.1, length: 0.1 });
//   }
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <ARKit
//           ref={arkit => this.arkit = arkit}
//           style={{ flex: 1 }}
//           debug // debug mode will show feature points detected and 3D axis
//           planeDetection // turn on plane detection
//           lightEstimation // turn on light estimation
//         />
//       </View>
//     );
//   }
// }
// AppRegistry.registerComponent('MyFirstARKitApp', () => App);


import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import registerScreens from './screens';

// screen related book keeping
registerScreens();

const tabs = [{
  label: 'Actions',
  screen: 'example.Actions',
  // icon: require('../img/swap.png'),
  title: 'Navigation Actions',
},
// {
//   label: 'Navigation',
//   screen: 'example.Types',
//   // icon: require('../img/list.png'),
//   title: 'Navigation Types',
// }, 
];



// this will start our app
Navigation.startTabBasedApp({
  tabs,
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  tabsStyle: {
    tabBarBackgroundColor: '#003a66',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  appStyle: {
    tabBarBackgroundColor: '#003a66',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  drawer: {
    left: {
      screen: 'example.Types.Drawer'
    }
  }
}); 