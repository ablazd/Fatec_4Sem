import React, {Component} from 'react';
import { Image, Text, View } from 'react-native';
import imagem from './assets/gatinho.png';
import imagem2 from './assets/gatinho2.png';
 
class App extends Component{
  render(){
 
    let nome ='Tyler';
 
    return(
    <View>
      <Text> Homenagem </Text>
      <Text> Gatinho </Text>
      <Text style={{color:'#ff0000', fontSize:25,margin:15}}>GATOS
      </Text>
      <Image source={imagem} style={{width:300, height:300}} />
      <text>{nome}</text>
      <Image source={imagem2} style={{width:300, height:300}} />
      <text>{nome}</text>
    </View>
  )}
}
export default App;