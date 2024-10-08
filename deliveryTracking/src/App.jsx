import './App.css'
import Header from './components/header'
import PackageOrder from './components/packageOrder'


function App() {

  return (
    <>

      <PackageOrder naam ='package1'  productId ="1" status ="delivered" />
      <PackageOrder naam ='package2' productId ="2" status = "not delivered" />
      <PackageOrder naam ='package3' productId ="3" status = "delivered" />
      <PackageOrder naam ='package4' productId ="4" status = "delivered" />

   
    </>
  )
}

export default App
