import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import MenuPage from '../../Pages/MenuPage';
import HomePage from '../../Pages/HomePage';
import NotFound from '../../Pages/NotFound';
import GlobalHeader from '../GlobalHeader/GlobalHeader';
import Footer from "../Footer/Footer";

/**
 * TODOs:
 * + Make website footer stick to bottom on websites rendered on a larger viewport than mine @todo
 * + Make footer stick across all routes @todo
 * 
 * - Add option to show entire menu on a single page @posit_later
 * - Add Landing Page (React Routes) @done
 *     + Google Maps Applet @done
 *     + Pictures of the place? @todo
 * - Possibly implement a mock "cart" system. @todo
 * + MUST BE COMPATIBLE ON MOBILE DEVICES!!! @fixme
 *     + Test: my phone, both Samsungs, and all of the dev-tools. @todo
 * 
 * To stop the server forcefully, type: `netstat -ano` and find the process labeled [::1]:{THIS_PORT_NUMBER}
 * Then, type `taskkill /F /PID {THE_ABOVE_PID}` to kill it forcefully.
 * 
 * @returns the main view for this React project.
 */
export default function App() {
  return (
    <React.Fragment>
      <GlobalHeader />
      <div className='content-wrapper'>
        <div className='routes'>
          <Routes>
            <Route exact path='/menu' element={<MenuPage />} />
            <Route exact path='/' element={<HomePage />} />

            {/* Must be the last! */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  )
}