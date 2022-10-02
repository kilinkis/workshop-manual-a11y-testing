function load() {
    const menuItems = document.querySelectorAll('.megamenu-navitem')
    const submenus = document.querySelectorAll('.megamenu-section')

    const resetSubmenus = (event) =>  {
        var activeSubmenu = document.querySelector('.megamenu-section.active')
        if (activeSubmenu && !activeSubmenu.contains(event.target)) {
            activeSubmenu.classList.remove('active')
        }
    }

    menuItems.forEach((menuItem) => {
        let parentElement = menuItem.parentNode

        /**
         * Since we are using buttons for the nav items, both mouse clicks and pressing
         * the Enter key or Space bar will be recognized by our click event listener.
         */
        menuItem.addEventListener('click', function(event) {
            console.log(menuItem)
            resetSubmenus(event)

            // Add active menu for the item clicked
            if(!parentElement.classList.contains('active')) {
                parentElement.classList.add('active')
            } else {
                parentElement.classList.remove('active')
            }
        })
    })

    submenus.forEach((submenu) => {
        submenu.addEventListener('keyup', (event) => {
          if (event.key === 'Escape' && submenu.classList.contains('active')) {
            submenu.classList.remove('active')
            submenu.querySelector('.megamenu-navitem').focus()
          }
        })
      })

    document.addEventListener('click', (event) => {
        resetSubmenus(event)
    })
}
document.addEventListener('DOMContentLoaded', load)
