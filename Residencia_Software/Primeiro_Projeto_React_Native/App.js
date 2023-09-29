/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Feed from './src/Telas/Feed';
import Direct from './src/Telas/Direct';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Feed">
        <Stack.Screen name="Home" component={Feed} />
        <Stack.Screen name="Direct" component={Direct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




// function App() {
//   return (
//     <SafeAreaView>
//       <Feed/>
//     </SafeAreaView>
//   );
// }

// export default App;
