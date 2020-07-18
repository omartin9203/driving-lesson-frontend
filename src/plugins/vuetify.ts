import Vue from 'vue';
import Vuetify from 'vuetify';
//import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
       iconfont: 'md', // default - only for display purposes
    },
});
