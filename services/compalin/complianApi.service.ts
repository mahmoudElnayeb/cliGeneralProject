import { call } from "../../baseService/apiServices"



const apiName = "compain"


export const sentCoplainApi = async (body?: { category: any; title: any; message: any }) => {    
    return await call({
        Method: "POST",
        endpointurl: `/${apiName}/send`,
        useMock: true,
        body
        
    })
}
