import React from 'react';
import {View, SafeAreaView, FlatList, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {BlurView} from '@react-native-community/blur';

import {t} from 'i18next';

import {Themes} from '../styles';
import {TitleText} from '../types';
import CardItem, {CardItemProps} from '../components/cardItem';

const Container = styled.View<{theme: Themes}>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

const MainView = styled.View<{theme: Themes}>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

const ContentContainer = styled.View<{theme: Themes}>`
  flex: 1;
  z-index: 2;
`;

const TitleContainer = styled.View<{theme: Themes}>`
  width: 100%;
  position: absolute;
  z-index: 3;
`;

const Title = styled(TitleText)<{theme: Themes}>`
  padding-horizontal: 20px;
  padding-vertical: 10px;
`;

const DATA: Array<CardItemProps> = [
  {
    id: 1,
    title: '따뜻한 라떼',
    image: 'https://ryu.sh/static/media/coffee.c20a88e9.jpg',
    location: '서울시 중구',
  },
  {
    id: 2,
    title: '아이스 라떼',
    image:
      'http://cdn.shopify.com/s/files/1/0033/9148/8089/articles/Untitled_design_11_99dea719-d2ce-44ec-ba47-1031b2a03158.png?v=1596462951',
    location: '서울시 마포구',
  },
  {
    id: 3,
    title: '르완다 쇼리',
    image: 'https://pbs.twimg.com/media/FJcB2MPaUAIv_sh?format=jpg',
    location: '서울시 강남구',
  },
  {
    id: 4,
    title: '카푸치노',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Italian_breakfast_cappucino%2C_Esino_Lario.jpg/800px-Italian_breakfast_cappucino%2C_Esino_Lario.jpg',
    location: '서울시 서초구',
  },
  {
    id: 5,
    title: '따뜻한 라떼',
    image: 'https://ryu.sh/static/media/coffee.c20a88e9.jpg',
    location: '서울시 중구',
  },
  {
    id: 6,
    title: '아이스 라떼',
    image:
      'http://cdn.shopify.com/s/files/1/0033/9148/8089/articles/Untitled_design_11_99dea719-d2ce-44ec-ba47-1031b2a03158.png?v=1596462951',
    location: '서울시 마포구',
  },
  {
    id: 7,
    title: '르완다 쇼리',
    image: 'https://pbs.twimg.com/media/FJcB2MPaUAIv_sh?format=jpg',
    location: '서울시 강남구',
  },
  {
    id: 8,
    title: '카푸치노',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Italian_breakfast_cappucino%2C_Esino_Lario.jpg/800px-Italian_breakfast_cappucino%2C_Esino_Lario.jpg',
    location: '서울시 서초구',
  },
  {
    id: 9,
    title: '따뜻한 라떼',
    image: 'https://ryu.sh/static/media/coffee.c20a88e9.jpg',
    location: '서울시 중구',
  },
  {
    id: 10,
    title: '아이스 라떼',
    image:
      'http://cdn.shopify.com/s/files/1/0033/9148/8089/articles/Untitled_design_11_99dea719-d2ce-44ec-ba47-1031b2a03158.png?v=1596462951',
    location: '서울시 마포구',
  },
  {
    id: 11,
    title: '르완다 쇼리',
    image: 'https://pbs.twimg.com/media/FJcB2MPaUAIv_sh?format=jpg',
    location: '서울시 강남구',
  },
  {
    id: 12,
    title: '카푸치노',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Italian_breakfast_cappucino%2C_Esino_Lario.jpg/800px-Italian_breakfast_cappucino%2C_Esino_Lario.jpg',
    location: '서울시 서초구',
  },
];

const getNumColumnsByWidth = () => {
  return Math.floor(Dimensions.get('window').width / 160);
};

const Main: React.FC = () => {
  return (
    <Container>
      <MainView>
        <ContentContainer>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={DATA}
            renderItem={({item}: {item: CardItemProps}) => (
              <CardItem
                id={item.id}
                title={item.title}
                image={item.image}
                location={item.location}
              />
            )}
            contentContainerStyle={{
              paddingTop: 40,
              paddingLeft: 5,
              paddingRight: 5,
            }}
            contentInset={{top: 55, bottom: 25}}
            contentOffset={{x: 0, y: -55}}
            numColumns={getNumColumnsByWidth()}></FlatList>
        </ContentContainer>
        <TitleContainer>
          <BlurView blurType="regular">
            <SafeAreaView />
            <Title>{t('노트')}</Title>
          </BlurView>
        </TitleContainer>
      </MainView>
    </Container>
  );
};
export default Main;
