import { useEffect, useState } from "react";
import { Maintenances, maintenancesSchema } from "../schema/maintenancesSchema";

export const Listmaintenances = () => {
  const [maintenances, setMaintenances] = useState<Maintenances>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const abortController = new AbortController();

    fetch("http://localhost:8000/maintenances", {
      signal: abortController.signal
     }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Bad response from the server");
    }).then(json => {
      return maintenancesSchema.parse(json);
    }).then(maintenances => {
      setMaintenances(maintenances);
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

  if (maintenances.length === 0) {
    return (
      <p>Aucun entretiens trouvés</p>
    );
  }

  return (
    <div>
      <p>Liste des entretiens</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Description</th>
              <th>Kilometrage</th>
              <th>Moto</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {maintenances.map(maintenance => (
              <tr key={maintenance.id}>
                <td>{maintenance.id}</td>
                <td>{maintenance.name}</td>
                <td>{maintenance.description}</td>
                <td>{maintenance.kilometer}</td>
                <td>{maintenance.bike.name}</td>
                <td>{maintenance.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};