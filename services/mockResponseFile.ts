import { sentCoplainApiMock } from "./compalin/complianApi.service";
import { productMockResponses } from "./products/product.mock";

export default{
    ...productMockResponses, 
    ...sentCoplainApiMock
}