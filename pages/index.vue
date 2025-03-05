<template>
    <section class="w-full h-[70vh] flex items-center ">
        <div class="abt-description  space-y-4">
        <div class=" space-y-4">
                <h1 class="max-sm:text-[10px]">
                    Hi, I'm <span class="text-[#C778DD]">Sokkanha</span>!front-end.web(developer)
                </h1>
                <p class="text-white ">
                    I'm a passionate developer with experience in Angular, Vue, Nuxt Framework and creating dynamic web applications.I'm always looking for new challenges to grow my skills and work on impactful projects!
                </p>
            </div>
            <!-- Quote -->
            <div class="quote flex flex-col gap-2.5  text-gray-300">
                <p class="border px-1 py-3 text-center">
                    <ReusableTypingEffect :word="`In the world of technology, we are only limited by our imagination. `"/>
                </p>
                <span class="border p-2 w-fit self-end">__Unknown</span>
            </div>
        </div>
    </section>
</template>

<style scoped >
    h1 {
        color: white;
        font-family: "DotGothic16", sans-serif;
        font-size:1.5rem;
    }
</style>