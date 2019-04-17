const title = '<h2>Hello, LHL!</h2>'

const handleClick = () => {
  const subreddit = $('#subreddit-input').val()

  $.ajax({
    type: 'GET',
    url: `https://www.reddit.com/r/${subreddit}.json`,
    dataType: 'JSON'
  })
  .done( data => {
    const markupArray = []

    data.data.children.forEach((post) => {
      const { thumbnail, title, permalink } = post.data

      if (thumbnail !== 'self' && thumbnail !== '') {
        const markup = `
        <a href="http://www.reddit.com${permalink}" target="_blank">
          <img src="${thumbnail}" title="${title}"/>
        </a>
      `

      markupArray.push(markup)
      }
      
    })

    const formattedMarkup = markupArray.join('')
    
    $('.content').append(formattedMarkup)
  })
  .fail( (XHR) => {
    console.log(XHR)

    const { error, message } = XHR.responseJSON

    const errorMarkup = `
      <div style="background-color: red">
        <h2 style="color: white">${error}: ${message}</h2>
      </div>
    `

    $('.content').append(errorMarkup)
  })
}
