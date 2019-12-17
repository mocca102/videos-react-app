import axios from 'axios';

const key = 'AIzaSyBgl0_AcLJl_pVgqm3Jp3CL7jKND8AhQyQ';

export const baseParams = {
  part: 'snippet',
  maxResults: '5',
  key,
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: baseParams,
});
