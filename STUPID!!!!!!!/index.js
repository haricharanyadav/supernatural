
function createImages(index,arrayElem) {
    var article = document.createElement("ARTICLE");
    article.setAttribute("class", "w3-third w3-button");
    article.innerHTML = "<img src='"+arrayElem+"' id='image"+(index+1)+"' onclick ='"+createEpisodesPage()+"' alt='Season "+(index+1)+"' ><p>Season "+(index+1)+"</p>";
    document.getElementById("test1").appendChild(article);
}

function getImages() {
//    $.getJSON("https://dd51ba1e.ngrok.io/images", function(data) {
//     console.log(data)
//    });
    $.ajax({
        url: 'https://dd51ba1e.ngrok.io/images',
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function(data){
            $(data.img).each(function(index,value){
                createImages(index,value);
                console.log(index);
            });
        }
    });
}

function createEpisodesPage(){

}