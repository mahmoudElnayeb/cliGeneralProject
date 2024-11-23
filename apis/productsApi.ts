import client from './client';
import { IProductPayload } from "../modals/product.payload";



const endpoint = '/listings';

const allProductsApi = () => client.get(endpoint);

const addProduct = (product: IProductPayload , onUploadProgress) => {

  return client.post(endpoint, product, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: (progress) => console.log(progress),

  });
};

export default {
  allProductsApi,
  addProduct,
};