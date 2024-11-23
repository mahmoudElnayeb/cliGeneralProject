import { create } from 'apisauce';

const client = create({
  baseURL: 'http://192.168.1.106:9000/api',
});

// Monitor all requests
client.addMonitor((response) => {
  console.log('API CALL:', {
    url: response.config.url,
    method: response.config.method,
    data: response.config.data,
    status: response.status,
    response: response.data
  });
});

// Add request transform to log request data
client.addRequestTransform(request => {
  console.log('REQUEST:', {
    url: request.url,
    method: request.method,
    data: request.data,
    headers: request.headers
  });
});

export default client;