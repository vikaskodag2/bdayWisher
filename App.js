import React from 'react';
import { Provider } from 'mobx-react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/homeScreen';
import Store from './src/stores/store';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
