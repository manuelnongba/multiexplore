import axios from 'axios';
import { YOUTUBEKEY } from './config';

//INSERT YOUR YOUTUBE API KEY
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: YOUTUBEKEY,
    type: 'video',
  },
});
