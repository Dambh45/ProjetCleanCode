import { Bike } from "../../domain/entities/Bike";
import { Guarantee } from "../../domain/entities/Guarantee";

export interface GuaranteeRepository {
  addGuarantee(guarantee: Guarantee): Promise<void>;
  getGuarantees(): Promise<Array<Guarantee>>;
  getGuarantee(id: number): Promise<Guarantee | null>;
  getBikeGuarantees(bike: Bike): Promise<Array<Guarantee>>;
  deleteGuarantee(guarantee: Guarantee): Promise<void>;
}