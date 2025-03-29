document.addEventListener('DOMContentLoaded', function () {
  const cabecalho = document.getElementById('cabecalho')

  if (cabecalho) {
    const list = cabecalho.querySelector('ul')

    if (list) {
      const items = list.querySelectorAll('li')

      items.forEach((item) => {
        const link = item.querySelector('a')
        const currentPath = window.location.pathname
        const linkPath = new URL(link.href).pathname

        if (currentPath === linkPath) {
          link.classList.add('current_link')
        }
      })
    }
  }
})
