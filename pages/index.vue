<template lang="pug">
  section.section
    .columns.is-mobile
      card(title="Free" icon="github-circle") Open source on
        a(href="https://github.com/buefy/buefy") GitHub

      card(title="Responsive" icon="cellphone-link")
        b.has-text-grey Every component is responsive

      card(title="Modern" icon="alert-decagram") Built with 
        a(href="https://vuejs.org/") Vue.js and
        a(href="http://bulma.io/") Bulma
      card(title="Lightweight" icon="arrange-bring-to-front") No other internal dependency
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'
import Card from '~/components/Card'
export default {
  components: {
    Card
  },
  async asyncData({store}){
    await store.dispatch('fetchNotes')
  }
}

</script>
