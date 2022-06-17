function countnoun(){
    let a = document.getElementById('NOUN').querySelectorAll('input');
    for(let i=0; i< a.length; i++){
        if(a[i].value > 0){
           let b =  parseInt(document.getElementById('markscount').innerText);
           let x = b + parseInt(a[i].value);
           document.getElementById('markscount').innerText = x;
        }}}
        function countpronoun(){       
    let c = document.getElementById('ol').querySelectorAll('input');
    for(let i=0; i< c.length; i++){
        if(c[i].value > 0){
           let b =  parseInt(document.getElementById('markscount').innerText);
           let x = b + parseInt(c[i].value)
           document.getElementById('markscount').innerText = x;
        }
        
    }console.log(document.getElementById('markscount').innerText)
    
}
function counteditnoun(){
    let a = document.getElementById('NOUN').querySelectorAll('input');
    for(let i=0; i< a.length; i++){
        if(a[i].value > 0){
           let c =  parseInt(document.getElementById('markscount').innerText);
           if(c < parseInt(a[i].value)){
            let x = parseInt(a[i].value) - c;
           document.getElementById('markscount').innerText = x;
           }else{
            let x = c - parseInt(a[i].value);
            document.getElementById('markscount').innerText = x;
           }  
        }  
    }}
function counteditpronoun(){
    let c = document.getElementById('ol').querySelectorAll('input');
    for(let i=0; i< c.length; i++){
        if(c[i].value > 0){
           let d =  parseInt(document.getElementById('markscount').innerText);
           if(d < parseInt(c[i].value)){
            let x = parseInt(c[i].value) - d;
           document.getElementById('markscount').innerText = x;
           }else{
            let x = d - parseInt(c[i].value);
            document.getElementById('markscount').innerText = x;
           }
        }   
    }}
   
