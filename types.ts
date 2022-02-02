import {Theme} from '@react-navigation/native';
import styled from 'styled-components/native';

const NormalText = styled.Text<{theme: Theme}>`
  color: ${({theme}) => theme.colors.text};
  font-size: 16px;
`;

const BoldText = styled.Text<{theme: Theme}>`
  color: ${({theme}) => theme.colors.text};
  font-size: 20px;
  font-weight: bold;
`;

const TitleText = styled.Text<{theme: Theme}>`
  color: ${({theme}) => theme.colors.text};
  font-size: 32px;
  font-weight: bold;
`;

export {NormalText, BoldText, TitleText};
