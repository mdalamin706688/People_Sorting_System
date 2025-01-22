import { ref } from 'vue';
import { useLeaderboardStore } from '../stores/leaderboard';
const props = defineProps();
const emit = defineEmits();
const leaderboardStore = useLeaderboardStore();
const count = ref(20);
const name = ref('');
const handleStart = () => {
    emit('start', count.value);
};
const setName = () => {
    if (name.value.trim()) {
        leaderboardStore.setPlayerName(name.value.trim());
    }
};
const getBestTimeDisplay = (itemCount) => {
    const best = leaderboardStore.playerBestScore(itemCount);
    return best ? `${best.time} seconds` : 'No attempts yet';
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    if (__VLS_ctx.show) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 transform transition-all") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("p-6") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
            ...{ class: ("text-2xl font-bold mb-4 text-gray-900") },
        });
        if (!__VLS_ctx.leaderboardStore.playerName) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("mb-4") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
                ...{ class: ("block text-sm font-medium mb-1 text-gray-700") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
                ...{ onKeyup: (__VLS_ctx.setName) },
                value: ((__VLS_ctx.name)),
                type: ("text"),
                ...{ class: ("w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500") },
                placeholder: ("Enter your name"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (__VLS_ctx.setName) },
                ...{ class: ("w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors") },
                disabled: ((!__VLS_ctx.name.trim())),
            });
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
                ...{ class: ("mb-4 text-gray-600") },
            });
            (__VLS_ctx.leaderboardStore.playerName);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("mb-4") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
                ...{ class: ("block text-sm font-medium mb-1 text-gray-700") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("grid grid-cols-3 gap-2") },
            });
            for (const [option] of __VLS_getVForSourceType(([20, 50, 100]))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                    ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.show)))
                                return;
                            if (!(!((!__VLS_ctx.leaderboardStore.playerName))))
                                return;
                            __VLS_ctx.count = option;
                        } },
                    key: ((option)),
                    ...{ class: ("px-4 py-2 rounded-lg border-2 transition-all") },
                    ...{ class: ((__VLS_ctx.count === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300')) },
                });
                (option);
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("mb-6") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
                ...{ class: ("text-sm font-medium mb-2 text-gray-700") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("bg-gray-50 rounded-lg p-3") },
            });
            (__VLS_ctx.getBestTimeDisplay(__VLS_ctx.count));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex space-x-3") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.show)))
                            return;
                        if (!(!((!__VLS_ctx.leaderboardStore.playerName))))
                            return;
                        __VLS_ctx.$emit('close');
                    } },
                ...{ class: ("flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (__VLS_ctx.handleStart) },
                ...{ class: ("flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors") },
            });
        }
    }
    ['fixed', 'inset-0', 'bg-black/50', 'backdrop-blur-sm', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-xl', 'shadow-2xl', 'max-w-md', 'w-full', 'mx-4', 'transform', 'transition-all', 'p-6', 'text-2xl', 'font-bold', 'mb-4', 'text-gray-900', 'mb-4', 'block', 'text-sm', 'font-medium', 'mb-1', 'text-gray-700', 'w-full', 'px-3', 'py-2', 'border', 'rounded-lg', 'focus:ring-2', 'focus:ring-blue-500', 'focus:border-blue-500', 'w-full', 'px-4', 'py-2', 'bg-blue-600', 'text-white', 'rounded-lg', 'hover:bg-blue-700', 'transition-colors', 'mb-4', 'text-gray-600', 'mb-4', 'block', 'text-sm', 'font-medium', 'mb-1', 'text-gray-700', 'grid', 'grid-cols-3', 'gap-2', 'px-4', 'py-2', 'rounded-lg', 'border-2', 'transition-all', 'mb-6', 'text-sm', 'font-medium', 'mb-2', 'text-gray-700', 'bg-gray-50', 'rounded-lg', 'p-3', 'flex', 'space-x-3', 'flex-1', 'px-4', 'py-2', 'border', 'border-gray-300', 'rounded-lg', 'hover:bg-gray-50', 'transition-colors', 'flex-1', 'px-4', 'py-2', 'bg-black', 'text-white', 'rounded-lg', 'hover:bg-gray-700', 'transition-colors',];
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
            leaderboardStore: leaderboardStore,
            count: count,
            name: name,
            handleStart: handleStart,
            setName: setName,
            getBestTimeDisplay: getBestTimeDisplay,
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
