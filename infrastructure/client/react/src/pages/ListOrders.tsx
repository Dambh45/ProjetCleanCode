import { useEffect, useState } from "react";
import { Orders, ordersSchema } from "../schema/ordersSchema";

export const Listorders = () => {
  const [orders, setOrders] = useState<Orders>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const abortController = new AbortController();

    fetch("http://localhost:8000/orders", {
      signal: abortController.signal
     }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Bad response from the server");
    }).then(json => {
      return ordersSchema.parse(json);
    }).then(orders => {
      setOrders(orders);
    }).catch(error => {
      alert(`Une erreur est survenue : ${error}`);
    }).finally(() => {
      setLoading(false);
    });

    return () => {
      abortController.abort();
    };
  }, []);

  if (loading) {
    return (
      <div>
        <p>Chargement en cours</p>
        <p>Merci de patienter quelques instants...</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <p>Aucune commandes trouvés</p>
    );
  }

  return (
    <div>
      <p>Liste des commandes</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Composants</th>
              <th>Coût</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>
                    <ul>
                        {order.parts.map(part => (
                            <li key={part.name}>{part.name} - {part.price}</li>
                        ))}
                    </ul>
                </td>
                <td>{order.costs}</td>
                <td>{order.deliveryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};