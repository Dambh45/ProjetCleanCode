import { useEffect, useState } from "react";
import { Stocks, stocksSchema } from "../schema/stocksSchema";

export const Liststocks = () => {
  const [stocks, setStocks] = useState<Stocks>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const abortController = new AbortController();

    fetch("http://localhost:8000/stocks", {
      signal: abortController.signal
     }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Bad response from the server");
    }).then(json => {
      return stocksSchema.parse(json);
    }).then(stocks => {
      setStocks(stocks);
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

  if (stocks.length === 0) {
    return (
      <p>Aucun composants trouvés</p>
    );
  }

  return (
    <div>
      <p>Liste des pièces détachés en stock</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Quantité</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map(stock => (
              <tr key={stock.part.name}>
                <td>{stock.part.name}</td>
                <td>{stock.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};