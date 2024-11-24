

export type NotificationType = "success" | "warning" | "error";


export const NotificationEnum = {
  success: "success" as NotificationType,
  warning: "warning" as NotificationType,
  error  : "error" as NotificationType
};



export interface INotificationConfig {
  type?: NotificationType;
  message?: string;
  title?: string;
}
