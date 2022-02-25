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
        primary: '#41B883',
        secondary: '#00ADD8',
        accent: '#34495E',
        info: '#00A29C',
        error: '#FF5252',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
});
