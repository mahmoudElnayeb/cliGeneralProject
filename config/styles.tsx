import {Platform} from 'react-native';
import button from './button';
import colors from './colors';

export default {
  color: colors,
  button: button,
  buttonContainer: {
    width: '100%',
    borderRadius: 20,
    paddingVertical: 15,
    marginVertical: 6,
  },
  text: {
    color: colors.dark,
    ...Platform.select({
      ios: {
        fontFamily: 'Avenir',
        fontSize: 18,
      },
      android: {
        fontFamily: 'Roboto',
        fontSize: 16,
      },
    }),
  },
  inputContiner: {
    borderRadius: 15,
    borderColor: colors.light,
    borderWidth: 1,
    backgroundColor: colors.light,
    height: 60,
    with:"100%",
    alignItems: 'center',
    flexDirection: 'row',
  },
};
