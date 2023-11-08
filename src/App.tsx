// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Context from './utils/Context';
import CourseList from './screens/CourseList';
import CourseDetail from './screens/CourseDetail';
import StudentDashboard from './screens/StudentDashboard';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Context>
      <Stack.Navigator initialRouteName='CourseList'>
        <Stack.Screen name="CourseList" component={CourseList} options={({navigation})=>({headerRight:()=>(
          <TouchableOpacity onPress={()=>navigation.navigate('StudentDashboard')}>
            <Text>Dashboard</Text>
          </TouchableOpacity>
        )}
        )}/>
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboard} options={{headerShown:false}}/>
      </Stack.Navigator>
    </Context>
    </NavigationContainer>
  );
}

export default App;