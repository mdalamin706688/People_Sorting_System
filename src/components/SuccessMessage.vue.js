import { CheckCircle } from "lucide-vue-next";
import { useLeaderboardStore } from "../stores/leaderboard";
import { computed } from "vue";
const props = defineProps();
const emit = defineEmits();
const leaderboardStore = useLeaderboardStore();
const topScores = computed(() => {
    return leaderboardStore.topScores.filter((s) => s.count === props.count);
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 transform transition-all") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("p-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-center mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4") },
    });
    const __VLS_0 = {}.CheckCircle;
    /** @type { [typeof __VLS_components.CheckCircle, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: ("w-8 h-8 text-green-600") },
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: ("w-8 h-8 text-green-600") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-2xl font-bold mb-2") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-gray-600") },
    });
    (__VLS_ctx.count);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("font-bold text-gray-900") },
    });
    (__VLS_ctx.score);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-gray-50 rounded-lg p-4 mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium mb-3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-2") },
    });
    for (const [topScore, index] of __VLS_getVForSourceType((__VLS_ctx.topScores))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((index)),
            ...{ class: ("flex items-center justify-between p-2 rounded") },
            ...{ class: ((topScore.playerName === __VLS_ctx.leaderboardStore.playerName
                    ? 'bg-blue-50'
                    : '')) },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("w-6 text-gray-500") },
        });
        (index + 1);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("font-medium") },
        });
        (topScore.playerName);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (topScore.time);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex space-x-3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.$emit('restart');
            } },
        ...{ class: ("flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors") },
    });
    ['fixed', 'inset-0', 'bg-black/50', 'backdrop-blur-sm', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-xl', 'shadow-2xl', 'max-w-lg', 'w-full', 'mx-4', 'transform', 'transition-all', 'p-6', 'text-center', 'mb-6', 'inline-flex', 'items-center', 'justify-center', 'w-16', 'h-16', 'bg-green-100', 'rounded-full', 'mb-4', 'w-8', 'h-8', 'text-green-600', 'text-2xl', 'font-bold', 'mb-2', 'text-gray-600', 'font-bold', 'text-gray-900', 'bg-gray-50', 'rounded-lg', 'p-4', 'mb-6', 'font-medium', 'mb-3', 'space-y-2', 'flex', 'items-center', 'justify-between', 'p-2', 'rounded', 'flex', 'items-center', 'w-6', 'text-gray-500', 'font-medium', 'flex', 'space-x-3', 'flex-1', 'px-4', 'py-2', 'bg-black', 'text-white', 'rounded-lg', 'hover:bg-gray-700', 'transition-colors',];
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
            CheckCircle: CheckCircle,
            leaderboardStore: leaderboardStore,
            topScores: topScores,
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
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
