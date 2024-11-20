/* eslint-disable react-hooks/rules-of-hooks */

import {DefaultTheme} from '@react-navigation/native';
import colors from './colors';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    text: colors.dark,
    background: colors.white,
  },
};
