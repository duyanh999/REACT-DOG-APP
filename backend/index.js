const express = require("express");
const app = express();
const cors = require("cors")


const dogs = [
    {
        id: 1,
        name:"TINY" ,
        breed:"CHIHUAHUA" ,
        price:"1000" ,
        description:"TINY DOG" ,
        imageUrl:
            "https://live.staticflickr.com/65535/47064445434_f6babd1a25_b.jpg" ,

    },
    {
        id: 2,
        name:"PEACH" ,
        breed:"CORGI" ,
        price:"1500" ,
        description:"BIG ASS DOG" ,
        imageUrl:
            "https://cdn.tgdd.vn/Files/2021/04/16/1343752/tim-hieu-ve-giong-cho-corgi-nguon-goc-dac-diem-cach-nuoi-bang-gia-202202141349411201.jpg" ,

    },
    {
        id: 3,
        name:"MADMAX" ,
        breed:"PITBULL" ,
        price:"1000" ,
        description:"ANGRY DOG" ,
        imageUrl:
            "https://zoipet.com/wp-content/uploads/2020/03/chi-pitbull.jpg" ,

    },
    {
        id: 4,
        name:"HUSKA" ,
        breed:"HUSKY" ,
        price:"1300" ,
        description:"STUPID DOG" ,
        imageUrl:
            "https://pet247.vn/wp-content/uploads/2019/12/cho-husky.jpg" ,

    },
    {
        id: 5,
        name:"EDGA" ,
        breed:"PUG" ,
        price:"1200" ,
        description:"CUTE BIG WITH BIG EYES DOG" ,
        imageUrl:
            "https://sieupet.com/sites/default/files/pug_0.jpg" ,

    },
    {
        id: 6,
        name:"GWEN" ,
        breed:"GOLDEN" ,
        price:"1600" ,
        description:"FAMILY AND LOYAL DOG" ,
        imageUrl:
            "https://sieupet.com/sites/default/files/golden-retriever-in-field-of-flowers.jpg" ,

    },
    {
        id: 7,
        name:"MEME" ,
        breed:"SHIBA INU" ,
        price:"1350" ,
        description:"JAPAN DOG" ,
        imageUrl:
            "https://onfire-bg.com/shiba-la-gi/imager_10151.jpg" ,

    },
    {
        id: 8,
        name:"JEX" ,
        breed:"CHO CO" ,
        price:"300" ,
        description:"VIET NAM DOG" ,
        imageUrl:
            "https://thucung.farmvina.com/wp-content/uploads/2020/10/cho-co-5.jpg" ,

    },
]

app.use(
    cors({
        origin: '*',
    })
)

app.get("/v1/dogs", (req,res) => {
    res.status("200").json(dogs);
});

app.listen("8080", ()=>{
    console.log("server is running...");
});