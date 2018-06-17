/*
*   Author : Pranay Mundra
*   Version : 1.0.0
*   Chrome Quotes Extension
* */
(function () {
    // information for each quote is stored in the format "Author" : ["Quote", "Image URL"]
    // ToDO : Use either MongoDB or MySQLDB to store evreything online
    const info = {
        "Vir Das": ["Show the universe and, more importantly, yourself that this moment\ndoesn't own you, you own this moment.",
            "https://i0.wp.com/www.virdas.in/wp-content/uploads/2017/12/2dea30edd30c11549db61107db670f07d5f287a0.jpg?fit=1280%2C720&ssl=1"],
        "Cate Blanchett" : ["If you know you are going to fail, then fail gloriously!",
            "http://cdn1.thr.com/sites/default/files/2015/11/cateblanchett.jpg"],
        "Ryan Gosling" : ["I\'ve learned it\'s important not to limit yourself. You can do whatever\n you really love to do, no matter what it is.",
            "https://img.buzzfeed.com/buzzfeed-static/static/2017-01/10/18/asset/buzzfeed-prod-fastlane-01/sub-buzz-11952-1484089658-1.jpg?downsize=1600:*&output-format=auto&output-quality=auto"],
        "Raven Symone" : ["Don\'t spend all your time trying to be like someone else\n because you can never be them and they can never be you",
            "https://img.huffingtonpost.com/asset/5989b9c71400001f00ecfadf.jpeg?cache=kkizxg1jel&ops=1910_1000"],
        "Demi Lovato" : ["Never be ashamed of what you feel. You have to the right to feel any\n emotion that you want and to do what makes you happy.",
            "https://media.wmagazine.com/photos/59cac3cf225f126b8be85015/4:3/w_1536/DemiLovato-AngeloKritikos-BTS-02.jpg"],
        "Oprah Winfrey" : ["Make the right decision even when nobody\'s looking, especially when nobody\'s looking,\n and you will always turn out okay.",
            "http://o.aolcdn.com/hss/storage/midas/77525020a96bf38b79ae1b56b720aad2/206087023/profile_oprah_winfrey.jpg"],
        "Taylor Swift" : ["No matter what happens in life, be good to people. Being good to people\n is a wonderful legay to leave behind.",
            "http://i.huffpost.com/gen/2928802/images/o-TAYLOR-SWIFT-BAD-BLOOD-facebook.jpg"],
        "Mary J. Blige" : ["The important thing is to realize that no matter what people\'s opinions may be, they\'re only just that - PEOPLE\'S OPINIONS.\n " +
            "You have to believe in your heart what you know to be true about yourself.And let that be that.",
            "https://www.apbspeakers.com/media/2239/blige_mary2.jpg?anchor=center&mode=crop&quality=70&height=775&rnd=131431182250000000"],
        "Alicia Keys" : ["No one will take care of you, if you dont take care of yourself.",
            "https://vmagazine.com/wp-content/uploads/2016/10/ALICIA-1440x630.jpg"],
        "Steve Jobs" : ["Your time is limited so don\'t waste it living someone else\'s life.",
            "https://cdn.cnn.com/cnnnext/dam/assets/151201152016-steve-jobs-the-man-in-the-machine-background-full-169.jpg"],
        "Christopher Reeve" : ["So many of our dreams at first seem impossible, then they see improbable, and then,\n when we summon the will, they soon become inevitable",
            "https://i.ytimg.com/vi/KLNSr4lft3M/maxresdefault.jpg"],
        "David Brinkley" : ["A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
            "images/2.jpg"],
        "Thomas Alva Edison" : ["I have not failed. I\'ve just found 10,000 ways that wont work.",
            "http://eskify.com/wp-content/uploads/2016/04/Thomas-Edison-Patents_00003.jpg"],
        "Winston Churchill" : ["If you\'re going through hell, keep going",
            "https://1d4vws37vmp124vlehygoxxd-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/Winston-Churchill-giving-a-speech-3.jpg"],
        "Thomas Jefferson" : ["I find that the harder I work, the more luck I seem to have.",
            "https://www.thetrace.org/wp-content/uploads/2016/05/thomas-jefferson-campus-carry-1920x1000-c-top.png"],
        "Bruce Lee" : ["The successful warrior is the average man, with \nlaser-like focus.",
            "https://asianmoviepulse.com/wp-content/uploads/2016/10/Bruce-Lee-Net-Worth.jpg"],
        "Mahatma Gandi" : ["You must be the change you want to see in the world",
            "http://paramais.com.br/wp-content/uploads/2018/04/why-mahatma-gandhi-never-won-the-nobel-prize.jpg"],
        "Jawaharlal Nehru" : ["Failure comes only when we forget out ideals and objectives and priniciples.",
            "https://www.bergerpaints.com/imaginecolours/wp-content/uploads/2014/11/neharu-1170x693.png"],
        "Steve Wozniak" : ["If you love what you do and are willing to do what it takes, it\'s within your reach. And it\'ll be worth every minute \n" +
            "you spend alone at night, thinking and thinking about what it is you want to design or build.",
            "https://www.usfca.edu/sites/default/files/styles/lightboxmax/public/news/woz2.jpg?itok=cCbGcbpa"],
        "Tim Cook" : ["Life is fragile. We\'re not guaranteed a tomorrow so give it everything you\'ve got.",
            "https://techcrunch.com/wp-content/uploads/2015/11/180221810.jpg"],
        "Walter White, Breaking Bad" : ["I am the one who knocks.",
            "https://wallpaperbrowse.com/media/images/Breaking-Bad-Wallpaper-5AF.png"],
        "Monica, FRIENDS" : ["Welcome to the real world. It sucks. You\'re gonna love it.",
            "https://i.ytimg.com/vi/-UQH5H4zjhg/maxresdefault.jpg"],
        "Albert Einstein" : ["Strive not to be a success, but rather to be of a value",
            "http://www.waveridercommunications.com/wp-content/uploads/2016/11/albert-einstein-wallpaper-4.jpg"],
        "Michael Jordan" : ["I\'ve missed more than 9000 shots in my career. I've almost lost 300 games.\n26 times I\'ve been" +
            " trusted to take the game winning shot and missed. I\'ve failed over and over and over again in my life.\nAnd that is why I succeed",
            "http://sportsmockery.com/wp-content/uploads/2015/03/1-6-limited-edition-real-masterpiece-michael-jordan-series-1-im-back-by-enterbay-1.jpg"],
        "John Lennon" : ["Life is what happens to you while you\'re busy making other plans." ,
            "https://wallpapercave.com/wp/MOUJbbF.jpg"],
        "Buddha" : ["The mind is everything. What you think you become.",
            "http://patnabeats.com/wp-content/uploads/2016/05/Gautam-buddha.jpg"],
        "Christopher Columbus" : ["You can never cross the ocean until you have the courage to lose sight of the shore.",
            "https://i.ytimg.com/vi/Q2-0w0YrsfA/maxresdefault.jpg"],
        "Frank Sinatra" : ["The best revenge is massive success.",
            "http://cdn.ppcorn.com/us/wp-content/uploads/sites/14/2015/12/Frank-Sinatra-pop-art-2016-ppcorn-2.jpg"],
        "Theodre Roosevelt" : ["Believe you can and you\'re halfway there.",
            "https://www.biography.com/.image/t_share/MTQ1MjUwNjM4Mzc5MzYxNjg4/theodore-roosevelt---sagamore-hill.jpg"],
        "Yoda, Star Wars" : ["Do or do not. There is no try.",
            "https://cdnb.artstation.com/p/assets/images/images/002/551/441/large/jean-paul-ear-wip25.jpg?1463004324"],
        "Henry Ford" : ["When everything seems to be going against you, remember that the \nairplane takes off against the wind, not with it.",
            "http://image.pbs.org/video-assets/pbs/american-experience/68423/images/Mezzanine_190.jpg"],
        "Charles Swindoll" : ["Life is 10% what happens to me and 90% how I react to it.", "" +
            "https://i.ytimg.com/vi/SQB4lJ2qEGY/maxresdefault.jpg"],
        "Eleanor Roosevelt" : ["To handle yourself, use your head; to handle others, use your heart.",
            "http://www.bespokerecords.com/wp-content/uploads/2017/02/head-vs-heart-1288x724.jpg"],
        "Rosa Parks" : ["I have learned over the years that when one\'s mind is made up, this diminishes fear.",
            "https://www.stackmagazines.com/admin/wp-content/uploads/2017/04/Rosa-Park.jpg"],
        "Robin Williams" : ["I used to think the worst thing in life was to end up all alone, it\'s not. The worst thing in life is to end up " +
            "with poeple that make you feel all alone.",
            "https://www.infobae.com/new-resizer/nSNvYyVC54DwSt58qjngCaz4zIM=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/06/12205915/robin-williams.jpg"],
        "Ed Sheeran" : ["I don\'t really do that whole \'single life \' thing. I\'m kind of heads down and get things down.",
            "http://collarts.edu.au/wp-content/uploads/2018/02/Ed-Sheeran-Press-Photo-2-Credit-Mark-Surridge.jpg"]
    };
    const authors = Object.keys(info);
    // returns a random number according to the arr length
    function chooseOne(arr) {
        return Math.floor(Math.random() * arr.length);
    }
    window.onload = function () {
        let randomNumber = chooseOne(authors);
        let randomImage = info[authors[randomNumber]][1];
        let randomQuote = info[authors[randomNumber]][0];
        document.getElementById('background-image').style.backgroundImage = 'url("'+ randomImage +'")';
        document.getElementById('quote').innerHTML = "\"" + randomQuote + "\"";
        document.getElementById('author').innerHTML = "-- " + authors[randomNumber] + " --";
        document.getElementById('quote').className = 'move';
        document.getElementById('author').className = 'move';
    };
}) ();
