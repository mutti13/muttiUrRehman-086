

import * as React from 'react';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList,ActivityIndicator ,Image} from 'react-native';
import { useState, useEffect } from "react";
import { TouchableOpacity } from 'react-native-web';

export default function App() {
 

const [data, setData] = useState(null);

useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);
const [items, setItems] = useState([]);

useEffect(() => {
  localStorage.setItem('items', JSON.stringify(items));
}, [items]);
return (
<View style={{backgroundColor: "lightgrey" , width: "50%", margin:"auto"}}>
<FlatList


        numColumns={2}
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          
         <View style={styles.FL}> 
         <Text style={{color:'red', justifyContent:'right'}}>♡</Text>
        
         <Image style={{marginTop:18 ,height:100, width:80 , borderRadius:5, marginBottom:20 }}
         source={item.image} 
      />
      <Text  style={{color: 'black', fontSize: 14}}>{item.title}
              </Text>
        <Text style={{color: 'blue', fontSize: 13 , fontWeight:'bold'}}>$ {item.price} 
       
        {/* <Image source={{url:{item.image}}} />
         */}
              </Text>
              <TouchableOpacity>
              <Text style={{fontWeight:100}}>BUY NOW</Text>
              </TouchableOpacity>
              {/* <Image
        style={styles.logo}
        source={{
          uri: 
      /> */}
              
              </View>
          
        )}
      />
      
</View>
  // <>
  //   {data &&
  //     data.map((item) => {
  //       return <Text key={item.id}>{item.title}</Text>;
  //     })}
  // </>
);
};

const styles = StyleSheet.create({
  container: {
    paddingTop:7,
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  FL :{
    paddingTop:10,
    alignItems: 'center',
    margin:'auto',
    marginTop:6,
    
    // paddingLeft: 1,
    backgroundColor:'white',
    width :180,
    borderRadius: 6,
  }
});
