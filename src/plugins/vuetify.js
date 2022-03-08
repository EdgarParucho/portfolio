import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#10AF82',
        secondary: '#34495E',
        accent: '#00ADD8',
        info: '#00A29C',
        error: '#FF5252',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    },
  },
});
