import { useEffect, useState } from "react";
import { Incidents, incidentsSchema } from "../schema/incidentsSchema";

export const Listincidents = () => {
  const [incidents, setIncidents] = useState<Incidents>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const abortController = new AbortController();

    fetch("http://localhost:3000/incidents", {
      signal: abortController.signal
     }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Bad response from the server");
    }).then(json => {
      return incidentsSchema.parse(json);
    }).then(incidents => {
      setIncidents(incidents);
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

  if (incidents.length === 0) {
    return (
      <p>Aucun incidents trouvés</p>
    );
  }

  return (
    <div>
      <p>Liste des incidents</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Description</th>
              <th>Conducteur</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map(incident => (
              <tr key={incident.id}>
                <td>{incident.id}</td>
                <td>{incident.type}</td>
                <td>{incident.description}</td>
                <td>{incident.driver.firstname} - {incident.driver.lastname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};