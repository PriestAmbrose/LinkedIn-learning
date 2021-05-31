newsfeeds = [
     {
      type: 'top-headlines',
      query: 'sources=bbc-news'
    },
    {
      type: 'everything',
      query: 'domains=techcrunch.com&language=en'
    },
     {
      type: 'everyth',
      query: 'domains=comicbookmovie.com&language=en'
    }
]

for (let feed of newsfeeds){
    console.log(feed.type);
}