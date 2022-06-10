import Navbar from './Navbar'
import Isi from './Isi'
import Footer from './Footer'

export default function Example() {
  return (
    <>
<Navbar/>
   <header className="bg-black">
     <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
       <h1 className="text-3xl font-bold text-white">MATERNAL DISASTER</h1>
     </div>
   </header>
<Isi/>
<Footer/>
    </>
  )
}