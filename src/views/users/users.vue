<template>
  <div class="form-btn">
    <router-link class="add-user" color="primary" to="add-user">
      Add User
    </router-link>
  </div>
  <CRow>
    <CCol>
      <CCard>
        <CCardBody>
          <div class="user_list_wrap">
            <ul class="user_list">
              <CardList
                v-for="item in items"
                :key="item._id"
                :data="{ ...item }"
              ></CardList>
            </ul>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
<script>
import CardList from '@/components/CardList.vue'
import { CRow } from '@coreui/vue'
// import { mockClientItems } from './mock'
import avatar from '@/assets/images/avatars/8.jpg'
import userService from '../../service/userService'
// import { Header, Item } from 'vue3-easy-data-table';
import { socket } from "@/components/socket"

const userServiceObj = new userService()
export default {
  name: 'users',
  data() {
    return {
      items: [],
      avatar: avatar,
      CardList
     
    }
  },
  methods :{ 
    getUsers() { 
      userServiceObj.getUser().then((result) => {
        this.items = result.docs
      })
    }

  },
  created () {
    
  },
  mounted() {
    // userServiceObj.getUser()
    socket.timeout(5000).emit("userAddedSuccess", {}  , () => {
      console.log(`User Successfully Created`);
    });
    socket.on('userAdded', (result) => {
      console.log(result)
      this.getUsers()
    })
    this.getUsers()
    
   // setInterval(() => this.socket.emit("userAdded",{name:"sad"}), 100)
    // const items = mockClientItems(10)
  },
  components: {
    CRow,
    CardList,
  },
}
</script>
