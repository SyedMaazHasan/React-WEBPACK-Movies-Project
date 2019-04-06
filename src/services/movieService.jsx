import axios from "axios";
function getMovies() {
  const resu = axios.get("http://localhost:3900/api/movies");
  console.log("hahaha");
  console.log("abc=", resu);
  return resu;
}
export default getMovies;
