const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    loop: 'all',
    audio: [
        {
            name: '明年今日(Live)',
            artist: '陈奕迅',
            url: 'http://music.163.com/song/media/outer/url?id=64599.mp3',
            cover: 'https://i.loli.net/2019/10/28/UCfPEeiTBj5GwJ3.jpg',
            lrc: '../songs/明年今日(Live).lrc'
        },
        {
            name: '最佳损友',
            artist: '陈奕迅',
            url: 'http://music.163.com/song/media/outer/url?id=65800.mp3',
            cover: 'https://i.loli.net/2019/10/28/Ys6XaMtHo1lTLWe.jpg',
            lrc: '
'
        },
        {
            name: 'Nothing Ever Happened',
            artist: '陈奕迅',
            url: 'http://music.163.com/song/media/outer/url?id=64682.mp3',
            cover: 'https://i.loli.net/2019/10/28/IPvsCytcGUYfRNB.png',
            lrc: 'songs/Nothing Ever Happened.lrc'
        },
        {
            name: '约定',
            artist: '王菲',
            url: 'http://music.163.com/song/media/outer/url?id=299116.mp3',
            cover: 'https://i.loli.net/2019/10/28/X9Dpv4FagUx25Ml.jpg',
            lrc: 'songs/约定.lrc'
        },
        {
            name: '水星记',
            artist: '郭顶',
            url: 'http://music.163.com/song/media/outer/url?id=441491828.mp3',
            cover: 'https://i.loli.net/2019/10/28/ipOA4LBR5EmVQFw.jpg',
            lrc: 'songs/水星记.lrc'
        },
        {
            name: '在云端',
            artist: '郭顶',
            url: 'http://music.163.com/song/media/outer/url?id=442869201.mp3',
            cover: 'https://i.loli.net/2019/10/28/ipOA4LBR5EmVQFw.jpg',
            lrc: 'songs/在云端.lrc'
        },
        {
            name: '梦',
            artist: '柴田淳',
            url: 'http://music.163.com/song/media/outer/url?id=562732.mp3',
            cover: 'https://i.loli.net/2019/10/28/6cOIKr4FGXy9Eio.jpg',
            lrc: ''
        },
        {
            name: 'Try电影《名扬四海》插曲',
            artist: 'Asher Monroe',
            url: 'http://music.163.com/song/media/outer/url?id=5041667.mp3',
            cover: 'https://i.loli.net/2019/10/28/4eJNTiBkMrdwQOW.jpg',
            lrc: ''
        },
        {
            name: '早已离开我(Live)',
            artist: '张学友',
            url: 'http://music.163.com/song/media/outer/url?id=188857.mp3',
            cover: 'https://i.loli.net/2019/10/28/QT42LzIrAuc83Ud.png',
            lrc: ''
        },
        {
            name: '光辉岁月',
            artist: 'Beyone',
            url: 'http://music.163.com/song/media/outer/url?id=346576.mp3',
            cover: 'songs/光辉岁月.jpg',
            lrc: 'https://i.loli.net/2019/10/28/TN6dO18iYJeVv5C.jpg'
        },
        {
            name: 'The Other Side',
            artist: 'The Workday Release',
            url: 'http://music.163.com/song/media/outer/url?id=31090070.mp3',
            cover: 'https://i.loli.net/2019/10/28/P3SlYNqpEdJKu6O.jpg',
            lrc: ''
        }
    ]
});