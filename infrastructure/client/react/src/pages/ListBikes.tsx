import { useEffect, useState } from "react";
import { Bikes, bikesSchema } from "../schema/bikesSchema";

export const Listbikes = () => {
  const [bikes, setBikes] = useState<Bikes>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const abortController = new AbortController();

    fetch("http://localhost:8000/bikes", {
      signal: abortController.signal
     }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Bad response from the server");
    }).then(json => {
      return bikesSchema.parse(json);
    }).then(bikes => {
      setBikes(bikes);
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

  if (bikes.length === 0) {
    return (
      <p>Aucune moto trouvés</p>
    );
  }

  return (
    <div>
      <p>
        Liste des motos
      </p>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Cylindrée</th>
              <th>Réservoir</th>
              <th>Mass</th>
              <th>Kilometers</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {bikes.map(bike => (
              <tr key={bike.id}>
                <td>{bike.id}</td>
                <td>{bike.name}</td>
                <td>{bike.cylinderCapacity}</td>
                <td>{bike.tankCapacity}</td>
                <td>{bike.mass}</td>
                <td>{bike.kilometers}</td>
                <td>{bike.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};