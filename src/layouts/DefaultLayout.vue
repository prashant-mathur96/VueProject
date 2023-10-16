<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <div class="body flex-grow-1 px-3 mt-3">
        <CContainer lg>
          <router-view />
        </CContainer>
      </div>
    </div>
  </div>
</template>
<script>
import { CContainer } from '@coreui/vue'
import AppSidebar from '@/components/AppSidebar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppSidebar,
    CContainer,
  },
}
</script>
