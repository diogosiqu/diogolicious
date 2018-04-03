<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <div class="form">
        <div class="form-group">
          <label for="">Bookmark Url</label>
          <input type="text" class="form-control" id="" placeholder="Url" v-model="bookmark.bookmark_link">
        </div>
        <div class="form-group">
          <label for="">Bookmark Title</label>
          <input type="text" class="form-control" id="" placeholder="Title" v-model="bookmark.bookmark_title">
        </div>
        <div class="form-group">
          <label for="">Bookmark Description</label>
          <input type="text" class="form-control" id="" placeholder="Description" v-model="bookmark.description">
        </div>
        <div class="form-group">
          <label for="">Tags</label>
          <input type="text" class="form-control" id="" placeholder="Tags" v-model="bookmark.tag">
        </div>
        <button @click="saveBookmark()">Enviar</button>
      </div>
      <li v-for="item in list" :key="item.key" class="list-itens">
        {{item.bookmark_title}} <br>
        <a :href="item.bookmark_link">{{ item.bookmark_link }}</a>
        <p>
          {{ item.tag }}
        </p></li>
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
      },
      bookmark: {
        bookmark_link: '',
        bookmark_title: '',
        description: '',
        tag: ''
      }
    }
  },
  mounted () {
    this.$db.ref().on('value', snapshot => {
      this.repos = snapshot.val()
    })
  },
  methods: {
    saveBookmark () {
      this.$db.ref().push(this.bookmark)
    }
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
