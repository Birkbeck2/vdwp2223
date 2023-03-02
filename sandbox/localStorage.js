const storage = window.localStorage

document.querySelector('#animal-select').addEventListener('change', event => {
  storage.setItem('animal', event.target.value)
})

document.querySelector('#print-storage').addEventListener('click', event => {
  document.querySelector('#animal-in-storage').innerHTML = storage.getItem('animal')
})
