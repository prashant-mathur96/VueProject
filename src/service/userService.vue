<script>
import axios from 'axios'
const baseUrl = 'https://tekdi-challenges.appspot.com/api'
export default class userService {
  createUser(formData) {
    console.log(formData)
    axios({
      url: `${baseUrl}/People`,
      method: 'post',
      data: formData,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'User-Agent': 'googlebot',
      },
    }).then((result) => {
      console.log(result)
    })
  }
  getUser() {
    const responce = axios({
      url: `https://jsonplaceholder.typicode.com/users`,
      method: 'get',
    }).then((result) => {
      return result.data
    })
    return responce
  }
}
</script>
