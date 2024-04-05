    
        // var el_up = document.getElementById("GFG_UP"); 
        // var el_down = document.getElementById("GFG_DOWN"); 
        var today = new Date(); 
        // el_up.innerHTML = today; 
        var dd = today.getDate(); 
        var mm = today.getMonth() + 1; 
  
        var yyyy = today.getFullYear(); 
        if (dd < 10) { 
            dd = '0' + dd; 
        } 
        if (mm < 10) { 
            mm = '0' + mm; 
        } 
        var today = dd + '/' + mm + '/' + yyyy; 
  
         console.log(today)
        // function gfg_Run() { 
        //    console.log(today)
        // } 
    