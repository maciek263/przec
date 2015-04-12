
chrome.contextMenus.create( {
	title: "Przecena z: \"%s\"",
	contexts: ["selection"],
	onclick: count
});

//chrome.browser_action.onClicked.addListener(function(tab){count});

var equal = 0;

function count(info) {
//ten plik
		
    var select = info.selectionText;

    
    
    if(160 === select.charCodeAt(1))
            var select = select.substr(0,1)+select.substr(2,4)
    

    var tab = [];
    var i = 0; 
    
    for (var x = 10; x < 55; x+=5){
            var equ = (select * x)/100;
            tab[i] = select - equ;
            i++;
         }
   //TODO: metoda zaokraglajaca do 9  
    
    var zao = 24;
    if (zao % 10 == 0)
        confirm(zao - 1);
    else if (zao % 10 > 0) {
        var z = zao % 10;
        //confirm(z)
        if(zao % 10 > 5) {
            confirm('sprawdzenie czy reszta wieksza od 5 :  '+z+' '+zao);
            for (var i = zao; i < 30; i++){
                confirm('petla '+i);
            }  
        }
        //odejmij do 9
        if(zao % 10 < 5) {
            for (var i = zao; i > 19; i--){
                confirm('petla '+i);
            } 
        }
        //else
            //odejmij do 9
        
    }
   //console.log("log test");    
        
    
    confirm('z '+ select  + ' to: ' + "\n"+
        '10% = ' +tab[0].toFixed(0) + "\n"+ 
		'15% = ' +tab[1] + "\n"+
		'20% = ' +tab[2] + "\n"+
        '25% = ' +tab[3] + "\n"+
        '30% = ' +tab[4] + "\n"+
        '35% = ' +tab[5] + "\n"+
		'40% = ' +tab[6] + "\n"+
        '45% = ' +tab[7] + "\n"+
        '50% = ' +tab[8]
        );

  
    //document.write('yuio123');
			//var myQuery = encodeURI("https://www.google.com/search?q="+w );
	 
	//var stro = "popup.html"; 
			//chrome.tabs.create({url: myQuery});
    //chrome.browserAction.setPopup({url: stro});
  //  $('.wyn').text(w3);
   // document.getElementById('wyn').textContent = w3;
  // pokazWynik(w3);
}

function pokazWynik(stat) {
    document.getElementById('wyn').textContent = stat;
}