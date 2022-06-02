<template>
  <div class="flex flex-col h-screen">
    <nav-bar></nav-bar>
    <div class="flex flex-grow sm:flex-col md:flex-row lg:flex-row xl:flex-row flex-col" v-if="!loading">
      <div class="sm:w-full md:w-4/5 lg:w-4/5 xl:w-4/5 w-full">
        <div v-for="first in brewery.beers.slice(min, min + 1)" :key="first.index" class="flex flex-row items-center justify-center w-full h-full">
          <div class="flex sm:flex-col md:flex-row lg:flex-row xl:flex-row flex-col  justify-center items-center">
            <img :src="first.image" class="sm:h-mobileImage md:h-laptopImage lg:h-laptopImage xl:h-laptopImage h-mobileImage sm:w-mobileImage md:w-laptopImage lg:w-laptopImage xl:w-laptopImage w-mobileImage">
            <div class="flex flex-col sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 w-full">
              <h1 class="text-4xl mt-8 ml-16">{{first.name}}</h1>
              <p class="text-lg text-gray-400 mt-8 ml-16">{{first.description}}</p>
              <div class="flex flex-row mt-2 ml-16">
                <label>IBU {{first.ibu}}</label>
                <label class="ml-2">ABV {{first.abv}}</label>
                <label class="ml-2 uppercase">{{first.format.volume}} {{first.format.unit}}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:w-full md:w-1/5 lg:w-1/5 xl:w-1/5 w-full bg-gray-100 flex max-h-screen	 flex-col items-center">
        <svg v-if="min >= 1" v-on:click="LoadDown" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mt-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        <beer-element  v-for="item in brewery.beers.slice(min, max)" :key="item.index" :data="item">
        </beer-element>
        <svg v-if="max <= brewery.beers.length" v-on:click="LoadUp" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar";
import BeerElement from "@/components/Beer";
import config from  "../config/config"

export default {
  name: "BreweryView",
  data() {
    return {
      brewery: [],
      min: 0,
      max: 2,
      loading: true,
    }
  },
  components: {
    BeerElement,
    NavBar,
  },
  methods: {
    LoadUp: function () {
      this.min += 1;
      this.max += 1;
    },
    LoadDown: function () {
      if (this.min  >= 1) {
        this.min -= 1;
        this.max -= 1;
      }
    }
  },
  mounted() {
    const id = this.$route.params.id;

    this.getBrewery(id).then(response => {
      console.log(response)

      this.brewery = response
      this.loading = false
    })
  },
  setup() {
    return {
      getBrewery: async (id) => {
        try {
          const response = await fetch(config.api.url + "api/breweries/ "+ id.toString(), {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'text/plain'
            },
          });
          const data = await response.json();
          return data

        } catch (e) {
          console.log(e);
        }
      }
    };
  }
};
</script>
