<script lang="ts" setup>
import { NuxtLink } from '#components';
const menuItems = [
        { label: 'Contact', link: '/contacts' },
        { label: 'About me', link: '/about-me' },
        { label: 'Projects', link: '/projects-page' },
        { label: 'Home', link: '/' }
]
const route = useRoute();
</script>
<template>
    <div class="text-white border-t-2 border-[#A259FF] z-10">
        <nav class="flex py-2 justify-between px-5 items-center shadow-2xl">
            <div class="left-nav font-bold">
                <h1 class="text-2xl">msk.</h1>
            </div>
            <div class="right-nav">
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
        </nav>
    </div>
</template>

<style scoped>
    ul li:hover {
        cursor: pointer;
    }
</style>