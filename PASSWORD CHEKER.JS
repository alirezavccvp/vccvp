function nextpass()
{      
    var minlen=6 ;
    var scope=" ";
    
    var pass= document.form.password.value;
    var pass2= document.form.password2.value;
    // if for
    if(pass == '' || pass2 == ''  )
    {
    alert("not found;(");
    }
    else  if(document.form.password.value.length < minlen)
    {
        alert.write("not found;(");
    }
    // else if (document.form.password.value.indexof(scope) > -1){
        // alert("not found;("); 
    
    else if(pass != pass2)
    {
       alert("not found;(")
    }
    else
    {
        alert("good job:)")
    }
}