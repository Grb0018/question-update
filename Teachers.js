

function Teacher(){
      document.getElementById('paper').style.display = 'block';
      document.getElementById('bg').style.backdropFilter = 'blur(${9}px)';
      var q =  document.getElementById('Noofpronoun').value;
      var q1 =  document.getElementById('Identifypronoun').value;
      var q2 =  document.getElementById('Identifypronoun1').value;
      var q3 =  document.getElementById('Identifypronoun2').value;
      var q4 =  document.getElementById('Identifypronoun3').value;
      var q5 =  document.getElementById('Noofnoun').value;
      var q6 =  document.getElementById('Noofnoun2').value;
      var q7 =  document.getElementById('Noofnoun3').value;
        if (q <9){
        for (let i = 0; i < q; i++) {
            if(document.getElementById('studpro1').innerHTML === 'Teacher'){
        var pro = fruits[i];
        var proans = fruitsAns[i];
        var o = document.getElementById('setpronoun').innerHTML;
        var a = document.getElementById('proans1').innerHTML;
        document.getElementById('setpronoun').innerHTML = o + pro;
        document.getElementById('proans1').innerHTML = a + proans;
        document.getElementById('NoForPronoun').innerText = q;
        } else if(document.getElementById('studpro1').innerHTML === 'Student'){
          var pro = fruits[i];
          var o = document.getElementById('setpronoun').innerHTML;
          document.getElementById('setpronoun').innerHTML = o + pro;
          document.getElementById('NoForPronoun').innerText = q;
        }
        
      }}//if (q >=9){alert("Total Have 8 questions")}
      //if (q <= 0){alert("Dont choose below 1 question ")}
      //2nd pronoun --->
      if (q1 <17){
          for (let i = 0; i < q1; i++) {
          var ide = Identify[i];
          var o1 = document.getElementById('Identifysecpronoun').innerHTML;
          document.getElementById('Identifysecpronoun').innerHTML = o1 + ide;
          document.getElementById('IdentifyNoPronoun').innerText = q1;
          } 
        }if (q1 >=17){alert("Total Have 16 questions")}
        ////3rd pronoun --->
        if (q2 <26){
          for (let i = 0; i < q2; i++) {
          var ide1 = Identify2[i];
          var o2 = document.getElementById('Identifysecpronoun1').innerHTML;
          document.getElementById('Identifysecpronoun1').innerHTML = o2 + ide1;
          document.getElementById('IdentifyNoPronoun1').innerText = q2;
          } 
        }
        if (q2 >=26){alert("Total Have 25 questions")}
        ////4th pronoun --->
        if (q3 <16){
          for (let i = 0; i < q3; i++) {
          var ide2 = Identify3[i];
          var o3 = document.getElementById('Identifysecpronoun2').innerHTML;
          document.getElementById('Identifysecpronoun2').innerHTML = o3 + ide2;
          document.getElementById('IdentifyNoPronoun2').innerText = q3;
          } 
        }
        if (q3 >=16){alert("Total Have 15 questions")}
       ////5th pronoun --->
       if (q4 <11){
          for (let i = 0; i < q4; i++) {
          var ide3 = Identify4[i];
          var o4 = document.getElementById('Identifysecpronoun3').innerHTML;
          document.getElementById('Identifysecpronoun3').innerHTML = o4 + ide3;
          document.getElementById('IdentifyNoPronoun3').innerText = q4;
          } 
        }
        if (q4 >=11){alert("Total Have 10 questions")}
  /// for noun --->
  if (q5 <9){
      for (let i = 0; i < q5; i++) {
      var ide4 = Noun[i];
      var o5 = document.getElementById('setnoun').innerHTML;
      document.getElementById('setnoun').innerHTML =  o5 + ide4;
      document.getElementById('NoForNoun').innerText = q5;
      } 
    }
    if (q5 >=9){alert("Total Have 8 questions")}
  
  /// for noun2 --->
  if (q6 <21){
      for (let i = 0; i < q6; i++) {
      var ide5 = Noun[i];
      var o6 = document.getElementById('setnoun2').innerHTML;
      document.getElementById('setnoun2').innerHTML =  o6 + ide5;
      document.getElementById('NoForNoun2').innerText = q6;
      } 
    }
    if (q6 >=21){alert("Total Have 20 questions")}
  /// for noun2 end--->
  /// for noun3 --->
  if (q7 <7){
      for (let i = 0; i < q7; i++) {
      var ide6 = Noun[i];
      var o7 = document.getElementById('setnoun3').innerHTML;
      document.getElementById('setnoun3').innerHTML =  o7 + ide6;
      document.getElementById('NoForNoun3').innerText = q7;
      } 
    }
    if (q7 >=7){alert("Total Have 6 questions")}
  /// for noun3 end--->
        document.getElementById('header').style.display = "flex";
        document.getElementById('ChangePartdiv').style.display = "none";
  }