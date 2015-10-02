var canv = document.getElementsByTagName('canvas')[0],
    ctx = canv.getContext('2d'),
    images = [],
     sources =['white.jpg','blue.jpg','red.jpg','green.jpg','black.png','artifact.jpg'],
    additionalSrcs = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', 't.png'],
    additionalImgs = [],
    mainPicture;


function insertClicked(id)
{
    $('#abilities').val(function(){
        var text = $(this).val();
        text += '{' + id+ '} ';
        return text;
    });
}

$(function(){
    imageLoad(sources, images, createCard);
    imageLoad(additionalSrcs,additionalImgs,drawImage);
    $('#saveBtn').click(save);
    $('#resBtn').click(reset);
    $('#genBtn').click(createCard);
    createCard();
});

function save() {
    window.open(canv.toDataURL('image/jpg'), '_blank').focus();
}

function reset()
{
    $('#abilities').val('');
}

function processFiles(files)
{
    var picture = files[0],
        reader = new FileReader();

    reader.onload = function(e){
        var img = new Image();
        img.src  = e.target.result;
        img.onload = function(){
            mainPicture = this;
        };
    };
    reader.readAsDataURL(picture);
}

function drawImage()
{
    if(mainPicture)
    ctx.drawImage(mainPicture,10,28,180,100);
}


function imageLoad(sources, arr, callback)
 {

   var numImages = 0,
    loaded = 0;
 for(var i in sources)
 {
    numImages++;
 }
 for(var t = 0; t < numImages; t++)
 {
 arr[t] = new Image();
 arr[t].src = 'res/' + sources[t];
 arr[t].onload = function(){
 if(++loaded >= numImages)
 {
   callback();
 }
 }
 }
 }


function createCard()
{
    var typeCard = $('#typeCard :selected').text();
    setColor($('#cardColor :selected').text());
    createBackground();
    setName($('#cardName').val());
    setManaCost($('#manaCost').val());
    setTypes(typeCard,$('#subType').val());
    writeAbilities($('#abilities').val());
    if(typeCard === "Artifact Creature" || typeCard === "Creature")
    {
        createCreStats();
        setPower($('#power').val());
        setToughness($('#toughness').val());
    }
    drawImage();
}

function writeAbilities(text) {
    if(text === '')
    return;
    var maxWidth = 162,
        marginLeft = 0,
        marginTop = 0,
        x = 20, y = 175,
        lineHeight,
        picWidth, picHeight,picPaddingTop;

    if(text.length < 150)
    {
        ctx.font = "normal 12px Arial";
        lineHeight = picHeight = picWidth = 15;
        picPaddingTop = 12;
    }
    else
    {
        ctx.font = "normal 10px Arial";
        lineHeight = picHeight = picWidth = 13;
        picPaddingTop = 10;
    }

    text = text.replace(/[{}]/g,'');
    var words = text.split(' ');

    for(var i = 0; i < words.length; i++)
    {
        if(words[i] === '')
        {
            words.splice(i,1);
            i--;
        }

    }
    for(var  n= 0; n < words.length; n++)
    {
        if(marginLeft + ctx.measureText(words[n]).width >= maxWidth)
        {
            marginTop += lineHeight;
            marginLeft = 0;
        }
        if(!isNaN(words[n]))
        {
            ctx.drawImage(additionalImgs[parseInt(words[n])-1],x + marginLeft,y + marginTop-picPaddingTop,picWidth,picHeight);
            marginLeft += 20;
        }
        else if(words[n] === 't')
        {
            ctx.drawImage(additionalImgs[9],x + marginLeft,y + marginTop -picPaddingTop,picWidth, picHeight);
            marginLeft += 20;
        }
        else
        {
            ctx.fillText(words[n],x + marginLeft,y + marginTop);
            marginLeft += ctx.measureText(words[n]).width + 4;
        }
    }
}