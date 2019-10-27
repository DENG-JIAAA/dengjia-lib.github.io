const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    loop: 'all',
    audio: [
        {
            name: 'Try',
            artist: 'AsherMonroe',
            url: '../songs/AsherMonroe-Try.m4a',
            cover: '../songs/AsherMonroe-Try.jpg',
            lrc: '../AsherMonroe-Try.lrc',
            theme: '#ebd0c2'
        },
        {
            name: '认真的雪',
            artist: 'artist2',
            url: 'https://m701.music.126.net/20191027192152/0521ee7682cc29db7b77385ee0d8cd66/jdyyaac/5559/0008/545f/b3479073a27bc532a3c7c517e1e99e49.m4a',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '3',
            artist: 'artist3',
            url: '',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '4',
            artist: 'artist4',
            url: '',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '5',
            artist: 'artist5',
            url: '',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
    ]
});