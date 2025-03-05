<script lang="ts" setup>
import { NuxtLink } from '#components';
import { ref } from 'vue';

const route = useRoute();
const isOpen = ref(false);
const menuItems = [
        { label: 'Home', link: '/' },
        { label: 'Contact', link: '/contacts' },
        { label: 'About me', link: '/about-me' },
        { label: 'Projects', link: '/projects-page' }
]


</script>
<template>
    <div class="text-white border-t-2 border-[#A259FF] z-10">
        <nav class="flex py-2 justify-between px-5 items-center shadow-2xl">
            <div class="left-nav font-bold">
                <h1 class="text-2xl">msk.</h1>
            </div>
            
            <div class="right-nav max-md:hidden">
                <ul class="flex gap-6 ">
                    <li 
                    v-for="(item, index) in menuItems" :key="index" 
                    class=" hover:text-[#A259FF]"
                    :class="[
                    route.path === item.link ? 'text-[#A259FF] font-semibold underline underline-offset-4' : 'hover:text-[#A259FF]'
                    ]"
                    >
                        <NuxtLink :to="item.link">{{ item.label }}</NuxtLink>
                    </li>
                </ul>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="md:hidden " :class="[isOpen ? 'block' : 'hidden']">
                <ul class="flex flex-col gap-6 absolute top-full left-5 right-0 w-full h-screen ">
                    <li 
                    v-for="(item, index) in menuItems" :key="index" 
                    class=" hover:text-[#A259FF]"
                    :class="[
                    route.path === item.link ? 'text-[#A259FF] font-semibold underline underline-offset-4' : 'hover:text-[#A259FF]'
                    ]"
                    >
                        <NuxtLink :to="item.link" @click="isOpen = !isOpen">{{ item.label }}</NuxtLink>
                    </li>
                </ul>
            </div>

            <div class="md:hidden sm:flex" @click="isOpen = !isOpen">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5" width="24" height="2" fill="#D9D9D9"/>
                <rect x="9" y="12" width="15" height="2" fill="#D9D9D9"/>
                </svg>
            </div>
        </nav>
        
    </div>
</template>

<style scoped>
    ul li:hover {
        cursor: pointer;
    }
</style>