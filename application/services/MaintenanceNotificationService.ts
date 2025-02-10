import { Maintenance } from '../../domain/entities/Maintenance'

export interface MaintenanceNotificationService {
  sendMaintenanceNotification(maintenance: Maintenance): Promise<void>;
}