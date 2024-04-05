var data= [
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "India tables controversial citizenship bill",
  "description": "Critics say the Citizenship Amendment Bill is part of the government's agenda to marginalise Muslims.",
  "url": "http://www.bbc.co.uk/news/world-asia-india-50670393",
  "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/FD72/production/_110028846_gettyimages-1183874358-594x594.jpg",
  "publishedAt": "2019-12-09T06:58:21Z",
  "content": "Image copyrightAFPImage caption\r\n One analyst has called the bill the most 'consequential action' of the Modi government\r\nIndia's government has tabled a bill in parliament which offers amnesty to non-Muslim illegal immigrants from three neighbouring countrie… [+6533 chars]"
  },
  {
  "source": {
  "id": "bbc-news",
  "name": "BBC News"
  },
  "author": "BBC News",
  "title": "Finnish minister, 34, to be world's youngest PM",
  "description": "Sanna Marin, of the Social Democrats, will head a female-led governing coalition in the Nordic nation.",
  "url": "http://www.bbc.co.uk/news/world-europe-50709422",
  "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7C01/production/_110054713_0f01a01a-ea41-4bce-8b90-fa21d188a35b.jpg",
  "publishedAt": "2019-12-09T05:50:04Z",
  "content": "Image copyrightReutersImage caption\r\n Sanna Marin will become the world's youngest sitting PM\r\nSanna Marin, aged 34, will become the world's youngest prime minister as head of a women-led coalition government in Finland.\r\nThe transportation minister was picke… [+1282 chars]"
  }]
  // var total = object.data.length;
  var ids = [];
for(var i =0; i<data.length; i++) {
    ids.push({
      "Heading":data[i].title,
      "Description":data[i].description,
      "More Details":data[i].url})
  
  //  ids.push( data[i].id );
}
console.log(ids);