/* eslint-disable react/react-in-jsx-scope */
import {FlatList, StyleSheet, View} from 'react-native';
import customStyle from '../config/styles';
import Screen from '../components/general/Screen';
import ListItem from '../components/general/ListItem';
import Seperator from '../components/general/Seperator';

export default function UserScreen() {
  const userList = [
    {
      id: 1,
      title: 'Personal Information',
      navigation: 'info',
      icon: 'account',
      backgroundcolor: customStyle.color.yellow,
      color: customStyle.color.black,
    },
    {
      id: 2,
      title: 'Setting',
      navigation: 'setting',
      icon: 'brightness-5',
      backgroundcolor: customStyle.color.primary,
      color: customStyle.color.white,
    },
    {
      id: 3,
      title: 'Notifications',
      navigation: 'notifications',
      icon: 'bell',
      backgroundcolor: customStyle.color.secondary,
      color: customStyle.color.primary,
    },
  ];
  return (
    <Screen style={styles.container}>
      <ListItem
        title="Senior sofware Engineer"
        subTitle=" mahmoudElnayeb@yahoo.com"
        titleColor={customStyle.color.secondary}
        image={require('../assets/images/mosh.jpg')}
      />

      <View>
        <FlatList
          style={{marginBlock: 30}}
          data={userList}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              icon={item.icon}
              size={50}
              backgroundcolor={item.backgroundcolor}
              color={item.color}
              navigation={item.navigation}
            />
          )}
          ItemSeparatorComponent={Seperator}
        />
      </View>

      <ListItem
        title="Logout"
        icon="logout"
        backgroundcolor={customStyle.color.yellow}
        titleColor={customStyle.color.primary}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: customStyle.color.light,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});
