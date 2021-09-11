const wAlert = window.alert
window.alert = function (text) {
  if (String(text).includes('Oops') && String(text).includes('forms')) {
    console.log('Overridden Alert:', text)
  } else {
    wAlert(text)
  }
  return true
}
