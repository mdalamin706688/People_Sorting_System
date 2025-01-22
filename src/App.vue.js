// App.vue
import { ref, computed, onMounted } from 'vue';
import { useGameStore } from './stores/game';
import { useLeaderboardStore } from './stores/leaderboard';
import GameModal from './components/GameModal.vue';
import SortingTable from './components/SortingTable.vue';
import Timer from './components/Timer.vue';
import SuccessMessage from './components/SuccessMessage.vue';
import EndTrainingModal from './components/EndTrainingModal.vue';
const gameStore = useGameStore();
const leaderboardStore = useLeaderboardStore();
const showModal = ref(false);
const showEndTrainModal = ref(false);
const showSuccessMessage = computed(() => gameStore.score !== null && gameStore.isComplete);
onMounted(() => {
    leaderboardStore.initializeFromStorage();
    if (!leaderboardStore.playerName) {
        showModal.value = true;
    }
});
const startGame = () => {
    if (gameStore.isPlaying || showSuccessMessage.value)
        return;
    showModal.value = true;
};
const endGame = () => {
    showEndTrainModal.value = true;
    gameStore.endGameEarly();
};
const handleStart = (count) => {
    gameStore.startGame(count);
    showModal.value = false;
};
const handleUpdate = (people) => {
    gameStore.updatePeopleOrder(people);
    if (gameStore.score !== null) {
        leaderboardStore.addScore({
            playerName: leaderboardStore.playerName,
            count: gameStore.targetCount,
            time: gameStore.score,
            date: new Date().toISOString()
        });
    }
};
const handleRestart = () => {
    showEndTrainModal.value = false;
    gameStore.$reset();
    showModal.value = true;
};
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("min-h-screen bg-gray-100 py-8") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("max-w-7xl mx-auto px-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-xl p-6 mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-center mb-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-3xl font-bold text-gray-900") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-gray-600") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center space-x-4") },
    });
    if (!__VLS_ctx.gameStore.isPlaying && !__VLS_ctx.showSuccessMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.startGame) },
            ...{ class: ("px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-lg") },
        });
    }
    if (__VLS_ctx.gameStore.isPlaying) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.endGame) },
            ...{ class: ("px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors shadow-lg") },
        });
    }
    if (__VLS_ctx.gameStore.isPlaying) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mb-4") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("bg-gray-50 bg-opacity-50 backdrop-blur-md rounded-lg p-4") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between items-center") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
            ...{ class: ("font-medium mb-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
            ...{ class: ("text-gray-600 space-y-1") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-center") },
        });
        // @ts-ignore
        /** @type { [typeof Timer, ] } */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(Timer, new Timer({
            startTime: ((__VLS_ctx.gameStore.startTime)),
            isRunning: ((__VLS_ctx.gameStore.isPlaying)),
        }));
        const __VLS_1 = __VLS_0({
            startTime: ((__VLS_ctx.gameStore.startTime)),
            isRunning: ((__VLS_ctx.gameStore.isPlaying)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-sm text-gray-500 mt-1") },
        });
    }
    const __VLS_5 = {}.Transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.Transition, ] } */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
        name: ("fade"),
    }));
    const __VLS_7 = __VLS_6({
        name: ("fade"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    if (__VLS_ctx.gameStore.people.length && __VLS_ctx.gameStore.isPlaying) {
        // @ts-ignore
        /** @type { [typeof SortingTable, ] } */ ;
        // @ts-ignore
        const __VLS_11 = __VLS_asFunctionalComponent(SortingTable, new SortingTable({
            ...{ 'onUpdate': {} },
            people: ((__VLS_ctx.gameStore.people)),
        }));
        const __VLS_12 = __VLS_11({
            ...{ 'onUpdate': {} },
            people: ((__VLS_ctx.gameStore.people)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_11));
        let __VLS_16;
        const __VLS_17 = {
            onUpdate: (__VLS_ctx.handleUpdate)
        };
        let __VLS_13;
        let __VLS_14;
        var __VLS_15;
    }
    __VLS_10.slots.default;
    var __VLS_10;
    if (!__VLS_ctx.gameStore.isPlaying && __VLS_ctx.leaderboardStore.scores.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mt-8 bg-opacity-50 backdrop-blur-md rounded-xl shadow-2xl p-8 transition-all duration-700 opacity-100 transform") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
            ...{ class: ("text-4xl font-semibold text-gray-900 mb-6 tracking-wide") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("overflow-x-auto shadow-lg rounded-xl bg-white bg-opacity-20 backdrop-blur-xl") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
            ...{ class: ("min-w-full table-auto text-gray-700") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({
            ...{ class: ("bg-gray-700 bg-opacity-40 text-white") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            ...{ class: ("px-6 py-4 text-lg font-semibold") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            ...{ class: ("px-6 py-4 text-lg font-semibold") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            ...{ class: ("px-6 py-4 text-lg font-semibold") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            ...{ class: ("px-6 py-4 text-lg font-semibold") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({
            ...{ class: ("text-sm") },
        });
        for (const [score, index] of __VLS_getVForSourceType((__VLS_ctx.leaderboardStore.scores))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
                key: ((score.date)),
                ...{ class: ("hover:bg-gray-200 transition-all ease-in-out") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-6 py-4") },
            });
            (index + 1);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-6 py-4 font-semibold") },
            });
            (score.playerName);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-6 py-4") },
            });
            (score.count);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                ...{ class: ("px-6 py-4") },
            });
            (__VLS_ctx.formatTime(score.time));
        }
    }
    // @ts-ignore
    /** @type { [typeof GameModal, ] } */ ;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(GameModal, new GameModal({
        ...{ 'onClose': {} },
        ...{ 'onStart': {} },
        show: ((__VLS_ctx.showModal)),
    }));
    const __VLS_19 = __VLS_18({
        ...{ 'onClose': {} },
        ...{ 'onStart': {} },
        show: ((__VLS_ctx.showModal)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    let __VLS_23;
    const __VLS_24 = {
        onClose: (...[$event]) => {
            __VLS_ctx.showModal = false;
        }
    };
    const __VLS_25 = {
        onStart: (__VLS_ctx.handleStart)
    };
    let __VLS_20;
    let __VLS_21;
    var __VLS_22;
    if (__VLS_ctx.showSuccessMessage && !__VLS_ctx.showEndTrainModal) {
        // @ts-ignore
        /** @type { [typeof SuccessMessage, ] } */ ;
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(SuccessMessage, new SuccessMessage({
            ...{ 'onRestart': {} },
            score: ((__VLS_ctx.gameStore.score)),
            count: ((__VLS_ctx.gameStore.targetCount)),
        }));
        const __VLS_27 = __VLS_26({
            ...{ 'onRestart': {} },
            score: ((__VLS_ctx.gameStore.score)),
            count: ((__VLS_ctx.gameStore.targetCount)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        let __VLS_31;
        const __VLS_32 = {
            onRestart: (__VLS_ctx.handleRestart)
        };
        let __VLS_28;
        let __VLS_29;
        var __VLS_30;
    }
    if (__VLS_ctx.showEndTrainModal) {
        // @ts-ignore
        /** @type { [typeof EndTrainingModal, ] } */ ;
        // @ts-ignore
        const __VLS_33 = __VLS_asFunctionalComponent(EndTrainingModal, new EndTrainingModal({
            ...{ 'onClose': {} },
            ...{ 'onRestart': {} },
            isVisible: ((__VLS_ctx.showEndTrainModal)),
        }));
        const __VLS_34 = __VLS_33({
            ...{ 'onClose': {} },
            ...{ 'onRestart': {} },
            isVisible: ((__VLS_ctx.showEndTrainModal)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_33));
        let __VLS_38;
        const __VLS_39 = {
            onClose: (...[$event]) => {
                if (!((__VLS_ctx.showEndTrainModal)))
                    return;
                __VLS_ctx.showEndTrainModal = false;
            }
        };
        const __VLS_40 = {
            onRestart: (__VLS_ctx.handleRestart)
        };
        let __VLS_35;
        let __VLS_36;
        var __VLS_37;
    }
    ['min-h-screen', 'bg-gray-100', 'py-8', 'max-w-7xl', 'mx-auto', 'px-4', 'bg-white', 'bg-opacity-30', 'backdrop-blur-md', 'rounded-xl', 'shadow-xl', 'p-6', 'mb-6', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-3xl', 'font-bold', 'text-gray-900', 'text-gray-600', 'flex', 'items-center', 'space-x-4', 'px-6', 'py-3', 'bg-gray-800', 'text-white', 'rounded-lg', 'hover:bg-gray-700', 'transition-colors', 'shadow-lg', 'px-6', 'py-3', 'bg-red-600', 'text-white', 'rounded-lg', 'hover:bg-red-500', 'transition-colors', 'shadow-lg', 'mb-4', 'bg-gray-50', 'bg-opacity-50', 'backdrop-blur-md', 'rounded-lg', 'p-4', 'flex', 'justify-between', 'items-center', 'font-medium', 'mb-2', 'text-gray-600', 'space-y-1', 'text-center', 'text-sm', 'text-gray-500', 'mt-1', 'mt-8', 'bg-opacity-50', 'backdrop-blur-md', 'rounded-xl', 'shadow-2xl', 'p-8', 'transition-all', 'duration-700', 'opacity-100', 'transform', 'text-4xl', 'font-semibold', 'text-gray-900', 'mb-6', 'tracking-wide', 'overflow-x-auto', 'shadow-lg', 'rounded-xl', 'bg-white', 'bg-opacity-20', 'backdrop-blur-xl', 'min-w-full', 'table-auto', 'text-gray-700', 'bg-gray-700', 'bg-opacity-40', 'text-white', 'px-6', 'py-4', 'text-lg', 'font-semibold', 'px-6', 'py-4', 'text-lg', 'font-semibold', 'px-6', 'py-4', 'text-lg', 'font-semibold', 'px-6', 'py-4', 'text-lg', 'font-semibold', 'text-sm', 'hover:bg-gray-200', 'transition-all', 'ease-in-out', 'px-6', 'py-4', 'px-6', 'py-4', 'font-semibold', 'px-6', 'py-4', 'px-6', 'py-4',];
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
            GameModal: GameModal,
            SortingTable: SortingTable,
            Timer: Timer,
            SuccessMessage: SuccessMessage,
            EndTrainingModal: EndTrainingModal,
            gameStore: gameStore,
            leaderboardStore: leaderboardStore,
            showModal: showModal,
            showEndTrainModal: showEndTrainModal,
            showSuccessMessage: showSuccessMessage,
            startGame: startGame,
            endGame: endGame,
            handleStart: handleStart,
            handleUpdate: handleUpdate,
            handleRestart: handleRestart,
            formatTime: formatTime,
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
