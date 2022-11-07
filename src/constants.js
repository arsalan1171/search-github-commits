const { Octokit } = require('@octokit/rest');
export const octokit = new Octokit({
    auth: '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',
});

export const owner = 'arsalan1171';
export const repo = 'angular-code-basic-app';
export let author;
author = {
    name: 'Arsalan',
    email: 'arsalan665@gmail.com',
};
export const url =  '/repos/{owner}/{repo}/{path}';
export const ref =  'heads/master'; //
