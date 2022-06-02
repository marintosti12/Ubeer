<template>
  <nav-bar></nav-bar>
  <h1 class=" p-4 text-2xl">Liste des brasseries</h1>

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
        limit: 12,
        offset: 0
      }
    },
    components: {
      NavBar,
      BreweryElement

    },
    mounted() {
        this.getAllBreweries(this.limit, this.offset).then(response => {
          this.breweries = response.rows
        })
    },
    methods: {
      paginateUp: function () {
        this.offset += 12;
        this.getAllBreweries(this.limit, this.offset).then(response => {
          this.breweries = response.rows

          if (this.breweries.length == 0) {
            this.offset -= 12;
            this.getAllBreweries(this.limit, this.offset).then(response => {
              this.breweries = response.rows
            })
          }
        })
      },
      paginateDown: function () {
        this.offset -= 12;
        if (this.offset <= 0)
          this.offset = 0

        this.getAllBreweries(this.limit, this.offset).then(response => {
          this.breweries = response.rows
        })
      }
    },
    setup() {
      return {
        getAllBreweries: async (limit, offset) => {
          const response = await fetch(config.api.url + 'api/breweries/'+limit+'/'+offset, {

          });
          const data = await response.json();
          return data
        }
      };
    }
  };
</script>
