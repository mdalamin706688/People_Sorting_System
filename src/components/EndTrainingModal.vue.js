import { X } from 'lucide-vue-next';
const __VLS_props = defineProps();
const __VLS_emit = defineEmits();
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    if (__VLS_ctx.isVisible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 transform transition-transform duration-300 scale-95 hover:scale-100") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("p-8") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-center mb-8") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-lg mb-6") },
        });
        const __VLS_0 = {}.X;
        /** @type { [typeof __VLS_components.X, ] } */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            ...{ class: ("w-10 h-10 text-red-700") },
        }));
        const __VLS_2 = __VLS_1({
            ...{ class: ("w-10 h-10 text-red-700") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
            ...{ class: ("text-3xl font-extrabold text-gray-800 mb-3") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-gray-500 text-lg") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex flex-col sm:flex-row gap-4") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.isVisible)))
                        return;
                    __VLS_ctx.$emit('restart');
                } },
            ...{ class: ("flex-1 px-5 py-3 bg-gradient-to-r from-black to-black text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-gray-700 hover:to-gray-600 transition-all") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.isVisible)))
                        return;
                    __VLS_ctx.$emit('close');
                } },
            ...{ class: ("flex-1 px-5 py-3 border border-gray-300 text-gray-700 text-lg font-semibold rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 transition-all") },
        });
    }
    ['fixed', 'inset-0', 'bg-black/70', 'backdrop-blur-md', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-2xl', 'shadow-2xl', 'max-w-lg', 'w-full', 'mx-4', 'transform', 'transition-transform', 'duration-300', 'scale-95', 'hover:scale-100', 'p-8', 'text-center', 'mb-8', 'inline-flex', 'items-center', 'justify-center', 'w-20', 'h-20', 'bg-gradient-to-br', 'from-gray-200', 'to-gray-300', 'rounded-full', 'shadow-lg', 'mb-6', 'w-10', 'h-10', 'text-red-700', 'text-3xl', 'font-extrabold', 'text-gray-800', 'mb-3', 'text-gray-500', 'text-lg', 'flex', 'flex-col', 'sm:flex-row', 'gap-4', 'flex-1', 'px-5', 'py-3', 'bg-gradient-to-r', 'from-black', 'to-black', 'text-white', 'text-lg', 'font-semibold', 'rounded-lg', 'shadow-md', 'hover:shadow-lg', 'hover:from-gray-700', 'hover:to-gray-600', 'transition-all', 'flex-1', 'px-5', 'py-3', 'border', 'border-gray-300', 'text-gray-700', 'text-lg', 'font-semibold', 'rounded-lg', 'shadow-sm', 'hover:shadow-md', 'hover:bg-gray-100', 'transition-all',];
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
            X: X,
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
