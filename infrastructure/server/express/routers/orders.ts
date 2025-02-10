import { Router } from "express";
import { ListOrders } from "../../../../application/usecases/orders/ListOrders";
import { AddOrder } from "../../../../application/usecases/orders/AddOrder";
import { GetOrder } from "../../../../application/usecases/orders/GetOrder";
import { DeleteOrder } from "../../../../application/usecases/orders/DeleteOrder";
import { OrderRepository } from "../../../../application/repositories/OrderRepository";

export const createOrdersRouter = (orderRepository: OrderRepository) => {
    const ordersRouter = Router();
  
    ordersRouter.get("/", async (request, response) => {
      try {
        const listOrders = new ListOrders(orderRepository);
        const orders = await listOrders.execute();
  
        response.json(orders.map(order => {
          return {
            parts: order.parts,
            costs: order.costs,
            deliveryDate: order.deliveryDate
          }
        }));
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });

    ordersRouter.get("/:id", async (request, response) => {
      try {
        const order = new GetOrder(orderRepository).execute(request.params.id);  
        response.json(order);
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });
  
    ordersRouter.post("/", async (request, response) => {
      try {
        console.log(request);
        const { parts, costs, deliveryDate } = request.body;
        const addOrder = new AddOrder(orderRepository);
  
        await addOrder.execute(parts, costs, deliveryDate);
  
        response.status(201).end();
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });

    ordersRouter.delete("/:id", async (request, response) => {
      try {
        const order = new DeleteOrder(orderRepository).execute(request.params.id);  
        response.json(order);
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });
  
    return ordersRouter;
};