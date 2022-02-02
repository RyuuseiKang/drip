import React from 'react';
import {View} from 'react-native';

type SpacerProps = {
  height?: number;
  width?: number;
};

const Spacer: React.FC<SpacerProps> = ({width, height}) => {
  return <View style={{width, height}} />;
};

export default Spacer;
