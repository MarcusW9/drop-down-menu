// import _ from "lodash";
import "./style.css";

document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches('[data-dropdown-button]')
  if (!isDropdownButton && e.target.closest('[data-dropdown-menu]') != null) return

  // if clicking on a dropdown button find the closest parent and give it ".active"
  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown-menu]');
    currentDropdown.classList.toggle('active')
  }

  // if this is the button clicked already don't close it and if it is not then close it 
  document.querySelectorAll('[data-dropdown-menu].active').forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove('active')
  })
})
