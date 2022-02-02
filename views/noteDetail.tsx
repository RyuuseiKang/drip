import React, {useEffect} from 'react';
import {Image, ImageBackground, SafeAreaView, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {BoldText, NormalText, TitleText} from '../types';
import {ScreenParamList} from '../AppRouter';
import {SharedElement} from 'react-navigation-shared-element';
import styled from 'styled-components/native';

export interface NoteDetailProps {
  id: number;
  title: string;
  image: string;
  location: string;
}

const NoteDetail = () => {
  const {id, title, image, location} =
    useRoute<RouteProp<ScreenParamList, 'NoteDetail'>>().params;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {};

  return (
    <SafeAreaView>
      <SharedElement id={`note.${id}.photo`}>
        <Image
          source={{uri: image}}
          resizeMode="cover"
          style={{height: 300, width: '100%'}}
        />
      </SharedElement>
      <TitleText>{id.toString()}</TitleText>
    </SafeAreaView>
  );
};

export default NoteDetail;
