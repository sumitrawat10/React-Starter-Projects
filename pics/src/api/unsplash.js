import axios from "axios";

export default axios.create({
  baseURL : 'https://api.unsplash.com',
  headers : {
    Authorization: 'Client-ID _HTLkJgxaUCSpyTYRTMolMJlqI1sVSRY4ap8lodGr8Y'
  }
});
