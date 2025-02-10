import { useEffect, useState } from "react";
import { Breakdowns, breakdownsSchema } from "../schema/breakdownsSchema";

export const Listbreakdowns = () => {
  const [breakdowns, setBreakdowns] = useState<Breakdowns>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const abortController = new AbortController();

    fetch("http://localhost:8000/breakdowns", {
      signal: abortController.signal
     }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Bad response from the server");
    }).then(json => {
      return breakdownsSchema.parse(json);
    }).then(breakdowns => {
      setBreakdowns(breakdowns);
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

  if (breakdowns.length === 0) {
    return (
      <p>Aucune pannes trouvés</p>
    );
  }

  return (
    <div>
      <p>Liste des pannes</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Raison</th>
              <th>Moto</th>
              <th>Coûts</th>
            </tr>
          </thead>
          <tbody>
            {breakdowns.map(breakdown => (
              <tr key={breakdown.id}>
                <td>{breakdown.id}</td>
                <td>{breakdown.reason}</td>
                <td>{breakdown.bike.name}</td>
                <td>{breakdown.costs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};