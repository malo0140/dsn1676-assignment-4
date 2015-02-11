var blueberries = {

name: 'Blueberries',    
labName: 'Vaccinium corymbosum',
Growsonshrub: true,
Energy: 240,
Carbohydrates: 14.49,
Protein: 0.74,

};

var grapes = {
 
name: 'Grapes',
labName: 'Vitis vinifera',
Growsonshrub: false,
Energy: 288,
Carbohydrates: 18.1,
Protein: 0.72,
    
};

var redcurrant = {
 
name: 'Redcurrant',    
labName: 'Ribes rubrum',
Growsonshrub: true,
Energy: 234,
Carbohydrates: 13.8,
Protein: 1.4,
    
};

var berrieInfo = function (berrie) {
    document.write('<h1>' + berrie.name + '</h1>'); 
    document.write('<dl>');
    
    document.write('<dt>labName</dt>');
    document.write('<dd>' + berrie.labName + '</dd>');
    
    document.write('<dt>Grows on shrub?</dt>');
    document.write('<dd>' + berrie.Growsonshrub + '</dd>');
    
    document.write('<dt>Energy</dt>');
    document.write('<dd>' + berrie.Energy + '</dd>');
    
     document.write('<dt>Carbohydrates</dt>');
    document.write('<dd>' + berrie.Carbohydrates + '</dd>');
    
     document.write('<dt>Protein</dt>');
    document.write('<dd>' + berrie.Protein + '</dd>');
    
    document.write('</dl>');

};



berrieInfo(blueberries);
berrieInfo(grapes);
berrieInfo(redcurrant);

    
