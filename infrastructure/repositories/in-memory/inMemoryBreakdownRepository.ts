import { BreakdownRepository } from "../../../application/repositories/BreakdownRepository";
import { Bike } from "../../../domain/entities/Bike";
import { Breakdown } from "../../../domain/entities/Breakdown";
import { Part } from "../../../domain/entities/Part";

export class InMemoryBreakdownRepository implements BreakdownRepository {
  public constructor(private readonly breakdowns: Array<Breakdown>) {
    this.addBreakdown(
      new Breakdown(
        1,
        "engine failure",
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
        ),
        3750
      )
    )
  }

  public async addBreakdown(breakdown: Breakdown): Promise<void> {
    this.breakdowns.push(breakdown);
  }

  public async getBreakdowns(): Promise<Breakdown[]> {
    return this.breakdowns;
  }

  public async getBreakdown(id: number): Promise<Breakdown | null> {
    return this.breakdowns.filter(breakdown => breakdown.id == id)[0];
  }

  public async getBikeBreakdowns(bike: Bike): Promise<Array<Breakdown>> {
    return this.breakdowns.filter(breakdown => breakdown.bike.id == bike.id);
  }

  public async deleteBreakdown(breakdown: Breakdown): Promise<void> {
    const index = this.breakdowns.indexOf(breakdown, 0);
    if (index > -1) {
        this.breakdowns.splice(index, 1);
    }
  }
}