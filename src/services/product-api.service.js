import axios from "axios";
const PRODUCTRAPI_URL = "https://51.250.69.184:8080/v1/";
axios.defaults.withCredentials = true

//TODO создать некоторые ручки для продукт апи
class ProductApiService {
  login(email, password) {
    return axios
      .post(PRODUCTRAPI_URL + "login", { email, password })
      .then((response) => {
        if (response.data.sessionID) {
          localStorage.setItem("sessionID", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
	return axios
	.post(PRODUCTRAPI_URL + "logout", {})
	.then((response) => {
		localStorage.removeItem("sessionID");
		return response.data;
	});
  }
  register(name, password, surname, patronymic, phone, email) {
    return axios
	.post(PRODUCTRAPI_URL + "user", { name, password, surname, patronymic, phone, email })
	.then((response)=>{
		return response.data;
	}); 
  }
}
export default new ProductApiService();