function ChangeHead(){
    var a= document.getElementById('QuestionType').value;
    if(a === 'Students'){document.getElementById('studpro1').innerHTML = 'Student'}else if(a === 'Teachers'){document.getElementById('studpro1').innerHTML = 'Teacher'}
    if(
        document.getElementById('TestName').value.length == 0 || document.getElementById('TotalMarks').value.length == 0
    ){document.getElementById('alert').style.display = 'block';document.getElementById('hidealert').style.display = 'block';}else{
        let x = document.getElementById('TestName').value;
    let y = document.getElementById('TotalMarks').value;
    document.getElementById('firstpart').style.display='none';
    document.getElementById('secondpart').style.display="block";
    document.getElementById('ChangePartdiv').style.display="block";
    document.getElementById('test').innerText = x;
    document.getElementById('marks').innerText = "Marks: " + y;
    var o = document.getElementById('header').innerHTML;
    document.getElementById('header').innerHTML = o + "<ol id='pron'></ol>";
    }
}
function Export2pdf(){
        var printContents = document.getElementById('header').innerHTML
        document.body.innerHTML = "<html><head><style><link rel='stylesheet' href='style.css'></style><title></title></head><body>" + printContents + "</body></html>";
       setTimeout(pnt,1000);   
}
function pnt(){
    let a = window;
    a.print();
    setTimeout(bck,1000);
}
function bck(){
    var printContents = document.getElementById('bg').innerHTML;
    var x= '<div id="paper" style="display: block;"><div id="header" style="display: flex;">'+ printContents + '</div></div>'
    var y = '<span id="savebtn"><button id="download" onclick="Export2Word()" style="display: flex;">Download File<br>(As Doc. File)</button><button id="pdf" onclick="Export2pdf()" style="display: flex;">Print Now<br>(Save As PDF File)</button></span>'
    var z = '@media only screen and (max-width: 600px) {#Headchangediv{margin: 1%;top: 26%;height: 301px;width: 86%;left: 0%;border-radius: 83px;position: absolute;display: none;color: #000000;background-color: #38107257}#secone{padding: 10px;height: auto;font-size: 2vw;font-family: "poppins", sans-serif;margin: 0;text-align: center;width: 98%;color:#dbd1eb}#txtone{font-size: 30px;margin: 5%;}#txttwo{margin: 0;font-size: 28px;}#TestName{width: 98%;padding-left: 8px;background-color: #ffffff42;backdrop-filter: blur(7px);}#TotalMarks{width: 15vw;background-color: #ffffff6e;backdrop-filter: blur(7px);}#Headchange{width: 22vw;height: 10vw;font-size: 18px;background-color: #581ea2;color: antiquewhite;}#bg{background-size: 400%;background-image: url()/*(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWWu447oNAJu5VF5gQd03mSGWeZkn573QyyrqNc4Zgx0xVfrF9gKukbWyW3CmIe3hWrf-SWhTlVS493XbMVnJ9-dy8EAR2u_0ClkBh57rqRd8NARdLRw9mQ18ExxdjkEzbmx97LgJ6UpnGlDMOBZPSSjOu4SUo2ocuYKNMTxzd0PQDHM1sIms5lpGJbA/s16000/bg3.jpg)*/;}#TotalMarks{width: 15vw;}#paper{display:none;width: 88%; margin: 2px;overflow: scroll;}#savebtn{display: flex;flex-direction: column;align-items: center;justify-content: center;}#Startsentence1,#Startsentence2,#Startsentence3,#Startsentence4,#Startsentence5{display: none;color: #e5e1e1;background-color: #06406e69;padding: 10px;top: 20%;left: 14%;backdrop-filter: blur(4px);}#Noofpronoun{width: 55px;height: 35px;font-size: 25px;background-color: #ffffffba;backdrop-filter: blur(1px);}#saven{width: 100px;height: 480px;padding: 10px;margin-top: 32px;margin-left: 37%;font-size: 18px;}#save{width: 3.12vw;}#selection{height: 58px;padding: 0px;width: 98%;font-size: 18px;box-shadow: 8px 4px 10px #3a3a3acc;background-color: #f1e9ff;justify-content: space-around}  #Startsentence2{top: 4%;}#Startsentence2{top: 20%;}#Startsentence3{top: 37%}'
    var m = '#Startsentence4{top: 54%;}#Startsentence4{top: 71%;}#Pronoun{width: 64px;}#editp{margin-left: 20vw;}#svgp{display: none;width: 18px;padding-top: 4px;right: 21vw;position: absolute;}#editn{margin-left: 21vw;}#svgn{display: none;width: 18px;padding-top: 6px;right: 21vw;position: absolute;}#PP,#NP{margin-left: 0px;}#ol{display: none;top: 40vw;height: 327px;overflow: scroll;    font-size: 18px;}#NOUN{top: 17vw; font-size: 18px;height: 400px;overflow: scroll;}#noun{ height: 35px;width: 40px;margin: 0;padding: 0;}#n2{width: 300px;}#n3{width: 300px;}#savepro{align-items: center;display: flex;justify-content: center;height: 45px;width: 100px;padding: 10px;margin-left: 100px;font-size: 18px;}#paper{background-color: #0668bd5e}#header{    display: flex;transform: scale(1);overflow: scroll;width: 90%; margin: 10px; padding: 10px;height: auto; max-height: 500px;}#pdf{margin: 10px 0;height: 50px;width: 190px;font-size: 15px;}#download{margin: 10px 0;height: 50px;width: 190px;font-size: 15px;}#head2{margin-left: 30%;padding: 10px; height: 58px;width: 158px;background-color: #0094e9;box-shadow: 11px 4px 10px #000000cf;color: #e9fbff; border: 0;border-radius: 21vw;font-size: 19px;}.ldio-n8zqosl3re div{width: 13px;height: 48px;}#preload{top: 40vh;left: 28%;}'
    
    document.body.innerHTML = "<html><head><link rel='stylesheet' href='style.css'><style>" + " "+ z + m +"</style><title></title></head><body>" + x + y + "</body></html>"
    document.getElementById('download').style.display = 'flex';
document.getElementById('pdf').style.display = 'flex';
document.getElementById('paper').style.display = 'block';
}
//pre load func ---->
/*function back(){
    document.body.style.backgroundImage = "url('./img/Test generators.jpg')";
    document.getElementById('preload').style.display = 'none';
    document.getElementById('Headchangediv').style.display = 'block'
}
setTimeout(back(),1500);*/

