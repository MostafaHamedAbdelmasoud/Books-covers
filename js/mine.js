

$('#id').css("display",'block');
$('#cover').css("border","solid green 1px");
$('#cover').css("width","75%");






var title = document.getElementById('bookTitle');
var subtitle = document.getElementById('bookSubTitle');
var publisher = document.getElementById('publisher');
var authorName = document.getElementById('authorName');
var date = document.getElementById('date');
var button = document.getElementById('button');
var cover = document.getElementById('cover');


title.innerText = ' title';
subtitle.innerText = ' subtitle';
publisher.innerText = 'publisher';
authorName.innerText = 'author name';
date.innerText = '2018';





button.addEventListener('click',clicked);
// console.log(document.getElementById('newTitle').value);
function clicked(r)
{
	r.preventDefault();

	var NewColor = document.getElementById('newcolor').value;
	cover.style.backgroundColor=document.getElementById('newcolor').value;
	
	$("#cover").css("border","2px "+NewColor +" solid");

	if(document.getElementById('newTitle').value!="")
	{
		title.innerText=document.getElementById('newTitle').value;
	}
	if(document.getElementById('newSubTitle').value!="")
	{
		subtitle.innerText=document.getElementById('newSubTitle').value; 
	}
	if(document.getElementById('newPublisher').value!="")
	{
		publisher.innerText=document.getElementById('newPublisher').value;
	}
	if(document.getElementById('newAuthorName').value!="")
	{
		authorName.innerText=document.getElementById('newAuthorName').value;
	}

	date.innerText=document.getElementById('select').value; 
	console.log( date.innerText);





}




/*for(var i=1995;i<2031;i++)
     {
        var dateOpt =document.createElement('option');
        dateOpt.setAttribute('value',i);
        dateOpt.appendChild(document.createTextNode(i));
        var select =document.querySelector("#select");
        var option =document.querySelector("#option1");
        select.insertBefore(dateOpt,option)

        //console.log(dateOpt);

     }

     console.log(document.getElementById('select').value);
      console.log(document.getElementById('newcolor').value);

 */





