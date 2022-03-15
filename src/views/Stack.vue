<template>
  <v-container>
    <section-card :section="$router.history.current" />
    <v-row align="center" v-for="stack, i of technologies" :key="i">
      <v-col :cols="mobileBreakpoint ? 12: 6" :order="i%2">
        <v-img :src="stack.img" max-width="80%" eager></v-img>
      </v-col>
      <v-col :cols="mobileBreakpoint ? 12: 6">
        <stack-item :stack="stack"></stack-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import technologies from '@/helpers/technologies.js'
import SectionCard from '@/components/SectionCard.vue'
import StackItem from '@/components/StackItem.vue'

  export default {
    name: 'Stack',

    components: { SectionCard, StackItem },
    data: () => {
      return {
        technologies
      }
    },
    computed: {
      mobileBreakpoint () {
        return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
      }
    }
  }
</script>
