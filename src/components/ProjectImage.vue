<template>
  <v-container>
    <v-card>
      <v-img class="grey lighten-2" :src="image.src" aspect-ratio="1">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5" />
          </v-row>
        </template>
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ProjectImage',
  props: ['image', 'mobileBreakpoint']
}
</script>