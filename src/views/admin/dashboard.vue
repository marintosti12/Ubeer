<template>
 <div class="flex flex-row">
   <div class="w-64 bg-red-600 h-screen">
     <div class="flex justify-center p-4">
       <h1 class="text-xl">Dashboard</h1>
     </div>
     <div class="flex flex-col  justify-center w-full text-center mt-8">
       <h1>Beer</h1>
     </div>
   </div>

   <div class="p-8 w-full">
     <dashboard-beer></dashboard-beer>
   </div>
 </div>
</template>

<script>
import DashboardBeer from "@/views/admin/dashboard-beer";
export default {
  name: "dashboard-vue",
  components: {DashboardBeer}
}
</script>

<style scoped>

</style>