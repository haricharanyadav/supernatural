
// // Automatic Slideshow - change image every 3 seconds
// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}
//   x[myIndex-1].style.display = "block";
//   setTimeout(carousel, 3000);
// }

// <script type="text/javascript">

//var obj = {"img":["https://227263-694567-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/supernaturalLEAD.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Supernatural_Season_1.jpg/220px-Supernatural_Season_1.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Supernatural_Season_2.jpg/220px-Supernatural_Season_2.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Supernatural_Season_3.jpg/220px-Supernatural_Season_3.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Supernatural_Season_4.jpg/220px-Supernatural_Season_4.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Supernatural_Season_5.jpg/220px-Supernatural_Season_5.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Supernatural_Season_6.jpg/220px-Supernatural_Season_6.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Supernatural_Season_7.jpg/220px-Supernatural_Season_7.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Supernatural_Season_8.jpg/220px-Supernatural_Season_8.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Supernatural_Season_9.jpg/220px-Supernatural_Season_9.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Supernatural_Season_10.jpg/220px-Supernatural_Season_10.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Supernatural_Season_11.jpg/220px-Supernatural_Season_11.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Supernatural_Season_12.jpg/220px-Supernatural_Season_12.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Supernatural_Season_13.jpg/220px-Supernatural_Season_13.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Supernatural_Season_14.jpg/220px-Supernatural_Season_14.jpg"]} 

function createDOM(arrayElem) {

    
    document.getElementById("test1").innerHTML = "<article class='w3-third w3-button'><img src='"+arrayElem+"' id='image' alt='Season 1' ><p>Season 1</p> </article>";

}


function finalDOM() {
    var obj = getImages();
    console.log("xyz"+obj);
    for(var i=0; i< obj.img.length; i++) {
        createDOM(obj.img[i]);

    }
    

}

function getImages() 
{
   var data="";
   $.get("http://localhost:8080/images", function(response) {
        data = response;
   })

   return data;
}


// <article class="w3-third w3-button">
//     <img src="images/Supernatural_Season_14.jpg" alt="Season 14" >
//     <p>Season 14</p>
//   </article>

