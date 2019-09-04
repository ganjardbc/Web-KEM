import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

// texts
import Texts from './components/texts/Index.vue'

// students
import Students from './components/students/Index.vue'

// kem
import KEM from './components/kem/Index.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/texts',
			name: 'texts',
			component: Texts,
		},
		{
			path: '/students',
			name: 'students',
			component: Students,
		},
		{
			path: '/kem',
			name: 'kem',
			component: KEM
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
    	{
			path: '/about',
			name: 'about',
			component: About,
		},
	],
});
