const isThumbnailValid = thumbnail => {
  if (thumbnail && thumbnail !== 'self') {
    return true
  } else {
    return false
  }
}

const handleClick = () => {
  const subreddit = $('#subreddit-input').val()

  $('.content').html(`<p>Loading photos from ${subreddit}</p>`)
  
  $.ajax({
    type: 'GET',
    url: `https://www.reddit.com/r/${subreddit}.json`,
    dataType: 'JSON'
  }).done( response => {
    const contentDiv = $('.content')
    const markupArray = []
  
    response.data.children.forEach(post => {
      const { thumbnail, title, permalink } = post.data
  
      if (isThumbnailValid(thumbnail)) {
        markupArray.push(`
          <a href="https://www.reddit.com${permalink}" target="_blank">
            <img alt="${title}" title="${title}" src="${thumbnail}"/>
          </a>
        `)
      }
    })
  
    contentDiv.html(markupArray.join(''))
  })
}
