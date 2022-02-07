const express = require('express');
const cheerio = require('cheerio');
const downloader = require('node-image-downloader');
const request = require('request');
const fs = require('fs');

const word = "car";
var url = 'https://www.google.com/search?q=' + word + '&tbm=isch&ved=2ahUKEwixmuiW8-v1AhWnJ1kFHbE-BsUQ2-cCegQIABAA&oq=apples&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQy'
+ 'BQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEO8DECc6BAgAEEM6CwgAEIAEELEDEIMBOggIABCABBCxAzoHCAAQsQMQQzoICAAQsQMQgwFQyCRY_idgmipoAHAAeACAAXaIAYwEkgEDMC41mAEAoAE'
+ 'BqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=Ri0AYrHfIqfP5NoPsf2YqAw&bih=937&biw=1920&rlz=1C1UEAD_esCO971CO971';

request(url, (error, response, html) => {

    let folder = './' + word;
    if(!error && response.statusCode == 200){

        if(fs.existsSync(folder)){
            console.log('Directorio existente')
        }else{

            fs.mkdir(folder, (error) => {
                console.log('Directorio creado');
            });
        }

        const $ = cheerio.load(html);
        var links = $('a[href^="htt"]').each(function() {

            var linksrc = $(this).attr('href');
            linksrc = linksrc.substring(7);
            console.log(linksrc);
            inspect(linksrc, folder);
            
        })
    }
});


function inspect(url, folder){

    request(url, (e, res, html) => {

        let count = 1;
        if(!e && res.statusCode == 200){
            const $ = cheerio.load(html);

            $("img").each((index, image) => {

                var imagesource = $(image).attr('src');
                console.log('2' + imagesource);
                downloader({
                    imgs:[
                        {
                            uri: 'https://cdn.pixabay.com/photo/2022/01/31/12/46/bird-6983434__480.jpg'
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
    })

}