/* eslint-disable-next-line */
;(function () {
  const storageKey = 'mode'
  const classNameDark = 'dark-mode'
  const classNameLight = 'light-mode'

  function setClassOnDocumentBody(darkMode) {
    document.body.classList.add(darkMode ? classNameDark : classNameLight)
    document.body.classList.remove(darkMode ? classNameLight : classNameDark)
  }

  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const mql = window.matchMedia(preferDarkQuery)
  const supportsColorSchemeQuery = mql.media === preferDarkQuery

  let localStorageTheme = null
  if (window && window.localStorage) {
    localStorageTheme = localStorage.getItem(storageKey)
  }

  const localStorageExists = localStorageTheme !== null

  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageTheme === 'dark')
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentBody(mql.matches)
    localStorage.setItem(storageKey, mql.matches ? 'dark' : 'light')
  } else {
    // source of truth from document.body
    const isDarkMode = document.body.classList.contains(classNameDark)
    localStorage.setItem(storageKey, isDarkMode ? 'dark' : 'light')
  }
})()
