const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: 'name1',
            artist: 'artist1',
            url: '//music.163.com/outchain/player?type=2&id=5041667&auto=1&height=66',
            cover: 'cover1.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: '//music.163.com/outchain/player?type=2&id=5041667&auto=1&height=66',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
    ]
});