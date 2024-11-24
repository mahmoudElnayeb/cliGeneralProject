import mockResponseFile from './mockResponseFile';



export const getMockResponse = (endpoint: string, method: string, body?: any) => {
 const mockResponses={...mockResponseFile}
  return mockResponses[endpoint]?.[method]?.(body);
};
