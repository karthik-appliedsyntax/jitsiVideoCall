import React from 'react';
import { View, Text, StyleSheet,  Image, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native'
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';


export default class MainScreen extends React.Component{

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onPressButton = () =>  {
    if (this.state.text.length > 0) {
        this.props.navigation.navigate('video',{
          roomname:this.state.text
      });
    }else{
      alert("Please enter room name")
    }
  }

  /** Logout Function which clears all Asynchronus id and navigates to Login Screen */
  logout = () => {
    // Alert.alert(
    //   '',
    //   'Are you sure you want to logout?',
    //   [
    //       {
    //       text: 'No',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'cancel',
    //       },
    //       {text: 'Yes', onPress: () => {
    //                       console.log('OK Pressed')
    //                       AsyncStorage.clear().then(() => 
    //                         console.log('Cleared'), 
    //                         this.props.navigation.navigate('signinscreen')) 
    //                     }
    //       },
    //   ],
    //   {cancelable: false},
    // );
  }

  render(){
        return(
            <View style = {styles.container}>
              <View style = {styles.topbar}>
                {/* <Image style= {styles.imageBackground}
                  source={require('../assets/logo.png')} resizeMode = 'contain'>
                </Image> */}
                <TouchableOpacity style={{marginTop:6}} >
                  <Text style={{margin: 10, backgroundColor: '#f9aa2e',paddingHorizontal:16,paddingVertical:8, borderRadius: 12, fontWeight: 'bold', fontSize: 14, justifyContent: 'center'}} activeOpacity={.7} onPress={this.logout}>Logout</Text>
                </TouchableOpacity>
              </View>

              <View style = {styles.mainscreen}>
                <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={styles.textstyle}>Secure, fully featured, video conferencing</Text>
                </View>
                <View style = {{flex:9.5,alignItems:'center',justifyContent:'center'}}>
                  <Text style={styles.textstyle}>Start/Join a meeting</Text>
                  <TextInput
                      style={styles.input}
                      placeholder="Enter room name"
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                  />
                <TouchableOpacity onPress={this._onPressButton}>
                  <View style={styles.button}>
                      <Text style={styles.buttonText}>Go</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <StatusBar backgroundColor="#FAA61A" barStyle="light-content" />   
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2'
  },
  topbar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#fef9ef",
    padding:12,
    justifyContent: 'space-between'
  },
  mainscreen: {
    flex: 9,
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    marginTop: 15,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#FAA61A',
    borderRadius:6
  },
  buttonText: {
    textAlign: 'center',
    padding: 15,
    color:'#4d4d4d',
    fontWeight:'bold'
  },
  input: {
    height: 40,
    padding: 3,
    marginRight: 5, 
    fontSize: 18, 
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderRadius: 1,
    color: '#000',
  },
})