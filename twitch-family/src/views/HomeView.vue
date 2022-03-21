<template>
  <div class="home">
    <WellcomeUser />
  </div>
</template>

<script>
// @ is an alias to /src
import WellcomeUser from '@/components/WellcomeUser.vue'

export default {
  name: 'HomeView',
  components: {
    WellcomeUser
  }
}
</script>