import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet, useLocation } from 'react-router';
import Container from '../Components/Container';
import Footer from '../Components/Footer';

import HeroBanner from '../Components/HeroBanner';

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
      <Footer />   
        </div>
    );
};

export default RootLayout;