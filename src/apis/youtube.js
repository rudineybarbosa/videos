import axios from 'axios';

const KEY = 'AIzaSyCBo4LZDbHec0UGSP2zA5AmOqZnrcOef0g';

export default axios.create({
    
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet',
        maxREsults: 5,
        key: KEY,
    }

})