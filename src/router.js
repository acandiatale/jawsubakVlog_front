import board from "./components/Board.vue"
import app from "./App.vue"
import VueRouter from "vue-router"

const routes = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: app},
        {path : '/board', component: board}
    ]
});
export default routes; 