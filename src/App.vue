<script setup>
import ParticlesBackground from './components/ParticlesBackground.vue'
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import StackSection from './components/StackSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
    <ParticlesBackground />
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
