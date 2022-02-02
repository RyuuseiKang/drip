import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Touchable, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {BoldText, NormalText, TitleText} from '../types';

export interface CardItemProps {
  id: number;
  image: string;
  title: string;
  location: string;
}

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const Background = styled.ImageBackground`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

const Title = styled(BoldText)`
  color: white;
  shadow-color: black;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.6;
  shadow-radius: 2px;
  elevation: 2;
`;

const Location = styled(NormalText)`
  color: white;
  shadow-color: black;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.7;
  shadow-radius: 2px;
  elevation: 2;
`;

const CardItem: React.FC<CardItemProps> = ({id, title, image, location}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NoteDetail', {
            id: id,
          });
        }}
        activeOpacity={0.7}>
        <Background source={{uri: image}} resizeMode="cover">
          <View style={{height: 150}} />
          <Title>{title}</Title>
          <Location>{location}</Location>
        </Background>
      </TouchableOpacity>
    </Container>
  );
};

export default CardItem;
