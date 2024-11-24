import { INotificationConfig } from "./notification";


export interface IQualifierPayload<T = any>  {
   Method?:"GET" | "POST" | "PUT" | "DELETE",
   endpointurl?: string;
   body?:T;
   catgory?: string;
   serviceUrl?: string;
   enablePageLoader?: boolean;
   notifyWarning?: boolean;
   notifyError?: INotificationConfig;
   notifySuccess?: INotificationConfig;
   options?:T
}