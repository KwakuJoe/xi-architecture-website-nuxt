<template>
    <div class="mx-10 lg:my-10 my-5">
        <div class="flex flex-col lg:flex-row  justify-between">
            <p class="text-[min(10vw)]">SERVICES</p>
            <UButton color="black" icon="i-heroicons-arrow-path" @click="refresh" label="Refresh" variant="link" />
        </div>


            <!-- Accordian 1 -->
            <div class="mb-12" v-for="(service, index) in data.servcies.servicesList " :key="index">
                <div class="flex lg:flex-row flex-col gap-y-3 gap-x-10 items-start mb-5">
                    <p class="lg:basis-1/3">{{ service.name }}</p>
                    <div class="flex flex-row gap-x-10 w-full basis-grow justify-between items-center">
                        <p class="font-medium text-left ">{{ service.descriptions }}</p>
                        <UButton color="black" :icon="show ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
                          @click="show = !show" label="Gallery" variant="link" />
                    </div>
                </div>

                <!--content -->
                <Transition>
                <div v-if="show">
                    <div class="flex flex-col lg:flex-row gap-x-3">
                        <div class="basis-3/5  w-full hidden lg:block">
                            <!-- initial image -->
                            <nuxt-img loading="lazy"  class=" w-full h-72 object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                                 :src="service.initialImage" 
                            alt=""/>
                        </div>

                        <div class="basis-full">
                                <!-- <p>{{ service.courouselImages }}</p> -->
                             <Slider :sliderImages="service.courouselImages"/>
                            
                        </div>

                        <!-- slider -->
                    </div>
                </div>
                </Transition>

            </div>
   </div>
</template>
<script setup>

const show = ref(false);

const { data, refresh } = await useFetch('/api/get_services')

</script>
    <style>
    .v-enter-active{
        transition: opacity 0.5s ease;
    }
        .v-leave-active {
        transition: opacity 0.5s ease;
        }

        .v-enter-from,
        .v-leave-to {
        opacity: 0;
        }
    </style>