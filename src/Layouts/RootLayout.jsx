import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Container from '../Components/Container';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className="bg-[#0b0f19] min-h-screen flex flex-col  text-white">
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