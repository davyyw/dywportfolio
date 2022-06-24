import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Helmet} from "react-helmet";
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Allprojects from "./components/Allprojects";
import Jsproject from "./components/Jsproject";
import Reactproject from "./components/Reactproject";
import Htmlproject from "./components/Htmlproject";
import Wordproject from "./components/Wordproject";
import Posts from "./components/Posts";
import SinglePost from "./components/SinglePost";
import PageSearch from "./components/PageSearch";
import Contact from "./components/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./scss/styles.scss";
import "./scss/bootstrap-5.0.0.min.css";
const ScriptsPath = process.env.PUBLIC_URL + '/scripts/';

function App() {
  AOS.init();

  return (
    <BrowserRouter>
      <div className="pageWrapper">
        <Header/>
        <main>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="projects" element={<Projects />}>
              <Route index element={<Allprojects />} />
              <Route path="jsproject" element={<Jsproject />} />
              <Route path="wordproject" element={<Wordproject />} />
              <Route path="htmlproject" element={<Htmlproject />} />
              <Route path="reactproject" element={<Reactproject />} />
            </Route>
            <Route path="/contact"  element={<Contact />}/>
            <Route path="/blog" exact element={<Posts/>} />
            <Route path='/blog/:id' element={<SinglePost/>} />
            <Route path="/search/:value" element={<PageSearch />} />
          </Routes>
        </main>
        <Footer />
    <Helmet>
      <script  async type="text/javascript" 
      src={`${ScriptsPath}jquery-3.6.0.min.js`} />

      <script  defer type="text/javascript" 
      src={`${ScriptsPath}bootstrap-5.0.0.min.js`} />
      
      <script  defer type="text/javascript" 
      src={`${ScriptsPath}jquery.magnific-popup-1.1.0.min.js`} />

      <script  defer type="text/javascript" 
      src={`${ScriptsPath}circle-progress-1.2.2.min.js`} />

      <script  defer type="text/javascript" 
      src={`${ScriptsPath}skill.bars.jquery.min.js`} />

      <script  defer type="text/javascript" 
      src={`${ScriptsPath}appear.min.js`} />

      <script defer type="text/javascript" 
      src={`${ScriptsPath}script.js`} />
    </Helmet>
    </div>
    </BrowserRouter>
  );
}

export default App;
