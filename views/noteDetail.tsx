import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {TitleText} from '../types';
import {ScreenParamList} from '../AppRouter';

export interface NoteDetailProps {
  id: number;
  title: string;
  image: string;
  location: string;
}

const NoteDetail: React.FC = () => {
  const {id} = useRoute<RouteProp<ScreenParamList, 'NoteDetail'>>().params;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {};

  return (
    <SafeAreaView>
      <View>
        <TitleText>{id.toString()}</TitleText>
      </View>
    </SafeAreaView>
  );
};
export default NoteDetail;
