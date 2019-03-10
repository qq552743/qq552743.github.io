// https://yfzhou.coding.me/2018/08/08/Hexo-Next搭建个人博客%EF%BC%88添加网页音乐播放器功能%EF%BC%89/
// https://aplayer.js.org/#/zh-Hans/

const ap = new APlayer({
    container: document.getElementById('aplayer'),  //播放器容器元素
    fixed: true,        //开启吸底模式
    mini: false,        //开启迷你模式
    autoplay: false,    //音频自动播放
    theme: '#FADFA3',   //主题色
    loop: 'all',        //音频循环播放, 可选值: 'all', 'one', 'none'
    order: 'random',    //音频循环顺序, 可选值: 'list', 'random（随机）'
    preload: 'auto',    //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7,        //默认音量
    mutex: true,        //互斥，阻止多个播放器同时播放
    listFolded: false,   //列表默认折叠
    listMaxHeight: 90,    //列表最大高度
    lrcType: 3,
    audio: [
        // {
        //     name: 'name1',           //音频名称
        //     artist: 'artist1',      //音频艺术家
        //     url: 'url1.mp3',        //音频链接
        //     cover: 'cover1.jpg',    //音频封面
        //     lrc: 'lrc1.lrc',        //音频歌词
        //     theme: '#ebd0c2'        //切换到此音频时的主题色，比上面的 theme 优先级高
        // },
        //-------------------------------------------------------------
    {
        name: "流浪地球",
        artist: '周笔畅',
        url: 'https://music.163.com/song?id=1344340338&userid=517941770',
        cover: 'http://p1.music.126.net/QGb9Vtyw7qHS00uEvPfM6g==/843325418547559.jpg?param=130y130',
      },
	  {
        name: "Apologize",
        artist: 'Martin Ermen',
        url: 'http://pd2tflnys.bkt.clouddn.com/Martin%20Ermen%20-%20Apologize.mp3',
        cover: 'http://p1.music.126.net/-_6mcI4VV5IKaiwhUAytbg==/1791104441647901.jpg?param=130y130',
      },
	  {
        name: "River Flows in You",
        artist: 'Yiruma',
        url: 'http://pd2tflnys.bkt.clouddn.com/Yiruma%20-%20River%20Flows%20in%20You.flac',
        cover: 'http://p1.music.126.net/8ZRSyI0ZN_4ah8uzsNd1mA==/2324367581169008.jpg?param=130y130',
      },
    {
        name: '惊蛰',
        artist: '音阙诗听/王梓钰',
        url: 'http://www.ytmp3.cn/down/48755.mp3',
        cover: 'http://p1.music.126.net/5MmXpaP9r88tNzExPGMI8Q==/109951163370350985.jpg?param=130y130',
      },

    ]
});
