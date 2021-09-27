(function pageHeader() {
  /* Navbar - Mobile: activate */
  document.querySelector('.hamburger-menu').addEventListener('click', function(e) {
    if (window.innerWidth < 992) {
      e.preventDefault()
      this.classList.toggle('expanded')
      if (this.classList.contains('expanded')) {
        this.style.marginRight = this.nextElementSibling.offsetWidth + 'px'
      } else {
        this.style.marginRight = 0
      }
      this.nextElementSibling.classList.toggle('expanded')
    }
  })

  /* Navbar - Mobile: Dropdown activate */
  document.querySelectorAll('.dropdown > a').forEach(function(e) {
    e.addEventListener('click', function(f) {
      if (window.innerWidth < 992) {
        f.preventDefault()
        this.nextElementSibling.classList.toggle('active')
      }
    })
  })

  /* Form control */
  let searchInput = document.querySelector(".search-widget .input-field")
  let searchClear = document.querySelector(".search-widget .clear-button")

  searchInput.addEventListener("input", function(e) {
    searchClear.classList.remove("hidden")

    if (searchInput.value.length < 1) {
      searchClear.classList.add("hidden")
    }
  })

  searchClear.addEventListener("click", function(e) {
    searchClear.classList.add("hidden")
    searchInput.focus()
  })
})();
