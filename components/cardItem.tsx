import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Touchable, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

import {BoldText, NormalText, TitleText} from '../types';
import {SharedElement} from 'react-navigation-shared-element';
import useTheme from '../hooks/ui/useTheme';
import {Themes} from '../styles';
import Spacer from './spacer';

export interface CardItemProps {
  id: number;
  image: string;
  title: string;
  location: string;
}

const Container = styled.View`
  flex: 1;
  padding: 5px;
  height: 260px;
`;

const Background = styled.Image`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
  z-index: -1;
  height: 250px;
  width: 100%;
  position: absolute;
`;

const Description = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 10px;

  shadow-color: black;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.7;
  shadow-radius: 2px;
  elevation: 2;
`;

const Title = styled(BoldText)`
  color: white;
`;

const LocationContainer = styled.View`
  flex-direction: row;
  padding-top: 5px;
`;

const Location = styled(NormalText)`
  color: white;
`;

const CardItem: React.FC<CardItemProps> = ({id, title, image, location}) => {
  const navigation = useNavigation();
  const theme = useTheme<Themes>();

  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NoteDetail', {
            id: id,
            title: title,
            image: image,
            location: location,
          });
        }}
        style={{flex: 1}}
        activeOpacity={0.7}>
        <SharedElement id={`note.${id}.photo`}>
          <Background source={{uri: image}} />
        </SharedElement>
        <Description>
          <Title>{title}</Title>
          <LocationContainer>
            <FontAwesomeIcon icon={faMapMarkerAlt} color={theme.colors.WHITE} />
            <Spacer width={5} />
            <Location>{location}</Location>
          </LocationContainer>
        </Description>
      </TouchableOpacity>
    </Container>
  );
};

export default CardItem;
