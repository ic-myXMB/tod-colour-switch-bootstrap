/**
 *  TOD Colour Switch @version 1.0.0
 */

    // Light Mode Function
    function light_Mode() {
        document.querySelectorAll('.bg-dark').forEach((element) => {
         element.className = element.className.replace(/-dark/g, '-light');
        });

        // Background Colour
        document.body.classList.add('bg-light');

        // Text Colour
        if (document.body.classList.contains('text-light')) {
          document.body.classList.replace('text-light', 'text-dark');
        } 
        
        // Text Colour
        else {
          document.body.classList.add('text-dark');
        }

        // Tables Colour
        var tables = document.querySelectorAll('table');
        // For 
        for (var i = 0; i < tables.length; i++) {
            if (tables[i].classList.contains('table-dark')) {
             // Remove table-dark class from each table
             tables[i].classList.remove('table-dark');
            }
        }

        // Local Storage Set Item Light
        localStorage.setItem('colourSwitch', 'light');
    }
    
    // Dark Mode Function
    function dark_Mode() {
        document.querySelectorAll('.bg-light').forEach((element) => {
         element.className = element.className.replace(/-light/g, '-dark');
        });
        
        // Background Colour
        document.body.classList.add('bg-dark');
        
        // Text Colour 
        if (document.body.classList.contains('text-dark')) {
         document.body.classList.replace('text-dark', 'text-light');
        } 

        // Text Colour
        else {
          document.body.classList.add('text-light');
        }

        // Tables Colour
        var tables = document.querySelectorAll('table');
        // For
        for (var i = 0; i < tables.length; i++) {
         // Add table-dark class to each table
         tables[i].classList.add('table-dark');
        }

        // Local Storage Set Item Dark
        localStorage.setItem('colourSwitch', 'dark');
    }
    
    // Switch It Function
    function switch_It() {
    	
        // Variables	
        var the_hour = new Date().getHours();
        var time_of_Day;

        // If TOD Is Morning Time
        if (the_hour >= 7 && the_hour < 12) {
         // Morning
         time_of_Day = "morning";
        }

        // Else If TOD Is Day Time
        else if (the_hour >= 12 && the_hour < 18) {
         // Day	
         time_of_Day = "day";
        }

        // Else TOD Night Time
        else {
         // Night
         time_of_Day = "night";  
        }

        // Switch TOD
        switch (time_of_Day) {
        	// Morning Case
            case "morning":
            // Day Case
            case "day":
                // Do Light     
                light_Mode();
            break;
            // Night Case
            case "night":
            	// Do Dark
                dark_Mode();
            break;
            // Default Case
            default:
            	// Do Light
                light_Mode();
            break;     
        }
    }
    
    // Load It Function
    function load_It(){
    	// Switch It Function
        switch_It();
    }

    window[ addEventListener ? 'addEventListener' : 'attachEvent' ]( addEventListener ? 'load' : 'onload', load_It );
