import { Colors } from '@constants/theme';
import { ColorValue } from 'react-native';
import { ColorScheme } from './types';

interface WaveColors {
  orange: ColorValue;
  yellow: ColorValue;
}

export const COLOR_SCHEMES: Record<ColorScheme, WaveColors> = {
  default: {
    orange: Colors.waveOrange, 
    yellow: Colors.waveYellow, 
  },
  alternate: {
    orange: Colors.waveBlue, 
    yellow: Colors.wavePink,  
  },
};

export const WAVE_CONFIG = {
  colors: {
    primary: Colors.primary,
    secondary: Colors.secondary,
    background: Colors.background.primary,
  },
  height: 200,
  amplitude: 20,
  frequency: 0.5,
};