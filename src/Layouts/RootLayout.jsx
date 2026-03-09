import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Container from '../Components/Container';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className=" min-h-screen flex flex-col   bg-base-100 text-base-content">
            <NavBar></NavBar>
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