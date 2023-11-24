import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});

export const pushToRepo = async (owner: string, repo: string, files: any[]) => {
  try {
    const res = await github.post(`/repos/${owner}/${repo}/contents`, files);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};