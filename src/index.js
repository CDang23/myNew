const hocVue = document.getElementById('hocVue')
const header = Vue.createApp({
    data() {
        return {
            home: 'home',
            band: 'band',
            tour: 'tour',
            contact: 'contact',
            more: 'more',
            search_btn:'float-right '
        } 
    },
}).mount(hocVue);