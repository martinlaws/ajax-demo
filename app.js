const title = '<h2>Hello, LHL!</h2>'

$(document).ready(() => {
  console.log('hi!')
  setTimeout(() => {
    $('.title').html(title);
  }, 1000)

  $.ajax({
    type: 'GET',
    url: 'https://www.reddit.com/r/dogpicturesasdasdasdas.json',
    dataType: 'JSON'
  })
  .done( data => {
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
  })
  .fail( (XHR, status, err) => {
    const errorMessage = document.createElement('h2')
    $(errorMessage).text(`
      Error status: ${XHR.responseJSON.error} | 
      Error message: ${XHR.responseJSON.message}
    `)

    $('.content').append(errorMessage)
    console.log(XHR, status, err)
  })
})