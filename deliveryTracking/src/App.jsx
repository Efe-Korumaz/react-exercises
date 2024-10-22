import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import PackageOrder from "./components/PackageOrder";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <h1>Delivery Tracking</h1>
        <br />
        <PackageOrder
          naam="package from Rotterdam"
          productId="ID:1"
          status="delivered"
        />
        <PackageOrder
          naam="package from Schiedam"
          productId="ID:2"
          status="on the way"
        />
        <PackageOrder
          naam="package from rotterdam"
          productId="ID:3"
          status="on the way"
        />
      </Layout>
    </>
  );
}

export default App;
