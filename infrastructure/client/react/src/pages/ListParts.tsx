import { useEffect, useState } from "react";
import { Parts, partsSchema } from "../schema/partsSchema";

export const ListParts = () => {
  const [parts, setParts] = useState<Parts>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const abortController = new AbortController();

    fetch("http://localhost:8000/parts", {
      signal: abortController.signal
     }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Bad response from the server");
    }).then(json => {
      return partsSchema.parse(json);
    }).then(parts => {
      setParts(parts);
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

  if (parts.length === 0) {
    return (
      <p>Aucun composants trouvés</p>
    );
  }

  return (
    <div>
      <p>Liste des pièces détachés</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {parts.map(part => (
              <tr key={part.name}>
                <td>{part.name}</td>
                <td>{part.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};