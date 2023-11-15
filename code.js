// DATA collection
const content = [
    {
        id:0,
        pic:"https://i.postimg.cc/sfJ7tmxC/hq720.jpg",
        name:"Day Shift | Jamie Foxx,Dave Franco, and Snoop Dogg|...",
        channel_name:"Netflix",
        view:"1.4M views",
        date:"21 hours ago",
        link:"https://youtu.be/GN_IwBptKi4?si=rax-UlwA6ZdkD-RA",
        logo:"https://i.postimg.cc/m2sbQSqX/image.jpg",
    },
    {
        id:1,
        pic:"https://i.postimg.cc/6pGSQs6y/hq720.jpg",
        name:"Vegeta Turns Super Saiyan Blue For The First Time",
        channel_name:"Kayy Tripp",
        view:"3.1M views",
        date:"6 years ago",
        link:"https://youtu.be/sh51X_9A5NQ?si=yfUWrZDYPrAqwynR",
        logo:"https://i.postimg.cc/RCjW2fYK/image.jpg"
    },
    {
        id:2,
        pic:"https://i.postimg.cc/j2WJP4Fd/hq720.jpg",
        name:"The Real Forex Trader 3: Episode 8 - $300,000 Traded O...",
        channel_name:"Samuel Leach",
        date:"2 weeks ago",
        link:"https://youtu.be/7dol0RdUJY4?si=lC4Uwl-ztkom6b7Z",
        logo:"https://i.postimg.cc/fbmsttCn/image.jpg"
    },
    {
        id:3,
        pic:"https://i.postimg.cc/6QtKZ6m8/hqdefault.jpg",
        name:"When your girlfriend hasa male best friend",
        channel_name:"Tra Rags",
        view:"225K views",
        date:"2 days ago",
        link:"https://youtu.be/GaW9EnnFBi8?si=r3fwUVxUoP7gxWMc",
        logo:"https://i.postimg.cc/QtCRgFkd/image.jpg"
    },
    {
        id:4,
        pic:"https://i.postimg.cc/T2KhxWkd/hq720.jpg",
        name:"I Asked Wall Street Millionaires For Investing Advice",
        channel_name:"Jordan Welch",
        view:"1.2M views",
        date:"1 month ago",
        link:"https://youtu.be/uNH2H-f2D5E?si=KTAx-MpyQgl4clKj",
        logo:"https://i.postimg.cc/gJDFh4k9/image.jpg"
    },
    {
        id:5,
        pic:"https://i.postimg.cc/br53K2NV/hqdefault.jpg",
        name:"Can I Create This Tricky Animated CSS Review Card?",
        channel_name:"Web Dev Simplified",
        view:" 22K views",
        date:"2 Days ago",
        link:"https://youtu.be/VPVu1148TU0?si=trxOxSXpshkWo5qF",
        logo:"https://i.postimg.cc/Dyz9Hq56/image.jpg"
    },
    {
        id:6,
        pic:" https://i.postimg.cc/Kjv329sJ/hq720.jpg",
        name:"Zombie Strange vs Scarlet Witch | Doctor Strange in the Multiverse of Madness (2022) IMAX Movie Clip",
        channel_name:"Filmey Entertainment",
        view:"509K views ",
        date:"1 year ago ",
        link:"https://youtu.be/bQAJKBj2-YQ?si=BEt8of7xX3PAzRk4",
        logo:"https://i.postimg.cc/KvyxR97Y/image.jpg"
    },
    {
        id:7,
        pic:"https://i.postimg.cc/qqYW8vSn/hq720.jpg",
        name:"What can $100 Get in Cape Town, South Africa?",
        channel_name:"Tayo Aina",
        view:" 109K views",
        date:"2 weeks ago",
        link:"https://youtu.be/FwKxfuJsG60?si=5quYSXVQ0bceI2UR",
        logo:"https://i.postimg.cc/yNb5qd6G/image.jpg"
    },
    {
        id:8,
        pic:"https://i.postimg.cc/02LXCQ25/hq720.jpg",
        name:"Frontend CSS Coding Interview | Ft. Clement Mihailescu",
        channel_name:"Conner Ardman",
        view:"44K views",
        date:"2 months ago",
        link:"https://youtu.be/ak4p7sdKJQw?si=Ost9GeKoukI12WVt",
        logo:"https://i.postimg.cc/tRnMnWpv/image.jpg"
    },
    {
        id:9,
        pic:"https://i.postimg.cc/wv9s8SgR/hqdefault.jpg",
        name:"My Life as a Day Trader:A Hard Way to Make an Easy Living!",
        channel_name:"Live Traders",
        view:"682K views  ",
        date:"1 year ago",
        link:"https://youtu.be/lT7WvWLY-BQ?si=bj35rTSc4-dzFQlv",
        logo:"https://i.postimg.cc/Y2ZqQJZN/image.jpg"
    },
    {
        id:10,
        pic:"https://i.postimg.cc/N0kY0TjK/hq720.jpg",
        name:"XREAL Air 2 & Air 2 Pro - INSANE 130” 120Hz AR Glasses!",
        channel_name:"The Tech Chap",
        view:"154K views ",
        date:"3 weeks ago",
        link:"https://youtu.be/-1Shfhx1azg?si=t6URMxUcq7ZKAjVI",
        logo:"https://i.postimg.cc/GmJGb7GG/image.jpg"
    },
    {
        id:11,
        pic:"https://i.postimg.cc/sDHbwmvP/hqdefault.jpg",
        name:"Making +$250,000 in 1 day Trading Nas100 | +$2.5 Million last Month",
        channel_name:"Genius Trading Masterclass - Raphael...",
        view:"45K views",
        date:"1 year ago",
        link:"https://youtu.be/1PM-78krjVA?si=sW9tQ9IupcArESyC",
        logo:"https://i.postimg.cc/P5Yn670G/image.jpg"
    },
    {
        id:12,
        pic:"https://i.postimg.cc/SKTc2gd5/hq720.jpg",
        name:"Obi-Wan vs Darth Vader (Epic Full Fight 4K) | Obi-Wan Kenobi Episode 6",
        channel_name:"Kenneth Garaza", 
        view:" 518K views ",
        date:"1 year ago",
        link:"https://youtu.be/6wsbvoLmZqY?si=p6Nu8DNc6KufNsNS",
        logo:"https://i.postimg.cc/3RYzNJL9/image.jpg"
    },
    {
        id:13,
        pic:"https://i.postimg.cc/hjMxWpzM/hq720.jpg",
        name:"Day In The Life of Forex Trader: What I Learned After Making $250,000",
        channel_name:"Doyle Exhange",
        view:"14,337 vuews",
        date:"11 hours ago",
        link:"https://youtu.be/OLZjG7Z_1Xg?si=498BD47CLNLTmU7l",
        logo:"https://i.postimg.cc/C51cWZ1B/image.jpg"
    },
    {
        id:14,
        pic:"https://i.postimg.cc/bww3rVjX/hq720.jpg",
        name:"Batman Meets The Joker - Deleted Scene | THE BATMAN (NEW 2022) Movie CLIP 4K",
        channel_name:"FilmSpot Trailer",
        view:"404K views ",
        date:"1 year ago ",
        link:"https://youtu.be/FZNWLGL_CxI?si=Rqw1nx2DgkCkJUDm",
        logo:"https://i.postimg.cc/Jn0LQ5XS/image.jpg"
    },
    {
        id:15,
        pic:"https://i.postimg.cc/gj7d9rCS/hq720.jpg",
        name:"Using 7 AI Tools to Design a Website... (Relume AI, MidJourney, ChatGPT & More)",
        channel_name:"Caler Edwards",
        view:"106K views ",
        date:"1 month ago",
        link:"https://youtu.be/_DphpzGlxv8?si=TtOhiEQpQC0Q_pQb",
        logo:"https://i.postimg.cc/52d51gSJ/image.jpg"
    },
    {
        id:16,
        pic:"https://i.postimg.cc/bYxMWqSY/hq2.jpg",
        name:"Python in 100 Seconds",
        channel_name:"Fireship",
        view:" 1M views",
        date:"8 Months ago",
        link:"https://youtu.be/x7X9w_GIm1s?si=Xor9ZDHXlBAMOXSc",
        logo:"https://i.postimg.cc/FHt9ZW02/image.jpg"
    },
    {
        id:17,
        pic:"https://i.postimg.cc/1XyfBy27/hq720.jpg",
        name:"Most Overpowered Anime Swordsmen",
        channel_name:"ViniiTube",
        view:"424K views ",
        date:"2 months ago",
        link:"https://youtu.be/s6E9m3t6sEg?si=Rg7cmku_Ba9Ise_q",
        logo:"https://i.postimg.cc/xCXcFs1M/image.jpg"
    },
    {
        id:18,
        pic:"https://i.postimg.cc/V6PkDz2Q/hq720.jpg",
        name:"The Life Of A Day Trader (Real Day Trading Truth)",
        channel_name:"COTTONC4NDYTA",
        view:" 486K views",
        date:"1 year ago",
        link:"https://youtu.be/gwATK4Pk3q8?si=4FMF8mT3jH-ZaosB",
        logo:"https://i.postimg.cc/SKsv38Fc/image.jpg"
    },
    {
        id:19,
        pic:"https://i.postimg.cc/mr1QP3vL/hqdefault.jpg",
        name:"[What if] Bruce Lee Deepfake in Ip Man 4 | Comparison View",
        channel_name:"Patrick Nan",
        view:"850K views",
        date:"1 year ago",
        link:"https://youtu.be/X3RX7G_7i70?si=ay9sMAoSErVwE9Ju",
        logo:"https://i.postimg.cc/RFnXzxST/image.jpg"
    },
    {
        id:20,
        pic:"https://i.postimg.cc/htcmDWr0/hq720.jpg",
        name:"Why God Isolates His chosen Ones",
        channel_name:"MarcTheMessenger",
        view:"432K views ",
        date:"Streamed 6 months",
        link:"https://www.youtube.com/live/XQipxytnpkk?si=55G_cIkUQ-U2wg75",
        logo:"https://i.postimg.cc/vZCkChMf/image.jpg"
    },
    {
        id:21,
        pic:"https://i.postimg.cc/TPGFRwL3/hq720.jpg",
        name:"King Von(feat.Polo G)-The Code(Offical Video)",
        channel_name:"King Von",
        view:" 46M views",
        date:"1 year ago",
        link:"https://youtu.be/luU7F7lvvjk?si=yK6l7SwThYis3iu8",
        logo:"https://i.postimg.cc/50kF4X0c/image.jpg"
    },
    {
        id:22,
        pic:"https://i.postimg.cc/7P3GB3jR/hq720.jpg",
        name:"Wise African Proverbs And Sayings | Deep African Wisdom",
        channel_name:"Wisdom of The Ages",
        view:"2.7M views  ",
        date:"1 year ago",
        link:"https://youtu.be/smSiqsltPFM?si=0Ox-EDEn4gynCmyM",
        logo:"https://i.postimg.cc/pV8YPt8m/image.jpg"
    },
    {
        id:23,
        pic:" https://i.postimg.cc/4yDWNzbq/hq720.jpg",
        name:"Vegito Slaps Immortal Zamasu Around - Vegito Turn Super Saiyan Blue",
        channel_name:"Animedia",
        view:"79 views",
        date:"1 year ago",
        link:"https://youtu.be/OqX9QZ8VOGk?si=DBNDVNXDfo6D5ZEN",
        logo:"https://i.postimg.cc/T2j8p1Wm/image.jpg"
    },
     
]
const subscriptons = [
    {
        name:"Bob Ross",
        Image:"https://i.postimg.cc/1zGNMcDR/image.jpg",
        link:"https://www.youtube.com/results?search_query=bob+ross"
    },
    {
        name:"Kgodisho lebopa",
        Image:"https://i.postimg.cc/Xqz83cHS/image.jpg",
        link:"https://www.youtube.com/results?search_query=kgodisho+lebopa"
    },
    {
        name:"Web dev simplied",
        Image:"https://i.postimg.cc/52ZkMphB/image.jpg",
        link:"https://www.youtube.com/results?search_query=web+dev+simplified"
    },
    {
        name:"lesiba Mothupi",
        Image:"https://i.postimg.cc/SN0xPpsV/image.jpg",
        link:"https://www.youtube.com/results?search_query=lesiba"
    },
    {
        name:"Wix",
        Image:"https://i.postimg.cc/C1Pq3M5z/image.jpg",
        link:"https://www.youtube.com/@Wix"
    },
    
    
]
//---------------------
//DOM 
let output = document.querySelector('.video-grid')
let target  = document.querySelector('.categories-section')
//-----

// output with template
content.forEach(show => {
    output.innerHTML+=`
    
    <div class="video">
    <a href="${show.link}" target="_blank">
    <div class="thumbnail">
    <img src="${show.pic}"
          alt=""
        />
      </div>
    
      <div class="details">
        <div class="profile">
          <img
            src="${show.logo}"
            alt=""
          />   
        </div>
          
        <div class="video-details">
          <p>${show.name}</p>
          <div class="posted-by">
            <span>${show.channel_name}</span>
            <div class="views-date">
              <span>${show.view}</span>
              <span>•</span>
              <span>${show.date}</span>
            </div>
          </div>
        </div>
      </div>
      </a>
    </div>
   
    `
    
 });
 subscriptons.forEach(show => {
    target.innerHTML+=`
    <a href="${show.link}">
        <span class="category">
            <i class="material-icons"><img src="${show.Image}"width="30px" height="30px" style="border:1px;border-radius:50%;"></i>
                ${show.name}
        </span>
    </a>
    `
    
 });
//-----------------------