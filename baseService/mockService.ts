import { Alert } from 'react-native';
import mockResponseFile from '../services/mockResponseFile';

interface MockResponses {
  [endpoint: string]: {
    [method: string]: (body?: any) => any;
  };
}

export const getMockResponse = async (endpoint: string, method: string, body?: any) => {
  const mockResponses: MockResponses = { ...mockResponseFile };
  const response = await mockResponses[endpoint]?.[method]?.(body);
 if(response && (response.error || !response.ok)){
  const errorMessage = response.data?.error || response.data?.message || 'Error Happend try in a while';
  Alert.alert(
    'Error Happend', 
    errorMessage,
    [{ text: 'OK' }],
    { cancelable: false }
  );
 }
  
  return response;
};
