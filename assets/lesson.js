const slider = document.querySelector('[data-container-slider]')
const demoContainer = document.querySelector('[data-demo-container]')
const widthOutput = document.querySelector('[data-width-output]')
const stateOutput = document.querySelector('[data-layout-output]')

function renderDemoState() {
  if (!demoContainer || !widthOutput || !stateOutput) return

  const width = Math.round(demoContainer.getBoundingClientRect().width)
  widthOutput.value = `${width}px`
  stateOutput.textContent =
    width >= 480 ? 'wide component layout' : 'compact component layout'
}

function updateDemo() {
  if (!slider || !demoContainer) return

  const percentage = Number(slider.value)
  demoContainer.style.setProperty('--demo-width', `${percentage}%`)
}

slider?.addEventListener('input', updateDemo)

if (demoContainer) {
  new ResizeObserver(renderDemoState).observe(demoContainer)
}

updateDemo()

for (const quiz of document.querySelectorAll('[data-quiz]')) {
  const button = quiz.querySelector('button')
  const feedback = quiz.querySelector('[data-feedback]')

  button?.addEventListener('click', () => {
    const chosen = quiz.querySelector('input:checked')

    if (!chosen) {
      feedback.textContent = 'Choose one signal first.'
      feedback.dataset.state = 'incorrect'
      return
    }

    const correct = chosen.value === quiz.dataset.answer
    feedback.textContent = correct
      ? `Correct. ${quiz.dataset.correct}`
      : `Try again. ${quiz.dataset.hint}`
    feedback.dataset.state = correct ? 'correct' : 'incorrect'
  })
}
