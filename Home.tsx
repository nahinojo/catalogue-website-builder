import './stylesheets/global.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import CatalogBrowser from './components/CatalogBrowser'

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <CatalogBrowser />
    </>
  )
}

export default Home
