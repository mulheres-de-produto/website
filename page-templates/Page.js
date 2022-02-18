import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import Header from './Header'

export default function Page({children}) {
  return (
    <div className="flex flex-col">
      <Header/>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
