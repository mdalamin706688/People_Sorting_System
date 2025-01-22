import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue';
export default defineComponent({
    name: 'Timer',
    props: {
        startTime: {
            type: Number,
            required: true
        },
        isRunning: {
            type: Boolean,
            required: true
        }
    },
    setup(props) {
        const currentTime = ref(0);
        let interval = null;
        const updateTimer = () => {
            if (props.isRunning) {
                currentTime.value = Date.now() - props.startTime;
            }
        };
        onMounted(() => {
            interval = window.setInterval(updateTimer, 100);
        });
        onUnmounted(() => {
            if (interval)
                clearInterval(interval);
        });
        const formattedTime = computed(() => {
            const seconds = Math.floor(currentTime.value / 1000);
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        });
        return {
            formattedTime
        };
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-2xl font-mono") },
    });
    (__VLS_ctx.formattedTime);
    ['text-2xl', 'font-mono',];
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
let __VLS_self;
