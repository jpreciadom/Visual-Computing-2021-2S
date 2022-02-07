const express = require('express');
const cheerio = require('cheerio');
const downloader = require('node-image-downloader');
const request = require('request');
const fs = require('fs');

const word = "images";
var url = 'https://www.istockphoto.com/es/foto/pralin%C3%A9s-de-chocolate-negro-gm1162200486-318703348';

request(url, (e, res, html) => {

    let folder = './' + word;

    if(fs.existsSync(folder)){
        console.log('Directorio existente')
    }else{

        fs.mkdir(folder, (error) => {
            console.log('Directorio creado');
        });
    }

    let count = 1;
    if(!e && res.statusCode == 200){
        const $ = cheerio.load(html);

        $("img").each((index, image) => {

            var imagesource = $(image).attr('src');
            console.log('2' + imagesource);
            downloader({
                imgs:[
                    {
                        uri: imagesource
                    }
                ],
                dest: folder
            }).then((info) => {
                console.log("Download complete");
                //process.exit(1);
            }).catch(function () {
                console.log("error");
            });

            if(count == 20) return false;
        })
    }
});


function inspect(url, folder){

    

}