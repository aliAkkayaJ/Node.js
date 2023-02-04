//request - response =>server //servere talep gelir ve server tarafı gelen req göre cevap üretir.

var http = require("http"); //node modules=>http,filesystem,os... gibi otomarik geldiler
var fs = require("fs") //filesystem



var server = http.createServer((req, res) => {
    //öncekinde url fark etmeksizin hep aynı cevabı gönderiyorum. Bunun yerine kontrol ederek bir şeyler gönderebilirim
    if (req.url == "/") {
        fs.readFile("index.html",(err,html)=>{ //ilk index.html'i oku. Okuduktan sonra  1.parametrede hata ,2.de veri gelir.Eğer hata varsa  if(err)..
            res.write(html); //okunan veriyi yazdırdık.
            res.end();
        });

    }else if(req.url=="/products"){

        fs.readFile("urunler.html",(err,html)=>{ 
            res.write(html) ;
            res.end();
        });    
    }else{
     
        fs.readFile("404.html",(err,html)=>{ 
            res.write(html) ;
            res.end();// hepsinden sonra bitirmelisin. 
        });       
    }

});

server.listen(3000, () => {                              //3000 poertunda ne zaman açılacğını belirtmek için call-back fonksiyonu
    console.log("node.js server at port 3000");
});