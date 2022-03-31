import axios from "axios";
const PRODUCTRAPI_URL = "https://51.250.69.184:8080/v1/";
axios.defaults.withCredentials = true

//TODO создать некоторые ручки для продукт апи
class ProductApiService {

  brand (id) {
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "brand", {params:{id}})
    .then((response)=>{
      return response.data;
    }); 
  }

  echo (message) {
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "echo", {params:{message}})
    .then((response)=>{
      return response.data;
    }); 
  }

  category (number, limit, name, level) {
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "category", {params:{"page.number": number, "page.limit": limit, name, level }})
    .then((response)=>{
      return response.data;
    }); 
  }

  color(id) {
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "color", {params:{id}})
    .then((response)=>{
      return response.data;
    }); 
  }

  size(id) {
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "size", {params:{id}})
    .then((response)=>{
      return response.data;
    }); 
  }

  final_roduct(id) {
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "final-product", {params:{id}})
    .then((response)=>{
      return response.data;
    }); 
  }

  full_product (productId) {
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "full-product", {params:{productId}})
    .then((response)=>{
      return response.data;
    }); 
    }


  final_roductList(productId) {
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "final-product/list", {params:{productId}})
    .then((response)=>{
      return response.data;
    }); 
  }


  sizeList(){
    return axios
    .get(PRODUCTRAPI_URL + "size/list")
    .then((response)=>{
        return response.data;
      }
    );
  }

  listColor () {
    return axios //класс с методами:
	.get(PRODUCTRAPI_URL + "color/list")
  .then((response)=>{
		return response.data;
	}); 
  }

  listProducts  (number, limit, name, categoryId, brandId) {
    return axios //класс с методами:
	.get(PRODUCTRAPI_URL + "product/list", {params:{"page.number": number, "page.limit": limit, name, categoryId, brandId }})
  .then((response)=>{
		return response.data;
	}); 
  }


  listBrand () {
    return axios //класс с методами:
    .get(PRODUCTRAPI_URL + "brand/list")
    .then((response)=>{
      return response.data;
    }); 
  }

  colorDelete (id) {
      return axios //класс с методами:
      .delete(PRODUCTRAPI_URL + "color", {params:{id}})
      .then((response)=>{
        return response.data;
      }); 
  }

  colorCreate (name) {
      return axios //класс с методами:
      .post(PRODUCTRAPI_URL + "color", {name})
      .then((response)=>{
        return response.data;
      }); 
  }

  

}
export default new ProductApiService();