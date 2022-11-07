import './App.css';
import './commits-list/display-commits';
import React from "react";
import Client from './commits-list/display-commits';
import ReadLaterCommits from './commits-list/read-later-commits';
import { Route, Routes } from 'react-router-dom';

const App = () => {
   return(
   
       <Routes>
         <Route path="/" element={<Client />} />
         <Route path="/read-later-commits" element={<ReadLaterCommits />} />
       </Routes>
   )
 }
 
 export default App;