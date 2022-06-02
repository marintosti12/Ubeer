<template>
   <div v-on:click="loadInfo" class="rounded-xl overflow-hidden shadow-lg bg-white p-2 cursor-pointer">
     <div class="flex content-center justify-center">
            <img class="" :src=data.image height="100" width="100">
        </div>
        <div class="flex justify-center content-between">
            <div class="flex-col text-center">
                <h1 class="font-bold mt-2 text-xl">{{data.name}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import router from "@/router";

export default {
  name: "BreweryElement",
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    loadInfo: function () {
      router.push({name: "brewery-info", params: {"id": this.data.id}});
    }
  }
};
</script>