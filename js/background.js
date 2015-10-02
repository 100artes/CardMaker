function createBackground()
{
    ctx.strokeStyle = 'rgba(0,0,0,1)';


//write symbol of game 'M'
    ctx.fillStyle = 'rgba(100,0,0,0.2)';
    ctx.font = "bold 50px Times New Roman";
    ctx.fillText("M", 75, 218);

//create border
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(0,0);
    ctx.lineTo(200,0);
    ctx.lineTo(200,260);
    ctx.lineTo(0,260);
    ctx.lineTo(0,0);
    ctx.stroke();

    //circle for manaCost
    ctx.beginPath();
    ctx.arc(180,18,6,0,2*Math.PI,false);
    ctx.fillStyle ='#e3e3db';
    ctx.fill();
    ctx.strokeStyle = '#e3e3db';
    ctx.stroke();
}

function setName(name)
{
    ctx.font = 'normal 11px Arial';
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.fillText(name, 5, 21);
}

function createCreStats()
{
    ctx.strokeStyle = 'rgba(0,0,0,1)';
    //create field for life
    ctx.beginPath();
    ctx.rect(175, 235, 20, 20);
    ctx.fillStyle = '#7FBF7F';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.stroke();

//create field for attack
    ctx.beginPath();
    ctx.rect(5, 235, 20, 20);
    ctx.fillStyle = '#D47C7C';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.stroke();
}

function setColor(color)
{
    var backColor;
    switch (color)
    {
        case 'white': ctx.drawImage(images[0],2,2,196,256);backColor = '#FFFFD0';break;
        case 'blue': ctx.drawImage(images[1],2,2,196,256);backColor = '#D2EDF0'; break;
        case 'red': ctx.drawImage(images[2],2,2,196,256);backColor = '#fedcdb'; break;
        case 'green': ctx.drawImage(images[3],2,2,196,256);backColor = '#C6E9BB';break;
        case 'black': ctx.drawImage(images[4],2,2,196,256);backColor = '#D9D9D9';break;
        case 'colorless':ctx.drawImage(images[5],2,2,196,256);backColor = '#F1F2F0';break;
    }

    ctx.fillStyle = backColor;

    //create field for text
    ctx.beginPath();
    ctx.strokeStyle = backColor;
    ctx.moveTo(10, 165);
    ctx.arcTo(10, 155, 20, 155, 5);
    ctx.lineTo(180, 155);
    ctx.arcTo(190, 155, 190, 165, 5);
    ctx.lineTo(190, 240);
    ctx.arcTo(190, 250, 180, 250, 5);
    ctx.lineTo(20, 250);
    ctx.arcTo(10, 250, 10, 240, 5);
    ctx.lineTo(10, 155);
    ctx.stroke();
    ctx.fillRect(11, 156, 178, 93);

    //create field for card name
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(0,0,0,1)";
    ctx.beginPath();
    ctx.moveTo(0, 10);
    ctx.lineTo(200, 10);
    ctx.moveTo(0, 25);
    ctx.lineTo(200, 25);
    ctx.stroke();
    ctx.fillRect(0, 11, 200, 13);

    //create field for card type and subtype
    ctx.strokeStyle = "rgba(0,0,0,1)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 130);
    ctx.lineTo(200, 130);
    ctx.moveTo(0, 145);
    ctx.lineTo(200, 145);
    ctx.stroke();
    ctx.fillRect(2, 131, 196, 13);
}

function setTypes(type, subtype)
{
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.font = 'normal 11px Arial';
    ctx.fillText(type + " - " + subtype, 5, 141);
}

function setToughness(lifes)
{
    ctx.fillStyle = 'black';
    if(lifes < 10)
    {
        ctx.font = "normal 18px Arial";
        ctx.fillText(lifes, 180, 252);
    }
    else
    {
        ctx.font = 'normal 17px Arial';
        ctx.fillText(lifes, 175, 252);
    }

}

function setPower(power)
{
    ctx.fillStyle = 'black';
    if(power < 10)
    {
        ctx.font = "normal 18px Arial";
        ctx.fillText(power, 10, 252);
    }
    else
    {
        ctx.font = 'normal 17px Arial';
        ctx.fillText(power, 5, 252);
    }

}

function setManaCost(cost)
{
    if(cost < 10)
        ctx.fillText(cost, 177,22);
    else
        ctx.fillText(cost, 173,22);
}