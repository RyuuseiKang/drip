import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainView from './views/main';
import NoteDetailView, {NoteDetailProps} from './views/noteDetail';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Easing} from 'react-native';

const MainStack = createSharedElementStackNavigator<ScreenParamList>();
const RootStack = createNativeStackNavigator();

export type ScreenParamList = {
  Main: undefined;
  NoteDetail: NoteDetailProps;
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
          gestureEnabled: false,
          headerShown: true,
          detachPreviousScreen: false,
        }}
        sharedElements={(route, otherRoute, showing) => {
          const {id} = route.params;
          return [
            {
              id: `note.${id}.photo`,
            },
          ];
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
