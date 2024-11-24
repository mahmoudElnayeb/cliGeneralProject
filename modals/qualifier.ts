import { INotificationConfig } from "./notification";

export interface IQualifierPayload {
   Method?:"GET" | "POST" | "PUT" | "DELETE",
   endpointurl?: string;
   body?: any;
   catgory?: string;
   serviceUrl?: string;
   options?: {
     headers?: Record<string, string>;
     onUploadProgress?: (progressEvent: any) => void;
     [key: string]: any;
   };
   enablePageLoader?: boolean;
   notifyWarning?: boolean;
   notifyError?: INotificationConfig;
   notifySuccess?: INotificationConfig;
   useMock?: boolean
   mockData?: any
}