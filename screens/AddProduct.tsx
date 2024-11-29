/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet} from 'react-native';
import Form from '../components/form/Form';
import FormInput from '../components/form/FormInput';
import * as Yup from 'yup';
import SubmitButton from '../components/form/SubmitButton';
import customStyle from '../config/styles';
import FormDropdown from '../components/form/FormDropdown';
import FormImageInput from '../components/form/FormImageInput';
import GradientBackground from '../components/general/GradientBackground';
import productApis from "../services/products/productsApi.service";
import { IProductPayload } from "../modals/product.payload";
import useApi from '../apis/useApi';
import { useState } from 'react';
import defaultStyle from '../config/styles'
import useHeader from '../hooks/headerHook';

export default function AddProduct() {
   useHeader()
  const initialValues = {
    name: '',
    price: null,
    category: null,
    images: [],
    description: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label('Product Name'),
    price: Yup.number().min(0).required().label('Price'),
    category: Yup.object().nonNullable('Please select a category').label('Category'),
    images: Yup.array().min(0, 'Images must be one at least'),
    description: Yup.string().min(3).label('Product Description'),
  });

  const categoryOptions = [
    {
      id: 1,
      title: 'Phones',
      icon: 'account',
      backgroundColor: customStyle.color.primary,
      color: customStyle.color.black,
    },
    {
      id: 2,
      title: 'Clothes',
      icon: 'account',
      backgroundColor: customStyle.color.yellow,
      color: customStyle.color.black,
    },
    {
      id: 3,
      title: 'furniture',
      icon: 'account',
      backgroundColor: customStyle.color.secondary,
      color: customStyle.color.black,
    },
  ];

  const [progress, setProgress] = useState(0)

  const {request:addProductFunc , data:ProductsResponse , loading , error } = useApi(productApis.addProduct as any);



  const addProduct= async (product:any)=>{
    setProgress(0);
    const productPayload:any= new FormData();
    productPayload.append('title' , product.name);
    productPayload.append('price', product.price);
    productPayload.append('description', product.description);
    productPayload.append('categoryId', product.category?.id);
    product.images.forEach((image:string, index:number) =>
      productPayload.append('images', {
        name: `image-${index}.${image}`,
        type: "image/jpeg",
        uri: image,
      })
    );
    
     await  addProductFunc(productPayload as IProductPayload , (progress:any)=>{
      setProgress(progress);
  });
  }


  return (
    <GradientBackground style={{paddingHorizontal: defaultStyle.cardPadding.paddingHorizontal , paddingTop: 30}} hasHeader>
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={addProduct}>
        <FormImageInput name="images" />
        <FormInput name="name" placeholder="product Name" icon="cart-plus" />
        <FormInput
          name="price"
          width={'60%'}
          icon="wallet"
          placeholder="Price"
          keyboardType="numeric"
        />
        <FormDropdown
          name="category"
          options={categoryOptions}
          placeholder="Category"
        />
        <FormInput
          name="description"
          numberOfLines={4}
          icon="pen"
          placeholder="Description"
        />

        <SubmitButton title="Add" type="primary" loading={loading} />
      </Form>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({});
