/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */import { VirtualizedList, StyleSheet, View, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import Card from '../components/general/Card';
import Seperator from '../components/general/Seperator';
import GradientBackground from '../components/general/GradientBackground';
import useApi from '../hooks/useApi';
import productApis from '../services/products/productsApi.service';
import AppText from '../components/general/AppText';
import Button from '../components/general/Button';
import ActivityIndicator from '../components/general/ActivityIndicator';
import customDefaultStyle from '../config/styles';

const ITEM_HEIGHT = 300; // Approximate height of each card item

export default function ProductList({ navigation }: any) {
  const { request: getProducts, data: productListData = [],
    loading,
    error,
    errorMessage,
    setData,
    setLoading
  }: any = useApi(productApis.allProductsApi);

  useEffect(() => { getProducts() }, []);

  const getItem = (data: any[], index: number) => {
    return data[index];
  };

  const getItemCount = (data: any[]) => {
    return data.length;
  };

  const renderItem = ({ item }: any) => (
    <Card
      title={item.title}
      subTitle={item.price + "$"}
      image={item.images.length > 0 && item.images[0].url}
      onPress={() => navigation.navigate("products", { item })}
    />
  );

  const getItemLayout = (_: any, index: number) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  const renderData = () => {
    if (!error)
      return <VirtualizedList
        data={productListData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        getItemCount={getItemCount}
        getItem={getItem}
        ItemSeparatorComponent={Seperator}
        showsVerticalScrollIndicator={false}
        getItemLayout={getItemLayout}
        refreshing={loading}
        onRefresh={() => {
          getProducts();
        }}
        windowSize={5}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        updateCellsBatchingPeriod={50}
      />
  }

  const renderError = () => {
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
    <GradientBackground style={styles.container} >
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
    paddingHorizontal: customDefaultStyle.cardPadding.paddingHorizontal
  },
});
