<script setup lang="ts">
import { ref, watch } from 'vue';

defineProps<{
    id: string;
    title: string;
    description?: string;
    items: any[];
    getCheckboxState: (id: string) => boolean;
    setCheckboxState: (id: string, value: boolean) => void;
}>();

type ItemType = any;

const emit = defineEmits(['change']);

const open = ref(false);

function toggleAccordion() {
    open.value = !open.value;
}
</script>

<template>
    <section class="w-[70vw] mx-auto my-16" :aria-labelledby="`${id}-heading`">
        <h2 :id="`${id}-heading`" class="text-2xl font-bold mb-2 text-white flex items-center">
            <span>{{ title }}</span>
            <svg :class="['ml-2 h-5 w-5 transition-transform', open ? 'rotate-180' : '']" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </h2>
        <p v-if="description" class="mb-4 text-white">{{ description }}</p>
        <details :open="open" class="mb-2 bg-white dark:bg-gray-800 rounded shadow group" @toggle="toggleAccordion"
            :id="`${id}-accordion`">
            <summary
                class="cursor-pointer px-4 py-2 font-semibold flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                :aria-controls="`${id}-content`" :aria-expanded="open.toString()" tabindex="0">
                <span>Show {{ title }}</span>
                <svg :class="['h-4 w-4 ml-2 transition-transform', open ? 'rotate-180' : '']" fill="none"
                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </summary>
            <div :id="`${id}-content`" class="p-4 space-y-2">
                <template v-if="items.length">
                    <label v-for="(item, idx) in items" :key="item.id || idx"
                        class="flex items-center space-x-2 group text-white">
                        <input type="checkbox" class="form-checkbox accent-blue-500"
                            :checked="getCheckboxState((item.id || idx).toString())"
                            @change="setCheckboxState((item.id || idx).toString(), $event.target.checked); emit('change', item, $event.target.checked)"
                            :id="`${id}-checkbox-${item.id || idx}`" />
                        <span class="text-white">
                            <template v-if="item.link && item.link.url">
                                <a :href="item.link.url" target="_blank" rel="noopener noreferrer"
                                    class="text-blue-300 hover:underline">
                                    {{ item.link.text || item.text || item.title || `Item ${idx + 1}` }}
                                </a>
                            </template>
                            <template v-else>
                                {{ item.text || item.title || `Item ${idx + 1}` }}
                            </template>
                        </span>
                    </label>
                </template>
                <template v-else>
                    <label v-for="idx in 3" :key="`demo-${id}-${idx}`"
                        class="flex items-center space-x-2 group opacity-60 text-white">
                        <input type="checkbox" class="form-checkbox accent-blue-500" disabled />
                        <span class="text-white">Demo {{ title.slice(0, -1) }} {{ idx }}</span>
                    </label>
                </template>
            </div>
        </details>
    </section>
</template>

<style scoped>
.group:hover .group-hover\:bg-gray-100 {
    background-color: #f3f4f6;
}

.group:focus-within .group-hover\:bg-gray-100 {
    background-color: #f3f4f6;
}
</style>
