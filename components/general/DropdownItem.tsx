/* eslint-disable react/react-in-jsx-scope */
import {Pressable, StyleSheet, View} from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

export default function DropdownItem({
  item,
  onPress,
}: {
  item: any;
  onPress?: () => any;
}) {
  return (
    <Pressable style={styles.selectContainer} onPress={onPress}>
      <View style={styles.selectItem} />
      <Icon
        icon={item.icon}
        color={item.color}
        backgroundColor={item.backgroundColor}
        size={55}
      />
      <AppText style={styles.list}> {item.title}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 6,
    textAlign: 'center',
    flexWrap: 'nowrap',
  },
  selectContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    marginTop: 50,
  },
  selectItem: {
    paddingHorizontal: '6%',
    paddingVertical: '6%',
    alignItems: 'center',
  },
});
