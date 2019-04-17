const title = '<h2>Hello, LHL!</h2>'

$(document).ready(() => {
  console.log('hi!')
  setTimeout(() => {
    $('.title').html(title);
  }, 1000)
})