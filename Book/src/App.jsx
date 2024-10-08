import './App.css'
import Book from './component/Book';
import Header from './component/Header';	
import Layout from './component/Layout';



function App() {

  return (
    <>
    <Header/>

    <Layout>
 
      <Book title="Book1" author="LOTM" image="./images/images/images.jpg"/>
      <Book title="Book2" author="ORV" image="./images/images/orv.jpg"/>
      <Book title="Book3" author="Jojo" image="./images/images/book1.jpg"/>

      </Layout>
   
    </>
  )
}

export default App
