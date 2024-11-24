import client from './client';
import { IProductPayload } from "../modals/product.payload";
import { call } from '../services/apiServices.service';



const endpoint = '/listings';

const allProductsApi = () => call({ 
   Method: "GET",
   endpointurl: "/listings",
   
  });

const addProduct = (product: IProductPayload ) => call({ 
   Method: "POST",
   endpointurl: "/listings",
   body: product,
   options: {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: (progress:any) => console.log(progress),
  }
  
  });

//    {

//   return client.post(endpoint, product, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//     onUploadProgress: (progress) => console.log(progress),

//   });
// };

export default {
  allProductsApi,
  addProduct,
};