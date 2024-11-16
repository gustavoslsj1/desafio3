import {  StyleSheet, Text,View, Dimensions, TextInput } from 'react-native';
import { Mic, Image, Bot,UserRound,AudioLines } from 'lucide-react-native';
const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return(
    <View style={[styles.main ,{width,height}]}>
      <View style={styles.container}>
          <Text style={styles.text}>Chat Bot</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.body1}>
        <Bot size={25} color="gray"/>
        <Text style={styles.chat}>Bom dia, como posso lhe ajuda ?</Text>
        </View >
        <View style={styles.body2}>
          <UserRound size={25} color="gray"/>
          <View style={styles.audiotext}>
          <AudioLines size={70} color='white'/>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
          <TextInput style={styles.input} placeholder='Digite aqui' placeholderTextColor="gray">
            
          </TextInput>
          <Mic size={25} color="black" style={styles.mic}/>
            <Image  size={25} color="black" style={styles.image}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   top:"10%",
    width: "90%",
    display:"flex",
    height:"7%",
    justifyContent: "center",
    alignItems:"center",
    borderWidth:1,
    borderColor:'gray',
    borderRadius:50
  },
  main: {
    display:"flex",
    justifyContent: "space-between",
    alignItems:"center",
     width: "100%",
    
  },
  text: {
    color:"white",
    fontWeight:"bold",
    fontSize:30
  },
  body:{
    display:"flex",
    width:"90%",
    height:"70%"
  },
  body1:{
    display:"flex",
    
    height:"10%",
    flexDirection:"row",
    width:"100%",
   
  },
  body2:{
    top:20,
    width:"100%",
    height:"10%",
    display:"flex",
    flexDirection:"row"
  },
  footer: {
    alignItems: 'center',
    position:"absolute",
    backgroundColor:"white",
    justifyContent:"center",
    width:"90%",
    height:"4%",
    borderRadius: 50,
    bottom: 0,
    left: 20,
    right: 0,
  },
  input: {
    
  },
  image: {
    position:"absolute",
    right:20
  },
  mic: {
    position:"absolute",
    right:70
  },
  chat:{
    width:"90%",
    marginBottom:40,
    left:20,
    paddingTop:25,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:20,
    borderColor:"gray",
    height:"100%",
    color:"white"
  },
  audiotext:{
    
    height:"100%",
    width:"30%",
    paddingLeft:20,
    left:20,
    borderRadius:20,
    borderWidth:1,
    borderColor:"gray"
  }
});
