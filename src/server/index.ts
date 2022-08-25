import axois from 'axios';

const server = axois.create({
  baseURL: 'http://localhost:3333'
});

export default server;