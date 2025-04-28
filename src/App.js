import './App.css';
import Header from './components/Header/Header';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components

// Lazy load components
const Body = lazy(() => import('./components/Body/Body'));
const About = lazy(() => import('./components/About/About'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Work = lazy(() => import('./components/MyWork/MyWork'));
const MoreAbout = lazy(() => import('./components/About/moreabout')); // Import MoreAbout here

function App() {
  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />

        <Suspense fallback={<h1 className="p-4">Loading Body...</h1>}>
          <section id="home">
            <Body />
          </section>
        </Suspense>

        <Suspense fallback={<h1 className="p-4">Loading About...</h1>}>
          <section id="about">
            <About />
          </section>
        </Suspense>

        <Suspense fallback={<h1 className="p-4">Loading Work...</h1>}>
          <section id="work">
            <Work />
          </section>
        </Suspense>

         <Suspense fallback={<h1 className="p-4">Loading Contact...</h1>}>
          <section id="contact">
            <Contact />
          </section>
        </Suspense> 

        {/* Define route for moreabout */}
        <Routes>
          <Route path="/moreabout" element={<MoreAbout />} /> {/* Correct route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
