const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,//列表默认折叠
    listMaxHeight: 90,//列表最大高度
    lrcType: 3, //此为歌词格式，没有歌词可以直接删掉这一行
    audio: [
        {
            name: 'Try',
            artist: 'Asher Monroe',
            url: '//music.163.com/outchain/player?type=2&id=5041667&auto=1&height=66.mp3',
            cover: 'cover1.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
        {
            name: '星河',
            artist: '曹思义',
            url: '//music.163.com/outchain/player?type=2&id=41641784&auto=1&height=66.mp3',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
    ]
});