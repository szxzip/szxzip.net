const viewAnimation = {
  old: {
    name: 'fade-in-down',
    duration: '0.5s',
    easing: 'linear',
    direction: 'reverse',
  },
  new: {
    name: 'fade-in-down',
    duration: '0.5s',
    delay: '0.5s',
    easing: 'linear',
  },
}

const viewTransition = {
  forwards: viewAnimation,
  backwards: viewAnimation,
}

export { viewTransition }
