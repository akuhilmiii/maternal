import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Navbar = lazy(() => import('./Navbar'));
const Isi = lazy(() => import('./Isi'));
const Footer = lazy(() => import('./Footer'));
const Catalog = lazy(() => import('./Catalog'));
const Kolaborasi = lazy(() => import('./Kolaborasi'));
const Kolab1 = lazy(() => import('./Kolab/Kolab1'));
const Kolab2 = lazy(() => import('./Kolab/Kolab2'));
const Kolab3 = lazy(() => import('./Kolab/Kolab3'));
const App = () => (

<Router>
<Suspense fallback={<div>Loading...</div>}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/Navbar" element={<Navbar/>} />
<Route path="/Isi" element={<Isi/>} />
<Route path="/Footer" element={<Footer/>} />
<Route path="/Catalog" element={<Catalog/>} />
<Route path="/Kolaborasi" element={<Kolaborasi/>} />
<Route path="/Kolab1" element={<Kolab1/>} />
<Route path="/Kolab2" element={<Kolab2/>} />
<Route path="/Kolab3" element={<Kolab3/>} />

</Routes>
</Suspense>
</Router>
);
export default App;