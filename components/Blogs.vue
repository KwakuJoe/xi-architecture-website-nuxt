<template>
    <div class="mx-10 lg:my-10 my-5">
       <p class="text-[min(10vw)]">BLOG</p>

       <div class="flex flex-row lg:w-1/4 gap-x-3">
        <USelectMenu v-model="selectedType" :options="types" />
        <USelectMenu v-model="selectedYear"   :options="years" />
       </div>

       <!-- Blog list -->
       <BlogTile/>
       <BlogTile/>
       <BlogTile/>
   </div>
</template>
<script setup>
const types = ['Arhitecture', 'Interiors', 'Constructions', 'Competitive', 'All Categories',]
const years = ['2023', '2022', '2021', '2020', 'later years',]
const selectedType = ref(types[0])
const selectedYear = ref(years[0])

</script>
<style>
   
</style>