import React from 'react';
import {View} from 'react-native';

type BrewingDescriptorProps = {
  method: string;
  region: string;
  temperature: number;
  time: number;
};

const BrewingDescriptor: React.FC<BrewingDescriptorProps> = ({
  method,
  region,
  temperature,
  time,
}) => {
  return (
    <View>
      <View></View>
    </View>
  );
};

export default BrewingDescriptor;
