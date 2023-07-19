<template>
    <div class="mx-10">
    <!-- twelve text -->

    <div class="flex flex-row items-center my-10 lg:mb-0">
        <p class="text-[min(15vw)] grow">TWELVE</p>
        <div class="flex flex-row  justify-center items-center w-10 bg-black dark:bg-white h-10 rounded-full animate-bounce">
            <UIcon class="text-white dark:text-black" name="i-heroicons-arrow-down"  />
        </div>
    </div>

        <!-- colums of text -->

        <div class="flex flex-col lg:flex-row gap-4 lg:mt-10 lg:mb-10 mb-4">
            <p class="grow">COMFORT / EFFICIENCY / TECHNOLOGY</p>
            <p class="lg:w-1/4">Architecture beraeu "XII" offer services in the design of commercial and residential buildings, interiror design, landscape design.</p>
            <p class="lg:w-1/4 hidden lg:block">In our works , we prefer the harmony space and outdor envinronment combining creative ideas with functional convience.</p>
        </div>
        <!-- Hero image -->
        <nuxt-img loading="lazy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        class="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 max-h-screen w-full" />
    </div>
</template>
<script setup>

</script>
<style>
    
</style>