/*window.onload = function() {
    document.getElementById('preload').style.display = 'none';
    document.getElementById('Headchangediv').style.display = 'flex'
};*/
function Export2Word(element, filename = ''){
    var preHtml = "<!DOCTYPE html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title></title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+document.getElementById('header').innerHTML+postHtml;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });  
    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);  
    // Specify file name
    filename = filename?filename+'.doc':'Question.doc';   
    // Create download link element
    var downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);   
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        downloadLink.href = url;     
        downloadLink.download = filename;      
        downloadLink.click();
    }  
}

function StartPronoun(){
    var a = document.getElementById('chg').innerText;
    if(a === "OK"){
    document.getElementById('ol').style.display = "flex";
    document.getElementById('chg').innerText = 'not ok';
    document.getElementById('btn2').style.opacity = "0.5";
    document.getElementById('btn3').style.opacity = "1";
    }if(a === "not ok"){
    document.getElementById('ol').style.display = "none";
    document.getElementById('chg').innerText = 'OK';
    document.getElementById('btn2').style.opacity = "1";
    document.getElementById('btn3').style.opacity = "0.5";
}
}
function viewp(){
    document.getElementById('ol').style.display = "flex";
    document.getElementById('Pronoun').style.display = "none";
    document.getElementById('chg').innerText = 'not ok';
    document.getElementById('editp').style.display = "none";
    document.getElementById('svgp').style.display =  "none";
    counteditpronoun();
    
}
function saven(){
    document.getElementById('ol').style.display = "none";
    document.getElementById('Pronoun').style.display = "block";
    document.getElementById('chg').innerText = 'OK';
    document.getElementById('editp').style.display = "block";
    document.getElementById('svgp').style.display =  "block";
    document.getElementById('btn3').style.opacity = '0.5';
    document.getElementById('btn2').style.opacity = '1';
    countpronoun();
    document.getElementById('Pronouninput').style.display =  "none";

}


