import Api from "../utils/Api";

const login = async (params) => {
  console.log(params);
  try {
    const response = await Api.post("/auth/login/", params);
    return response; 
  } catch (error) {
    console.log(error);
  }
};
   


const getUserById = async (id) => {
  try {
    const response = await Api.post(`/auth/users/${id}/`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const AuthService = {
  login,
  getUserById
};
