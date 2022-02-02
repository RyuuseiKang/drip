import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainView from './views/main';
import NoteDetailView from './views/noteDetail';

const MainStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

export type ScreenParamList = {
  Main: undefined;
  NoteDetail: {id: number};
};

const Main: React.FC = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Main"
        component={MainView}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="NoteDetail"
        component={NoteDetailView}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};

const AppRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Main">
        <RootStack.Screen
          name="MainStack"
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
