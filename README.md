# Tailwind-flowbite-theming-darkmode-switcher
Tailwindcss/Flowbite starter template with added support for darkmode, theming and contextual colors.
## Added Color Themes
- **`Primary`** - Main site color.
- **`Accent`** - For links and buttons.
- **`Light`** - For Black contrast.
- **`Dark`** - For dark mode.
- **`Success`** - For Success alerts.
- **`Danger`** - For Danger alerts.
- **`Warning`** - For Warning alerts.
- **`Info`** - For Info alerts.
## Prevent Flashing of wrong theme
```
<script>
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
  } else {
      document.documentElement.classList.remove('dark')
  }
</script>
```
## JS for components
Add `<script src="./node_modules/flowbite/dist/flowbite.min.js"></script>` to all files using Flowbite JS.
## JS for darkmode switcher
`<script src="./assets/dist/js/darkmode.js"></script>`
## Theme Switcher
```
<!-- DarkMode Switcher -->
<button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
  <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
  <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
</button>
<!-- End DarkMode Switcher -->
```
## Input Path
`assets/src/css/tailwind.css`
## Output Path
`assets/dist/css/main.css`
## Build
`npx tailwindcss -i ./assets/src/css/tailwind.css -o ./assets/dist/css/main.css --watch`
## Other TailwindCss Starters
- [Tailwind starter template.](https://github.com/foostacking/tailwind-starter)
- [Use Tailwind with Flowbite, the most popular Tailwind components library.](https://github.com/foostacking/flowbite-starter)
- [Tailwind and Flowbite. With dark mode switcher.](https://github.com/foostacking/tailwind-flowbite-darkmode-switcher)
- [Tailwind and Flowbite with support for theming and contextual colors.](https://github.com/foostacking/tailwind-flowbite-theming)
