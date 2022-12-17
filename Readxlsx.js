var xlsx = require("node-xlsx");


var obj = xlsx.parse("./Ruco/pris.xls"); // parses a file

for(i = 0; i < obj[0].data.length; i++){
//    var sku = obj[0].data[i][0].replace(/=|"/g, ""); 
//    console.log(sku);  
    
    


    var sku = obj[0].data[i][0].replace(/=|"/g, "");
    var name = obj[0].data[i][4];
    var stockdata = obj[0].data[i][7].replace("+", "");
    if(isNaN(stockdata)){
        var stock = 0;
    }else{
        var stock = stockdata;
    }

    var ret = [
        sku, name, stock
    ];
    console.log(ret);

}