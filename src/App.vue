<template>
  <v-app>
    <my-simple-resume id="app"></my-simple-resume>
  </v-app>
</template>

<script>
import MySimpleResume from "./components/Resume"
export default {
  name: 'App',
  components: {
      MySimpleResume
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,500,600&display=swap');
#app {
  font-family: 'Raleway', sans-serif;
}
</style>
