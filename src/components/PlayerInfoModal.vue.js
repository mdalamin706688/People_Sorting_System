import { ref } from 'vue';
const props = defineProps();
const emit = defineEmits();
const playerName = ref('');
const difficulties = ['Easy', 'Medium', 'Hard'];
const difficulty = ref('Medium');
const handleSubmit = () => {
    if (playerName.value.trim()) {
        emit('start', playerName.value, difficulty.value);
        playerName.value = '';
    }
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    if (__VLS_ctx.show) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("bg-white p-6 rounded-lg shadow-xl max-w-md w-full m-4") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
            ...{ class: ("text-2xl font-bold mb-6") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mb-6") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
            ...{ class: ("block text-sm font-medium text-gray-700 mb-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
            ...{ onKeyup: (__VLS_ctx.handleSubmit) },
            value: ((__VLS_ctx.playerName)),
            type: ("text"),
            ...{ class: ("w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500") },
            placeholder: ("Enter your name"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mb-6") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
            ...{ class: ("block text-sm font-medium text-gray-700 mb-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex gap-2") },
        });
        for (const [diff] of __VLS_getVForSourceType((__VLS_ctx.difficulties))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.show)))
                            return;
                        __VLS_ctx.difficulty = diff;
                    } },
                key: ((diff)),
                ...{ class: (([
                        'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                        __VLS_ctx.difficulty === diff
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    ])) },
            });
            (diff);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-end gap-3") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.show)))
                        return;
                    __VLS_ctx.$emit('close');
                } },
            ...{ class: ("px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.handleSubmit) },
            ...{ class: ("px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 disabled:opacity-50") },
            disabled: ((!__VLS_ctx.playerName.trim())),
        });
    }
    ['fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'p-6', 'rounded-lg', 'shadow-xl', 'max-w-md', 'w-full', 'm-4', 'text-2xl', 'font-bold', 'mb-6', 'mb-6', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-2', 'w-full', 'px-4', 'py-2', 'border', 'border-gray-300', 'rounded-md', 'focus:ring-2', 'focus:ring-blue-500', 'focus:border-blue-500', 'mb-6', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-2', 'flex', 'gap-2', 'px-4', 'py-2', 'rounded-md', 'text-sm', 'font-medium', 'transition-colors', 'flex', 'justify-end', 'gap-3', 'px-4', 'py-2', 'text-gray-600', 'hover:bg-gray-100', 'rounded-md', 'px-4', 'py-2', 'bg-black', 'text-white', 'rounded-md', 'hover:bg-gray-700', 'disabled:opacity-50',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            playerName: playerName,
            difficulties: difficulties,
            difficulty: difficulty,
            handleSubmit: handleSubmit,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
