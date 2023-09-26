document.addEventListener('DOMContentLoaded', () => {
    const init = () => {
        const header = document.querySelector('.nav')
      
        if (!header) return
      
        let prevOffsetTop = document.documentElement.scrollTop
      
        const scrollHeader = () => {
          const currentOffsetTop = document.documentElement.scrollTop
          const headerHeight = header.offsetHeight
      
          prevOffsetTop > currentOffsetTop
            ? header.style.setProperty('--top', '0')
            : header.style.setProperty('--top', `-${headerHeight}px`)
      
          prevOffsetTop = currentOffsetTop
        }
      
        document.addEventListener('scroll', scrollHeader)
    }

    init()
});