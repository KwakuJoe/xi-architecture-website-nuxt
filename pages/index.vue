<template>
    <Navbar>
        <UButton color="black" label="Project" @click="scrollToProject()" variant="link" />
        <UButton color="black" label="Workflow" @click="scrollToWorkflow()" variant="link" />
        <UButton color="black" label="Service" @click="scrollToServices()" variant="link" />
        <UButton color="black" label="Team" @click="scrollToTeam()" variant="link" />
        <UButton color="black" label="Blog" @click="scrollToBlog()" variant="link" />
    </Navbar>

    <Hero/>

    <section ref="projectSection">
        <Projects/>
    </section>

    <section ref="workflowSection">
        <Workflow/>
    </section>

    <section ref="servicesSection">
        <Services/>
    </section>

    <section ref="teamSection">
        <Team/>
    </section>

    <section ref="blogSection">
        <Blogs/>
    </section>
    <Contact/>
    <Footer/>
</template>
<script setup>
// project
const projectSection = ref(null);
const scrollToProject = () => {
      projectSection.value.scrollIntoView({
        behavior: 'smooth', // Use smooth scrolling animation
        block: 'start', // Scroll to the top of the section
      });
    };

// workflow
const workflowSection = ref(null);
const scrollToWorkflow = () => {
      workflowSection.value.scrollIntoView({
        behavior: 'smooth', // Use smooth scrolling animation
        block: 'start', // Scroll to the top of the section
      });
    };

// services
const servicesSection = ref(null);
const scrollToServices = () => {
      servicesSection.value.scrollIntoView({
        behavior: 'smooth', // Use smooth scrolling animation
        block: 'start', // Scroll to the top of the section
      });
    };

// Team
const teamSection = ref(null);
const scrollToTeam = () => {
    teamSection.value.scrollIntoView({
        behavior: 'smooth', // Use smooth scrolling animation
        block: 'start', // Scroll to the top of the section
      });
    };

// Blog
const blogSection = ref(null);
const scrollToBlog = () => {
    blogSection.value.scrollIntoView({
        behavior: 'smooth', // Use smooth scrolling animation
        block: 'start', // Scroll to the top of the section
      });
    };


</script>
<style>
    
</style>