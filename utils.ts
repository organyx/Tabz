export const isValidIcon = (iconUrl: string): boolean => {
  const isValid = /chrome/.test(iconUrl)
  return iconUrl !== undefined || !isValid
}

export const openExtensionOptions = (): void => {
  //   browser.runtime.openOptionsPage()
  chrome.runtime.openOptionsPage()
}
