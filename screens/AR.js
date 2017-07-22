import React, { Component } from 'react';
import { View } from 'react-native';
import ARKit from 'react-native-arkit';

 class ARView extends Component {
  componentDidMount() {
    // add a 3D box into the scene (unit in meter)
    this.arkit.addText({x: 0.0, y:0.0,z: -70.0, text: "This Guy!", extrusionDepth: 2.5})
    this.arkit.addBox({ x: 0, y: 0, z: 10, width: 0.1, height: 0.1, length: 0.1 });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ARKit
          ref={arkit => this.arkit = arkit}
          style={{ flex: 1 }}
          debug // debug mode will show feature points detected and 3D axis
          planeDetection // turn on plane detection
          lightEstimation // turn on light estimation
        />
      </View>
    );
  }
}
// AppRegistry.registerComponent('MyFirstARKitApp', () => App);

export default ARView;
