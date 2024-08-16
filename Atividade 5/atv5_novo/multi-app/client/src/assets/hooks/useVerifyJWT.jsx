
import axios from 'axios';

const useVerifyJWT = () => {
  

  const updateToken = async () => {
    
    const token = {
      headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` },
    };

    try {
      const response = await axios.get('http://localhost:3000/check', token);
      if (response.data) {
        return true; // Token é válido
      }
    } catch (error) {
      alert('Token expired or invalid. Please Login again.');
      return error; // Token inválido
    } 
  };

  return updateToken; // Exporta apenas a função updateToken
};

export default useVerifyJWT;
