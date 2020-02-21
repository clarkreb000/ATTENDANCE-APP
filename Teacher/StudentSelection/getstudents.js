var time = new Date().toLocaleTimeString();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();

   function show(id) {
     if (id == 1) {
        document.getElementById('clocked in').value=time;
        time = new Date().toLocaleTimeString();
     }
   }

       function show(id) {
         if (id == 2) {
            document.getElementById('clocked in2').value=time;
            time = new Date().toLocaleTimeString();
         }
       }

           function show(id) {
             if (id == 3) {
                document.getElementById('clocked in3').value=time;
                time = new Date().toLocaleTimeString();
             }
           }

               function show(id) {
                 if (id == 4) {
                    document.getElementById('clocked in4').value=time;
                    time = new Date().toLocaleTimeString();
                 }
               }