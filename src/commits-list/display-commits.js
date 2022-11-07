import React, { useState, useEffect } from "react";
import './display-commits.css';
import {getCommits} from '../service/service';
import { useNavigate } from "react-router-dom";

const Client = () => {
  let [commits, setCommits] = useState([]);
  const [search, setNewSearch] = useState("");

  let [readLater, setReadLater] =useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCommits();
  }, []);

  const fetchCommits = () => {
    getCommits().then(res=>{
     setCommits(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? commits
    : commits.filter((commit) =>
        commit.commit.message.toLowerCase().includes(search.toLowerCase())
      );

  const handleClick = (selectedCommit) => {
    if(!readLater.includes(selectedCommit)) {
      readLater.push(selectedCommit);
  }
  };

  return (
    <div>
      <input type="text" placeholder="Search Commit.."  value={search} onChange= { (e) => handleSearchChange(e) }/>
      <h1>Latest Commits</h1>
      <button onClick={ ()=> {navigate('/read-later-commits',  {state: {readLater}})}} >View Archived..</button>
      <div className='item-container'>
        {filtered.map((commit,index) => (
          <div className='card' key={index}>
            <img src={commit.author.avatar_url} alt='avatar' />
            <p>{commit.author.login}</p>
            commit msg: <p>{commit.commit.message}</p>
            <button onClick={() => {handleClick(commit)}}>Read later</button>
          </div>
        ))}
      </div>
    </div>
  );
};

  
export default Client;
