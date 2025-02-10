import { Routes, Route } from "react-router-dom";
import { AddPart } from "./pages/AddPart";
import { ListParts } from "./pages/ListParts";
import { Listbikes } from "./pages/ListBikes";
import { Listbreakdowns } from "./pages/ListBreakdowns";
import { Listdrivers } from "./pages/ListDrivers";
import { Listguarantees } from "./pages/ListGuarantees";
import { Listincidents } from "./pages/ListIncidents";
import { Listmaintenances } from "./pages/ListMaintenances";
import { Listorders } from "./pages/ListOrders";
import { Liststocks } from "./pages/ListStocks";
import { Listtests } from "./pages/ListTests";


export default function App() {
  return (
    <>
      <div className="linkbar">
        <a href="/">Acceuil</a>
        <a href="/parts">Pièces</a>
        <a href="/bikes">Motos</a>
        <a href="/breakdowns">Pannes</a>
        <a href="/drivers">Conducteurs</a>
        <a href="/guarantees">Guaranties</a>
        <a href="/incidents">Incidents</a>
        <a href="/maintenances">Entretiens</a>
        <a href="/orders">Commandes</a>
        <a href="/stocks">Stock</a>
      </div>
      <Routes>
        <Route path="/parts/add" element={<AddPart />} />
        <Route path="/parts/" element={<ListParts />} />
        <Route path="/bikes/" element={<Listbikes />} />
        <Route path="/breakdowns/" element={<Listbreakdowns />} />
        <Route path="/drivers/" element={<Listdrivers />} />
        <Route path="/guarantees/" element={<Listguarantees />} />
        <Route path="/incidents/" element={<Listincidents />} />
        <Route path="/maintenances/" element={<Listmaintenances />} />
        <Route path="/orders/" element={<Listorders />} />
        <Route path="/stocks/" element={<Liststocks />} />
        <Route path="/tests/" element={<Listtests />} />
      </Routes>
  </>
  );
}