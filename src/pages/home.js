import React from 'react';
import NavBar from '../components/navBar';
import Hero from '../components/heroSection'
import MainPage from '../components/Services'
import BlogSection from '../components/blogSection'


function Home() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <MainPage/>
      <BlogSection/>
    </div>
  );
}

export default Home;
