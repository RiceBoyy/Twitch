import { createApp } from 'vue';
import {createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';

// router
import Wellcome from '../src/components/Wellcome.vue'

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {path: '/', name: 'Home', component: Wellcome}
    ]
})

createApp(App).use(router).mount('#app')

