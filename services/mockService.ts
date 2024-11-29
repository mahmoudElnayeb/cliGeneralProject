import mockResponseFile from './mockResponseFile';

interface MockResponses {
  [endpoint: string]: {
    [method: string]: (body?: any) => any;
  };
}

export const getMockResponse = (endpoint: string, method: string, body?: any) => {
  const mockResponses: MockResponses = {...mockResponseFile};
  return mockResponses[endpoint]?.[method]?.(body);
};
