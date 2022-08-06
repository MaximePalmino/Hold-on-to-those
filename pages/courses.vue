<script setup lang="ts">
import Resto from '../interfaces/Resto'



// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = ref<any>({
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex){
    console.log([this.starterMenu[starterIndex], this.mainMenu[mainIndex]])
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]

  },

});
function yes(un, deux) {
restaurant.value.order(un, deux);

    console.log(un, deux)

}
onMounted(() => {

for(let i = 1; i <= 100; i++){
 
                console.log(i)

    }
})
function nope() {
    
}
</script>

<template>
<form v-on:submit.prevent>
    <h1 @click="yes(index, index)" v-for="(value, name, index) in restaurant">{{index}} {{index}}</h1>
</form>
</template>

<style scoped>
h1 {
    color: white;
}
</style>