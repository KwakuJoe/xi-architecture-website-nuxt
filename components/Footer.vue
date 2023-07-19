<template>
    <div class=" p-10 w-full bg-black dark:bg-white text-white dark:text-black mt-10">
    <div class="flex flex-row justify-between items-end">
        <div class="flex flex-col gapy-0 items-center">
          <!-- logo -->
          <h5 class="font-bold text-5xl">XI</h5>
          <p class="xs">architects</p>
        </div>
        <button type="button" class="px-20 py-3 bg-white dark:bg-black text-black dark:text-white bg-dark">Contact us</button>
    </div>


    <!-- links and address -->


    <div class="flex md:flex-row flex-col w-full justify-center gap-x-10 gap-y-5 mt-6">
        <div class="flex flex-col">
            <p>+233 553410199</p>
            <p>Accra - Dansoman, Ghana</p>
            <p>kwakuampah@gmail.com</p>
        </div>
        <div class="flex flex-row">
            <div class="flex flex-col">
            <UButton label="Project"  color="white"   variant="link"/>
            <UButton label="Team"  color="white" variant="link"/>
            <UButton label="Career"  color="white" variant="link"/>
            <UButton label="Workflow"  color="white" variant="link"/>
            <UButton label="Blog" color="white" variant="link"/>
        </div>
        <div class="flex flex-col">
            <UButton label="Project"  color="white"   variant="link"/>
            <UButton label="Team"  color="white" variant="link"/>
            <UButton label="Career"  color="white" variant="link"/>
        </div>
        </div>
    </div>

    <UButton variant="link" class="flex w-full justify-center mt-4" color="white"  to="https://www.behance.net/gallery/174253593/Website-architectural-bureau?tracking_source=search_projects|login+user+interface+website" label="Inspired by architectural bureau (Sofi Babych - Creative Designer)" />
   </div>
</template>
<script setup>

</script>
<style>
   
</style>