(function () {
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
            "https://techcrunch.com/wp-content/uploads/2015/11/180221810.jpg"]
    };
    const authors = Object.keys(info);
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
