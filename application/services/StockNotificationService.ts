import { Part } from '../../domain/entities/Part';
import { Stock } from '../../domain/entities/Stock'

export interface StockNotificationService {
  sendLowStockNotification(stock: Stock): Promise<void>;
  sendEmptyStockPartNotification(part: Part): Promise<void>;
}