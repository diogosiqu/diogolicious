<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <li v-for="item in list" :key="item.key" class="list-itens">
        {{item.bookmark_title}} <br>
        <a :href="item.bookmark_link">{{ item.bookmark_link }}</a>
        <p>{{ item.tag }}</p>
      </li>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import _ from 'lodash' todo verificar documentaçao lodash
export default {
  name: 'TheContainer',
  data () {
    return {
      repos: [],
      configs: {
        // filter: '',
        orderBy: 'bookmark_title'
      }
    }
  },
  mounted () {
    this.$db.ref().on('value', snapshot => {
      this.repos = snapshot.val()
    })
  },
  computed: {
    list () {
      // aki é onde a reatividade acontece - estudar reatividade https://www.youtube.com/watch?v=07-TvnH7XNo&list=PLcoYAcR89n-qq1vGRbaUiV6Q9puy0qigW
      // const list = _.orderBy(this.repos, this.configs.orderBy)
      return this.repos
    }
  }
}
</script>

<style lang="sass" src="./assets/sass/app.scss"></style>
