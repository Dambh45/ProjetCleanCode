import { useEffect, useState } from "react";
import { Drivers, driversSchema } from "../schema/driversSchema";

export const Listdrivers = () => {
  const [drivers, setDrivers] = useState<Drivers>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const abortController = new AbortController();

    fetch("http://localhost:3000/drivers/", {
      signal: abortController.signal
     }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error("Bad response from the server");
    }).then(json => {
      return driversSchema.parse(json);
    }).then(drivers => {
      console.log('test1');
      setDrivers(drivers);
      console.log('test2');
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

  if (drivers.length === 0) {
    return (
      <p>Aucun conducteurs trouvés</p>
    );
  }

  return (
    <div>
      <p>Liste des conducteurs</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Numéro de permis</th>
              <th>Expéience de conduite</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map(driver => (
              <tr key={driver.id}>
                <td>{driver.id}</td>
                <td>{driver.firstname}</td>
                <td>{driver.lastname}</td>
                <td>{driver.drivingLicenceNumber}</td>
                <td>{driver.drivingExperience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};