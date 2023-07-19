<template>
    <div class="mx-10">
        <!-- twelve text -->
        <p class="text-[min(10vw)]">TEAM</p>


        <!-- CEO -->
        <div class="flex flex-col lg:flex-row gap-x-14 gap-y-5">
            <div class="grow">
                <nuxt-img loading="lazy"  class="w-full h-auto object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                 src="https://images.unsplash.com/photo-1520078452277-0832598937e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                alt=""/>
            </div>

            <div class="flex flex-col justify-between lg:w-1/4">
                <div >
                    <p class="text-base">KWAKU JOE AMPAH (III)</p>
                    <p class="text-gray-500">CEO - Founder</p>
                    <p class="mt-5">Specialize of the "XII" office have experience working with foreign compnaies: "Sifter-Kyiv" (Greate Britain) and residential companies.</p>
                </div>

                <div>
                    <p class="text-base">CONTACT</p>

                        <div class="flex flex-col gap-y-3 mt-5">
                            <div class="flex justify-start gap-x-10">
                            <p class="text-gray-500">Email</p>
                            <p >kwakuampah2@gmail.com</p>
                        </div>
                        <div class="flex justify-start gap-x-10">
                            <p class="text-gray-500">Instgram</p>
                            <p >@kwakujoe_02</p>
                        </div>
                        <div class="flex justify-start gap-x-10">
                            <p class="text-gray-500">Telegram</p>
                            <p >kwakujoe</p>
                        </div>
                    </div>

                    <button type="button" class="px-4 py-2 w-full mt-10 dark:text-black dark:bg-white text-white bg-dark">Send Email</button>

                </div>
            </div>

        </div>


        <!-- CO CEO -->

        <div class="flex  flex-col lg:flex-row mt-20 gap-x-6 gap-y-2">
            <p class="grow">DEVELOPMENT OF A CONCEPT IDEA ON THUMBMAIL.</p>
            <div>
                <nuxt-img loading="lazy"  class=" w-full h-auto object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                 src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                alt=""/>
            </div>
            <div class="lg:w-1/4 flex flex-col justify-between">
                <div >
                    <p class="text-base">Lamar .K. Jameson(III)</p>
                    <p class="text-gray-500">CO - Founder</p>
                    <p class="mt-5">Specialize of the "XII" office have experience working in Ukrain and foreign companies. "Sifter-Kyiv" (Greate Britain) and residential companies and FORUM CDC (Sweden) in developemtn of hotel, office, shopping and entertainment and residential complex.</p>
                </div>

                <div>
                    <button type="button" class="px-4 py-2 w-full mt-10 dark:text-black dark:bg-white text-white bg-dark">Send Email</button>
                </div>
            </div>
        </div>

        <!-- ARTIST ON THE TEAM -->
        <div class="flex flex-row mt-10">
            <div class="lg:w-1/4">
                <p class="text-base">+12 ARTIST IN OUR TEAM</p>
                <p class="text-base mt-3">Mordern architecture, construction or ordinary repairs are no longer possible without the use of energy-saving technologies. Sepecialists of our company carefully monitor all our markets trends, and therefore will be happy to help you make the right choice.</p>
            </div>
        </div>

        <!-- images of the team -->
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div>
                <img class="w-full lg:h-4/5  object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="">
                <p class="text-base mt-3">MARY BODKYO</p>
                <p class="text-gray-500">Business Development Manager</p>
            </div>
            <div>
                <img class="w-full lg:h-4/5  object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1"  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="">
                <p class="text-base mt-3">JAMES PETER</p>
                <p class="text-gray-500">Art Director</p>
            </div>
            <div>
                <img class="w-full lg:h-4/5  object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1" src="https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80" alt="">
                <p class="text-base mt-3">LEISHA AUTHUR</p>
                <p class="text-gray-500">Head of Project Management</p>
            </div>
        </div>
        <!-- show more/less -->
        <Transition>
        <div v-if="showMoreTeamMembers" class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div>
                <img class="w-full lg:h-4/5  object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1" src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="">
                <p class="text-base mt-3">MARY BODKYO</p>
                <p class="text-gray-500">Business Development Manager</p>
            </div>
            <div>
                <img class="w-full lg:h-4/5  object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1"  src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80" alt="">
                <p class="text-base mt-3">JAMES PETER</p>
                <p class="text-gray-500">Art Director</p>
            </div>
            <div>
                <img class="w-full lg:h-4/5  object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80" alt="">
                <p class="text-base mt-3">LEISHA AUTHUR</p>
                <p class="text-gray-500">Head of Project Management</p>
            </div>
            <div>
                <img class="w-full lg:h-4/5  object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="">
                <p class="text-base mt-3">MARY BODKYO</p>
                <p class="text-gray-500">Business Development Manager</p>
            </div>
            <div>
                <img class="w-full lg:h-4/5  object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1"  src="https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="">
                <p class="text-base mt-3">JAMES PETER</p>
                <p class="text-gray-500">Art Director</p>
            </div>
            <div>
                <img class="w-full lg:h-4/5  object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1" src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="">
                <p class="text-base mt-3">LEISHA AUTHUR</p>
                <p class="text-gray-500">Head of Project Management</p>
            </div>
            <div>
                <img class="w-full lg:h-4/5  object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1" src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="">
                <p class="text-base mt-3">MARY BODKYO</p>
                <p class="text-gray-500">Business Development Manager</p>
            </div>
            <div>
                <img class="w-full lg:h-4/5  object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1"  src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="">
                <p class="text-base mt-3">JAMES PETER</p>
                <p class="text-gray-500">Art Director</p>
            </div>
            <div>
                <img class="w-full lg:h-4/5  object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="">
                <p class="text-base mt-3">LEISHA AUTHUR</p>
                <p class="text-gray-500">Head of Project Management</p>
            </div>
        </div>
    </Transition>


        <div class="flex justify-center ">
            <UButton v-if="!showMoreTeamMembers" color="black" @click ="showMoreTeamMembers = true" label="SHOW MORE" class="text-8xl" variant="link" />
            <UButton v-if="showMoreTeamMembers" color="black" @click ="showMoreTeamMembers = false" label="SHOW LESS" class="text-8xl" variant="link" />
        </div>


    </div>
</template>
<script setup>

const showMoreTeamMembers = ref(false);

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