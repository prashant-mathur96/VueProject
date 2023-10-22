<template>
  <li class="list_item">
    <div class="list_item_des">
      <span class="user_avatar">
        <CAvatar :src="avatar" size="lg" />
      </span>
      <div class="user_info position-relative">
        <h3 class="user_title">{{ data.name }}</h3>
        <p class="user_email">{{ data.email }}</p>
        <p class="user_dob">{{ data.dob }}</p>
        <p class="user_ctry">{{ data.country }}</p>
        <router-link class="edit_btn" color="primary" :to="{name: 'update-user',params:{id: data._id}}">
          Edit
        </router-link>
      </div>
    </div> 
  </li>
</template>

<script>
import avatar from '@/assets/images/avatars/8.jpg'
export default {
  name: 'CardList',
  data() {
    return { avatar }
  },
  props: ['data'],
  setup(data) {

    console.log(data)
  }
}
</script>
