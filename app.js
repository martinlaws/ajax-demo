$(document).ready(() => {
  console.log('hi!')
  setTimeout(() => {
    $('.title').html(title);
  }, 1000)

  const title = '<h2>Hello, LHL!</h2>'
})

const changeQuery = () => {
  const param = $('#query-param').val()

  $.ajax({
    type: 'GET',
    url: `https://www.reddit.com/r/${param}.json`,
    dataType: 'JSON'
  })
  .done( data => {
    data.data.children.forEach((dogPhoto) => {
      const imgTag = document.createElement('img')
      imgTag.src = dogPhoto.data.thumbnail
      imgTag.title = dogPhoto.data.title
      
      const imgWrapper = document.createElement('a')
      imgWrapper.href = `http://reddit.com${dogPhoto.data.permalink}`
      imgWrapper.target = '_blank'
      $(imgWrapper).html(imgTag)

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
}