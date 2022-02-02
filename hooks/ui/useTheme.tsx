import React, {useState, useEffect} from 'react';
import {Appearance, PixelRatio} from 'react-native';
import {Theme} from '@react-navigation/native';
import {DarkTheme, LightTheme, Themes} from '../../styles';

const useTheme = <T extends Theme | Themes>(): T => {
  const [theme, setTheme] = useState<Theme | Themes>({
    ...DarkTheme,
    dark: true,
  });
  const [mode, setMode] = useState<string>(
    Appearance.getColorScheme() || 'dark',
  );

  useEffect(() => {
    setTheme(
      mode === 'dark'
        ? {...DarkTheme, dark: true}
        : {...LightTheme, dark: false},
    );
  }, [mode]);

  useEffect(() => {
    const updateMode = () => {
      const currentMode = Appearance.getColorScheme();
      setMode(currentMode === 'dark' ? 'dark' : 'light');
    };

    Appearance.addChangeListener(updateMode);
  }, []);

  return theme as T;
};

export default useTheme;
