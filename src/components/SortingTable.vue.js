import { ref, computed } from "vue";
import draggable from "vuedraggable";
const props = defineProps();
const emit = defineEmits();
const scrollContainer = ref(null);
const isDragging = ref(false);
const autoScrollSpeed = 5; // Speed of auto-scroll in px/frame
// Computed
const sortedPeople = computed({
    get: () => props.people,
    set: (value) => emit("update", value),
});
// Methods
const scrollToSection = (index) => {
    if (scrollContainer.value) {
        const sectionSize = Math.floor(props.people.length / Selection.length);
        const targetIndex = index * sectionSize;
        const targetElement = scrollContainer.value.children[0].children[targetIndex];
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }
};
const dragStart = () => {
    isDragging.value = true;
};
const dragEnd = () => {
    isDragging.value = false;
    stopAutoScroll();
};
// Auto-scroll detection
const autoScrollInterval = ref(null);
const startAutoScroll = (direction) => {
    stopAutoScroll();
    autoScrollInterval.value = setInterval(() => {
        if (!scrollContainer.value)
            return;
        scrollContainer.value.scrollTop +=
            direction === "up" ? -autoScrollSpeed : autoScrollSpeed;
    }, 16); // ~60fps
};
const stopAutoScroll = () => {
    if (autoScrollInterval.value) {
        clearInterval(autoScrollInterval.value);
        autoScrollInterval.value = null;
    }
};
const onMove = (evt) => {
    if (!scrollContainer.value)
        return;
    const { clientY } = evt.originalEvent;
    const { top, bottom } = scrollContainer.value.getBoundingClientRect();
    const threshold = 50; // Distance from edge to start auto-scrolling
    if (clientY < top + threshold) {
        startAutoScroll("up");
    }
    else if (clientY > bottom - threshold) {
        startAutoScroll("down");
    }
    else {
        stopAutoScroll();
    }
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-full rounded-lg overflow-hidden border border-gray-200 relative shadow-lg") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-black text-white border-b border-gray-300") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center p-4 font-semibold text-lg") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex-1 px-2 text-xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex-1 px-2 text-xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-32 text-right px-2 text-xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ref: ("scrollContainer"),
        ...{ class: ("overflow-auto relative bg-white rounded-lg shadow-lg") },
        ...{ style: ({}) },
    });
    // @ts-ignore navigation for `const scrollContainer = ref()`
    /** @type { typeof __VLS_ctx.scrollContainer } */ ;
    const __VLS_0 = {}.draggable;
    /** @type { [typeof __VLS_components.Draggable, typeof __VLS_components.draggable, typeof __VLS_components.Draggable, typeof __VLS_components.draggable, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ 'onStart': {} },
        ...{ 'onEnd': {} },
        modelValue: ((__VLS_ctx.sortedPeople)),
        itemKey: ("id"),
        handle: (".drag-handle"),
        animation: ((200)),
        move: ((__VLS_ctx.onMove)),
        ...{ class: ("min-h-full") },
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onStart': {} },
        ...{ 'onEnd': {} },
        modelValue: ((__VLS_ctx.sortedPeople)),
        itemKey: ("id"),
        handle: (".drag-handle"),
        animation: ((200)),
        move: ((__VLS_ctx.onMove)),
        ...{ class: ("min-h-full") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onStart: (__VLS_ctx.dragStart)
    };
    const __VLS_8 = {
        onEnd: (__VLS_ctx.dragEnd)
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { item: __VLS_thisSlot } = __VLS_5.slots;
        const [{ element }] = __VLS_getSlotParams(__VLS_thisSlot);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center p-4 bg-white hover:bg-gradient-to-r from-blue-50 to-blue-100 border-b border-gray-100 group transition-colors ease-in-out") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("drag-handle flex items-center justify-center w-8 -ml-2 cursor-move opacity-0 group-hover:opacity-100 transition-opacity") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
            ...{ class: ("w-4 h-4 text-gray-400") },
            viewBox: ("0 0 24 24"),
            fill: ("none"),
            stroke: ("currentColor"),
            'stroke-width': ("2"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
            d: ("M8 4h8M8 12h8M8 20h8"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex-1 px-2 flex items-center") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center space-x-3") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-700 font-medium") },
        });
        (element.name.charAt(0));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-lg font-semibold text-gray-800") },
        });
        (element.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex-1 px-2 text-gray-600") },
        });
        (element.email);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("w-32 text-right px-2 font-medium text-lg text-gray-700") },
        });
        (element.potatoes.toLocaleString());
    }
    var __VLS_5;
    ['w-full', 'rounded-lg', 'overflow-hidden', 'border', 'border-gray-200', 'relative', 'shadow-lg', 'bg-black', 'text-white', 'border-b', 'border-gray-300', 'flex', 'items-center', 'p-4', 'font-semibold', 'text-lg', 'flex-1', 'px-2', 'text-xl', 'flex-1', 'px-2', 'text-xl', 'w-32', 'text-right', 'px-2', 'text-xl', 'overflow-auto', 'relative', 'bg-white', 'rounded-lg', 'shadow-lg', 'min-h-full', 'flex', 'items-center', 'p-4', 'bg-white', 'hover:bg-gradient-to-r', 'from-blue-50', 'to-blue-100', 'border-b', 'border-gray-100', 'group', 'transition-colors', 'ease-in-out', 'drag-handle', 'flex', 'items-center', 'justify-center', 'w-8', '-ml-2', 'cursor-move', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'w-4', 'h-4', 'text-gray-400', 'flex-1', 'px-2', 'flex', 'items-center', 'flex', 'items-center', 'space-x-3', 'w-8', 'h-8', 'rounded-full', 'bg-gradient-to-br', 'from-blue-100', 'to-blue-200', 'flex', 'items-center', 'justify-center', 'text-blue-700', 'font-medium', 'text-lg', 'font-semibold', 'text-gray-800', 'flex-1', 'px-2', 'text-gray-600', 'w-32', 'text-right', 'px-2', 'font-medium', 'text-lg', 'text-gray-700',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {
        'scrollContainer': __VLS_nativeElements['div'],
    };
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
            draggable: draggable,
            scrollContainer: scrollContainer,
            sortedPeople: sortedPeople,
            dragStart: dragStart,
            dragEnd: dragEnd,
            onMove: onMove,
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
    __typeRefs: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
