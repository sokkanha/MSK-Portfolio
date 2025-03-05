<script lang="ts" setup>
    import { projectItems } from '~/data/Project/data';
</script>
<template>
    <div class="flex flex-col gap-7 text-white min-h-[100vh]">
        <h1 class="header-text font-bold text-xl self-end">
            Personal Projects__
        </h1>

        <section class="grid grid-cols-2 gap-10 max-sm:grid-cols-1 "> 
            <ProjectCard :dataItems="projectItems"/>
        </section>
    </div>
</template>