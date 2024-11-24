export type Environment = 'development' | 'sit' | 'uat' | 'production';

interface EnvironmentConfig {
  apiUrl: string;
  enableMock: boolean;
  timeout: number;
  apiKey?: string;
}

const configs: Record<Environment, EnvironmentConfig> = {
  development: {
    apiUrl: 'http://192.168.1.106:9000/api',
    enableMock: true,
    timeout: 30000,
  },
  sit: {
    apiUrl: 'https://sit-api.yourapp.com/api',
    enableMock: true,
    timeout: 30000,
  },
  uat: {
    apiUrl: 'https://uat-api.yourapp.com/api',
    enableMock: false,
    timeout: 30000,
  },
  production: {
    apiUrl: 'https://api.yourapp.com/api',
    enableMock: false,
    timeout: 30000,
  },
};

export const getCurrentEnvironment = (): Environment => {
  // You can set this based on environment variables or build configuration
  return (process.env.REACT_APP_ENV as Environment) || 'development';
};

export const getConfig = (): EnvironmentConfig => {
  const env = getCurrentEnvironment();
  return configs[env];
};
