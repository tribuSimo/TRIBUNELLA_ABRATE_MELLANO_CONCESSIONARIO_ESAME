// router.js
import { createRouter, createWebHistory } from 'vue-router';
import login from './components/login.vue';
import registrazione from './components/registrazione.vue';
import home from './components/home.vue';
import dettagliAuto from './components/dettagliAuto.vue';
import effettuaPrenotazioni from './components/effettuaPrenotazioni.vue';
import prenotazioni from './components/prenotazioni.vue';


const routes = [
  {
    path: '/',
    // name : 'login',
    // component: login
    redirect : "/login"
  },
  {
    path: '/login',
    name: 'login',
    component: login // Pagina di login generica
  }
  ,
  {
    path: '/registrazione',
    name : 'registrazione',
    component: registrazione
  }
  ,
  {
    path: '/home',
    name : 'home',
    component: home
  },
  {
    path: '/dettagliAuto/:idAuto',
    name : 'Dettagli auto',
    component : dettagliAuto
  },
  {
    path: '/effettuaPrenotazioni/:idAuto',
    name : 'Effettua Prenotazioni',
    component: effettuaPrenotazioni
  },
  {
    path: '/prenotazioni/:idUtente',
    name : 'Prenotazioni',
    component: prenotazioni
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;