<template>

  <Carousel v-bind="settings" :autoplay="2000" :breakpoints="breakpoints">
    <Slide v-for="slide in props.sliderImages" :key="slide">
      <nuxt-img loading="lazy"  class="w-full h-72 object-cover"
        :src="slide.url" alt=""/>
    </Slide>

    <template #addons>
        <div></div>
      <Pagination class="" />
      <Navigation />
    </template>
  </Carousel>
</template>
<script setup>
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'


// data
const settings = reactive({
      itemsToShow: 1,
      snapAlign: 'center',
    })

    const breakpoints = reactive({
      // 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
    })


const props = defineProps({sliderImages: Object})
    
const slider_images = ref(props.sliderImages)
</script>
<style lang="">
    
</style>