/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import { FlatList, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Card from '../components/general/Card';
import Seperator from '../components/general/Seperator';
import { PRODUCT_ROUTE } from '../routers/prouductRoute';
import GradientBackground from '../components/general/GradientBackground';
import ProductNav from '../navigations/ProductNav';
import useApi from '../apis/useApi';
import productApis from '../apis/productsApi';
import AppText from '../components/general/AppText';
import Button from '../components/general/Button';
export default function ProductList({ navigation }: any) {
  const [refresing, setRefresh] = useState(false);


  const { request: getProducts, data: productList, loading, error }: any = useApi(productApis.allProductsApi as any);

  useEffect(() => { getProducts() }, []);


  return (
    <GradientBackground style={styles.container}>

      {error && (
        <View style={{ alignItems: "center" }}>
          <AppText styles={{ margin: 20 }}>
            We Have Issue in server currently
          </AppText>
          <Button
            type="secondary"
            title="refetch"
            onPress={() => getProducts()}
          />
        </View>
      )}

      <FlatList
        data={productList}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price + "$"}
            image={item.images[0].url}
            onPress={() => navigation.navigate("products", { item })}
          />
        )}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={Seperator}
        showsVerticalScrollIndicator={false}
        refreshing={refresing}
        onRefresh={() => {
          setRefresh(true);
          getProducts();
          setRefresh(false);
        }}
      />
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 20, paddingHorizontal: 20 },
  account: {
    marginBottom: 20,
    alignItems: 'flex-end',
  },
});
