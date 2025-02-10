import { useEffect, useState } from "react";
import { Tests, testsSchema } from "../schema/testsSchema";

export const Listtests = () => {
  const [tests, setTests] = useState<Tests>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const abortController = new AbortController();

    fetch("http://localhost:3000/tests", {
      signal: abortController.signal
     }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Bad response from the server");
    }).then(json => {
      return testsSchema.parse(json);
    }).then(tests => {
      setTests(tests);
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

  if (tests.length === 0) {
    return (
      <p>Aucun tests trouvés</p>
    );
  }

  return (
    <div>
      <p>Liste des tests motos</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Moto</th>
              <th>Conducteur</th>
              <th>Début du test</th>
              <th>Fin du test</th>
            </tr>
          </thead>
          <tbody>
            {tests.map(test => (
              <tr key={test.id}>
                <td>{test.bike.name}</td>
                <td>{test.bike.firstname} {test.bike.lastname}</td>
                <td>{test.loanStartDate}</td>
                <td>{test.loanEndDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};