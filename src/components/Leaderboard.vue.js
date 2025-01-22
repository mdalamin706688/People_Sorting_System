import { ref, computed } from 'vue';
import { useHighScoresStore } from '../stores/highScores';
const highScoresStore = useHighScoresStore();
const difficulties = ['Easy', 'Medium', 'Hard'];
const selectedDifficulty = ref('Medium');
const filteredScores = computed(() => {
    return highScoresStore.getScoresByDifficulty(selectedDifficulty.value);
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-lg shadow-lg p-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center justify-between mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-2xl font-bold text-gray-900") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex gap-2") },
    });
    for (const [diff] of __VLS_getVForSourceType((__VLS_ctx.difficulties))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.selectedDifficulty = diff;
                } },
            key: ((diff)),
            ...{ class: (([
                    'px-3 py-1 rounded-full text-sm font-medium transition-colors',
                    __VLS_ctx.selectedDifficulty === diff
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                ])) },
        });
        (diff);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("overflow-hidden") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
        ...{ class: ("min-w-full") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({
        ...{ class: ("bg-gray-500") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
        ...{ class: ("px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({
        ...{ class: ("bg-white divide-y divide-gray-200") },
    });
    for (const [score, index] of __VLS_getVForSourceType((__VLS_ctx.filteredScores))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
            key: ((index)),
            ...{ class: ("hover:bg-gray-50") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-6 py-4 whitespace-nowrap") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: (([
                    'inline-flex items-center justify-center w-8 h-8 rounded-full font-bold',
                    index === 0 ? 'bg-yellow-100 text-yellow-800' :
                        index === 1 ? 'bg-gray-100 text-gray-800' :
                            index === 2 ? 'bg-amber-100 text-amber-800' :
                                'text-gray-500'
                ])) },
        });
        (index + 1);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-6 py-4 whitespace-nowrap") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm font-medium text-gray-900") },
        });
        (score.playerName);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-6 py-4 whitespace-nowrap") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-500") },
        });
        (score.count);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-6 py-4 whitespace-nowrap") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-900") },
        });
        (score.score);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            ...{ class: ("px-6 py-4 whitespace-nowrap text-sm text-gray-500") },
        });
        (new Date(score.date).toLocaleDateString());
    }
    ['bg-white', 'rounded-lg', 'shadow-lg', 'p-6', 'flex', 'items-center', 'justify-between', 'mb-6', 'text-2xl', 'font-bold', 'text-gray-900', 'flex', 'gap-2', 'px-3', 'py-1', 'rounded-full', 'text-sm', 'font-medium', 'transition-colors', 'overflow-hidden', 'min-w-full', 'bg-gray-500', 'px-6', 'py-3', 'text-left', 'text-xs', 'font-medium', 'text-gray-500', 'uppercase', 'tracking-wider', 'px-6', 'py-3', 'text-left', 'text-xs', 'font-medium', 'text-gray-500', 'uppercase', 'tracking-wider', 'px-6', 'py-3', 'text-left', 'text-xs', 'font-medium', 'text-gray-500', 'uppercase', 'tracking-wider', 'px-6', 'py-3', 'text-left', 'text-xs', 'font-medium', 'text-gray-500', 'uppercase', 'tracking-wider', 'px-6', 'py-3', 'text-left', 'text-xs', 'font-medium', 'text-gray-500', 'uppercase', 'tracking-wider', 'bg-white', 'divide-y', 'divide-gray-200', 'hover:bg-gray-50', 'px-6', 'py-4', 'whitespace-nowrap', 'inline-flex', 'items-center', 'justify-center', 'w-8', 'h-8', 'rounded-full', 'font-bold', 'px-6', 'py-4', 'whitespace-nowrap', 'text-sm', 'font-medium', 'text-gray-900', 'px-6', 'py-4', 'whitespace-nowrap', 'text-sm', 'text-gray-500', 'px-6', 'py-4', 'whitespace-nowrap', 'text-sm', 'text-gray-900', 'px-6', 'py-4', 'whitespace-nowrap', 'text-sm', 'text-gray-500',];
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
            difficulties: difficulties,
            selectedDifficulty: selectedDifficulty,
            filteredScores: filteredScores,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
