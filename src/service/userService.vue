<script>
import axios from 'axios'
const baseUrl = 'http://localhost:8000/'
export default class userService {
  createUser(formData) {
    console.log(formData)
    const createRes = axios({
      url: `${baseUrl}users`,
      method: 'post',
      data: formData,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'multipart/form-data',
        'User-Agent': 'googlebot',
      },
    }).then((result) => {
      console.log(result)
      return {result: result, sucess: true, msg: "User created successfully"}
    }).catch((err) => {
      let errHandler = err.response.data.errors.msg;
      return {msg: errHandler, sucess: false}
    })
    return createRes
  }
  getUser() {
    const response = axios({
      url: baseUrl + 'users',
      method: 'get',
    }).then((result) => {
      return result.data
    })
    return response
  }
  getUserById(id) {
    const response = axios({
      url: baseUrl + 'users/' + id,
      method: 'get',
    }).then((result) => {
      return result.data
    })
    return response
  }

  updateUser(formData, id) {
    console.log(formData)
    const updateRes = axios({
      url: `${baseUrl}users/` + id,
      method: 'patch',
      data: formData,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'multipart/form-data',
        'User-Agent': 'googlebot',
      },
    }).then((result) => {
      console.log(result)
      return {result: result, sucess: true, msg: "User created successfully"}
    }).catch((err) => {
      let errHandler = err.response.data.errors.msg;
      return {msg: errHandler, sucess: false}
    })
    return updateRes
  }

    


}
</script>
