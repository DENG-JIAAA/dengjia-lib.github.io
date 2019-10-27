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
            url: '../songs/明年今日(Live).m4a',
            cover: '../songs/明年今日(Live).jpg',
            lrc: '../songs/明年今日(Live).lrc'
        },
        {
            name: '最佳损友',
            artist: '陈奕迅',
            url: '../songs/最佳损友.m4a',
            cover: '../songs/最佳损友.jpg',
            lrc: '../songs/最佳损友.lrc'
        },
        {
            name: 'Nothing Ever Happened',
            artist: '陈奕迅',
            url: '../songs/Nothing Ever Happened.m4a',
            cover: '../songs/Nothing Ever Happened.jpg',
            lrc: '../songs/Nothing Ever Happened.lrc'
        },
        {
            name: '约定',
            artist: '王菲',
            url: '../songs/约定.m4a',
            cover: '../songs/约定.jpg',
            lrc: '../songs/约定.lrc'
        },
        {
            name: '水星记',
            artist: '郭顶',
            url: '../songs/水星记.m4a',
            cover: '../songs/水星记.jpg',
            lrc: '../songs/水星记.lrc'
        },
        {
            name: '在云端',
            artist: '郭顶',
            url: '../songs/在云端.m4a',
            cover: '../songs/在云端.jpg',
            lrc: '../songs/在云端.lrc'
        },
        {
            name: '梦',
            artist: '柴田淳',
            url: '../songs/梦.m4a',
            cover: '../songs/梦.jpg',
            lrc: ''
        },
        {
            name: 'Try',
            artist: 'AsherMonroe',
            url: '../songs/AsherMonroe-Try.m4a',
            cover: '../songs/AsherMonroe-Try.jpg',
            lrc: ''
        },
        {
            name: '早已离开我(Live)',
            artist: '张学友',
            url: '../songs/早已离开我(Live).m4a',
            cover: '../songs/早已离开我(Live).jpg',
            lrc: ''
        },
        {
            name: '光辉岁月',
            artist: 'Beyone',
            url: '../songs/光辉岁月.m4a',
            cover: '../songs/光辉岁月.jpg',
            lrc: '../songs/光辉岁月.lrc'
        },
        {
            name: 'The Other Side',
            artist: 'The Workday Release',
            url: '../songs/The Other Side.m4a',
            cover: '../songs/The Other Side.jpg',
            lrc: ''
        }
    ]
});