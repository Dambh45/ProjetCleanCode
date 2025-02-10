import { GuaranteeRepository } from "../../../application/repositories/GuaranteeRepository";
import { Bike } from "../../../domain/entities/Bike";
import { Guarantee } from "../../../domain/entities/Guarantee";
import { Part } from "../../../domain/entities/Part";

export class InMemoryGuaranteeRepository implements GuaranteeRepository {
  public constructor(private readonly guarantees: Array<Guarantee>) {
    this.addGuarantee(
      new Guarantee(
        1,
        "Guarantie 8ans",
        "Nous vous garantisson votre véhicule 8ans",
        new Bike(
          1,
          "Triumph tiger 1200",
          21595,
          245,
          8768,
          1160,
          20,
          5.1,
          [new Part("injecteurs", 60)]
        )
      )
    )
  }

  public async addGuarantee(guarantee: Guarantee): Promise<void> {
    this.guarantees.push(guarantee);
  }

  public async getGuarantees(): Promise<Guarantee[]> {
    return this.guarantees;
  }

  public async getGuarantee(id: number): Promise<Guarantee | null> {
    return this.guarantees.filter(guarantee => guarantee.id == id)[0];
  }

  public async getBikeGuarantees(bike: Bike): Promise<Array<Guarantee>> {
    return this.guarantees.filter(guarantee => guarantee.bike.id == bike.id);
  }

  public async deleteGuarantee(guarantee: Guarantee): Promise<void> {
    const index = this.guarantees.indexOf(guarantee, 0);
    if (index > -1) {
        this.guarantees.splice(index, 1);
    }
  }
}