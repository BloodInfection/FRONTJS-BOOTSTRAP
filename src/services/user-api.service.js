import axios from "axios";
const USERAPI_URL = "https://62.84.114.46:8080/v1/";
axios.defaults.withCredentials = true

class UserApiService {
  login(email, password) {
    return axios
      .post(USERAPI_URL + "login", { email, password })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
	return axios
	  .post(USERAPI_URL + "logout", {})
	  .then((response) => {
		  localStorage.removeItem("user");
		  return response.data;
	  });
  }
  register(name, password, surname, patronymic, phone, email) {
    return axios
	.post(USERAPI_URL + "user", { name, password, surname, patronymic, phone, email })
	.then((response)=>{
		if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
	}); 
  }
}
export default new UserApiService();