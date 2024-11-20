/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, View} from 'react-native';
import {useState} from 'react';
import Card from '../components/general/Card';
import Seperator from '../components/general/Seperator';
import {PRODUCT_ROUTE} from '../routers/prouductRoute';
import GradientBackground from '../components/general/GradientBackground';

export default function ProductList({navigation}: any) {
  const [productList, setProductList] = useState([
    {
      image:
        'https://images.hindustantimes.com/tech/img/2024/09/23/960x540/60523-124517-iPhone-17-Slim---11-xl_1723002843882_1727066708465.jpg',
      title: 'Iphone 6',
      subTitle: '1000 SAR ',
      id: 1,
    },
    {
      image:
        'https://photos5.appleinsider.com/gallery/61098-126073-000-lead-iPhone-16-xl.jpg',
      title: 'Iphone 6 Pro',
      subTitle: '6000 SAR ',
      id: 2,
    },
    {
      image:
        'https://mezha.media/wp-content/uploads/2024/08/iPhone-16-Pro-Max-colors.jpg',
      title: 'Iphone 6 Pro Max',
      subTitle: '8000 SAR ',
      id: 3,
    },
    {
      image:
        'https://variety.com/wp-content/uploads/2024/09/Apple-iPhone-16-Featured.jpg?w=1000&h=667&crop=1',
      title: 'Iphone 6 mini',
      subTitle: '5000 SAR ',
      id: 4,
    },
  ]);

  const [refresing, setRefresh] = useState(false);
  return (
    <GradientBackground style={styles.container}>
      {/* <View style={styles.account}>
        <Icon
          icon="account"
          backgroundColor={colors.secondary}
          size={60}
          onPress={() => navigation.navigate('user')}
        />
      </View> */}
      <FlatList
        data={productList}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => navigation.navigate(PRODUCT_ROUTE.ITEM, {item})}
          />
        )}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={Seperator}
        showsVerticalScrollIndicator={false}
        refreshing={refresing}
        onRefresh={() => {
          setRefresh(true);
          setProductList([
            {
              image:
                'https://photos5.appleinsider.com/gallery/61098-126073-000-lead-iPhone-16-xl.jpg',
              title: 'Iphone 6 Pro',
              subTitle: '6000 SAR ',
              id: 2,
            },
          ]);
          setRefresh(false);
        }}
      />
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {paddingVertical: 20, paddingHorizontal: 20},
  account: {
    marginBottom: 20,
    alignItems: 'flex-end',
  },
});
