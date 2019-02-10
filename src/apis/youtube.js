import axios from 'axios';

const KEY = 'AIzaSyCBo4LZDbHec0UGSP2zA5AmOqZnrcOef0g';
const CHANNEL_VERTICE = 'UCj1fZoxhojonGnrN3qpisew';
const CHANNEL_PERNAMBUCARTE = 'UC-bzBiBYFOh89ibW8vYvcng';

export default axios.create({
    
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet',
        maxResults: 20,
        channelId: CHANNEL_PERNAMBUCARTE,
        key: KEY
    }

})