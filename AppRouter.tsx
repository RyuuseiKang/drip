import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './views/main';

const RootStack = createStackNavigator();

const AppRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Main">
        <RootStack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
