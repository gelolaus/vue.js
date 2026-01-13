const app2 = Vue.createApp({
  data() {
    return {
      manyFoods: [
        'pics/img_burrito.svg',
        'pics/img_salad.svg',
        'pics/img_cake.svg',
        'pics/img_soup.svg',
        'pics/img_fish.svg',
        'pics/img_pizza.svg',
        'pics/img_rice.svg'
      ]
    }
  }
})

app2.mount('#app2')
 