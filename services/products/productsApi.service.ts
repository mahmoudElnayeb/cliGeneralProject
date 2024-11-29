import { IProductPayload } from "../../modals/product.payload";
import { call } from '../../baseService/apiServices';


const endpoint = '/listings';



const allProductsApi = () => 
  call({ 
   Method: "GET",
   endpointurl: endpoint,
  //  useMock: true
  })

const addProduct = (product: IProductPayload ) => call({ 
   Method: "POST",
   endpointurl:endpoint,
   body: product,
   options: {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: (progress:any) => console.log(progress),
  },
  // useMock:false
  
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