<template>
  <nav-bar></nav-bar>
  <h1 class=" p-4 text-2xl">Liste des brasseries</h1>

  <div class="w-full px-3 mb-6 md:mb-0">
    <div class="relative">
      <select  @change="selectCity($event)" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option>Toutes les villes</option>
        <option v-for="item in cities"  v-bind:key="item.city">{{ item.city }}</option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  </div>
    <div class="grid grid-cols-4 gap-4 p-2">
      <brewery-element v-for="item in breweries" :key="item.index" :data="item">

      </brewery-element>
    </div>

    <div class="flex justify-center	justify-items-center items-center w-full">
      <div class="p-3 cursor-pointer bg-gray-200 m-2" v-on:click="paginateDown">Précédent</div>
      <div class="p-3 cursor-pointer bg-gray-200 m-2" v-on:click="paginateUp">Suivant</div>
    </div>
</template>

<script>
  import BreweryElement from "@/components/Brewery";
  import NavBar from "@/components/Navbar";
  import config from  "../config/config";

  export default {
    name: "HomeView",
    data() {
      return {
        breweries: [],
        cities: [],
        city: "",
        limit: 12,
        offset: 0
      }
    },
    components: {
      NavBar,
      BreweryElement

    },
    mounted() {
        this.getAllBreweries(this.limit, this.offset, this.city).then(response => {
          this.breweries = response.rows
        })

        this.getAllCities().then(response => {
          this.cities = response
        })
    },
    methods: {
      selectCity(event) {

        // eslint-disable-next-line no-empty
        if (event.target.value === "Toutes les villes") {
          this.city = ""
        }
        else
          this.city = event.target.value

        this.offset = 0

        this.getAllBreweries(this.limit, this.offset, this.city).then(response => {
          this.breweries = response.rows
        })
      },

      paginateUp: function () {
        this.offset += 12;
        this.getAllBreweries(this.limit, this.offset, this.city).then(response => {
          this.breweries = response.rows

          if (this.breweries.length == 0) {
            this.offset -= 12;
            this.getAllBreweries(this.limit, this.offset, this.city).then(response => {
              this.breweries = response.rows
            })
          }
        })
      },
      paginateDown: function () {
        this.offset -= 12;
        if (this.offset <= 0)
          this.offset = 0

        this.getAllBreweries(this.limit, this.offset, this.city).then(response => {
          this.breweries = response.rows
        })
      }
    },
    setup() {
      return {
        getAllBreweries: async (limit, offset, name) => {
          const response = await fetch(config.api.url + 'api/breweries/'+limit+'/'+offset+'/?city='+name, {

          });

          const data = await response.json();
          return data
        },

        getAllCities: async () => {
          const response = await fetch(config.api.url + 'api/breweries/cities', {

          });
          const data = await response.json();
          return data
        }
      };
    }
  };
</script>
