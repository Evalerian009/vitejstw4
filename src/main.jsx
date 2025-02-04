import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx';
import Home from './pages/home/Home.jsx';
import Pricing from './pages/pricing/Pricing.jsx';
import Testimonials from './pages/testimonials/Testimonials.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className='font-montserrat overflow-x-clip'>
        <Navbar />
        <App />
        <Footer />
      </div>
    ),
    children: [
      { path: '', element: <Home /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'testimonials', element: <Testimonials /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
