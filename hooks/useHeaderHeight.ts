import { Platform, StatusBar } from 'react-native';

const HEADER_HEIGHT = Platform.select({
  ios: 44,
  android: 56,
  default: 64,
});

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight || 0;

export const useHeaderHeight = () => {
  return HEADER_HEIGHT + STATUS_BAR_HEIGHT;
};

export default useHeaderHeight;
