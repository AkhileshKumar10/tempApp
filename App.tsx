// import React from'react'
// import {
//   View,
//   Text,
//   SafeAreaView
// }from 'react-native'

// function App(){
// return{
//   <SafeAreaView>
//   <View>
//     <Text>
//       Hello World!</Text>
//   </View>
// </SafeAreaView>
// }
// }
// export default App;
// import React from 'react';
// import{BrowserRouter as Route, Route,Switch,Link}
// from 'react-router-dom';
// import HomePage from '/Homepage';
// import Otherpage from '/Otherpage';
// const App=()=>{
//   return {
//     <Router>
//     <Switch>
//     <Route exact path="/" 
//     component ={HomePage}/>
//     component={Otherpage}/>
//     </Switch>
//     </Router>
//   };
// };
// import {
//   View,
//   Text,
//   SafeAreaView
// } from 'react-native';

// function App() {
//   return (
//     <SafeAreaView>
//       <View style ={StyleSheet.container}>
//         <Text style ={StyleSheet.centredText}>Hello World!</Text>
       
//       </View>
//     </SafeAreaView>
//   );
// }
// const styles = stylesheet.create({
//   conatiner:{
//     flex:1,
//     justifyContent:'centre',
//     alignitems:'centre',
//   };
//   centred Text:{
//     textAlign:'centre',

//   }
//   });

// export default App;

import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.centeredText}>Hello World!</Text>
        <Text style={styles.centeredText}>1In react-native styles for example flex are from top to bottom by default.
2   Views are similar to div.
3 SafeAreaView: It is used to avoid the notch. Wrap the entire content in it.
4 In jsx, a starting tag needs to have an end tag.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
});

export default App;
