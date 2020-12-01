import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        iconfont: 'mdi'
    },

    theme: {
        themes: {
            light: {
                primary: '#F9A825',
                secondary: '#2b3648',
                third: '#fcfaf2',
                success: '#3cd1c2',
                info: '#ffaa2c',
                error: '#f83e70',
                
            },
        }, 
    },
});
