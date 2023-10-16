<template>
  <li class="list_item">
    <div class="list_item_des">
      <span class="user_avatar">
        <CAvatar :src="avatar" size="lg" />
      </span>
      <div class="user_info">
        <h3 class="user_title">{{ data.name }}</h3>
        <p class="user_email">{{ data.email }}</p>
        <p class="user_dob">{{ data.phone }}</p>
        <p class="user_ctry">{{ data.website }}</p>
        <p class="user_ctry">{{ data.company.name }}</p>
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
}
</script>
