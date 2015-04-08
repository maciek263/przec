
chrome.contextMenus.create( {
	title: "Przecena z: \"%s\"",
	contexts: ["selection"],
	onclick: count
});



var equal = 0;

function count(info) {
//ten plik
		
    var select = info.selectionText;
	//select = select.replace(RegExp("&nbsp;","g"),"");
    //select = select.toString();
    //select = select.replace(RegExp(" ","g"),"");
    
    
    if(160 === select.charCodeAt(1))
            var select = select.substr(0,1)+select.substr(2,4)
    
            
   /* var equ1 = (select * 10)/100;
	var w = select - equ1;
	//w = math.floor(w);
    
	var equ2 = (select * 20)/100;
	var w2 = select - equ2;
			
	var equ3 = (select * 30)/100;
	var w3 = select - equ3;
    
    var equ4 = (select * 40)/100;
	var w4 = select - equ4;
    
    var equ5 = (select * 50)/100;
	var w5 = select - equ5;
	*/
    var tab = [];
    var i = 0; 
    
    for (var x = 10; x < 55; x+=5){
            var equ = (select * x)/100;
            tab[i] = select - equ;
            i++;
         }
    
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
    
   /* confirm('z '+ select  + ' to: ' + "\n"+
            tab.join() + "\n"
           );
    */
	/*confirm('z '+ select  + ' to: ' + "\n"+
        '10% = '+w.toFixed(0) + "\n"+ 
		'20% = ' +w2 + "\n"+
		'30% = '  +w3 + "\n"+
        '40% = '  +w4 + "\n"+
        '50% = '  +w5
        );*/
    

    
           /* for (var x = 10; x < 55; x+=5){
                var equ = (select * x)/100;
                equal = select - equ;
                alert('pro '+x+'% ='+ equal + "\n");
            }*/
    
  
    //document.write('yuio123');
			//var myQuery = encodeURI("https://www.google.com/search?q="+w );
	 
	//var stro = "popup.html"; 
			//chrome.tabs.create({url: myQuery});
    //chrome.browserAction.setPopup({url: stro});
  //  $('.wyn').text(w3);
   // document.getElementById('wyn').textContent = w3;
   pokazWynik(w3);
}

function pokazWynik(stat) {
    document.getElementById('wyn').textContent = stat;
}