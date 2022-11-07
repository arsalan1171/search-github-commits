import {owner,repo,url,octokit} from '../constants';

export const getCommits = async () => {
    const commits = await octokit.repos.listCommits({
        owner,
        repo,
    });  
    return commits;    
  }
  