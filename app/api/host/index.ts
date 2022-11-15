//const Host = 'http://localhost:3000';
const Host = 'https://sepma.onrender.com';

export const endPoint = {
  login: {
    name: 'Login',
    url: '/api/v1/auth/login',
    method: 'POST',
  },
  getMany: {
    name: 'Get Many',
    url: '/api/v1/system/get',
    method: 'POST',
  },
  insertMany: {
    name: 'Insert Many',
    url: '/api/v1/system/inserts',
    method: 'POST',
  },
  updateMany: {
    name: 'Update Many',
    url: '/api/v1/system/update',
    method: 'POST',
  },
};

export default Host;
