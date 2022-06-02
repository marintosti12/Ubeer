<template>
  <nav-bar></nav-bar>
  <h1 class="mt-4 p-4 text-2xl">Liste de bières</h1>

    <div class="grid grid-cols-4 mt-2 gap-4 p-4">
      <brewery-element v-for="item in breweries" :key="item.index" :data="item">

      </brewery-element>
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
        breweries: []
      }
    },
    components: {
      NavBar,
      BreweryElement

    },
    mounted() {
        this.getAllBreweries().then(response => {
          this.breweries = response
        })
    },
    setup() {
      return {
        getAllBreweries: async () => {
          console.log(config.api.url + 'api/breweries');
          const response = await fetch(config.api.url + 'api/breweries', {

          });
          console.log(response)
          const data = await response.json();
          return data
        }
      };
    }
  };
</script>
