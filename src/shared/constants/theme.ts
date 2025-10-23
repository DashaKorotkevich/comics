import { ColorValue } from 'react-native';

type ColorRecord = Record<string, ColorValue>;

interface ColorsType {
  white: ColorValue;
  black: ColorValue;
  gray: {
    caption: ColorValue;
    mediumText: ColorValue;
    background: ColorValue;
    placeholderText: ColorValue;
    userProfileDieBackground: ColorValue;
    userProfileLine: ColorValue;
    userProfileDieText: ColorValue;
    arrowBackground: ColorValue;
    lightText: ColorValue;
  }
}

// Colors
export const Colors: ColorsType = {
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    caption: '#939393',
    mediumText: '#868686',
    background: 'rgba(236, 235, 228, 0.35)',
    placeholderText: '#BFBFBF',
    lightText: '#E0E0E0',
    userProfileLine: '#EDEDED',
    userProfileDieText: '#8C8C8C',
    userProfileDieBackground: '#D9D9D9',
    arrowBackground: '#EEEEEE'
  }
};

// Font Sizes
export const FontSizes = {
  xs: 10,
  s: 12,
  m: 14,
  l: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 22,
  '4xl': 24,
  '5xl': 26,
  '6xl': 28,
  '7xl': 32,
};

// Fonts
export const Fonts = {
  UBUNTU_REGULAR: 'Ubuntu-Regular',
  UBUNTU_MEDIUM: 'Ubuntu-Medium',
  UBUNTU_BOLD: 'Ubuntu-Bold',
};

// Text Styles
export const TextStyles = {
  auth: {
    h1: {
    fontSizes: 32,
    fontFamily: Fonts.UBUNTU_MEDIUM,
    },
    caption: {
      fontSizes: 16,
      fontFamily: Fonts.UBUNTU_REGULAR,
    },
    placeholder: {
      fontSizes: 18,
      fontFamily: Fonts.UBUNTU_REGULAR,
    },
    validationErrors: {
      fontSizes: 12,
      fontFamily: Fonts.UBUNTU_REGULAR
    },
    
  },
  button: {
    fontSize: 16,
    fontFamily: Fonts.UBUNTU_MEDIUM,
  },
};

// Spacing
export const Spacing = {
  xs: 4,
  sm: 8,
  base: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

// Border Radius
export const BorderRadius = {
  none: 0,
  sm: 4,
  base: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

// Shadows
export const Shadows = {
  sm: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  base: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  lg: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
};

// Service Card Constants
export const ServiceCardConstants = {
  BADGES: {
    REMOTE: 'Выездная',
    NOT_REMOTE: 'Не выездная',
  },
  LABELS: {
    DURATION: 'длительность ≈',
    DURATION_UNIT: 'мин',
  },
  SIZES: {
    ICON: 16,
    BADGE_FONT: 10,
    PRICE_FONT: 10,
    TITLE_FONT: 14,
    DURATION_FONT: 9,
    LOCATION_FONT: 9,
  },
  SPACING: {
    ICON_MARGIN: 4,
    LOCATION_MARGIN_LEFT: 8,
    PRICE_MARGIN_RIGHT: 4,
  },
} as const;

// Service Image Constants
export const ServiceImageConstants = {
  SIZES: {
    HEIGHT: 299,
    BORDER_RADIUS: 20,
  },
  COLORS: {
    BACKGROUND: '#E6EBFF',
  },
  RESIZE_MODE: 'cover' as const,
} as const;