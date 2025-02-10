import { Bike } from "../../domain/entities/Bike";
import { Breakdown } from "../../domain/entities/Breakdown";

export interface BreakdownRepository {
  addBreakdown(breakdown: Breakdown): Promise<void>;
  getBreakdowns(): Promise<Array<Breakdown>>;
  getBreakdown(id: number): Promise<Breakdown | null>;
  getBikeBreakdowns(bike: Bike): Promise<Array<Breakdown>>;
  deleteBreakdown(breakdown: Breakdown): Promise<void>;
}