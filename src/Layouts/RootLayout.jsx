import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet, useLocation } from 'react-router';
import Container from '../Components/Container';
import Footer from '../Components/Footer';

import HeroBanner from '../Components/HeroBanner';
import Testimonials from '../Components/Testimonials';
import Sponsors from '../Components/Sponsors';
import ChoseUs from '../Components/ChoseUs';

const RootLayout = () => {
    const location = useLocation();
    return (
        <div className=" min-h-screen flex flex-col   bg-base-100 text-base-content">
            <NavBar></NavBar>
            {
              location.pathname === '/' && <>
                <HeroBanner></HeroBanner>
              </>
            }
             <main className="flex-1 pt-24">
        <Container>
          <Outlet />
        </Container>
      </main>
      {
                location.pathname === '/' && <> 
                <ChoseUs></ChoseUs>
                <Testimonials></Testimonials>
                <Sponsors></Sponsors>
                </> 
             }
    <footer>
        <Footer />
      </footer>   
        </div>
    );
};

export default RootLayout;