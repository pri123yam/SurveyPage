let pg=0;
var a=[];
// var key= {
//     //quest:'',
//     answer: [],
// };
function nexti()
{
    if(pg==0)
        {
            document.getElementById('insi').style.visibility='hidden';
            document.getElementById('nam').style.visibility='hidden';
        }
    pg++;
    let p=document.getElementById('insi1');
    document.getElementById("optio").style.visibility='visible';
    let x,y;
    y=document.getElementById('nam').value;
    y=y.toUpperCase();
    
    //alert(a.length);
    storeValue(pg);

    //switch case edits the form
    switch(pg)
    {
        case 1: 
        //document.getElementById('prev').style.visibility='visible';
        document.getElementById('top').innerHTML+=" "+y;
        x="1.)Which sport do you like among these?";
        p.innerHTML=x;
        document.getElementById('optio').one.value="cricket";
        document.getElementById('pone').innerHTML="cricket";
        document.getElementById('optio').two.value="football";
        document.getElementById('ptwo').innerHTML="football";
        document.getElementById('optio').three.value="tabletennis";
        document.getElementById('pthree').innerHTML="tabletennis";
        break;
        case 2:
        x="2.)Which dishes you like among these?";
        p.innerHTML=x;
        document.getElementById('optio').one.value="chicken";
        document.getElementById('pone').innerHTML="chicken";
        document.getElementById('optio').two.value="paneer";
        document.getElementById('ptwo').innerHTML="paneer";
        document.getElementById('optio').three.value="gulab jamun";
        document.getElementById('pthree').innerHTML="gulab jamun";
        break;
        case 3:
        x="3.)which genre novel do you like among these?";
        p.innerHTML=x;
        document.getElementById('optio').one.value="thriller";
        document.getElementById('pone').innerHTML="thriller";
        document.getElementById('optio').two.value="fantasy";
        document.getElementById('ptwo').innerHTML="fantasy";
        document.getElementById('optio').three.value="fiction";
        document.getElementById('pthree').innerHTML="fiction";
        break;
        case 4:
        x="4.) Which will be your travel destination among these?";
        p.innerHTML=x;
        document.getElementById('optio').one.value="paris";
        document.getElementById('pone').innerHTML="paris";
        document.getElementById('optio').two.value="jasper";
        document.getElementById('ptwo').innerHTML="jasper";
        document.getElementById('optio').three.value="mount everest";
        document.getElementById('pthree').innerHTML="mount everest";
        break;
        case 5:
        x="5.) which cars do you like?";
        p.innerHTML=x;
        document.getElementById('optio').one.value="lamborgini";
        document.getElementById('pone').innerHTML="lamborgini";
        document.getElementById('optio').two.value="rolce royce";
        document.getElementById('ptwo').innerHTML="rolce royce";
        document.getElementById('optio').three.value="mercedes";
        document.getElementById('pthree').innerHTML="mercedes";
        break;
        case 6:
        x="6.)which sportperson do you like among these?";
        p.innerHTML=x;
        document.getElementById('optio').one.value="dhoni";
        document.getElementById('pone').innerHTML="dhoni";
        document.getElementById('optio').two.value="messi";
        document.getElementById('ptwo').innerHTML="messi";
        document.getElementById('optio').three.value="mike tyson";
        document.getElementById('pthree').innerHTML="mike tyson";
        break;
        case 7:
        x="7.)which social media platform do you like among these?";
        p.innerHTML=x;
        document.getElementById('optio').one.value="whatsapp";
        document.getElementById('pone').innerHTML="whatsapp";
        document.getElementById('optio').two.value="facebook";
        document.getElementById('ptwo').innerHTML="facebook";
        document.getElementById('optio').three.value="instagram";
        document.getElementById('pthree').innerHTML="instagram";
        break;
        case 8:
        x="8.)Which  book do you like among these?";
        p.innerHTML=x;
        document.getElementById('optio').one.value="cinder";
        document.getElementById('pone').innerHTML="cinder";
        document.getElementById('optio').two.value="deathly hallows";
        document.getElementById('ptwo').innerHTML="deathly hallows";
        document.getElementById('optio').three.value="amber spyglass";
        document.getElementById('pthree').innerHTML="amber spyglass";
        break;
        case 9:
        x="9.)Which politician do you like the most among these?";
        p.innerHTML=x;
        document.getElementById('optio').one.value="modi";
        document.getElementById('pone').innerHTML="modi";
        document.getElementById('optio').two.value="siddhu";
        document.getElementById('ptwo').innerHTML="siddhu";
        document.getElementById('optio').three.value="trump";
        document.getElementById('pthree').innerHTML="trump";
        break;
        case 10:
        x="10.)Which brand of phones do you like?";
        p.innerHTML=x;
        document.getElementById('optio').one.value="apple";
        document.getElementById('pone').innerHTML="apple";
        document.getElementById('optio').two.value="samsung";
        document.getElementById('ptwo').innerHTML="samsung";
        document.getElementById('optio').three.value="redmi";
        document.getElementById('pthree').innerHTML="redmi";
        break;
        case 11:
        document.getElementById("hi").style.backgroundColor="yellow"
        document.getElementById('insi1').style.color="black";
        document.getElementById('top').innerHTML="THANKS FOR THE SURVEY: "+ y;
        document.getElementById("optio").style.visibility='hidden';
        document.getElementById('insi1').style.fontSize= "18px";
        document.getElementById('insi1').innerHTML="The survey is complete your responses were as follows:<br/>";
        document.getElementById('next').style.visibility='hidden';
        //document.getElementById('prev').style.visibility='hidden';
        alert("SURVEY ENDED, PRESS OKAY TO SEE THE RESULTS!");
        for(i=0;i<a.length;i++)
        {
            //console.log(a[i]);
            if(i%2==0)
            {
                document.getElementById("insi1").innerHTML +="question  : " + a[i] + "<br />" ;
                document.getElementById("insi1").innerHTML +="answer : ";
            }
            else
            {
                document.getElementById("insi1").innerHTML +=a[i].answer+"    " + "<br /><br />";
            }

        }
    }
    a.push(x);
}
function prev()
{
    if(pg > 1 && pg < 11)
    {
        pg-=2;
        nexti();
    }
}
function storeValue(pgno)
{
    let key={
        answer:[]
    };
    let y;
    if(pgno >1 && pgno <= 11)
    {
        if(document.getElementById('optio').one.checked===true)
        {
            y=document.getElementById('optio').one.value;
            key.answer.push(y);
        }
        if(document.getElementById('optio').two.checked===true)
        {
            y=document.getElementById('optio').two.value;
            key.answer.push(y);
        }
        if(document.getElementById('optio').three.checked===true)
        {
            y=document.getElementById('optio').three.value;
            key.answer.push(y);
        }
        document.getElementById('optio').one.checked=false;
        document.getElementById('optio').two.checked=false;
        document.getElementById('optio').three.checked=false;
        if(key.answer.length===0)
        key.answer.push("you didn't select any option")
        a.push(key);
        console.log(key);
    }
}