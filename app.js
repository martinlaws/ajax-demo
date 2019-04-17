const title = '<h2>Hello, LHL!</h2>'

$(document).ready(() => {
  console.log('hi!')
  setTimeout(() => {
    $('.title').html(title);
  }, 1000)

  $.ajax({
    url: 'https://www.reddit.com/r/dogpictures.json'
  })
  .done(data => {
    data.data.children.forEach((dogPhoto) => {
      const imgTag = document.createElement('img')
      imgTag.src = dogPhoto.data.thumbnail
      
      const imgWrapper = document.createElement('a')
      imgWrapper.href = `http://reddit.com${dogPhoto.data.permalink}`
      imgWrapper.target = '_blank'
      $(imgWrapper).html(imgTag)
      // console.log(imgTag, dogPhoto)
      $('.content').append(imgWrapper)
    })
    console.log(data.data.children)
  })
})