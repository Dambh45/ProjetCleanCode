import { useEffect, useState } from "react";
import { Guarantees, guaranteesSchema } from "../schema/guaranteesSchema";

export const Listguarantees = () => {
  const [guarantees, setGuarantees] = useState<Guarantees>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const abortController = new AbortController();

    fetch("http://localhost:8000/guarantees", {
      signal: abortController.signal
     }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Bad response from the server");
    }).then(json => {
      return guaranteesSchema.parse(json);
    }).then(guarantees => {
      setGuarantees(guarantees);
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

  if (guarantees.length === 0) {
    return (
      <p>Aucune garenties trouvés</p>
    );
  }

  return (
    <div>
      <p>Liste des garenties</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Description</th>
              <th>Moto</th>
            </tr>
          </thead>
          <tbody>
            {guarantees.map(guarantee => (
              <tr key={guarantee.id}>
                <td>{guarantee.id}</td>
                <td>{guarantee.name}</td>
                <td>{guarantee.description}</td>
                <td>{guarantee.bike.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};