<script>
import { NuxtLink } from '#components';

</script>
<template>
    <div class="text-white border-t-2 border-[#A259FF] z-10">
        <nav class="flex py-2 justify-between px-5 items-center shadow-2xl">
            <div class="left-nav font-bold">
                <h1 class="text-2xl">msk.</h1>
            </div>
            <div class="right-nav">
                <ul class="flex gap-6 ">
                    <li class="hover:underline hover:underline-offset-4 hover:text-[#A259FF]">
                        <NuxtLink to="/contacts">Contact</NuxtLink>
                    </li>
                    <li class="hover:underline hover:underline-offset-4 hover:text-[#A259FF]">
                        <NuxtLink to="/about-me"> About me</NuxtLink>
                    </li>
                    <li class="hover:underline hover:underline-offset-4 hover:text-[#A259FF]">
                        <NuxtLink to="/projects-page">Projects</NuxtLink>
                    </li>
                    <li class="hover:underline hover:underline-offset-4 hover:text-[#A259FF]">
                        <NuxtLink to="/">home</NuxtLink>
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