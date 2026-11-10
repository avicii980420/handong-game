window.QB_PARTS = window.QB_PARTS || [];
window.QB_PARTS.push({
  owner: 'ah-figure',
  questions: [
    {
      id: 'PD-201',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      stem: '技术科在涉案账本边角上发现一排方格图案，它们按同一规律排列。请观察下面前三个图形中封闭区域（被线围起来的小块）数的变化，推断下一个图形应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explanation: '观察顺序：先看每个图形被分成了几个封闭的小块。第一个正方形里没有线，是1块；第二个正方形中间加了一条竖线，被分成2块；第三个正方形加了两条竖线，被分成3块。块数依次是1、2、3，每次多1，所以下一个图形应该被分成4块。四个选项中，被分成2块、3块、5块的都不符合，只有被三条竖线分成4块的那一个符合。数的时候只数"围起来的小块"，不要把线条本身也算进去。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="4" y="37" width="26" height="26"/><rect x="37" y="37" width="26" height="26"/><path d="M50 37V63"/><rect x="70" y="37" width="26" height="26"/><path d="M78.7 37V63M87.3 37V63"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><path d="M50 20V80"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><path d="M35 20V80M50 20V80M65 20V80"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><path d="M40 20V80M60 20V80"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><path d="M32 20V80M44 20V80M56 20V80M68 20V80"/></g></svg>'
        ]
      },
      tag: '封闭区域'
    },
    {
      id: 'PD-202',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      stem: '物证袋上印着一排小圆标记，它们按同一规律排列。请观察下面前三个图形中小圆个数的变化，推断下一个图形应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explanation: '观察顺序：数每个图形里小圆的个数。第一个图形有2个小圆，第二个有3个，第三个有4个，个数依次是2、3、4，每次多1个，所以下一个图形应该有5个小圆。四个选项中小圆的个数各不相同，只有5个的那一项符合规律；个数为3个、4个、6个的都不对。数的时候从左到右、从上到下挨个数，不要漏数或重复数；小圆摆放得整齐不整齐不影响结果，只看个数。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="12" cy="50" r="6"/><circle cx="24" cy="50" r="6"/><circle cx="41" cy="50" r="6"/><circle cx="50" cy="50" r="6"/><circle cx="59" cy="50" r="6"/><circle cx="74" cy="44" r="6"/><circle cx="86" cy="44" r="6"/><circle cx="74" cy="56" r="6"/><circle cx="86" cy="56" r="6"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="38" cy="50" r="6"/><circle cx="50" cy="50" r="6"/><circle cx="62" cy="50" r="6"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="30" cy="50" r="5.5"/><circle cx="41" cy="50" r="5.5"/><circle cx="52" cy="50" r="5.5"/><circle cx="63" cy="50" r="5.5"/><circle cx="74" cy="50" r="5.5"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="38" cy="42" r="6"/><circle cx="62" cy="42" r="6"/><circle cx="38" cy="58" r="6"/><circle cx="62" cy="58" r="6"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="34" cy="40" r="6"/><circle cx="50" cy="40" r="6"/><circle cx="66" cy="40" r="6"/><circle cx="34" cy="60" r="6"/><circle cx="50" cy="60" r="6"/><circle cx="66" cy="60" r="6"/></g></svg>'
        ]
      },
      tag: '元素个数'
    },
    {
      id: 'PD-203',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      stem: '办案人员在现场找到一排多边形暗号，它们按同一规律排列。请观察下面前三个图形的边数变化，推断下一个图形应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      explanation: '观察顺序：数每个图形有几条边。第一个图形是三角形，有3条边；第二个是正方形，有4条边；第三个是五边形，有5条边。边数依次是3、4、5，每次多1条，所以下一个图形应该是6条边的六边形。四个选项中，五边形有5条边、七边形有7条边、正方形有4条边，都不符合；只有六边形正好6条边。数边时沿着轮廓一个角一个角地数，不要把角数错。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="17,34 3.1,58 30.9,58"/><rect x="39" y="39" width="22" height="22"/><polygon points="83,34 67.8,45 73.6,63 92.4,63 98.2,45"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="50,22 25.8,36 25.8,64 50,78 74.2,64 74.2,36"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="50,22 23.4,41.3 33.5,72.7 66.5,72.7 76.6,41.3"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><polygon points="50,22 28.1,32.5 22.7,56.2 37.9,75.2 62.1,75.2 77.3,56.2 71.9,32.5"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="22" y="22" width="56" height="56"/></g></svg>'
        ]
      },
      tag: '边数'
    },
    {
      id: 'PD-204',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      stem: '仓库地面的三个方框里各有一个黑点，黑点按同一规律移动。请观察前三个图形中黑点位置的变化，推断下一个图形应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explanation: '观察顺序：看黑点停在方框的哪个角上。第一个图形黑点在左上角，第二个移到右上角，第三个移到右下角，每次都是沿着方框边顺时针挪一个角。照这个走法，第四个图形黑点应从右下角继续顺时针移到左下角。四个选项中黑点的位置各不相同，只有位于左下角的那一项符合规律；黑点贴着角走，不会停在边的中间，所以停在下边中点、左上角和右下角的都是干扰项。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="4" y="37" width="26" height="26"/><circle cx="4" cy="37" r="3.5" fill="#c9d6e8"/><rect x="37" y="37" width="26" height="26"/><circle cx="63" cy="37" r="3.5" fill="#c9d6e8"/><rect x="70" y="37" width="26" height="26"/><circle cx="96" cy="63" r="3.5" fill="#c9d6e8"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><circle cx="20" cy="20" r="6" fill="#c9d6e8"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><circle cx="20" cy="80" r="6" fill="#c9d6e8"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><circle cx="50" cy="80" r="6" fill="#c9d6e8"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><circle cx="80" cy="80" r="6" fill="#c9d6e8"/></g></svg>'
        ]
      },
      tag: '平移'
    },
    {
      id: 'PD-205',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      stem: '监控留影中的小旗图案依次转动，每次转动的角度相同。请观察前三个图形中小旗朝向的变化，推断下一个图形应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 2,
      explanation: '观察顺序：看小旗的朝向怎么变。第一个图形旗杆竖着、旗面指向右边；第二个图形旗面指向下方；第三个图形旗面指向左边，即每次顺时针转动90度。按这个规律，第四个图形应在第三个的基础上再顺时针转90度，旗面指向上方。四个选项中旗面的朝向各不相同，只有指向上方的那一项符合规律；其余三项分别与题干前三个图形的朝向相同，只是重复了已经出现过的样子。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><g transform="translate(17 50) rotate(0)"><path d="M-7 12V-12"/><polygon points="-7,-12 9,-7 -7,-2"/></g><g transform="translate(50 50) rotate(90)"><path d="M-7 12V-12"/><polygon points="-7,-12 9,-7 -7,-2"/></g><g transform="translate(83 50) rotate(180)"><path d="M-7 12V-12"/><polygon points="-7,-12 9,-7 -7,-2"/></g></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><g transform="translate(50 50) rotate(0)"><path d="M-7 12V-12"/><polygon points="-7,-12 9,-7 -7,-2"/></g></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><g transform="translate(50 50) rotate(90)"><path d="M-7 12V-12"/><polygon points="-7,-12 9,-7 -7,-2"/></g></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><g transform="translate(50 50) rotate(270)"><path d="M-7 12V-12"/><polygon points="-7,-12 9,-7 -7,-2"/></g></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><g transform="translate(50 50) rotate(180)"><path d="M-7 12V-12"/><polygon points="-7,-12 9,-7 -7,-2"/></g></g></svg>'
        ]
      },
      tag: '旋转'
    },
    {
      id: 'PD-206',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      stem: '技术科把涉案物证上的线条图案整理成一排，它们按同一规律排列。请观察下面前三个图形中横线与竖线交点数的变化，推断下一个图形应是哪一项：',
      options: ['A', 'B', 'C', 'D'],
      answer: 2,
      explanation: '观察顺序：数每条横线与竖线相交的地方有几个交点。第一个图形是1条横线穿过1条竖线，有1个交点；第二个图形有2条横线穿过同一条竖线，有2个交点；第三个有3条横线，有3个交点。交点数依次是1、2、3，每次多1个，所以下一个图形应有4个交点。四个选项的交点数各不相同，只有4个交点的那一项符合；交点数为2个、3个、5个的都不对。也可以数横线的条数，1、2、3后面应接4条横线，结论相同。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M17 20V80M3 50H31"/><path d="M50 16V84M34 38H66M34 62H66"/><path d="M83 12V88M68 32H98M68 50H98M68 68H98"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 12V88M20 38H80M20 62H80"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 12V88M20 32H80M20 50H80M20 68H80"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 12V88M20 28H80M20 44H80M20 60H80M20 76H80"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 12V88M20 24H80M20 37H80M20 50H80M20 63H80M20 76H80"/></g></svg>'
        ]
      },
      tag: '交点数'
    },
    {
      id: 'PD-207',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      stem: '专案组从六份卷宗的封面上拓下六个图形，按从左到右、先上后下的顺序依次记为①至⑥。请把它们分为两类，使每一类图形都有共同的规律，下列分组正确的是：',
      options: ['①②③为一组，④⑤⑥为一组', '①②④为一组，③⑤⑥为一组', '①③④为一组，②⑤⑥为一组', '①④⑤为一组，②③⑥为一组'],
      answer: 1,
      explanation: '观察顺序：先看每个图形是不是首尾相连。①②④分别是正方形、圆、三角形，轮廓都闭合，围成了封闭区域；③⑤⑥分别是一条折线、一个开口的角和一个开口的折线框，两端都没有连上，属于开放图形。因此正确的分法是①②④一组、③⑤⑥一组。其余分法都把封闭图形和开放图形混在了同一组，不符合"每一类有共同规律"的要求。判断开闭只需要看轮廓有没有缺口，不用数线条。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="5" y="10" width="22" height="22"/><circle cx="50" cy="21" r="11"/><path d="M68 10L82 32L96 10"/><polygon points="16,52 4,74 28,74"/><path d="M38 74L50 52L62 74"/><path d="M70 52V74H96"/></g></svg>',
      },
      tag: '分组分类'
    },
    {
      id: 'PD-208',
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      stem: '搜查时，办案人员在暗格旁发现三个可以一笔画成的记号。请从四个选项中选出同样能够一笔画成的图形（笔不离开纸面、每条线段只画一次）：',
      options: ['A', 'B', 'C', 'D'],
      answer: 3,
      explanation: '观察顺序：先数每个图形中"奇点"的个数——奇点就是引出奇数条线条的点。题干三个图形的奇点个数都是0或2，所以都能一笔画成，即笔不离开纸面、每条线只画一次。选项中：方框里加十字的图形有4个奇点，两个相离的圆分成两段，方框加两条对角线的图形也有4个奇点，它们都需要两笔；只有方框中间加一条横线的图形恰有2个奇点，可以一笔画成。记住结论：奇点为0个或2个能一笔画，4个就要两笔。',
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="17" cy="50" r="13"/><path d="M7.8 40.8L26.2 59.2"/><rect x="36" y="36" width="28" height="28"/><path d="M36 36L64 64"/><polygon points="83,34 69,62 97,62"/><path d="M83 34V62"/></g></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><path d="M50 20V80M20 50H80"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="32" cy="50" r="16"/><circle cx="68" cy="50" r="16"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><path d="M20 20L80 80M80 20L20 80"/></g></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#c9d6e8" stroke-width="2.5"><rect x="20" y="20" width="60" height="60"/><path d="M20 50H80"/></g></svg>'
        ]
      },
      tag: '一笔画'
    }
  ]
});
