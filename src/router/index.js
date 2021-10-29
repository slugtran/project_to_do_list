import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import HomePage from "../views/HomePage.vue";
import TodoList from "../components/TodoList.vue";
import test from "../views/test.vue";
import Title from "../components/Title.vue";
import Edit from "../components/Edit.vue";
import House from "../views/House.vue";
import PhanTrang from "../views/PhanTrang.vue";



const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/signin",
        name: "signin",
        component: SignIn,
    },
    {
        path: "/signup",
        name: "signup",
        component: SignUp,
    },
    {
        path: "/homepage",
        name: "homepage",
        component: HomePage,
    },
    {
        path: "/todolist",
        name: "todolist",
        component: TodoList,
    },
    {
        path: "/test",
        name: "test",
        component: test,
    },
    {
        path: "/title",
        name: "title",
        component: Title,
    },
    {
        path: "/edit",
        name: "edit",
        component: Edit,
    },
    {
        path: "/house",
        name: "house",
        component: House,
    },
    {
        path: "/phantrang",
        name: "phantrang",
        component: PhanTrang,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    mode: "history",
    routes,
});

export default router;