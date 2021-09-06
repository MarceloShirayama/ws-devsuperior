import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

function App() {
  return (
    <>
    <Navbar />

    <div className="container">
      <h1 className="text-primary py-3">Dashboard de Vendas</h1>
    </div>

    <div className="row px-3">
      <div className="col-sm-6">
        <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
        <BarChart />
      </div>

      <div className="col-sm-6">
        <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
        <DonutChart />
      </div>

      <div className="py-3">
        <h2 className="text-center text-primary">Total Vendas</h2>
      </div>
    </div>

    <DataTable />

    <Footer />
    </>
  );
}

export default App;
