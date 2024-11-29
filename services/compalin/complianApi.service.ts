import { call } from "../apiServices"



const apiName = "compain"


export const sentCoplainApiMock = (body?: { category: any; title: any; message: any }) => {
    console.log(body);
    
    call({
        Method: "POST",
        endpointurl: `/${apiName}/send`,
        useMock: false,
        body
        
    })
}
