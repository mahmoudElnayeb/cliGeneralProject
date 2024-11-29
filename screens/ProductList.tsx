/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import { FlatList, Platform, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Card from '../components/general/Card';
import Seperator from '../components/general/Seperator';
import GradientBackground from '../components/general/GradientBackground';
import useApi from '../apis/useApi';
import productApis from '../services/products/productsApi.service';
import AppText from '../components/general/AppText';
import Button from '../components/general/Button';
import ActivityIndicator from '../components/general/ActivityIndicator';
import customDefaultStyle from '../config/styles'
export default function ProductList({ navigation }: any) {
  const { request: getProducts, data: productListData = [],
    loading,
    error,
    errorMessage,
    setData,
    setLoading
  }: any = useApi(productApis.allProductsApi);

  useEffect(() => { getProducts() }, []);

const renderData=()=>{
  if(!error)
  return <FlatList
  data={productListData}
  renderItem={({ item }) => (
    <Card
      title={item.title}
      subTitle={item.price + "$"}
      image={item.images.length > 0 && item.images[0].url}
      onPress={() => navigation.navigate("products", { item })}
    />
  )}
  keyExtractor={item => item.id.toString()}
  ItemSeparatorComponent={Seperator}
  showsVerticalScrollIndicator={false}
  refreshing={loading}
  onRefresh={() => {
    getProducts();
  }}
/>
}


const renderError=()=>{
  return (
    <View style={{ alignItems: "center" }}>
      <AppText style={{ fontSize: 20 }}>{errorMessage}</AppText>
      <Button
        onPress={() => getProducts()}
        title="Retry"
        type="primary"
        style={{ marginTop: 20 }} />
    </View>
  )
}




  return (
    <GradientBackground style={styles.container}  >
      {(error && !loading) && renderError()}

      {loading ? (
        <ActivityIndicator visible={true} />
      ) : (
         renderData()
      )}
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal:customDefaultStyle.cardPadding.paddingHorizontal
  },
});