function Startsentence1(){
    var ch = document.getElementById('studpro1').innerHTML;
    var a = document.getElementById('chgs1').innerText;
    if(a === "OK"){
    var o = document.getElementById('pron').innerHTML;    
    document.getElementById('Startsentence1').style.display= "inline-block";
    if(ch === 'Student'){
        document.getElementById('pron').innerHTML = o + "<br><li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Choose the correct pronoun to complete each sentence. <tab class='tab'></tab>  [<tab id='NoForPronoun'>8</tab> x 1] <br> <ol style='padding-left: 3%;' id='setpronoun'></ol></li>"}
    if(ch === 'Teacher'){
    document.getElementById('pron').innerHTML = o + "<br><li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Choose the correct pronoun to complete each sentence. <tab class='tab'></tab>  [<tab id='NoForPronoun'>8</tab> x 1] <br> <ol style='padding-left: 3%;' id='setpronoun'></ol></li><br><ol id='proans1' style='color:blue;font-family: Calibri,sans-serif;font-size: 13.33px;'>Answer List</ol>";}
    document.getElementById('chgs1').innerText = 'not ok';
}
    if(a === "not ok"){
        var o = document.getElementById('pron').innerHTML;
        document.getElementById('Noofpronoun').value ='';
        var str = o;
        if(ch === 'Teacher'){
        var str = str.replace('<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;"> Choose the correct pronoun to complete each sentence. <tab class="tab"></tab>  [<tab id="NoForPronoun">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="setpronoun"></ol></li><br><ol id="proans1" style="color:blue;font-family: Calibri,sans-serif;font-size: 13.33px;">Answer List</ol>','');
        document.getElementById('pron').innerHTML = str;
        document.getElementById('Startsentence1').style.display= "none";
        document.getElementById('chgs1').innerText = 'OK';}
        if(ch === 'Student'){
            var str = str.replace('<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;"> Choose the correct pronoun to complete each sentence. <tab class="tab"></tab>  [<tab id="NoForPronoun">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="setpronoun"></ol></li>','');
            document.getElementById('pron').innerHTML = str;
            document.getElementById('Startsentence1').style.display= "none";
            document.getElementById('chgs1').innerText = 'OK';}
        }
}
function Startsentence2(){
    var a = document.getElementById('chgs2').innerText;
    if(a === "OK"){
        var o = document.getElementById('pron').innerHTML;    
        document.getElementById('Startsentence2').style.display= "inline-block";
        document.getElementById('pron').innerHTML = o + "<br><li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Identify the pronouns and tell their kind <tab class='tab'></tab>  [<tab id='IdentifyNoPronoun'>8</tab> x 1] <br> <ol style='padding-left: 3%;' id='Identifysecpronoun'></ol></li>";    
        document.getElementById('chgs2').innerText = 'not ok';}
    if(a === "not ok"){
        var o = document.getElementById('pron').innerHTML;
        document.getElementById('Identifypronoun').value ='';
        var str = o;
        str = str.replace('<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;"> Identify the pronouns and tell their kind <tab class="tab"></tab>  [<tab id="IdentifyNoPronoun">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="Identifysecpronoun"></ol></li>','');
        document.getElementById('pron').innerHTML = str;
        document.getElementById('Startsentence2').style.display= "none";
        document.getElementById('chgs2').innerText = 'OK';}
}
function Startsentence3(){
    var a = document.getElementById('chgs3').innerText;
    if(a === "OK"){
        var o = document.getElementById('pron').innerHTML;    
        document.getElementById('Startsentence3').style.display= "inline-block";
        document.getElementById('pron').innerHTML = o + "<br><li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>Identify if the highlighted pronouns are reflexive pronouns (R) or emphatic pronouns (E)<tab class='tab'></tab>  [<tab id='IdentifyNoPronoun1'>8</tab> x 1] <br> <ol style='padding-left: 3%;' id='Identifysecpronoun1'></ol></li>";    
        document.getElementById('chgs3').innerText = 'not ok';}
    if(a === "not ok"){
        var o = document.getElementById('pron').innerHTML;
        document.getElementById('Identifypronoun1').value ='';
        var str = o;
        str = str.replace('<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;">Identify if the highlighted pronouns are reflexive pronouns (R) or emphatic pronouns (E)<tab class="tab"></tab>  [<tab id="IdentifyNoPronoun1">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="Identifysecpronoun1"></ol></li>','');
        document.getElementById('pron').innerHTML = str;
        document.getElementById('Startsentence3').style.display= "none";
        document.getElementById('chgs3').innerText = 'OK';}
}
function Startsentence4(){
    var a = document.getElementById('chgs4').innerText;
    if(a === "OK"){
        var o = document.getElementById('pron').innerHTML;    
        document.getElementById('Startsentence4').style.display= "inline-block";
        document.getElementById('pron').innerHTML = o + "<br><li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>Change these statements into questions using interrogative pronouns.<tab class='tab'></tab>  [<tab id='IdentifyNoPronoun2'>8</tab> x 1] <br> <ol style='padding-left: 3%;' id='Identifysecpronoun2'></ol></li>";    
        document.getElementById('chgs4').innerText = 'not ok';}
    if(a === "not ok"){
        var o = document.getElementById('pron').innerHTML;
        document.getElementById('Identifypronoun2').value ='';
        var str = o;
        str = str.replace('<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;">Change these statements into questions using interrogative pronouns.<tab class="tab"></tab>  [<tab id="IdentifyNoPronoun2">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="Identifysecpronoun2"></ol></li>','');
        document.getElementById('pron').innerHTML = str;
        document.getElementById('Startsentence4').style.display= "none";
        document.getElementById('chgs4').innerText = 'OK';}
}
function Startsentence5(){
    var a = document.getElementById('chgs5').innerText;
    if(a === "OK"){
        var o = document.getElementById('pron').innerHTML;    
        document.getElementById('Startsentence5').style.display= "inline-block";
        document.getElementById('pron').innerHTML = o + "<br><li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>Correct the errors in the use of pronouns.   <tab class='tab'></tab>  [<tab id='IdentifyNoPronoun3'>8</tab> x 1] <br> <ol style='padding-left: 3%;' id='Identifysecpronoun3'></ol></li>";    
        document.getElementById('chgs5').innerText = 'not ok';}
    if(a === "not ok"){
        var o = document.getElementById('pron').innerHTML;
        document.getElementById('Identifypronoun3').value ='';
        var str = o;
        str = str.replace('<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;">Correct the errors in the use of pronouns.   <tab class="tab"></tab>  [<tab id="IdentifyNoPronoun3">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="Identifysecpronoun3"></ol></li>','');
        document.getElementById('pron').innerHTML = str;
        document.getElementById('Startsentence5').style.display= "none";
        document.getElementById('chgs5').innerText = 'OK';}
}
function hidealert(){
    document.getElementById('alert').style.display = 'none';
    document.getElementById('hidealert').style.display = 'none';
    document.getElementById('nextno').innerHTML = '0';
}
const fruits = ["i)  Sam and I went to the mall. ____________ had lunch at the new restaurant.   <br><tab class='tab'> a. They  	 <tab class='tab'>	 b. We  	<tab class='tab'> 	 c. Me   <br>", 
"ii)  When the beautiful princess stepped out of the lovely carriage, all the people were  <br>looking at __________.   <br><tab class='tab'>a. he  	<tab class='tab'> 	 b. him  	 <tab class='tab'>	 c. her   <br>", 
"iii)  He fell and hurt __________.   <br><tab class='tab'>a. herself  <tab class='tab'>	 b. himself  <tab class='tab'>	 	 c. themselves   <br>", 
"iv)  Tarun and I are going to the fair. Do you want to come with __________?   <br><tab class='tab'>a. them  	 <tab class='tab'>	 b. him  	<tab class='tab'> 	 c. us   <br>",
"v)  I love my sister. She is very kind to __________.   <br> <tab class='tab'>a. us  	<tab class='tab'> 	 b. me  	<tab class='tab'> 	 c. I   <br>",
"vi)  I have lost my keys. Has __________ seen them?   <br><tab class='tab'>a. everyone  	 b. anyone  <tab class='tab'>	 	 c. myself <br>",
"vii)  Priyansh, would __________ like to have some tea?   <br>a. you  	<tab class='tab'> 	 b. they  	 <tab class='tab'>	 c. we  <tab class='tab'> <br>",
"viii)  Pluck the ripe strawberries. We will make jam out of __________.  <br><tab class='tab'>a. they  	<tab class='tab'> 	 b. theirs    <tab class='tab'>   c. them "];

