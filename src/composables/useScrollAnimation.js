// Scroll Animation Composable
// Add your scroll animation logic here
import { onMounted, onBeforeUnmount } from 'vue'

export function useScrollAnimation(selector = '.scroll-fade-up') {
  let observer
  onMounted(() => {
    const elements = document.querySelectorAll(selector)
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    elements.forEach(el => observer.observe(el))
  })
  onBeforeUnmount(() => { if (observer) observer.disconnect() })
}