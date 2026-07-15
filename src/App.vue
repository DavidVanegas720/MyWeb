<script setup>
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import StackSection from './components/StackSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
   <TheNavbar />

  <main>
    <HeroSection />
    <AboutSection />
    <StackSection />
    <ExperienceSection />
    <ProjectsSection />
  </main>

  <SiteFooter />
</template>

<style scoped>
main {
  padding-top: 60px;
}
</style>