const fruitsAns = [
    `<li>a.they</li>`,
    `<li>b.they</li>`,
    `<li>c.they</li>`,
    `<li>d.they</li>`,
    `<li>e.they</li>`,
    `<li>f.they</li>`,
    `<li>g.they</li>`,
    `<li>h.they</li>`,
    `<li>i.they</li>`,
    `<li>j.they</li>`,
    `<li>k.they</li>`,
    `<li>l.they</li>`,
    `<li>m.they</li>`,
    `<li>n.they</li>`,

    
]


const Noun = [

    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  ______________ played with a ______________ . </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  The ______________ said, 'I respect your ______________ .  </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  ______________ baked a delicious ______________ yesterday.     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  When ______________ lost the , ______________ she was in great ______________ .    </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  The pink ______________ has many ______________ .     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  ______________ asked his elder ______________ to help him find his ______________ .     </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  The ______________ was so boring that the ______________ fell asleep  </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  I saw ______________ of geese flying above my ______________ .    </li>"
    

]

const Identify = [

   "<li value='1' style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Indira does not like him.  	 	 	 	 	_______________ </li>",  
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Can you see those?  	 	 	 	 	_______________ </li>",  
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Who said that?  	 	 	 	 	 	_______________ </li>",  
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> The two kittens love each other.  	 	 	 	_______________ </li> ", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> I am teaching myself to play the tabla.  	 	 	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> They have arrived from London.  	 	 	 	_______________ </li>",  
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Whom did you meet at the mall?  	 	 	 	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> That is beautiful.  	 	 	 	 	 	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> They have lost everything in the earthquake.  	 	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> My garden is pretty. Yours is prettier.  	 	 	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> You should not blame yourself for the accident.  	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> They are talking to each other.  	 	 	 	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Can anyone fix the computer?  	 	 	 	_______________   </li>",
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> I completed the job myself.  	 	 	 	_______________   </li>",
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> All the essays were good, but his was the best.  	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> She herself spoke to the teacher.  	 	 	_______________  </li>"

]
const Identify2 = [

    " <li value='1' style='font-family:Calibri,sans-serif;font-size: 13.33px;'> She <b>herself</b> told me this.  	 	 	 	 	_______  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> I saw <b>myself</b> in the mirror.  	 	 	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> We will do it <b>ourselves</b>.  	 	 	 	 	_______   </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> I did my homework <b>myself</b>.  	 	 	 	 	_______  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> The President <b>himself</b> distributed the awards.  	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> She <b>herself</b> spoke to me.  	 	 	 	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Arjun cut <b>himself</b> while chopping vegetables.  	 	_______  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> They blamed <b>themselves</b> for the crash.  	 	 	_______  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> We <b>ourselves</b> witnessed the accident.  	 	 	_______  </li> ",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> He <b>himself</b> invited us to the party.  	 	 	 	_______  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> We enjoyed <b>ourselves</b> at the party.  	 	 	_______  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> They realised <b>themselves</b> that they were wrong.  	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Don't deceive <b>yourself</b>.  	 	 	 	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> I said to <b>myself</b> that he was right.  	 	 	 	_______  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> She expressed <b>herself</b> well.  	 	 	 	 	_______  </li> ",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> I looked through the papers <b>myself</b>.  	 	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> The child cannot wash <b>itself</b>.  	 	 	 	_______  </li> ",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> You <b>yourself</b> find it hard to say what you feel.  	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> She <b>herself</b> saved her daughter.  	 	 	 	_______  </li> ",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Learn to love <b>yourself</b>.  	 	 	 	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> They have exerted <b>themselves</b> too much.  	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> We have already put <b>ourselves</b> into a lot of problems.  	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Have faith in <b>yourself</b>.  	 	 	 	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Prateek <b>himself</b> was not aware of the plan.  	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Don’t use that knife. You will hurt <b>yourself<b>.  	 	_______ </li>",

]
const Identify3 = [

    " <li value='1' style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  She greeted the guests with a smile.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  The government is going to call for a total ban on liquor.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  The skaters are gliding over the ice.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  They sent some flowers to me.  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  These questions are to be answered.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  They don’t want to leave their house.  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  I will take the first bus.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  You can keep the book for a week.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  The duck was trapped in the weeds.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  Tara Singh saved the child from drowning.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  I plan to take the early morning flight.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  The tailor sent the stitched clothes last evening.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  Ragini gave the cheque to Mayank.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  He bought the house with the red roof.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  Birds love to build their nests in this tree. </li>",

]
const Identify4 = [

    " <li value='1' style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  I himself made the pie.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  He called mine yesterday.      </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  These clothes are us.      </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  I was at home all day. Anybody came.     </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  Everything loves Pia.     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  We send each another Christmas cards.     </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  His mother just retired. Hers was a teacher.     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  I am late. She would be waiting for mine.     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  I saw Seema and Prateek at the mall. But them did not see mine  </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  Hello, I am Rudra and this is my sister, Priya. Us live in Kailash Colony.   </li>",

]

