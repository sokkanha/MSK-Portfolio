<script setup lang="ts">
    defineProps<{dataItems: any}>();
</script>

<template>
    <div 
    v-for="(data, index) in dataItems" :key="index" 
    class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-amber-100 hover:translate-1.5 hover:transition duration-300 ease-in-out"
    >
        <img class="w-full h-[110px] object-cover" :src="data.imgUrl">
        <div class="px-2 py-3">
            <div class="font-bold text-xl mb-2">
                {{data.title}}
            </div>
            <p class="text-gray-100 text-base">
                {{ data.description }}
            </p>
        </div>
        <div class="px-2 pt-3 pb-2">
            <span 
            v-for="(item, index) in dataItems.languages" 
            :key="index" 
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2"
            >
                #{{ item.name }}
            </span>
        </div>
    </div>
</template>