const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: 'name1',
            artist: 'artist1',
            url: 'https://m801.music.126.net/20191025192114/effef6747df93cf40ad7293c0be31e09/jdyyaac/5559/0008/545f/b3479073a27bc532a3c7c517e1e99e49.m4a',
            cover: 'cover1.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: 'https://m801.music.126.net/20191025192114/effef6747df93cf40ad7293c0be31e09/jdyyaac/5559/0008/545f/b3479073a27bc532a3c7c517e1e99e49.m4a',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
    ]
});