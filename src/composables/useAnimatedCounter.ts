// src/composables/useAnimatedCounter.ts
import { ref, watch, onMounted } from 'vue';

export function useAnimatedCounter(target: number, duration: number = 2000) {
  const current = ref(0);

  const animate = (targetValue: number) => {
    const startValue = current.value;
    const difference = targetValue - startValue;
    const startTime = Date.now();

    const step = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      current.value = Math.round(startValue + (difference * easeProgress));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  onMounted(() => {
    animate(target);
  });

  watch(() => target, (newTarget) => {
    animate(newTarget);
  });

  return { current };
}
