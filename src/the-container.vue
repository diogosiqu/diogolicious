<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import { map } from 'lodash'
export default {
  name: 'TheContainer',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.$db.ref('diogolicious-99d60').on('value', data => {
      const obj = data.val()
      this.list = map(obj, (site, index) => {
        site.id = index
        return site
      })
    })
  }
}
</script>

<style lang="sass" src="./assets/sass/app.scss"></style>
