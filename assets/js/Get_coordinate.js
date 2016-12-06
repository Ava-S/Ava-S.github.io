var aud0 = {
    Coffee1: "0.1951, 0.2372 ; 0.3479, 0.4203"
}

var aud1 = {
    Coffee1: "0.8231, 0.8652 ; 0.2049, 0.2746",
    Coffee2: "0.8301, 0.8722 ; 0.5733, 0.6461"
}

var mf0 = {
    Coffee1: "0.2968, 0.3328 ; 0.2669, 0.3350",
    Coffee2: "0.2688, 0.3039 ; 0.5532, 0.6198",
    Coffee3: "0.7319, 0.7677; 0.5455, 0.6136" 
}

var mf1 = {
    Coffee1: "0.2898, 0.3249 ; 0.1446, 0.2111",
    Coffee2: "0.5950, 0.6311 ; 0.2793, 0.3474"
}

var mf3 = {
   Coffee1: "0.6372, 0.6758 ; 0.1926, 0.2622",
   Coffee2: "0.2907, 0.3284 ; 0.6647, 0.7328",
   Coffee3: "0.1039, 0.1425; 0.4604, 0.5285"  
}

var mf4 = {
   Coffee1: "0.1819, 0.2196 ; 0.2421, 0.3102",
   Coffee2: "0.6091, 0.6477; 0.6770, 0.7467",
   Coffee3: "0.3389, 0.3775 ; 0.4835, 0.5517"
}

var mf5 = {
   Coffee1: "0.1459, 0.1846 ; 0.3637, 0.4319",
   Coffee2: "0.6091, 0.6477; 0.6408, 0.7152",
}

var mf6 = {
   Coffee1: "0.1459, 0.1846 ; 0.3637, 0.4319",
   Coffee2: "0.6091, 0.6477; 0.6408, 0.7152",
}

var mf7 = {
   Coffee1: "0.1459, 0.1846 ; 0.3637, 0.4319",
   Coffee2: "0.6091, 0.6477; 0.6408, 0.7152",
}

var sourcesAud0 = {
    Coffee1: "Aud0Machine.png"
}

var sourcesAud1 = {
    Coffee1: "01AudCanteen.png",
    Coffee2: "01AudMachine.png"
}

var sourcesMF0 = {
    Coffee1: "MF0Canteen.png",
    Coffee2: "MF0Machine1.png",
    Coffee3: "MF0Machine2.png"
}

var sourcesMF1 = {
    Coffee1: "MF1Machine1.png",
    Coffee2: "MF1Machine2.png"
}

var sourcesMF3 = {
    Coffee1: "MF3Machine1.png",
    Coffee2: "MF3Machine2.png",
    Coffee3: "MF3GEWIS.png"
}

var sourcesMF4 = {
    Coffee1: "MF4Machine1.png",
    Coffee2: "MF4Machine2.png",
    Coffee3: "MF4Machine3.png"
}

var sourcesMF5 = {
    Coffee1: "MF5Machine1.png",
    Coffee2: "MF5Machine2.png"
}

var sourcesMF6 = {
    Coffee1: "MF6Machine1.png",
    Coffee2: "MF6Machine2.png"
}

var sourcesMF7 = {
    Coffee1: "MF7Machine1.png",
    Coffee2: "MF7Machine2.png"
}

var defaultImgAud0 = "Aud0.png";
var defaultImgAud1 = "01Aud.png";
var defaultImgMF0 = "MF0.png";
var defaultImgMF1 = "MF1.png"; 
var defaultImgMF3 = "MF3.png";
var defaultImgMF4 = "MF4.png";
var defaultImgMF5 = "MF5.png"; 
var defaultImgMF6 = "MF6.png";
var defaultImgMF7 = "MF7.png";


