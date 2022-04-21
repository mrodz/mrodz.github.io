import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import MenuPage from '../../Pages/MenuPage';
import HomePage from '../../Pages/HomePage';
import NotFound from '../../Pages/NotFound';
import GlobalHeader from '../GlobalHeader/GlobalHeader';

/**
 * TODOs:
 * - Add option to show entire menu on a single page
 * - Add Landing Page (ReactAJAX?)
 *     + Google Maps Applet
 *     + Pictures of the place?
 * - Possibly implement a mock "cart" system.
 * + MUST BE COMPATIBLE ON MOBILE DEVICES!!!
 *     + Test: my phone, both Samsungs, and all of the dev-tools.
 * 
 * @returns the main view for this React project.
 */
export default function App() {
  return (
    <React.Fragment>
      <GlobalHeader />
      <div className='routes'>
        <Routes>
          <Route exact path='/menu' element={<MenuPage />} />
          <Route exact path='/' element={<HomePage />} />

          {/* Must be the last! */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </React.Fragment>
  )
}