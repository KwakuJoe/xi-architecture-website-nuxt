<template>
    <div class="flex lg:flex-row flex-col gap-y-3 gap-x-8 my-4">
        <div class="grow">
            <nuxt-img class="w-full h-96 object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg">
            </nuxt-img>
        </div>

        <div class="lg:w-1/4 flex flex-col justify-between">
            <div >
                <p class="text-base">CONSTRUCTION OF A PRIVATE HOUSE. ONE OR TWO FLOORS TO BUILD?</p>
            </div>

             <div class="flex flex-row justify-between">
                <p class="text-gray-500">Architecture</p>
                <p class="text-gray-500">2023</p>
            </div>
        </div>

        <div class="lg:w-1/4 flex flex-col justify-between">
            <p class="">Implemeting of the project of a private house on a narrow plot. Five years of operation. The chamber space formed by green planting offersthe coziness of a green carpet and the peace of decorative trees.</p>

            <UButton label="Read more" variant="link" icon="i-heroicons-"/>
        </div>
    </div>
</template>
<script setup>

</script>
<style>
    
</style>