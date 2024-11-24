import { create } from 'apisauce';
import { getConfig } from '../environment';
import { getMockResponse } from '../services/mockService';

const createClient = (URL) => {
  const config = getConfig();
  const client = create({
    baseURL: URL || config.apiUrl,
    timeout: config.timeout,
  });

  // Monitor all requests
  client.addMonitor((response) => {
    console.log('API CALL:', {
      url: response.config.url,
      method: response.config.method,
      data: response.config.data,
      status: response.status,
      serviceUrl: response.config.serviceUrl,
      response: response
    });
  });

  // Add request transform to log request data
  client.addRequestTransform(request => {
    console.log('REQUEST:', {
      url: request.url,
      method: request.method,
      data: request.data,
      headers: request.headers,
      serviceUrl: client.getBaseURL(),
    });
  });

  // Add response transform to handle mocks
  client.addResponseTransform(response => {
    if (config.enableMock && !response.ok) {
      const mockResponse = getMockResponse(
        response.config.url,
        response.config.method,
        response.config.data
      );
      if (mockResponse) {
        Object.assign(response, mockResponse);
      }
    }
  });

  return client;
};

export default createClient;