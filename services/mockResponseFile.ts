import { compainMockResponses } from "./compalin/complainApi.mock";
import { productMockResponses } from "./products/product.mock";

export default{
    ...productMockResponses, 
    ...compainMockResponses
}