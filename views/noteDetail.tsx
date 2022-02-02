import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {BoldText, NormalText, TitleText} from '../types';
import {ScreenParamList} from '../AppRouter';
import {SharedElement} from 'react-navigation-shared-element';
import ParallaxHeader from '@fabfit/react-native-parallax-header';

import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import useTheme from '../hooks/ui/useTheme';
import {Themes} from '../styles';
import Spacer from '../components/spacer';

const Container = styled.View`
  flex: 1;
`;

const BackButtonContainer = styled.TouchableOpacity<{theme: Themes}>`
  padding: 15px;
`;

const BackButton = styled(FontAwesomeIcon)<{theme: Themes}>`
  shadow-color: ${({theme}) => theme.colors.BLACK};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`;

const ContentContainer = styled.View`
  padding-horizontal: 20px;
`;

const ContentTitleContainer = styled.View`
  padding-vertical: 20px;
`;

const LocationContainer = styled.View`
  flex-direction: row;
  padding-top: 5px;
`;

const BrewingContainer = styled.View``;

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
              <BackButton icon={faArrowLeft} color={theme.colors.WHITE} />
            </BackButtonContainer>
          </SafeAreaView>
        )}>
        <ContentContainer>
          <ContentTitleContainer>
            <BoldText>{title}</BoldText>
            <LocationContainer>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <Spacer width={5} />
              <NormalText>{location}</NormalText>
            </LocationContainer>
          </ContentTitleContainer>

          <BrewingContainer>
            <BrewingDescriptor />
          </BrewingContainer>

          <BoldText>노트</BoldText>
          <NormalText>대충 여기서부터 주저리주저리</NormalText>
        </ContentContainer>
      </ParallaxHeader>
    </Container>
  );
};

export default NoteDetail;
