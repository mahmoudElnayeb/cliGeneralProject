import { create } from 'apisauce';
import config from '../environment';
import { getMockResponse } from '../baseService/mockService';
import { Alert } from 'react-native';

const createClient = (URL) => {
  const defaultConfig = config.development; // Use development config by default
  const client = create({
    baseURL: URL || defaultConfig.apiUrl,
    timeout: defaultConfig.timeout,
  });

  // api interceptors
  client.axiosInstance.interceptors.response.use(
    (response) => {
      // console.log("response========>", response);
      return response;
    },
    (error) => {
      // Handle network errors
      Alert.alert(
        'Error',
        error.message || 'Network error occurred',
        [{ text: 'OK' }],
        { cancelable: false }
      );
      return Promise.reject(error);
    }
  );

  // Monitor all requests
  client.addMonitor((response) => {
    // console.log('API CALL:', {
    //   url: response.config.url,
    //   method: response.config.method,
    //   data: response.config.data,
    //   serviceUrl: response.config.serviceUrl,
    //   response: response
    // });

    // Handle any non-ok response with an alert
    if (!response.ok) {
      const errorMessage = response.data?.error || response.data?.message || 'Error Happend try in a while';
      Alert.alert(
        'Error Happend', 
        errorMessage,
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }
  });

  // Add request transform to log request data
  client.addRequestTransform(request => {
    request.headers['Authorization'] = defaultConfig.authToken;
    // console.log('Request:', {
    //   url: request.url,
    //   method: request.method,
    //   data: request.data,
    //   headers: request.headers,
    //   serviceUrl: client.getBaseURL(),
    // });
  });

  // // Add response transform to handle mocks
  // client.addResponseTransform(response => {
  //   if (defaultConfig.enableMock && !response?.ok) {
  //     const mockResponse = getMockResponse(
  //       response?.config?.url,
  //       response?.config?.method,
  //       response?.config?.data
  //     );
  //     if (mockResponse) {
  //       response.data = mockResponse;
  //       response.ok = true;
  //     }
  //   }
  // });

  return client;
};

export default createClient;