function ValidateMark(){
    document.getElementById('thirdpart').style.display = 'block';
    document.getElementById('step3').style.backgroundColor = 'rgb(252 191 0)';
    document.getElementById('secondpart').style.display="none";
    document.getElementById('showmarksp').innerText = document.getElementById('markscount').innerText;
    document.getElementById('btn3').style.opacity = '0.5';
    document.getElementById('btn2').style.opacity = '0.5';
    document.getElementById('btn4').style.opacity = '1';
}

function saveit(){
    document.getElementById('btn5').style.opacity = '0.5';
    document.getElementById('btn6').style.opacity = '1';
    document.getElementById('next').style.display = 'none';
    document.getElementById('step4').innerHTML = '<p>Step 6</p>';
    document.getElementById('step4').style.backgroundColor = 'rgb(228 28 62)'
    document.getElementById('selectionName4').innerHTML = '<p>Finalize and Save</p>';
    document.getElementById('download').style.display = 'flex';
    document.getElementById('pdf').style.display = 'flex';
    document.getElementById('paper').style.height = '48vh';
    document.getElementById('previous').style.display = 'none';
    
}


  function nextno(){
    if(document.getElementById('nextno').innerHTML === '3'){
        saveit();
        document.getElementById('nextno').innerHTML = '4';
    }
    if(document.getElementById('nextno').innerHTML === '2'){
        document.getElementById('paperpart').style.display = 'block';
    document.getElementById('step4').style.backgroundColor = '#ec694b';
    document.getElementById('thirdpart').style.display = 'none';
    document.getElementById('btn5').style.opacity = '1';
    document.getElementById('btn4').style.opacity = '0.5';
        Teacher();
        document.getElementById('nextno').innerHTML = '3';
        document.getElementById('previous').style.display = 'none';
    }
    if(document.getElementById('nextno').innerHTML === '1'){
        ValidateMark();
        document.getElementById('nextno').innerHTML = '2';
    }
    if(document.getElementById('nextno').innerHTML === '0'){
        ChangeHead();
        document.getElementById('nextno').innerHTML = '1';
        document.getElementById('btn2').style.opacity = '1';
        document.getElementById('btn1').style.opacity = '0.5';
       document.getElementById('previous').style.display = 'block';
    }
    
    else {return false}
}
function prevno(){
    
    if(document.getElementById('nextno').innerHTML === '1'){
        document.getElementById('firstpart').style.display = 'block';
        document.getElementById('secondpart').style.display = 'none';
        document.getElementById('nextno').innerHTML = '0';
        document.getElementById('previous').style.display = 'none';
        document.getElementById('next').style.display = 'block';
        document.getElementById('next').style.backgroundColor = 'transparent';
        document.getElementById('btn1').style.opacity = '1';
        document.getElementById('btn2').style.opacity = '0.5';
        document.getElementById('btn3').style.opacity = '0.5';
        //document.getElementById('paper').innerHTML = '\n                <div id="header">\n                    <pre id="test" style="font-family:Calibri,sans-serif;font-size: 13.33px;text-align: center;">Test Name</pre><pre>                                                 </pre>\n                    <pre id="school" style="font-family:Calibri,sans-serif;font-size: 13.33px;text-align: center">XYZ School</pre><br>\n                    <pre id="marks" style="text-align:left;font-family:Calibri,sans-serif;font-size: 13.33px;">Marks: </pre><br>\n                    <pre id="student" style="font-family:Calibri,sans-serif;font-size: 13.33px;">Student Name: ……………………………………………                                                          Marks Obtained: …………………</pre>\n                    <pre style="text-align: center;">__________________________________________________________________________</pre>\n                </div>\n                '
        
    }
    if(document.getElementById('nextno').innerHTML === '2'){
        document.getElementById('nextno').innerHTML = '1';
        document.getElementById('thirdpart').style.display = 'none';
        document.getElementById('secondpart').style.display = 'block';
        document.getElementById('ChangePartdiv').style.display = 'block';
        document.getElementById('next').style.display = 'block';
        document.getElementById('btn2').style.opacity = '1';
        //document.getElementById('pron').innerHTML = '' ;
        document.getElementById('btn3').style.opacity = '0.5';
        document.getElementById('btn5').style.opacity = '0.5';
        document.getElementById('btn6').style.opacity = '0.5';
    }
    if(document.getElementById('nextno').innerHTML === '4' || document.getElementById('nextno').innerHTML === '3'){
        document.getElementById('nextno').innerHTML = '1';
        document.getElementById('secondpart').style.display = 'block';
        document.getElementById('thirdpart').style.display = 'none';
        document.getElementById('paperpart').style.display = 'none';
        //document.getElementById('pron').innerHTML = '' ;
        document.getElementById('btn5').style.opacity = '0.5';
        document.getElementById('btn6').style.opacity = '0.5';
        document.getElementById('btn2').style.opacity = '1';
        document.getElementById('ChangePartdiv').style.display = 'block';
        document.getElementById('next').style.display = 'block';
    }
}
