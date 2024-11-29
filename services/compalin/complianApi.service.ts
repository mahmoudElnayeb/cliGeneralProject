import { call } from "../apiServices"



const apiName = "compain"


export const sentCoplainApiMock = async (body?: { category: any; title: any; message: any }) => {    
    return await call({
        Method: "POST",
        endpointurl: `/${apiName}/send`,
        useMock: true,
        body
        
    })
}
