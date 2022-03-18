<template>
  <v-container>
    <section-card :section="$router.history.current" />
    <v-row v-for="aspect, i of aspects" :key="i" align="center">
      <v-col :cols="mobileBreakpoint ? 12: 6" :order="i%2">
        <v-img :src="aspect.img" max-width="80%" eager></v-img>
      </v-col>
      <v-col>
        <about-item :aspect="aspect"></about-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import aspects from '@/helpers/aspects.js'
import SectionCard from '@/components/SectionCard.vue'
import AboutItem from '@/components/AboutItem.vue'

  export default {
    name: 'About',

    components: { SectionCard, AboutItem },
    data: () => {
      return {
        aspects
      }
    },
    computed: {
      mobileBreakpoint () {
        return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
      }
    }
  }
</script>
