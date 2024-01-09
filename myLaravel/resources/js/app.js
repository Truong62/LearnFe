import './bootstrap';
import Vue from 'vue';
import SearchComponent from './components/SearchComponent.vue';

Vue.component('search-component', SearchComponent);

const app = new Vue({
  el: '#app',
});