$(document).ready(function(){
    
    $('#Aud0').on('click touch', function (e) { //Offset mouse Position
        /*var posX = $(this).offset().left,
            posY = $(this).offset().top;*/
        var posX = $(this).position().left,
            posY = $(this).position().top;
        var relX = (e.pageX - posX)/($(this).width()),
            relY = (e.pageY - posY)/($(this).height());
        console.log("Offset: " + (e.pageX - posX) + ' , ' + (e.pageY - posY));
        console.log("Offset relative: " + (e.pageX - posX)/($(this).width()) + ' , ' + (e.pageY - posY)/($(this).height()))
        //console.log(getSource(relX, relY));
        var source = getSource(relX, relY, aud0, sourcesAud0);
        if (source === undefined){
            $(this).attr("src", defaultImgAud0);
        } else {
            $(this).attr("src", source);
        }         
    });
    
    $('#Aud1').on('click touch', function (e) { //Offset mouse Position
        /*var posX = $(this).offset().left,
            posY = $(this).offset().top;*/
        var posX = $(this).position().left,
            posY = $(this).position().top;
        var relX = (e.pageX - posX)/($(this).width()),
            relY = (e.pageY - posY)/($(this).height());
        console.log("Offset: " + (e.pageX - posX) + ' , ' + (e.pageY - posY));
        console.log("Offset relative: " + (e.pageX - posX)/($(this).width()) + ' , ' + (e.pageY - posY)/($(this).height()))
        //console.log(getSource(relX, relY));
        var source = getSource(relX, relY, aud1, sourcesAud1);
        if (source === undefined){
            $(this).attr("src", defaultImgAud1);
        } else {
            $(this).attr("src", source);
        }         
    });
    
    $('#MF0').on('click touch', function (e) { //Offset mouse Position
        /*var posX = $(this).offset().left,
            posY = $(this).offset().top;*/
        var posX = $(this).position().left,
            posY = $(this).position().top;
        var relX = (e.pageX - posX)/($(this).width()),
            relY = (e.pageY - posY)/($(this).height());
        console.log("Offset: " + (e.pageX - posX) + ' , ' + (e.pageY - posY));
        console.log("Offset relative: " + (e.pageX - posX)/($(this).width()) + ' , ' + (e.pageY - posY)/($(this).height()))
        //console.log(getSource(relX, relY));
        var source = getSource(relX, relY, mf0, sourcesMF0);
        if (source === undefined){
            $(this).attr("src", defaultImgMF0);
        } else {
            $(this).attr("src", source);
        }        
    });
    
    $('#MF1').on('click touch', function (e) { //Offset mouse Position
        /*var posX = $(this).offset().left,
            posY = $(this).offset().top;*/
        var posX = $(this).position().left,
            posY = $(this).position().top;
        var relX = (e.pageX - posX)/($(this).width()),
            relY = (e.pageY - posY)/($(this).height());
        console.log("Offset: " + (e.pageX - posX) + ' , ' + (e.pageY - posY));
        console.log("Offset relative: " + (e.pageX - posX)/($(this).width()) + ' , ' + (e.pageY - posY)/($(this).height()))
        //console.log(getSource(relX, relY));
        var source = getSource(relX, relY, mf1, sourcesMF1);
        if (source === undefined){
            $(this).attr("src", defaultImgMF1);
        } else {
            $(this).attr("src", source);
        }        
    });
    
    $('#MF3').on('click touch', function (e) { //Offset mouse Position
        /*var posX = $(this).offset().left,
            posY = $(this).offset().top;*/
        var posX = $(this).position().left,
            posY = $(this).position().top;
        var relX = (e.pageX - posX)/($(this).width()),
            relY = (e.pageY - posY)/($(this).height());
        console.log("Offset: " + (e.pageX - posX) + ' , ' + (e.pageY - posY));
        console.log("Offset relative: " + (e.pageX - posX)/($(this).width()) + ' , ' + (e.pageY - posY)/($(this).height()))
        //console.log(getSource(relX, relY));
        var source = getSource(relX, relY, mf3, sourcesMF3);
        if (source === undefined){
            $(this).attr("src", defaultImgMF3);
        } else {
            $(this).attr("src", source);
        }        
    });
    
    $('#MF4').on('click touch', function (e) { //Offset mouse Position
        /*var posX = $(this).offset().left,
            posY = $(this).offset().top;*/
        var posX = $(this).position().left,
            posY = $(this).position().top;
        var relX = (e.pageX - posX)/($(this).width()),
            relY = (e.pageY - posY)/($(this).height());
        console.log("Offset: " + (e.pageX - posX) + ' , ' + (e.pageY - posY));
        console.log("Offset relative: " + (e.pageX - posX)/($(this).width()) + ' , ' + (e.pageY - posY)/($(this).height()))
        //console.log(getSource(relX, relY));
        var source = getSource(relX, relY, mf4, sourcesMF4);
        if (source === undefined){
            $(this).attr("src", defaultImgMF4);
        } else {
            $(this).attr("src", source);
        }        
    });
    
    $('#MF5').on('click touch', function (e) { //Offset mouse Position
        /*var posX = $(this).offset().left,
            posY = $(this).offset().top;*/
        var posX = $(this).position().left,
            posY = $(this).position().top;
        var relX = (e.pageX - posX)/($(this).width()),
            relY = (e.pageY - posY)/($(this).height());
        console.log("Offset: " + (e.pageX - posX) + ' , ' + (e.pageY - posY));
        console.log("Offset relative: " + (e.pageX - posX)/($(this).width()) + ' , ' + (e.pageY - posY)/($(this).height()))
        //console.log(getSource(relX, relY));
        var source = getSource(relX, relY, mf5, sourcesMF5);
        if (source === undefined){
            $(this).attr("src", defaultImgMF5);
        } else {
            $(this).attr("src", source);
        }        
    });
    
    $('#MF6').on('click touch', function (e) { //Offset mouse Position
        /*var posX = $(this).offset().left,
            posY = $(this).offset().top;*/
        var posX = $(this).position().left,
            posY = $(this).position().top;
        var relX = (e.pageX - posX)/($(this).width()),
            relY = (e.pageY - posY)/($(this).height());
        console.log("Offset: " + (e.pageX - posX) + ' , ' + (e.pageY - posY));
        console.log("Offset relative: " + (e.pageX - posX)/($(this).width()) + ' , ' + (e.pageY - posY)/($(this).height()))
        //console.log(getSource(relX, relY));
        var source = getSource(relX, relY, mf6, sourcesMF6);
        if (source === undefined){
            $(this).attr("src", defaultImgMF6);
        } else {
            $(this).attr("src", source);
        }        
    });
    
    $('#MF7').on('click touch', function (e) { //Offset mouse Position
        /*var posX = $(this).offset().left,
            posY = $(this).offset().top;*/
        var posX = $(this).position().left,
            posY = $(this).position().top;
        var relX = (e.pageX - posX)/($(this).width()),
            relY = (e.pageY - posY)/($(this).height());
        console.log("Offset: " + (e.pageX - posX) + ' , ' + (e.pageY - posY));
        console.log("Offset relative: " + (e.pageX - posX)/($(this).width()) + ' , ' + (e.pageY - posY)/($(this).height()))
        //console.log(getSource(relX, relY));
        var source = getSource(relX, relY, mf7, sourcesMF7);
        if (source === undefined){
            $(this).attr("src", defaultImgMF7);
        } else {
            $(this).attr("src", source);
        }        
    });
});

function inBetween(posX, posY, list){
  for (icon in list) {
      var squareString = list[icon];
      var points = squareString.split(";");
      
      var coordX = points[0].split(",");
      var coordY = points[1].split(",");
      
      if (posX >= parseFloat(coordX[0]) && posX <= parseFloat(coordX[1])) {
          if (posY >= parseFloat(coordY[0]) && posY <= parseFloat(coordY[1])){
              return icon;
          }
      }
  }
    return undefined;
    
};

function getSource(posX, posY, list, sourceslist){
    var icon = inBetween(posX, posY, list);
    if (icon === undefined){
        return undefined;
    } else {
        return sourceslist[icon];
    }
}
