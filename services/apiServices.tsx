import client from "../apis/client";
import { IQualifierPayload } from "../modals/qualifier";
import { getMockResponse } from "./mockService";


export const call = (qualifierObject: IQualifierPayload) => {

    switch (qualifierObject.Method) {
        case "GET":
            if (qualifierObject.useMock || (global as any).useMock)
                return getMockResponse(qualifierObject.endpointurl!, qualifierObject.Method!)
            else
                return client(qualifierObject.serviceUrl ?? 'http://192.168.1.106:9000/api/').get(qualifierObject.endpointurl!);
        case "POST":
            if (qualifierObject.useMock || (global as any).useMock)
                return getMockResponse(qualifierObject.endpointurl!, qualifierObject.Method!, qualifierObject.body)
            else
                return client(qualifierObject.serviceUrl ?? 'http://192.168.1.106:9000/api/')
                    .post(qualifierObject.endpointurl!,
                        qualifierObject.body,
                        qualifierObject.options
                    );
        case "PUT":

            break;
        case "DELETE":

            break;


    }


}