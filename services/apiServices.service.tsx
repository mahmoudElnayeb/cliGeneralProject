import client from "../apis/client";
import { IQualifierPayload } from "../modals/qualifier";


export const call = (qualifier: IQualifierPayload) => {
  
    const qualifierObject = qualifier


    switch (qualifierObject.Method) {
        case "GET":
           return client(qualifierObject.serviceUrl??null).get(qualifierObject.endpointurl!) ;
        case "POST":
            return client(qualifierObject.serviceUrl??null)
            .post(qualifierObject.endpointurl!,
                 qualifierObject.body ,
                 qualifierObject.options
                ) ;
        case "PUT":
            
            break;
        case "DELETE":
            
            break;
    
    
    }


}