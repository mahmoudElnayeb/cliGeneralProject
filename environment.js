const config = {
  development: {
    apiUrl: 'http://localhost:3000/api',
    timeout: 30000,
    enableMock: true,
    authToken: '',
  },
  production: {
    apiUrl: 'https://your-production-api.com/api',
    timeout: 30000,
    enableMock: false,
    authToken: '',
  }
};

export const getConfig = () => {
  const env = process.env.NODE_ENV || 'development';
  return config[env];
};

export default config;
