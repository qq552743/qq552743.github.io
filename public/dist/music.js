// https://yfzhou.coding.me/2018/08/08/Hexo-Next搭建个人博客%EF%BC%88添加网页音乐播放器功能%EF%BC%89/
// https://aplayer.js.org/#/zh-Hans/

const ap = new APlayer({
    container: document.getElementById('aplayer'),  //播放器容器元素
    fixed: true,        //开启吸底模式
    mini: true,        //开启迷你模式
    autoplay: false,    //音频自动播放
    theme: '#FADFA3',   //主题色
    loop: 'all',        //音频循环播放, 可选值: 'all', 'one', 'none'
    order: 'random',    //音频循环顺序, 可选值: 'list', 'random（随机）'
    preload: 'auto',    //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7,        //默认音量
    mutex: true,        //互斥，阻止多个播放器同时播放
    listFolded: false,   //列表默认折叠
    listMaxHeight: 50,    //列表最大高度
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
        url: 'http://www.ytmp3.cn/down/58987.mp3',
        cover: 'http://pnok0tdt2.bkt.clouddn.com/zhoubichang_quliulang1.png',
        lrc: 'http://pnok0tdt2.bkt.clouddn.com/quliulang.lrc',
        // lrc: 'dist/lrc/quliulang.lrc',
      },
      {
          name: "最美的期待",
          artist: '周笔畅',
          url: 'http://www.ytmp3.cn/down/49490.mp3',
          cover: 'http://img.ytmp3.cn/image/64.jpg',
          lrc: '/dist/lrc/zuimeideqidai.lrc',
        },
      {
          name: "强迫症",
          artist: '周笔畅',
          url: 'http://www.ytmp3.cn/down/59014.mp3',
          cover: 'http://img.ytmp3.cn/image/64.jpg',
          lrc: '/dist/lrc/qiangpozheng.lrc',
        },
      {
          name: "奉献",
          artist: '苏芮',
          url: 'http://www.ytmp3.cn/down/59001.mp3',
          cover: 'http://img.ytmp3.cn/image/50.jpg',
          lrc: '/dist/lrc/fengxian.lrc',
        },
        {
          name: "侧脸",
          artist: '于果',
          url: 'http://www.ytmp3.cn/down/47088.mp3',
          cover: 'http://img.ytmp3.cn/image/88.jpg',
          lrc: '/dist/lrc/celian.lrc',
        },
        {
          name: "欧若拉",
          artist: '张韶涵',
          url: 'http://www.ytmp3.cn/down/50699.mp3',
          cover: 'http://img.ytmp3.cn/image/88.jpg',
          lrc: '/dist/lrc/ouruola.lrc',
        },
        {
          name: "不怕不怕",
          artist: '郭美美',
          url: 'http://www.ytmp3.cn/down/47735.mp3',
          cover: 'http://img.ytmp3.cn/image/22.jpg',
          lrc: '/dist/lrc/bupabupa.lrc',
        },
        {
          name: "生僻字",
          artist: '陈柯宇',
          url: 'http://www.ytmp3.cn/down/56174.mp3',
          cover: 'http://img.ytmp3.cn/image/50.jpg',
          // lrc: 'dist/lrc/shengpizi.lrc',
          lrc: '/dist/lrc/shengpizi-pingying.lrc',
        },
        {
          name: "广东十年爱情故事",
          artist: '广东雨神',
          url: 'http://www.ytmp3.cn/down/53621.mp3',
          cover: 'http://img.ytmp3.cn/image/46.jpg',
          lrc: '/dist/lrc/guangdongaiqinggushi.lrc',
        },
        {
          name: "相约一九九八",
          artist: '那英&王菲',
          url: 'http://www.ytmp3.cn/down/59010.mp3',
          cover: 'http://img.ytmp3.cn/image/88.jpg',
          lrc: '/dist/lrc/xiangyue1998.lrc',
        },
        {
          name: "明明白白我的心",
          artist: '成立&陈淑桦',
          url: 'http://www.ytmp3.cn/down/59013.mp3',
          cover: 'http://img.ytmp3.cn/image/50.jpg',
          lrc: '/dist/lrc/mingmingbaibai.lrc',
        },
        {
            name: "浪人琵琶",
            artist: '胡666',
            url: 'http://www.ytmp3.cn/down/48458.mp3',
            cover: 'http://img.ytmp3.cn/image/64.jpg',
            lrc: '/dist/lrc/langrenpipa.lrc',
        },
        {
            name: "权御天下",
            artist: '洛天依',
            url: 'http://www.ytmp3.cn/down/34255.mp3',
            cover: 'http://img.ytmp3.cn/image/64.jpg',
            lrc: '/dist/lrc/celian.lrc',
        }
]
});
