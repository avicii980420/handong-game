window.QB_PARTS = window.QB_PARTS || [];
window.QB_PARTS.push({
  owner: 'ah-figure',
  questions: [
    {
      id: 'PD-101',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      stem: '专案组在清点涉案保险柜时，发现柜门内层有一排按规律排列的密码盘图案。请观察下面前三个图形中封闭区域数的变化，推断下一个图案应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explanation: '观察顺序：先看每个图形被直线分割出的封闭区域数。题干中圆被直径依次分成2个、4个、6个封闭区域，数量每次增加2，呈等差数列，因此下一个图形应被分成8个封闭区域。四个选项中的圆分别被分成4个、8个、6个、10个区域，只有被四条直径分成8个区域的那一个符合规律；数区域时不要误数成直径条数，也不要漏数圆心另一侧的扇形。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="17" cy="50" r="14"/><path d="M3 50H31"/><circle cx="50" cy="50" r="14"/><path d="M36 50H64M50 36V64"/><circle cx="83" cy="50" r="14"/><path d="M97 50L69 50M90 37.9L76 62.1M76 37.9L90 62.1"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="50" cy="50" r="30"/><path d="M80 50L20 50M50 20L50 80"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="50" cy="50" r="30"/><path d="M80 50L20 50M71.2 28.8L28.8 71.2M50 20L50 80M28.8 28.8L71.2 71.2"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="50" cy="50" r="30"/><path d="M80 50L20 50M65 24L35 76M35 24L65 76"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="50" cy="50" r="30"/><path d="M78.5 40.7L21.5 59.3M67.6 25.7L32.4 74.3M50 20L50 80M32.4 25.7L67.6 74.3M21.5 40.7L78.5 59.3"/></g></svg>'
        ]
      },
      tag: '封闭区域'
    },
    {
      id: 'PD-102',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      stem: '技术科从涉案公司的账册封面上拓下一排网格图案，它们按同一规律排列。请观察下面前三个图形中线条交点数的变化，推断下一个图形应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 2,
      explanation: '观察顺序：数每个图形中直线与直线的交点个数。前三个图形分别是1条竖线与1条横线、2条竖线与2条横线、3条竖线与3条横线相交，交点数依次为1、4、9，即1的平方、2的平方、3的平方，下一项应为4的平方等于16个交点。四个选项的交点数分别为4、9、16、12，只有16个交点的那一项符合。注意本题数的是交点而不是线条数，线条数递增的图形容易被误选。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M17 36V64M3 50H31"/><path d="M42 32V68M58 32V68M34 42H66M34 58H66"/><path d="M73 32V68M83 32V68M93 32V68M68 38H98M68 50H98M68 62H98"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M30 20V80M70 20V80M20 30H80M20 70H80"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M26 20V80M50 20V80M74 20V80M20 26H80M20 50H80M20 74H80"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M24 18V82M41.3 18V82M58.7 18V82M76 18V82M18 24H82M18 41.3H82M18 58.7H82M18 76H82"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M30 20V80M50 20V80M70 20V80M20 22H80M20 41.3H80M20 58.7H80M20 78H80"/></g></svg>'
        ]
      },
      tag: '交点数'
    },
    {
      id: 'PD-103',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      stem: '搜查一处藏匿点时，办案人员在暗格旁发现三个可以一笔画成的记号。请从四个选项中选出同样能够一笔画成的图形（笔不离开纸面、每条线段只画一次）：',
      options: ['A', 'B', 'C', 'D'],
      answer: 2,
      explanation: '观察顺序：先判断图形能否一笔画成。题干三个图形的奇点（引出奇数条线条的点）个数都是0或2，因此都可以笔不离开纸面、不重复线段地画出来。选项中，方框内加十字的图形有4个奇点，方框内加两道横线的图形也有4个奇点，二者都需要两笔；两个相离的圆互不相连，同样需要两笔。只有三角形顶点接出一条短线的那一项恰有2个奇点（顶点与短线端点），可以一笔画成。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="17" cy="50" r="13"/><path d="M7.8 40.8L26.2 59.2"/><polygon points="50,37 42.4,60.5 62.4,46 37.6,46 57.6,60.5"/><circle cx="83" cy="43" r="7"/><circle cx="83" cy="57" r="7"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><path d="M50 20V80M20 50H80"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><path d="M20 40H80M20 60H80"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="50,22 28,72 72,72"/><path d="M50 22V2"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="32" cy="50" r="16"/><circle cx="68" cy="50" r="16"/></g></svg>'
        ]
      },
      tag: '一笔画'
    },
    {
      id: 'PD-104',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      stem: '专案组把涉案账本边角上的折痕整理成一排图形，它们按同一规律排列。请观察下面前三个图形中直角个数的变化，推断下一个图形应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explanation: '观察顺序：数每个图形中直角的个数。前三个图形依次有1个、2个、3个直角，每次增加1，因此下一个图形应有4个直角。四个选项中，只含一个直角的三角形、没有直角的等边三角形、只有两个直角的折线形都不符合，只有正方形恰好含4个直角。数直角时要逐个顶点检查，尤其不要漏掉折线拐角处由互相垂直线段构成的两个直角。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M8 30V70H34"/><path d="M38 32H64V54H40"/><path d="M70 70V56H80V42H92"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="40,72 40,32 80,72"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="26" y="26" width="48" height="48"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="50,20 25,63 75,63"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M30 30H68V52H44"/></g></svg>'
        ]
      },
      tag: '直角数'
    },
    {
      id: 'PD-105',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      stem: '物证袋上印着一排由小图形拼成的标记，它们按同一规律排列。请观察下面前三个图形中小图形种类数的变化，推断下一个图形应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      explanation: '观察顺序：看每个图形由几种不同的小图形组成。题干第一个图形只有三角形一种，第二个图形由圆和正方形两种组成，第三个图形由三角形、圆、正方形三种组成，种类数依次为1、2、3，所以下一个图形应由四种不同的小图形组成。四个选项中小图形的种类数分别为4、2、3、1，只有含四种不同小图形的那一项符合。注意题目数的是种类而不是小图形的总个数，元素个数多的干扰项容易被误选。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="12,42 6,58 18,58"/><polygon points="26,40 20,56 32,56"/><circle cx="44" cy="42" r="6"/><circle cx="56" cy="42" r="6"/><rect x="38" y="54" width="12" height="12"/><rect x="50" y="54" width="12" height="12"/><polygon points="75,36 69,48 81,48"/><circle cx="90" cy="44" r="6"/><rect x="76" y="58" width="12" height="12"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="33" cy="32" r="7"/><rect x="59" y="25" width="15" height="15"/><polygon points="33,60 26,74 40,74"/><polygon points="67,58 76,67 67,76 58,67"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="34" cy="38" r="7"/><circle cx="34" cy="62" r="7"/><rect x="56" y="32" width="14" height="14"/><rect x="56" y="54" width="14" height="14"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="34" cy="34" r="7"/><polygon points="34,58 27,72 41,72"/><rect x="60" y="46" width="14" height="14"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="34" cy="32" r="7"/><circle cx="66" cy="32" r="7"/><circle cx="50" cy="68" r="7"/></g></svg>'
        ]
      },
      tag: '元素种类'
    },
    {
      id: 'PD-106',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      stem: '办案人员在涉案仓库的地面发现三个带标记的方框，里面的黑点按同一规律移动。请观察前三个图形中黑点位置的变化，推断下一个图形应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explanation: '观察顺序：看黑点在方框边上的位置如何变化。前三个图形中，黑点依次位于方框的左上角、右上角、右下角，即每次沿方框边界顺时针移动两个位置（隔一个角），照此规律下一个图形中的黑点应移到左下角。四个选项中黑点分别位于左上角、左下角、上边中点、下边中点，只有位于左下角的那一项符合。注意不要误判为逆时针移动，也不要当成每次只移动一个位置。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="4" y="37" width="26" height="26"/><circle cx="4" cy="37" r="3.5" fill="#c9d6e8"/><rect x="37" y="37" width="26" height="26"/><circle cx="63" cy="37" r="3.5" fill="#c9d6e8"/><rect x="70" y="37" width="26" height="26"/><circle cx="96" cy="63" r="3.5" fill="#c9d6e8"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><circle cx="20" cy="20" r="6" fill="#c9d6e8"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><circle cx="20" cy="80" r="6" fill="#c9d6e8"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><circle cx="50" cy="20" r="6" fill="#c9d6e8"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><circle cx="50" cy="80" r="6" fill="#c9d6e8"/></g></svg>'
        ]
      },
      tag: '平移'
    },
    {
      id: 'PD-107',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      stem: '技术科在复原一枚被切割过的印章残片，残片在留影中依次转动。请观察前三个图形的旋转规律，推断下一个图形应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explanation: '观察顺序：看F形残片的开口方向如何转动。前三个图形的开口依次指向右、右下、下，即每次沿顺时针方向旋转45度，因此下一个图形应再顺时针旋转45度，开口指向左下，相当于从原图顺时针转过135度。四个选项分别对应旋转45度、135度、180度、90度，只有转过135度的那一项符合；转过45度、90度的只是重复了题干中已出现的图形，转过180度的则多转了一步。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><g transform="translate(17 50) rotate(0)"><path d="M-7-11V11M-7-11H10M-7 0H4"/></g><g transform="translate(50 50) rotate(45)"><path d="M-7-11V11M-7-11H10M-7 0H4"/></g><g transform="translate(83 50) rotate(90)"><path d="M-7-11V11M-7-11H10M-7 0H4"/></g></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><g transform="translate(50 50) rotate(45)"><path d="M-7-11V11M-7-11H10M-7 0H4"/></g></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><g transform="translate(50 50) rotate(135)"><path d="M-7-11V11M-7-11H10M-7 0H4"/></g></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><g transform="translate(50 50) rotate(180)"><path d="M-7-11V11M-7-11H10M-7 0H4"/></g></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><g transform="translate(50 50) rotate(90)"><path d="M-7-11V11M-7-11H10M-7 0H4"/></g></g></svg>'
        ]
      },
      tag: '旋转'
    },
    {
      id: 'PD-108',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      stem: '案卷附图中有三个小旗图形，前两个图形恰好互为左右翻转的镜像。请按同样的翻转方式，推断第三个图形翻转后应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      explanation: '观察顺序：先比较前两个图形。第二个图形是第一个图形沿竖直中轴线左右翻转得到的：三角形由指向右变为指向左，圆点从左侧上方换到了右侧上方。第三个图形三角形指向右、圆点位于左侧下方，同样翻转后，三角形应指向左，圆点换到右侧下方。四个选项中只有这一项符合；另外三项只是重复了题干中已经出现的图形，都是没有翻转或翻转不到位的干扰项。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="10,38 10,62 29,50"/><circle cx="5" cy="41.5" r="3.5" fill="#c9d6e8"/><polygon points="57,38 57,62 38,50"/><circle cx="62" cy="41.5" r="3.5" fill="#c9d6e8"/><polygon points="76,38 76,62 95,50"/><circle cx="71" cy="58.5" r="3.5" fill="#c9d6e8"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="57,38 57,62 38,50"/><circle cx="62" cy="58.5" r="3.5" fill="#c9d6e8"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="43,38 43,62 62,50"/><circle cx="38" cy="58.5" r="3.5" fill="#c9d6e8"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="43,38 43,62 62,50"/><circle cx="38" cy="41.5" r="3.5" fill="#c9d6e8"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="57,38 57,62 38,50"/><circle cx="62" cy="41.5" r="3.5" fill="#c9d6e8"/></g></svg>'
        ]
      },
      tag: '翻转'
    },
    {
      id: 'PD-109',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      stem: '办案人员在书房书柜的九宫格暗格上发现八个符号，右下角一格空缺。请根据每行、每列符号的排列规律，推断空缺处应填入哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      explanation: '观察顺序：按行、按列统计三种符号的分布。题干九宫格中，每一行、每一列都应由圆、正方形、三角形各一个组成；第三行已有正方形和三角形，第三列也已有三角形和正方形，因此空缺的右下角应填入一个圆。四个选项分别是圆、正方形、三角形和菱形，其中正方形与三角形已在第三列出现，菱形在题干中从未出现，只有圆符合每行每列三种符号各出现一次的遍历规律。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M2 2H98V98H2ZM34 2V98M66 2V98M2 34H98M2 66H98"/><circle cx="18" cy="18" r="9"/><circle cx="50" cy="50" r="9"/><rect x="41" y="9" width="18" height="18"/><rect x="73" y="41" width="18" height="18"/><rect x="9" y="73" width="18" height="18"/><polygon points="82,8 73,26 91,26"/><polygon points="18,40 9,58 27,58"/><polygon points="50,72 41,90 59,90"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="50" cy="50" r="27"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="26" y="26" width="48" height="48"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="50,20 24,72 76,72"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="50,22 76,50 50,78 24,50"/></g></svg>'
        ]
      },
      tag: '遍历'
    },
    {
      id: 'PD-110',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      stem: '两块镂空铜片按同一位置叠放在一起。现将图一与图二叠加，只保留两幅图中相同的部分、去掉不同的部分，得到的结果是：',
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      explanation: '观察顺序：先分别找出两幅图的组成元素。图一由一个正方形和一个圆组成，图二由一个正方形和一个三角形组成；两图叠加后，相同的部分只有正方形，圆只出现在图一中，三角形只出现在图二中。按保留相同部分、去掉不同部分的规则，结果应只剩一个正方形。选项中，只剩正方形的、只剩圆和三角形的、三种元素都保留的、只剩圆的，分别对应正确结果、去同存异、全部叠加和只取图一独有元素，故只有只剩正方形的那一项符合。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="17" y="40" width="20" height="20"/><circle cx="37" cy="50" r="10"/><rect x="63" y="40" width="20" height="20"/><polygon points="63,60 73,40 83,60"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="35" y="35" width="30" height="30"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="65" cy="50" r="15"/><polygon points="35,65 50,35 65,65"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="35" y="35" width="30" height="30"/><circle cx="65" cy="50" r="15"/><polygon points="35,65 50,35 65,65"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="65" cy="50" r="15"/></g></svg>'
        ]
      },
      tag: '求同'
    },
    {
      id: 'PD-111',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      stem: '专案组把涉案文书上的防伪花纹整理成一排图形，它们按同一规律排列。请观察下面前三个图形对称轴条数的变化，推断下一个图形应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explanation: '观察顺序：数每个图形的对称轴条数。题干三个图形依次为等腰三角形、长方形、等边三角形，对称轴条数分别为1条、2条、3条，每次增加1，所以下一个图形应有4条对称轴。四个选项中，菱形有2条对称轴，正五边形有5条，圆有无数条，只有正方形的对称轴恰好为4条（两条对角线加两条中垂线），符合规律。注意圆不能算作4条，不要误选。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="17,36 9,64 25,64"/><rect x="38" y="42" width="24" height="16"/><polygon points="83,35.2 71,56 95,56"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="50,24 74,50 50,76 26,50"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="26" y="26" width="48" height="48"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="50,24 25.3,42 34.7,71 65.3,71 74.7,42"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="50" cy="50" r="27"/></g></svg>'
        ]
      },
      tag: '对称轴'
    },
    {
      id: 'PD-112',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      stem: '技术科对一批物证封条上的图案按曲直性归类，发现三种类型循环出现。请观察前三个图形的构成，推断下一个图形应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      explanation: '观察顺序：看每个图形由什么线条构成。题干第一个图形是圆，完全由曲线构成；第二个图形是正方形，完全由直线构成；第三个图形是半圆加一条直线，属于曲直混合。三者按全曲线、全直线、曲直混合的顺序循环出现，所以第四个图形应回到全曲线图形。四个选项中，六边形和五边形全由直线构成，圆加直径属于曲直混合，只有椭圆完全由曲线构成，符合循环规律。判断时只看图形是否含直线即可，不要与对称性混淆。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="17" cy="50" r="14"/><rect x="36" y="36" width="28" height="28"/><path d="M68 62A14 14 0 0 1 96 62Z"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><ellipse cx="50" cy="50" rx="30" ry="20"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="50,23 26.6,36.5 26.6,63.5 50,77 73.4,63.5 73.4,36.5"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="50" cy="50" r="20"/><path d="M30 50H70"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="50,24 25.3,42 34.7,71 65.3,71 74.7,42"/></g></svg>'
        ]
      },
      tag: '曲直性'
    },
    {
      id: 'PD-113',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      stem: '办案人员在涉案场所的留言板上发现一组图案，它们按封闭、开放的规律交替出现。请观察前三个图形，推断下一个图形应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 2,
      explanation: '观察顺序：看每个图形是否封闭。题干第一个图形是正方形、第三个图形是圆，都首尾相连，属于封闭图形；第二个图形是一条开口折线，两端不相连，属于开放图形。图形按封闭、开放、封闭、开放的顺序交替出现，所以下一个应是开放图形。四个选项中，圆、三角形、正方形都首尾闭合，只有那条两端留有空隙、不闭合的折线是开放图形。判断开闭只需看轮廓是否围成封闭区域，不必去数线条的条数。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="4" y="37" width="26" height="26"/><path d="M34 60L50 40L66 60"/><circle cx="83" cy="50" r="14"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="50" cy="50" r="27"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="50,22 26,74 74,74"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M30 72V34H68"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="26" y="26" width="48" height="48"/></g></svg>'
        ]
      },
      tag: '开闭性'
    },
    {
      id: 'PD-114',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      stem: '监控录像的四个关键帧中，方框内两个黑点沿边框按各自固定的速度顺时针移动。请观察前三帧中黑点位置的变化，推断第四帧应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      explanation: '观察顺序：分别盯住两个黑点，看各自的移动距离。第一个黑点从左上角出发，依次移到上边中点、右上角，即每次沿边框顺时针移动1个位置，下一帧应移到右边中点；第二个黑点从右下角出发，依次移到左下角、左上角，即每次顺时针移动2个位置，下一帧应移到右上角。四个选项中，只有同时满足一个点位于右边中点、另一个点位于右上角的那一项符合；其余选项分别重复了第一帧、第二帧或位置搭配错误。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="4" y="37" width="26" height="26"/><circle cx="4" cy="37" r="3.5" fill="#c9d6e8"/><circle cx="30" cy="63" r="3.5" fill="#c9d6e8"/><rect x="37" y="37" width="26" height="26"/><circle cx="50" cy="37" r="3.5" fill="#c9d6e8"/><circle cx="37" cy="63" r="3.5" fill="#c9d6e8"/><rect x="70" y="37" width="26" height="26"/><circle cx="96" cy="37" r="3.5" fill="#c9d6e8"/><circle cx="70" cy="37" r="3.5" fill="#c9d6e8"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><circle cx="80" cy="50" r="6" fill="#c9d6e8"/><circle cx="80" cy="20" r="6" fill="#c9d6e8"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><circle cx="50" cy="20" r="6" fill="#c9d6e8"/><circle cx="20" cy="80" r="6" fill="#c9d6e8"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><circle cx="20" cy="20" r="6" fill="#c9d6e8"/><circle cx="80" cy="80" r="6" fill="#c9d6e8"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><circle cx="80" cy="50" r="6" fill="#c9d6e8"/><circle cx="50" cy="80" r="6" fill="#c9d6e8"/></g></svg>'
        ]
      },
      tag: '双点平移'
    },
    {
      id: 'PD-115',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      stem: '专案组从六份卷宗的封面上拓下六个图形，按从左到右、先上后下的顺序依次记为①至⑥。请把它们分为两类，使每一类图形都有共同的规律，下列分组正确的是：',
      options: ['①②③为一组，④⑤⑥为一组', '①③⑤为一组，②④⑥为一组', '①④⑤为一组，②③⑥为一组', '①②⑤为一组，③④⑥为一组'],
      answer: 1,
      explanation: '观察顺序：先把六个图形按题干的阅读顺序编号，再比较它们的共同属性。①是等腰三角形、③是正方形、⑤是圆，三者都能找到对称轴，属于轴对称图形；②是三条边互不相等的三角形，④是不规则四边形，⑥是长短两臂不等的折线形，都没有对称轴，属于非对称图形。因此正确分组应为①③⑤一组、②④⑥一组。其余分组都把轴对称图形和非对称图形混在同一组，不符合分类要求。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="17,12 5,40 29,40"/><polygon points="38,40 62,40 44,12"/><rect x="69" y="12" width="28" height="28"/><polygon points="4,64 19,58 29,78 12,88"/><circle cx="50" cy="73" r="15"/><polygon points="67,60 95,60 95,72 79,72 79,90 67,90"/></g></svg>',
      },
      tag: '分组分类'
    }
  ]
});
