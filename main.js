var pictures=["grandpa.jpg","granny.png","Lewis.webp","SLENDRINA.jpg","SLENDER MAN.jpg","SPIDER BABY.png"];
var names = ["Granpa","Granny","me","Slendrina","Slender man","Spider baby"];
var i=0;

function change()
{
    document.getElementById("member_image").src=pictures[i];
    document.getElementById("member_name").innerHTML=names[i];
    i++;
}