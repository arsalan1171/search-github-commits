import React from "react";
import { useLocation } from "react-router-dom";
import './display-commits.css';

const ReadLaterCommits = () =>{
    const {state}  = useLocation();

    return (
        <div>
          <h1>Archived Commits</h1>
          {state?.readLater.length === 0 && <h2>no archived commits</h2>}
          <div className='item-container'>
            { state?.readLater.map((commit,index) => (
              <div className='card' key={index}>
                <img src={commit.author.avatar_url} alt='avatar' />
                <p>{commit.author.login}</p>
                commit msg: <p>{commit.commit.message}</p>
              </div>
            ))}
          </div>
        </div>
      );

}

export default ReadLaterCommits;