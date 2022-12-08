const useDebounce = (timeout, action, delay) => {
  clearTimeout(timeout)
  return setTimeout(() => {
    action()
  }, delay)
}

export default useDebounce
