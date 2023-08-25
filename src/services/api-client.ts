import axios  from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api' ,
  params: {
    key: '11895751e7014332864a123228663c80'
  }
})