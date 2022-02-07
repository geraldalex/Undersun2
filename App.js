import * as React from 'react';
import { View, StyleSheet, Button, Image, TouchableHighlight, Text, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function App() {
  const video = React.useRef(null);
  //const [status, setStatus] = React.useState(null);
  const [status1, setStatus1] = React.useState("3");






  function renderVideo(){
    return(
      <Video
      ref={video}
      style={styles.video}
      source={require('./assets/video/video.mp4')}
      useNativeControls
      resizeMode="cover"
      isLooping={true}
      shouldPlay={true}
     // onPlaybackStatusUpdate={status => setStatus(() => status)}
    />
    )
  }


  function renderList(){
    return(
 <View style={{flex:1, backgroundColor:'red'}}>
   
 </View>
    )
  }

  function renderPogoda(){
    return(
 <View style={{flex:1, backgroundColor:'green'}}>
   
 </View>
    )
  }


  function renderAll(){
   
   if(status1 === "1"){
return renderVideo()
   }else if (status1 === "2"){
     return renderList()
   }else{
     return renderPogoda()
   }
    
     }
  return (
    <View style={styles.container}>

    
   {renderAll()}
      <View style={styles.images}>
       <TouchableHighlight onPress={()=>setStatus1("1")}>
        <Image
       source={require('./assets/png/video.png')}
         style={{
           width:50,
           height:50,
           tintColor: status1 ==='1'?'white': 'gray'
           
         }}
      
        />
       </TouchableHighlight>

       <TouchableHighlight onPress={()=>setStatus1("2") }>
           <Image
       source={require('./assets/png/list.png')}
         style={{
           width:50,
           height:50,
           tintColor: status1 ==='2'?'white': 'gray'
           
         }}
       
        
        
        />

</TouchableHighlight>

<TouchableHighlight onPress={()=>setStatus1("3") }>
           <Image
       source={require('./assets/png/pogoda.png')}
         style={{
           width:50,
           height:50,
           tintColor: status1 ==='3'?'white': 'gray'
           
         }}
         
        />

</TouchableHighlight>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  video: {
    alignSelf: 'center',
    width: "100%",
    height:"100%",
  
  },
  images: {
    position:'absolute',
    bottom:10,
    flexDirection:'row',
    justifyContent:'space-around',
    marginHorizontal:'10%',
    alignSelf:'center'
       
   

   
   
  },
});