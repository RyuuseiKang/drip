import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {BoldText, NormalText, TitleText} from '../types';
import {ScreenParamList} from '../AppRouter';
import {SharedElement} from 'react-navigation-shared-element';
import ParallaxHeader from '@fabfit/react-native-parallax-header';

import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import useTheme from '../hooks/ui/useTheme';
import {Themes} from '../styles';

const Container = styled.View`
  flex: 1;
`;

const BackButtonContainer = styled.TouchableOpacity<{theme: Themes}>`
  padding: 10px;

  shadow-color: ${({theme}) => theme.colors.shadow};
`;

export interface NoteDetailProps {
  id: number;
  title: string;
  image: string;
  location: string;
}

const NoteDetail = () => {
  const {id, title, image, location} =
    useRoute<RouteProp<ScreenParamList, 'NoteDetail'>>().params;
  const navigation = useNavigation();
  const theme = useTheme<Themes>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {};

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ParallaxHeader
        maxHeight={300}
        minHeight={100}
        renderHeader={() => (
          <SharedElement id={`note.${id}.photo`}>
            <Image
              source={{uri: image}}
              resizeMode="cover"
              style={{height: 300, width: '100%'}}
            />
          </SharedElement>
        )}
        renderOverlay={() => (
          <SafeAreaView>
            <BackButtonContainer
              onPress={() => {
                navigation.goBack();
              }}>
              <FontAwesomeIcon icon={faArrowLeft} color={theme.colors.WHITE} />
            </BackButtonContainer>
          </SafeAreaView>
        )}>
        <ScrollView
          style={{flex: 1, height: 1000, backgroundColor: '#FF2200'}}
          bounces={false}>
          <TitleText>{title}</TitleText>
          <TitleText>{title}</TitleText>
          <TitleText>{title}</TitleText>
          <TitleText>{title}</TitleText>
          <TitleText>{title}</TitleText>
          <TitleText>{title}</TitleText>
        </ScrollView>
      </ParallaxHeader>
    </Container>
  );
};

export default NoteDetail;
