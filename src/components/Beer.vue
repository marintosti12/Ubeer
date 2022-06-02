<template>
   <div class="p-6 w-full h-1/2 cursor-pointer">
        <div class="flex content-center justify-center">
            <img class="h-28" :src=data.image>
        </div>
        <div class="flex justify-center content-between">
            <div class="flex-col text-center">
                <h1 class="text-gray-700 text-xs" >{{data.name}}</h1>
                <h1 class="font-bold mt-2 text-xl">{{data.format.volume}} {{data.format.unit}}</h1>
                <button v-on:click="addBeerToCart" class="mt-2 p-2 bg-green-600 cursor-pointer text-white rounded">Ajouter au pannier</button>
            </div>
        </div>
    </div>
</template>

<script>
import CartService from '../services/CartService'
import CartItem from '../models/CartItem'

export default {
  name: "BeerElement",
  props: {
    data: {
      type: Object
    },
  },
  methods: {
    addBeerToCart: function () {
      let cartService = new CartService();
      let item = new CartItem(this.data.name, 1, 10, this.data.image);

      cartService.addItemToCart(item);
    }
  }
};
</script>