window.QB_PARTS = window.QB_PARTS || [];
window.QB_PARTS.push({
  owner: 'q4-figure2',
  questions: [
    {
      id: "PD-431",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "位置规律",
      stem: '技术科复原了一段六格标尺，每格可以卡住一枚定位钢珠。三次勘验记录如图，钢珠的间距始终没有变化，请推断第四次记录的样子：',
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: '用位置规律：三幅图里六格标尺、格线、两枚钢珠的间距都没有变，变的是它们停在第几格，属于元素相同、先看位置的类型。第一幅两珠占一、二格，第二幅占二、三格，第三幅占三、四格，每次整体向右挪一格，间距始终为相邻一格。照这个走法，第四幅应占四、五格。四个选项里，两珠挤到五、六格的多走了一格，仍占三、四格的是停在上一幅没动，占四、六格的那幅把间距拉开了，都不合规律；只有占四、五格且间距不变的一幅对得上。整体平移要盯住间距，别只记住某一枚珠子的位置。',
      tag: "平移",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M10 10L90 10 90 28 10 28ZM23 10L23 28M36 10L36 28M50 10L50 28M64 10L64 28M77 10L77 28M10 41L90 41 90 59 10 59ZM23 41L23 59M36 41L36 59M50 41L50 59M64 41L64 59M77 41L77 59M10 72L90 72 90 90 10 90ZM23 72L23 90M36 72L36 90M50 72L50 90M64 72L64 90M77 72L77 90"/><circle cx="16" cy="19" r="4"/><circle cx="30" cy="19" r="4"/><circle cx="30" cy="50" r="4"/><circle cx="43" cy="50" r="4"/><circle cx="43" cy="81" r="4"/><circle cx="57" cy="81" r="4"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M26 44L74 44 74 56 26 56ZM34 44L34 56M42 44L42 56M50 44L50 56M58 44L58 56M66 44L66 56"/><circle cx="54" cy="50" r="3"/><circle cx="62" cy="50" r="3"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M26 44L74 44 74 56 26 56ZM34 44L34 56M42 44L42 56M50 44L50 56M58 44L58 56M66 44L66 56"/><circle cx="62" cy="50" r="3"/><circle cx="70" cy="50" r="3"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M26 44L74 44 74 56 26 56ZM34 44L34 56M42 44L42 56M50 44L50 56M58 44L58 56M66 44L66 56"/><circle cx="46" cy="50" r="3"/><circle cx="54" cy="50" r="3"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M26 44L74 44 74 56 26 56ZM34 44L34 56M42 44L42 56M50 44L50 56M58 44L58 56M66 44L66 56"/><circle cx="54" cy="50" r="3"/><circle cx="70" cy="50" r="3"/></svg>'
        ]
      }
    },
    {
      id: "PD-432",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "位置规律",
      stem: '物证袋上贴着一张三角形封条，三份复印件显示封条每次都绕中心转过相同的角度。请按前三份的转法推断第四份：',
      options: ["A", "B", "C", "D"],
      answer: 2,
      explanation: '用位置规律：四幅图都是同一个三角形，三条边的长短比例完全一样，只是尖端所指的方向在变，属于元素相同、先看位置的类型。第一幅尖朝上，第二幅朝右，第三幅朝下，第四幅朝左，每次绕中心顺时针转九十度，转满一圈正好回到起点。按这个走法，第五幅应再转九十度，尖重新朝上，底边回到下方。四个选项里，尖朝右、朝下、朝左的三幅分别对应前面几幅的朝向，接不上；只有尖朝上、底边在下的一幅符合推算。判断旋转要盯住最短的边或最尖的角，别在对称的位置上来回犹豫。',
      tag: "旋转",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M25 9L14 39 36 39ZM91 25L61 14 61 36ZM25 91L36 61 14 61ZM59 75L89 86 89 64Z"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 68L63 34 37 34Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M32 50L66 63 66 37Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 32L37 66 63 66Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M68 50L34 37 34 63Z"/></svg>'
        ]
      }
    },
    {
      id: "PD-433",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "位置规律",
      stem: '案卷骑缝章的图案是一面小旗，三张存根显示旗面在左右、上下之间来回翻。请推断第四张存根上的形状：',
      options: ["A", "B", "C", "D"],
      answer: 1,
      explanation: '用位置规律：三幅图的旗杆长度、旗面大小都一样，只是朝向在变，先判断是翻不是转。第一幅旗杆在左、旗面在上方朝右；第二幅旗杆在右、旗面仍在上方朝左，是照着竖直中线左右翻过去；第三幅旗杆仍在右，旗面却落到下方朝左，是照着水平中线上下翻过去。翻法左右、上下交替，第四幅就该再照竖直中线翻一次，得到旗杆在左、旗面在下方朝右。四个选项里，旗面仍在上方的两种停在旧位置，旗杆在右、旗面在下的那一种用的是上下翻，只有杆左、面下、口朝右的组合对。翻转与旋转的区别在于：翻转会把图形里左右或上下的关系整个调个头。',
      tag: "翻转",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M14 39L14 60M14 39L24 44 14 49ZM53 39L53 60M53 39L43 44 53 49ZM86 61L86 40M86 61L76 56 86 51Z"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M55 71L55 32M55 71L38 61 55 51Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M45 71L45 32M45 71L62 61 45 51Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M45 29L45 68M45 29L62 39 45 49Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M55 29L55 68M55 29L38 39 55 49Z"/></svg>'
        ]
      }
    },
    {
      id: "PD-434",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      tech: "位置规律",
      stem: '证物架上一排挂着圆、方、三角、菱形四枚标签，每次只对调相邻的两枚，对调的位置逐次后移。三次调配记录如图，请推断第四次调配后的排列：',
      options: ["A", "B", "C", "D"],
      answer: 3,
      explanation: '用位置规律：四枚标签始终齐全、只是次序在变，属于元素相同、先看位置的类型。第一幅到第二幅，圆与方对调，其余不动；第二幅到第三幅，方与三角对调；第三幅到第四幅，三角与菱形对调。可见每次只交换相邻两枚，交换的位置从左往右逐幅后移一位，现在轮到最右一枚与最左一枚首尾对调。第四幅是方、三角、菱形、圆，把圆从末位换到首位，得到圆、三角、菱形、方。四个选项里，次序完全没动的是漏了这一步，方回到首位的是把交换位看错，三角领头的则错位更多；只有圆打头、方收尾的一幅符合。',
      tag: "环形相向",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M15 21L24 21 24 29 15 29ZM31 19L35 28 26 28ZM41 19L45 25 41 31 37 25ZM55 21L63 21 63 29 55 29ZM81 19L85 28 76 28ZM91 19L95 25 91 31 87 25ZM5 71L13 71 13 79 5 79ZM19 69L24 78 15 78ZM41 69L45 75 41 81 37 75ZM55 71L63 71 63 79 55 79ZM69 69L74 78 65 78ZM81 69L85 75 81 81 76 75Z"/><circle cx="9" cy="25" r="4"/><circle cx="69" cy="25" r="4"/><circle cx="31" cy="75" r="4"/><circle cx="91" cy="75" r="4"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M26 45L36 45 36 55 26 55ZM44 43L49 54 38 54ZM56 43L62 50 56 57 51 50Z"/><circle cx="69" cy="50" r="5"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M26 45L36 45 36 55 26 55ZM56 43L62 54 51 54ZM69 43L74 50 69 57 64 50Z"/><circle cx="44" cy="50" r="5"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M31 43L37 54 25 54ZM44 43L49 50 44 57 38 50ZM51 45L62 45 62 55 51 55Z"/><circle cx="69" cy="50" r="5"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M44 43L49 54 38 54ZM56 43L62 50 56 57 51 50ZM64 45L74 45 74 55 64 55Z"/><circle cx="31" cy="50" r="5"/></svg>'
        ]
      }
    },
    {
      id: "PD-435",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "位置规律",
      stem: '涉案U盘的挂绳上有八个定位孔，金属扣每次沿环跳相同的格数。四次拍照记录如图，请推断第五次金属扣所停的孔位：',
      options: ["A", "B", "C", "D"],
      answer: 2,
      explanation: '用位置规律：八个孔位组成的圆环没有变，只有金属扣在换孔，数它每步跨过几个孔即可。以正上方那孔为第一孔，第一幅停在第一孔，第二幅落到顺数第四孔，第三幅落到第七孔，第四幅从第七孔再跨三步、越过第八孔绕回第二孔。每次固定顺时针跨三格，八与三不整除，所以走满八步才会回到原处。按此推算第五幅应停在第五孔，也就是正下方。四个选项里，停在第三孔、第六孔、第八孔的都是跨的步数不对，只有正下方那一幅符合每步三格。跨格题先确认总格数，再用总格数去约，避免误以为走几步就一定回到原点。',
      tag: "跳格",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M25 9L25 5M36 14L39 11M41 25L45 25M36 36L39 39M25 41L25 45M14 36L11 39M9 25L5 25M14 14L11 11M21 8L29 8 29 15 21 15ZM75 9L75 5M86 14L89 11M91 25L95 25M86 36L89 39M75 41L75 45M64 36L61 39M59 25L55 25M64 14L61 11M81 31L88 31 88 38 81 38ZM25 59L25 55M36 64L39 61M41 75L45 75M36 86L39 89M25 91L25 95M14 86L11 89M9 75L5 75M14 64L11 61M8 71L15 71 15 79 8 79ZM75 59L75 55M86 64L89 61M91 75L95 75M86 86L89 89M75 91L75 95M64 86L61 89M59 75L55 75M64 64L61 61M81 62L88 62 88 69 81 69Z"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 31L50 27M63 37L66 34M69 50L73 50M63 63L66 66M50 69L50 73M37 63L34 66M31 50L27 50M37 37L34 34M35 57L43 57 43 65 35 65Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 31L50 27M63 37L66 34M69 50L73 50M63 63L66 66M50 69L50 73M37 63L34 66M31 50L27 50M37 37L34 34M35 35L43 35 43 43 35 43Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 31L50 27M63 37L66 34M69 50L73 50M63 63L66 66M50 69L50 73M37 63L34 66M31 50L27 50M37 37L34 34M46 61L54 61 54 70 46 70Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 31L50 27M63 37L66 34M69 50L73 50M63 63L66 66M50 69L50 73M37 63L34 66M31 50L27 50M37 37L34 34M61 46L70 46 70 54 61 54Z"/></svg>'
        ]
      }
    },
    {
      id: "PD-436",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "样式规律",
      stem: '三张现场草图用同一套格点画线，前两张的线条叠在一处正好是第三张。第四张如图，请推出它应当与前一张叠成什么样：',
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: '用样式规律：四幅图都由同一套格点上的直线段构成，前三幅之间是相加的关系，属于元素相似、先看样式的类型。第一幅画了上边和左边，第二幅画了右边和下边，两幅叠起来恰好拼成完整的方框，也就是第三幅。可见规律是前两幅直接叠加、线条全部保留。第四幅只画了一条左上到右下的斜线，与第三幅的方框叠起来，应是方框再加这条斜线。四个选项里，只有方框的是把第四幅漏掉了，多出另一条反向斜线的是把方向画反，两条斜线都有的则多加一笔；只有方框加一条左上到右下斜线的一幅成立。叠加题要把两张图的线逐条并起来，别删线。',
      tag: "叠加求并",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M11 11L39 11M11 11L11 39M89 11L89 39M61 39L89 39M11 61L39 61M39 61L39 89M39 89L11 89M11 89L11 61M61 61L89 89"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 34L66 34M66 34L66 66M66 66L34 66M34 66L34 34M34 34L66 66"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 34L66 34M66 34L66 66M66 66L34 66M34 66L34 34M34 34L66 66M66 34L34 66"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 34L66 34M66 34L66 66M66 66L34 66M34 66L34 34M66 34L34 66"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 34L66 34M66 34L66 66M66 66L34 66M34 66L34 34"/></svg>'
        ]
      }
    },
    {
      id: "PD-437",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "样式规律",
      stem: '三组印章图案由圆形、方形、三角形、菱形拼成，前两组合看，第三组正好是它们各自独有的部分。第四组如图，请推出下一组：',
      options: ["A", "B", "C", "D"],
      answer: 3,
      explanation: '用样式规律：四组图案用的都是同样几种小图形，只是取舍不同，属于元素相似、先看样式的类型。第一组有圆、方、三角，第二组有方、三角、菱形，两两相同的方与三角被去掉，只剩圆与菱形，正好是第三组，可见规律是去同存异。第三组有圆、菱形，第四组有圆、方，去掉共有的圆，剩下菱形与方，就是下一组该有的两个图形。四个选项里，只保留圆与菱形的是把第三组又抄了一遍，只剩方形的是漏掉菱形，三个图形全留的是没有去掉共有的圆；只有菱形与方并存的一组符合规律。做题时先把两组共有的图形划掉，剩下的才是答案。',
      tag: "去同存异",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M20 20L30 20 30 30 20 30ZM39 19L44 29 33 29ZM56 20L66 20 66 30 56 30ZM75 19L80 29 70 29ZM89 19L94 25 89 31 84 25ZM32 69L37 75 32 81 28 75ZM78 70L87 70 87 80 78 80Z"/><circle cx="11" cy="25" r="5"/><circle cx="17" cy="75" r="5"/><circle cx="67" cy="75" r="5"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M59 43L64 50 59 57 53 50Z"/><circle cx="40" cy="50" r="6"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M44 44L56 44 56 56 44 56Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 43L39 50 34 57 28 50ZM44 44L56 44 56 56 44 56Z"/><circle cx="66" cy="50" r="6"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M40 43L46 50 40 57 35 50ZM53 44L64 44 64 56 53 56Z"/></svg>'
        ]
      }
    },
    {
      id: "PD-438",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "样式规律",
      stem: '技术员把两张网格走线图透光叠看，只留下两张图重合的线条，得到第三张。第四张如图，请推出它叠出来的结果：',
      options: ["A", "B", "C", "D"],
      answer: 1,
      explanation: '用样式规律：四幅图都在同一套格点上取线，线条种类一致，属于元素相似、先看样式的类型。第一幅有左边、上边、一条左上到右下的斜线，第二幅有左边、那条斜线、下边，两幅重合的只有左边与斜线，正好是第三幅，可见规律是去异存同、只留公共线条。第三幅有左边与斜线，第四幅有斜线与右边，公共部分只剩那条左上到右下的斜线。四个选项里，多留左边或右边的是把不公共的线也算进去了，画成另一条反向斜线的是方向记错，只有单独一条左上到右下斜线的图成立。求同时要比对线条的方向与端点，方向相反的斜线不算公共。',
      tag: "去异存同",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M11 11L11 39M11 11L39 11M11 11L39 39M61 11L61 39M61 11L89 39M61 39L89 39M11 61L11 89M11 61L39 89M61 61L89 89M89 61L89 89"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 34L34 66M34 34L66 66"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 34L66 66"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 34L66 66M66 34L66 66"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M66 34L34 66"/></svg>'
        ]
      }
    },
    {
      id: "PD-439",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "样式规律",
      stem: '三枚不同形状的封签要依次盖在册页的三个位置上，每页都盖满三种且各一枚。三页存根如图，请推出第四页的排布：',
      options: ["A", "B", "C", "D"],
      answer: 1,
      explanation: '用样式规律：每页都是圆、方、三角三种各一枚，元素种类齐全、数量不变，属于元素相似、先看样式的类型。第一页圆在左、方在中、三角在右；第二页方到了左边、三角到中间、圆到右边，相当于每个符号整体左移一位、最左的圆绕到最右；第三页再左移一位，三角在左、圆在中、方在右。照此循环，第四页又一次回到圆在左、方在中、三角在右。四个选项里，三角打头或方打头的是移位方向看反，把方与三角对调、只动后面两位的则少了圆绕到最右这一步；只有圆、方、三角从左到右依次排列的一页对得上。遍历题先把三种元素凑齐，再跟踪其中一种的走位。',
      tag: "遍历",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M45 14L55 14 55 24 45 24ZM72 12L79 23 66 23ZM22 45L33 45 33 55 22 55ZM50 43L56 54 44 54ZM28 74L34 85 21 85ZM67 76L78 76 78 86 67 86Z"/><circle cx="28" cy="19" r="5"/><circle cx="72" cy="50" r="5"/><circle cx="50" cy="81" r="5"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 45L55 53 45 53ZM59 46L68 46 68 54 59 54Z"/><circle cx="36" cy="50" r="4"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M46 46L54 46 54 54 46 54ZM64 45L68 53 59 53Z"/><circle cx="36" cy="50" r="4"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M36 45L41 53 32 53ZM46 46L54 46 54 54 46 54Z"/><circle cx="64" cy="50" r="4"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M32 46L41 46 41 54 32 54ZM64 45L68 53 59 53Z"/><circle cx="50" cy="50" r="4"/></svg>'
        ]
      }
    },
    {
      id: "PD-440",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "样式规律",
      stem: '值班表上用三种记号标注三个岗位，两张表叠在一起就是汇总表。汇总表与第三张表如图，请推出最后一张汇总表：',
      options: ["A", "B", "C", "D"],
      answer: 3,
      explanation: '用样式规律：四幅图都由左侧同一条竖线和右侧三个固定的记号位组成，元素相似、先看样式。第一幅只有上位的圆，第二幅只有中位的方，两幅叠起来上圆中方俱全，正是第三幅，可见规律是相同位置上的记号直接相加、互不覆盖。第三幅已有上圆与中方，第四幅又添了下位的三角，叠起来就该三个位置都有记号。四个选项里，只留两个记号的是把前一张漏掉了，缺上位圆或缺中位方的是叠加时丢项；只有上圆、中方、下角三段齐全的一幅成立。叠加题要逐个位置核对，别只看记号总数。',
      tag: "叠加求并",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M10 6L10 44M60 6L60 44M73 19L84 19 84 31 73 31ZM10 56L10 94M23 69L34 69 34 81 23 81ZM60 56L60 94M79 81L85 92 73 92Z"/><circle cx="29" cy="12" r="6"/><circle cx="29" cy="62" r="6"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M33 27L33 73M48 44L61 44 61 56 48 56Z"/><circle cx="54" cy="35" r="6"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M33 27L33 73M48 44L61 44 61 56 48 56ZM54 57L62 70 47 70Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M33 27L33 73M54 57L62 70 47 70Z"/><circle cx="54" cy="35" r="6"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M33 27L33 73M48 44L61 44 61 56 48 56ZM54 57L62 70 47 70Z"/><circle cx="54" cy="35" r="6"/></svg>'
        ]
      }
    },
    {
      id: "PD-441",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "数量规律",
      stem: '五份物证拓片上的小图形逐个增多，排布方式基本一致。请按封闭图形的个数推断最后一份应当是哪一个：',
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: '用数量规律：四幅图的小图形形状各不相同、位置也绕着中心转，样式上没有加减关系，先按面数去数。第一幅两个闭合小图形，第二幅三个，第三幅四个，第四幅五个，每幅比前一幅多一个，且都呈环状排布。按这个递增，第五幅应有六个封闭小图形。四个选项里，只有五个的是没接着加，排到七个的是多加了一个，另一幅虽摆了六样东西，其中一件是敞口的折线、并没有围成封闭区域，实际只有五个面；只有六个闭合图形围成一圈的一幅数目正好对上。数封闭区域要逐件看是否首尾相接。',
      tag: "封闭区域数",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M21 34L29 34 29 41 21 41ZM82 27L90 27 90 35 82 35ZM64 26L69 34 60 34ZM34 71L41 71 41 79 34 79ZM25 82L29 90 21 90ZM13 70L16 75 13 80 9 75ZM83 67L91 67 91 75 83 75ZM82 80L87 88 78 88ZM68 80L72 85 68 90 64 85Z"/><circle cx="25" cy="13" r="4"/><circle cx="75" cy="13" r="4"/><circle cx="25" cy="63" r="4"/><circle cx="75" cy="63" r="4"/><circle cx="63" cy="71" r="4"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M58 38L67 38 67 47 58 47ZM63 51L68 61 58 61ZM50 59L55 65 50 71 45 65ZM33 38L42 38 42 47 33 47Z"/><circle cx="50" cy="35" r="5"/><circle cx="37" cy="57" r="5"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M57 36L66 36 66 45 57 45ZM64 47L69 57 59 57ZM56 57L61 63 56 69 52 63ZM31 49L40 49 40 58 31 58ZM39 35L44 44 33 44Z"/><circle cx="50" cy="35" r="5"/><circle cx="44" cy="63" r="5"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M58 38L67 38 67 47 58 47ZM63 51L68 61 58 61ZM46 60L46 69 54 69M33 38L42 38 42 47 33 47Z"/><circle cx="50" cy="35" r="5"/><circle cx="37" cy="57" r="5"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M59 41L68 41 68 50 59 50ZM59 56L64 65 53 65ZM41 56L46 62 41 68 37 62Z"/><circle cx="50" cy="35" r="5"/><circle cx="36" cy="45" r="5"/></svg>'
        ]
      }
    },
    {
      id: "PD-442",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "数量规律",
      stem: '几份现场指向图标出了从中心点引出的射线，射线的条数逐份增加。请按条数推断下一份：',
      options: ["A", "B", "C", "D"],
      answer: 2,
      explanation: '用数量规律：四幅图都由同一个中心点和若干条等长射线组成，形状、朝向都不固定，属于元素不同、先数数量的类型。第一幅三条，第二幅四条，第三幅五条，第四幅六条，每幅比前一幅多一条，射线之间的夹角也随之变小。按这个递增，第五幅应有七条射线。四个选项里，仍是六条的是没有继续增加，只有五条的是退回去了，画到八条的是多画一条；只有七条射线从中心均匀散开的一幅符合。数线条时只数从中心射出的线段，别把两条相邻射线夹出来的角当成线来数。',
      tag: "线条数",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M25 25L25 8M25 25L39 33M25 25L11 33M75 25L75 8M75 25L92 25M75 25L75 42M75 25L58 25M25 75L25 58M25 75L41 70M25 75L35 88M25 75L15 88M25 75L9 70M75 75L75 58M75 75L89 67M75 75L89 83M75 75L75 92M75 75L61 83M75 75L61 67"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 50L50 31M50 50L64 36M50 50L69 50M50 50L64 64M50 50L50 69M50 50L36 64M50 50L31 50M50 50L36 36"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 50L50 31M50 50L67 40M50 50L67 60M50 50L50 69M50 50L33 60M50 50L33 40"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 50L50 31M50 50L65 38M50 50L69 54M50 50L58 68M50 50L42 68M50 50L31 54M50 50L35 38"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 50L50 31M50 50L68 44M50 50L61 66M50 50L39 66M50 50L32 44"/></svg>'
        ]
      }
    },
    {
      id: "PD-443",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "数量规律",
      stem: '几张电路草图都是同一条横线穿过若干条竖线，交叉处的数目逐张变化。请按交叉点个数推断下一张：',
      options: ["A", "B", "C", "D"],
      answer: 3,
      explanation: '用数量规律：四幅图都是横竖直线相交，形状单调、样式没有加减，先数交叉点。第一幅一条横线穿一条竖线，交叉一处；第二幅穿两条，交叉两处；第三幅三处；第四幅四处，每幅多一条竖线、多一个交叉点。按此递增，第五幅应是横线穿五条竖线、交叉五处。四个选项里，仍是四处的没有增加，穿六条的是多了一条，另一幅虽有五条竖线但最右一条止于横线上方、没有穿过去，实际只交叉四处；只有五条竖线全部穿过横线、形成五个交叉点的一幅成立。数交点要看清线段是否真的穿过，碰而不穿不算。',
      tag: "交点数",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M4 25L46 25M25 9L25 41M54 25L96 25M69 9L69 41M81 9L81 41M4 75L46 75M14 59L14 91M25 59L25 91M36 59L36 91M54 75L96 75M61 59L61 91M70 59L70 91M80 59L80 91M89 59L89 91"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M25 50L75 50M34 32L34 68M45 32L45 68M55 32L55 68M66 32L66 68"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M25 50L75 50M31 32L31 68M40 32L40 68M50 32L50 68M60 32L60 68M69 32L69 46"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M25 50L75 50M27 32L27 68M36 32L36 68M45 32L45 68M53 32L53 68M62 32L62 68M71 32L71 68"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M25 50L75 50M31 32L31 68M40 32L40 68M50 32L50 68M60 32L60 68M69 32L69 68"/></svg>'
        ]
      }
    },
    {
      id: "PD-444",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "数量规律",
      stem: '清点小组把圆形与方形标签混排在同一块板上，每板总数一致，两类标签的比例逐板变化。请推出下一板：',
      options: ["A", "B", "C", "D"],
      answer: 1,
      explanation: '用数量规律：四幅图上的标签总数都是四个，只是圆形与方形此消彼长，样式上看不出加减，先按个数数。第一幅没有圆、四方，第二幅一圆三方，第三幅两圆两方，第四幅三圆一方，圆每幅多一个、方每幅少一个，两者之和恒为四。按这个变化，第五幅应是四圆零方，方形全部退场。四个选项里，三圆一方的是停在上一幅，两圆两方的是退回去了，五圆的总数变成五个、破坏了守恒；只有四个全是圆、方形一个不剩的一板符合。此类题先固定总数，再跟踪其中一类是增是减。',
      tag: "此消彼长",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M10 13L18 13 18 21 10 21ZM32 13L40 13 40 21 32 21ZM10 29L18 29 18 37 10 37ZM32 29L40 29 40 37 32 37ZM82 13L90 13 90 21 82 21ZM60 29L68 29 68 37 60 37ZM82 29L90 29 90 37 82 37ZM10 79L18 79 18 87 10 87ZM32 79L40 79 40 87 32 87ZM82 79L90 79 90 87 82 87Z"/><circle cx="64" cy="17" r="4"/><circle cx="14" cy="67" r="4"/><circle cx="36" cy="67" r="4"/><circle cx="64" cy="67" r="4"/><circle cx="86" cy="67" r="4"/><circle cx="64" cy="83" r="4"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M32 55L42 55 42 64 32 64ZM58 55L68 55 68 64 58 64Z"/><circle cx="37" cy="40" r="5"/><circle cx="63" cy="40" r="5"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="37" cy="40" r="5"/><circle cx="63" cy="40" r="5"/><circle cx="37" cy="60" r="5"/><circle cx="63" cy="60" r="5"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="50" cy="35" r="5"/><circle cx="37" cy="46" r="5"/><circle cx="63" cy="46" r="5"/><circle cx="41" cy="63" r="5"/><circle cx="59" cy="63" r="5"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M58 55L68 55 68 64 58 64Z"/><circle cx="37" cy="40" r="5"/><circle cx="63" cy="40" r="5"/><circle cx="37" cy="60" r="5"/></svg>'
        ]
      }
    },
    {
      id: "PD-445",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      tech: "数量规律",
      stem: '勘查员要求用一笔不抬笔地描完下列封条纹样，前四张纹样都能做到。请从选项中挑出同样能一笔描完的一张：',
      options: ["A", "B", "C", "D"],
      answer: 2,
      explanation: '用数量规律里的一笔画：能不能一笔画，只看奇点，即引出奇数条线的端点或交点，奇点为零或二才行，且图形必须连成一块。三角形三个顶点各引出两条线，奇点为零；正方形加一条对角线，只有对角线两端各引出三条线，奇点为二；五角星五个尖各引出两条线、五个交叉处各引出四条线，奇点为零；正方形加一条从中心到上边的线，中心与上边中点各引出三条线，奇点为二。四个选项里，目字有四处交点各引出三条线，田字同样有四处，两个分开的正方形干脆分成两块，都要两笔以上；只有两只共用顶点的三角形合成沙漏状、其余端点都引出两条线，奇点为零，一笔可成。',
      tag: "一笔画",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M25 10L38 38 12 38ZM62 12L88 12 88 38 62 38ZM62 12L88 38M25 58L35 89M42 70L15 89M35 89L8 70M15 89L25 58M8 70L42 70M62 62L88 62 88 88 62 88ZM75 75L75 62"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M35 35L65 35 65 65 35 65ZM35 50L65 50M50 35L50 65"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M35 33L65 33 65 67 35 67ZM35 44L65 44M35 56L65 56"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M31 34L50 50 31 66ZM69 34L50 50 69 66Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M27 32L47 32 47 51 27 51ZM53 49L73 49 73 68 53 68Z"/></svg>'
        ]
      }
    },
    {
      id: "PD-446",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "数量规律",
      stem: '地形图上的一段折线表示堤坝走向，折点逐图增多。请按折点的个数推断下一段：',
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: '用数量规律：四幅图都是一条粗细相同的折线，只是转折的次数在变，样式没有加减关系，先数折点。第一幅一个折点，形如尖角；第二幅两个；第三幅三个；第四幅四个，每幅比前一幅多一个转折。按这个递增，第五幅应有五个折点、六段直边。四个选项里，仍是四个的是没有继续加，只有三个的是退回去了，六个的是多加一个折点；只有五个折点的那一幅数目对得上。数折点时只数方向发生改变的顶点，两端不算折点，斜边与斜边之间的夹角也别漏数。',
      tag: "角数",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M8 36L25 14 42 36M58 36L69 14 81 36 92 14M8 86L17 64 25 86 33 64 42 86M58 86L65 64 72 86 78 64 85 86 92 64"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M31 63L37 37 44 63 50 37 56 63 63 37 69 63"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M31 63L38 37 46 63 54 37 62 63 69 37"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M31 63L40 37 50 63 60 37 69 63"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M31 63L36 37 42 63 47 37 53 63 58 37 64 63 69 37"/></svg>'
        ]
      }
    },
    {
      id: "PD-447",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "数量规律",
      stem: '被撕碎的单据残片散落在同一张衬纸上，每张衬纸上的碎块数逐张增加。请按碎块数推断下一张：',
      options: ["A", "B", "C", "D"],
      answer: 2,
      explanation: '用数量规律：四幅图都是若干互不相连的短折线，图形本身没有变化规律，先数互不相连的块数。第一幅两块，第二幅三块，第三幅四块，第四幅五块，每幅比前一幅多一块。按此递增，下一幅应是六块彼此分开的残片。四个选项里，五块的停在上一幅，七块的是多了一块，另一幅看似摆了六段线条，其中两段共用同一个端点、连成了一块，实际只有五块；只有六块两两分离的一幅成立。数部分数时先看有没有相连，端点相碰、线条相交都算同一块，不能只按线段条数去数。',
      tag: "部分数",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M10 31L10 19 21 19M40 31L40 19 29 19M58 31L58 19 69 19M81 31L81 19 69 19M81 19L92 19 92 31M8 72L8 61 19 61M42 72L42 61 31 61M8 78L19 78 19 89M42 78L31 78 31 89M69 68L69 57 81 57M69 77L69 66 58 66M81 66L92 66 92 77M73 81L62 81 62 92M77 92L77 81 88 81"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M29 54L29 64 38 64M38 64L47 64 47 54M63 36L63 45 54 45M34 37L34 46M63 61L63 69 54 69M45 38L52 38"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M44 41L44 28 56 28M44 52L44 39 31 39M56 39L69 39 69 52M48 56L35 56 35 69M52 69L52 56 65 56"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M26 44L26 31 39 31M56 44L56 31 44 31M61 31L74 31 74 44M39 56L26 56 26 69M44 69L44 56 56 56M74 69L74 56 61 56"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M28 44L28 31 41 31M56 44L56 31 44 31M59 31L72 31 72 44M41 44L28 44 28 56M59 56L59 44 72 44M41 69L41 56 28 56M44 56L56 56 56 69"/></svg>'
        ]
      }
    },
    {
      id: "PD-448",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      tech: "数量规律",
      stem: '清点员把成色不同的两种筹码混装成袋，袋内筹码按同一规矩作价。请按每袋的总作价推断下一袋的装法：',
      options: ["A", "B", "C", "D"],
      answer: 1,
      explanation: '用数量规律里的元素换算：圆与方两类筹码个数此起彼伏，单看其中一类都排不出次序，必须换算成同一单位。设圆作两分、方作一分，第一袋两圆记四分，第二袋一圆三方记五分，第三袋三圆记六分，第四袋一圆五方记七分，总作价依次为四、五、六、七，逐袋加一。按此递增，第五袋应记八分，四圆正好是八分。四个选项里，三圆一方记七分、二圆二方记六分、五圆记十分，都接不上；只有四圆这一袋的作价是八。换算题要先假定一种图形为单位，再检验四幅是否排成等差。',
      tag: "元素换算",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M82 13L90 13 90 20 82 20ZM60 30L68 30 68 37 60 37ZM82 30L90 30 90 37 82 37ZM71 60L79 60 79 68 71 68ZM86 60L93 60 93 68 86 68ZM57 82L64 82 64 90 57 90ZM71 82L79 82 79 90 71 90ZM86 82L93 82 93 90 86 90Z"/><circle cx="16" cy="25" r="4"/><circle cx="34" cy="25" r="4"/><circle cx="64" cy="17" r="4"/><circle cx="13" cy="75" r="4"/><circle cx="25" cy="75" r="4"/><circle cx="37" cy="75" r="4"/><circle cx="60" cy="64" r="4"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="50" cy="35" r="4"/><circle cx="37" cy="46" r="4"/><circle cx="63" cy="46" r="4"/><circle cx="41" cy="63" r="4"/><circle cx="59" cy="63" r="4"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="37" cy="40" r="4"/><circle cx="63" cy="40" r="4"/><circle cx="37" cy="60" r="4"/><circle cx="63" cy="60" r="4"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M59 55L67 55 67 64 59 64Z"/><circle cx="37" cy="40" r="4"/><circle cx="63" cy="40" r="4"/><circle cx="37" cy="60" r="4"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M33 55L41 55 41 64 33 64ZM59 55L67 55 67 64 59 64Z"/><circle cx="37" cy="40" r="4"/><circle cx="63" cy="40" r="4"/></svg>'
        ]
      }
    },
    {
      id: "PD-449",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "属性规律",
      stem: '几枚封泥拓片上的纹样在直边与曲边之间轮换，请按线条的曲直情况推断下一枚：',
      options: ["A", "B", "C", "D"],
      answer: 3,
      explanation: '用属性规律里的曲直性：四幅图的形状各不相同，数量上也数不出稳定增减，按优先级退到属性上看线条。第一幅三角形加折线，全是直线；第二幅两个圆，全是曲线；第三幅一圆一三角，直线曲线都有；第四幅又是方加三角，全是直线。可见曲直状态按直、曲、混合三档循环，第四幅回到全直，第五幅就该全曲。四个选项里，全由直线组成的、曲直混合的都不合这一档，只有两个圆、通体皆曲的一枚对得上。判断曲直要把每一笔都看一遍，只要混进一条直线就不算全曲。',
      tag: "曲直性",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M25 11L31 22 19 22ZM14 32L25 38 36 32M25 81L29 89 21 89ZM68 61L82 61 82 75 68 75ZM75 81L79 89 71 89Z"/><circle cx="75" cy="18" r="8"/><circle cx="75" cy="36" r="5"/><circle cx="25" cy="68" r="8"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M42 33L58 33 58 49 42 49ZM50 57L55 66 45 66Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 57L55 66 45 66Z"/><circle cx="50" cy="41" r="10"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 34L57 46 43 46ZM37 59L50 65 63 59"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="50" cy="41" r="9"/><circle cx="50" cy="62" r="6"/></svg>'
        ]
      }
    },
    {
      id: "PD-450",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      tech: "属性规律",
      stem: '档案袋上的花纹逐张变化，能沿某条直线对折重合的方向越来越多。请按对称轴的条数推断下一张：',
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: '用属性规律里的对称轴：四幅图都是规整的封闭图形，面数都只有一块，边数也排不出次序，先数对称轴。等腰三角形只有一条竖直对称轴；长方形有横竖两条；等边三角形三条；正方形四条，条数依次为一、二、三、四。按此递增，第五幅应有五条对称轴，即正五边形。四个选项里，等腰三角形只有一条、长方形两条、正六边形六条，都接不上；只有正五边形沿五个顶点方向都能对折重合。数轴时要动手试折，别把正多边形误当成只有一条轴。',
      tag: "对称轴数量",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M25 10L13 40 37 40ZM59 16L91 16 91 34 59 34ZM25 59L40 86 10 86ZM62 62L88 62 88 88 62 88Z"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 31L70 45 62 68 38 68 30 45Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M32 39L68 39 68 61 32 61Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 33L36 67 64 67Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 31L68 41 68 61 50 72 32 61 32 41Z"/></svg>'
        ]
      }
    },
    {
      id: "PD-451",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "属性规律",
      stem: '卷宗封面贴着一组窗花，每一张都能绕中心转半圈后与原样完全重合。请从选项中挑出同样具备这一特点的一张：',
      options: ["A", "B", "C", "D"],
      answer: 3,
      explanation: '用属性规律：四幅图形状差别很大，先看数量，边数、面数都排不出次序，转而看属性。把它们各转半圈：平行四边形转后与原样重合，圆加一条过圆心的直线转后也重合，折线转后半段对前半段，正六边形转后完全重合，可见四幅都是中心对称图形。按这个属性去筛选项：等腰三角形转半圈尖朝下，与原样不符；正五边形转后角的位置整体错开；四条边都不等长的四边形转后也对不上；只有平行四边形转半圈后仍是自身。判断中心对称只认转半圈这一个动作，别与轴对称混为一谈。',
      tag: "中心对称",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M14 17L36 12 36 33 14 38ZM61 25L89 25M15 64L35 64 15 86 35 86M75 59L89 67 89 83 75 91 61 83 61 67Z"/><circle cx="75" cy="25" r="14"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 39L63 35 56 65 38 61Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 33L36 67 64 67Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 32L68 45 61 67 39 67 32 45Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M35 46L59 36 65 54 41 64Z"/></svg>'
        ]
      }
    },
    {
      id: "PD-452",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "属性规律",
      stem: '现场封条上的图案一闭一开地交替出现，请按图形的开闭情况推断下一枚：',
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: '用属性规律里的开闭性：四幅图都由两个小图形拼成，数量都是两个、位置也差不多，差别只在有没有缺口。第一幅是一圆一方，四周都封死；第二幅圆是封死的，下方那条折线两端敞开；第三幅三角加方，又是全封闭；第四幅圆仍封闭，旁边折线开口。开、闭逐幅交替，第四幅是开口，第五幅就该回到全封闭。四个选项里，带折线、带缺口的三种都有敞口，只有圆加方块这一种两笔都封死。看开闭只找有没有断口，别被图形的大小和摆放位置干扰。',
      tag: "开闭性",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M19 30L31 30 31 41 19 41ZM66 31L66 39 84 39M25 62L30 71 20 71ZM19 80L31 80 31 91 19 91ZM65 82L75 81 85 89"/><circle cx="25" cy="18" r="8"/><circle cx="75" cy="18" r="8"/><circle cx="75" cy="68" r="8"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M42 34L58 34 58 49 42 49ZM50 57L55 67 45 67Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M39 58L39 66 61 66"/><circle cx="50" cy="41" r="9"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M38 59L50 56 62 66"/><circle cx="50" cy="41" r="9"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M36 39L64 39"/><circle cx="50" cy="61" r="8"/></svg>'
        ]
      }
    },
    {
      id: "PD-453",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "属性规律",
      stem: '三枚封蜡印按固定次序更换样式，有的只能左右对折，有的只能转半圈重合，有的两者皆可。请推断第四枚：',
      options: ["A", "B", "C", "D"],
      answer: 2,
      explanation: '用属性规律里的对称类型：四幅图形状各异，先按属性分类而不是数数。等腰三角形能沿竖直中线对折重合，但没有中心对称；平行四边形转半圈能与自身重合，对折却不行；长方形既有一条以上的对称轴，又能转半圈重合；等腰梯形只能对折。可见三类属性按只轴对称、只中心对称、两者兼具的顺序循环，第四幅回到只轴对称，第五幅就该是只中心对称。四个选项里，等腰梯形只能对折，长方形与圆两者兼具，只有那个转半圈能重合、对折不能的平行四边形符合。',
      tag: "对称类型",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M25 10L13 40 37 40ZM64 18L86 12 86 33 64 39ZM11 66L39 66 39 84 11 84ZM64 90L86 90 81 66 69 66Z"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 39L66 39 66 61 34 61Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="50" cy="50" r="16"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M36 45L58 34 64 55 42 66Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M37 67L63 67 56 39 44 39Z"/></svg>'
        ]
      }
    },
    {
      id: "PD-454",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "属性规律",
      stem: '四张物证照片里，三张在某一属性上彼此一致，另一张正好相反。请从选项中挑出与那三张同类的一张：',
      options: ["A", "B", "C", "D"],
      answer: 1,
      explanation: '用属性规律里的分类思路：既然三张同类、一张相反，就要先找出多数的共同点。逐张看线条，圆加三角、圆加方、圆加一条直线，前三张都是一部分曲、一部分直，属于曲直混合；第四张三角配方，通体都是直的，正是那个例外。多数的属性是曲直混合，选项里凡是全直的、全曲的都与它相反。四个选项中，三角配方、方加折线这两张全是直线，两个圆的那张全是曲线，都不合多数的标准；只有圆加折线那一张既有曲又有直，与那三张同类。分类题先把四张按同一属性排一遍，多数派就是标准。',
      tag: "分类-曲直",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M25 30L30 38 20 38ZM76 19L87 19 87 31 76 31ZM11 75L39 75M75 61L80 69 70 69ZM69 79L81 79 81 91 69 91Z"/><circle cx="25" cy="17" r="7"/><circle cx="69" cy="25" r="7"/><circle cx="25" cy="75" r="13"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 33L55 43 45 43ZM43 55L57 55 57 69 43 69Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M36 56L64 56M36 56L36 66"/><circle cx="50" cy="40" r="8"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M42 33L58 33 58 48 42 48ZM38 59L62 59 62 67"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><circle cx="50" cy="41" r="9"/><circle cx="50" cy="62" r="6"/></svg>'
        ]
      }
    },
    {
      id: "PD-455",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "规律优先级",
      stem: '三张勘查草图都由同样长短的三条线段摆成，线段的角度各不相同。请按交叉处的个数推断下一张：',
      options: ["A", "B", "C", "D"],
      answer: 1,
      explanation: '用规律优先级：三幅图都是三条线段，元素组成相同，按顺序先试位置。可每条线段的倾角依次是三十二度、四十五度、六十度上下，转向并不固定，旋转与平移都对不上；再看样式，图中没有相加减的关系。于是按优先级退到数量，数线段的交叉处：第一幅三条线段互不搭界，交叉零处；第二幅两条交叉、一条独立，交叉一处；第三幅一竖穿两横，交叉两处。递增下去第四幅应有三处交叉。四个选项里，交叉两处、一处、零处的都接不上，三条线段两两相交、围出三处的才是答案。',
      tag: "先位置后数量",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M6 42L14 38M11 51L19 46M16 59L24 55M41 44L54 57M41 57L54 44M57 42L63 48M83 39L83 61M72 45L94 45M72 55L94 55"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 29L50 71M31 41L69 41M31 59L69 59"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M29 50L71 50M39 28L58 71M69 31L51 69"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 39L56 62M34 62L56 39M62 35L73 47"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M31 36L45 28M39 51L53 44M48 66L62 59"/></svg>'
        ]
      }
    },
    {
      id: "PD-456",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      tech: "规律优先级",
      stem: '几块现场的界桩牌都被修成了正多边形，牌面大小一致。请按边数推断下一块应当是什么形状：',
      options: ["A", "B", "C", "D"],
      answer: 2,
      explanation: '用规律优先级：四幅图都是单一的正多边形，先看位置，图形没有移动或转向；再看样式，也没有叠加可谈；接着数面，四幅的封闭区域都只有一块，恒定得不出下一幅。于是退到数量里的边数：三角形三条，正方形四条，正五边形五条，正六边形六条，每幅多一条边。按此递增，第五块应是正七边形。四个选项里，正五边形、正六边形、正八边形的边数都与推算差一或差二，只有七条边的正七边形接得上。面数恒定是一种干扰，遇到整幅图都是单一面，就该换一个量去数。',
      tag: "面数干扰",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M25 8L40 35 10 35ZM75 8L92 26 75 43 58 26ZM25 58L42 71 35 90 15 90 8 71ZM75 58L90 67 90 85 75 93 60 85 60 67Z"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 31L65 37 71 51 65 66 50 72 35 66 29 51 35 37Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 31L70 45 62 68 38 68 30 45Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 31L66 38 70 56 59 70 41 70 30 56 34 38Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 31L68 41 68 61 50 72 32 61 32 41Z"/></svg>'
        ]
      }
    },
    {
      id: "PD-457",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "规律优先级",
      stem: '光盘封套上的圆环被若干条平行弦分割，弦的条数逐张增加。请推断下一张的样式：',
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: '用规律优先级：四幅图的外轮廓都是同一个圆，内部是等距的平行弦，元素组成相同，先试位置。可弦在每幅图里都横平竖直地摆着，没有整体旋转或平移，位置规律不成立；样式上也没有相加减的关系。按顺序退到数量：第一幅一条弦，把圆分成两块；第二幅两条，分成三块；第三幅三条，四块；第四幅四条，五块，弦数与块数同步加一。第五幅就该是五条弦、六块。四个选项里，三条、四条、六条弦的都接不上，只有五条等距平行弦的一幅符合。看到同一个外框里线条增多，先数线条再看它切出几块。',
      tag: "位置干扰",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M8 25L42 25M59 19L91 19M59 31L91 31M11 66L39 66M8 75L42 75M11 84L39 84M64 63L86 63M59 71L91 71M59 79L91 79M64 87L86 87"/><circle cx="25" cy="25" r="17"/><circle cx="75" cy="25" r="17"/><circle cx="25" cy="75" r="17"/><circle cx="75" cy="75" r="17"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M41 33L59 33M33 41L67 41M31 50L69 50M33 59L67 59M41 67L59 67"/><circle cx="50" cy="50" r="19"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 39L66 39M31 50L69 50M34 61L66 61"/><circle cx="50" cy="50" r="19"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M37 36L63 36M31 46L69 46M31 54L69 54M37 64L63 64"/><circle cx="50" cy="50" r="19"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M39 34L61 34M33 40L67 40M31 47L69 47M31 53L69 53M33 60L67 60M39 66L61 66"/><circle cx="50" cy="50" r="19"/></svg>'
        ]
      }
    },
    {
      id: "PD-458",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      tech: "规律优先级",
      stem: '证物柜的锁孔盘由一个外框和框内一圈短刻度组成，外框的边与刻度的数目同时变化。请推断下一个盘面：',
      options: ["A", "B", "C", "D"],
      answer: 3,
      explanation: '用规律优先级：四幅图都由外框和框内短刻度两部分组成，先看位置，两部分都没有转动；再看样式，也没有叠加。按顺序数数量，要内外分开数：外框依次是正三角形、正方形、正五边形、正六边形，边数三、四、五、六；框内短刻度依次一、二、三、四道。两条规律各自递增，那就都往下加一格，下一盘应是正七边形配五道刻度。四个选项里，外框七边而刻度只有四道的、刻度五道而外框只有六边的、外框八边的，各自只满足一半；只有七边配五道刻度的盘面两边都对。',
      tag: "内外双看",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M25 7L41 34 9 34ZM25 16L25 22M75 7L93 25 75 43 57 25ZM75 16L75 22M75 28L75 34M25 57L42 69 36 90 14 90 8 69ZM25 66L25 72M30 75L30 81M20 75L20 81M75 57L91 66 91 84 75 93 59 84 59 66ZM75 66L75 72M81 72L81 78M75 78L75 84M69 72L69 78"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 28L67 37 71 55 59 69 41 69 29 55 33 37ZM50 40L50 46M57 47L57 53M50 54L50 60M43 47L43 53"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 28L69 39 69 61 50 72 31 61 31 39ZM50 40L50 46M57 45L57 51M54 52L54 59M46 52L46 59M43 45L43 51"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 28L65 35 72 50 65 65 50 72 35 65 28 50 35 35ZM50 40L50 46M57 45L57 51M54 52L54 59M46 52L46 59M43 45L43 51"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 28L67 37 71 55 59 69 41 69 29 55 33 37ZM50 40L50 46M57 45L57 51M54 52L54 59M46 52L46 59M43 45L43 51"/></svg>'
        ]
      }
    },
    {
      id: "PD-459",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "规律优先级",
      stem: '勘查记录表的九宫格上有九个格点，一枚红点沿外圈逐点移动。三次记录如图，请推断红点下一次落在哪个格点：',
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: '用规律优先级：四幅图的九宫格、格线、红点大小全都一样，元素完全相同，按顺序第一步就该判断位置，不必去数线数或面数。红点在左上角起步，第二幅到上排中间格点，第三幅到上排右格点，第四幅到中排右格点，走法是沿外圈顺时针一个一个地挪。顺着这个走法，第五幅应落在右下角。四个选项里，落回中排的是往回走，停在正下格点的是跳过了一格；只有右下角那一点接得上。元素完全相同时，先看它怎么动，别被格线、面数这些无关的量带偏。',
      tag: "先看元素",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M11 11L39 11M11 25L39 25M11 39L39 39M11 11L11 39M25 11L25 39M39 11L39 39M7 7L15 7 15 15 7 15ZM61 11L89 11M61 25L89 25M61 39L89 39M61 11L61 39M75 11L75 39M89 11L89 39M71 7L79 7 79 15 71 15ZM11 61L39 61M11 75L39 75M11 89L39 89M11 61L11 89M25 61L25 89M39 61L39 89M35 57L43 57 43 65 35 65ZM61 61L89 61M61 75L89 75M61 89L89 89M61 61L61 89M75 61L75 89M89 61L89 89M85 71L93 71 93 79 85 79Z"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 34L66 34M34 50L66 50M34 66L66 66M34 34L34 66M50 34L50 66M66 34L66 66M61 61L71 61 71 71 61 71Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 34L66 34M34 50L66 50M34 66L66 66M34 34L34 66M50 34L50 66M66 34L66 66M45 45L55 45 55 55 45 55Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 34L66 34M34 50L66 50M34 66L66 66M34 34L34 66M50 34L50 66M66 34L66 66M29 61L39 61 39 71 29 71Z"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M34 34L66 34M34 50L66 50M34 66L66 66M34 34L34 66M50 34L50 66M66 34L66 66M45 61L55 61 55 71 45 71Z"/></svg>'
        ]
      }
    },
    {
      id: "PD-460",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "属性规律",
      stem: '四张封条拓片里，三张的纹样完全闭合、一张留有缺口。请从选项中挑出与那三张同类的一张：',
      options: ["A", "B", "C", "D"],
      answer: 3,
      explanation: '用属性规律里的分类思路：先看这四张的共同点与例外。圆配方、三角配方、两圆并列，三张的每一笔都首尾相接，围出的边界没有断口；第四张下面的折线只画了两段，末端敞开，正是那个例外。多数派的标准是全封闭，选项里凡是带敞口的都不合。四个选项中，缺一边的方框一张、圆配敞口折线的两张，都有断口；只有三角压在一个闭合四边形上的那一张，两笔都封死。分类题先把多数派的标准定下来，再拿选项去卡这个标准。',
      tag: "分类-开闭",
      figures: {
        stem: '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M19 30L31 30 31 41 19 41ZM75 11L80 20 70 20ZM69 30L81 30 81 41 69 41ZM63 64L87 64 87 81"/><circle cx="25" cy="17" r="7"/><circle cx="18" cy="73" r="7"/><circle cx="32" cy="80" r="7"/><circle cx="75" cy="87" r="6"/></svg>',
        options: [
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M36 37L64 37 64 56"/><circle cx="50" cy="64" r="6"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M38 39L62 39 62 66 38 66"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M39 59L39 67 61 67"/><circle cx="50" cy="41" r="9"/></svg>',
          '<svg viewBox="0 0 100 100" width="96" height="96" fill="none" stroke="#c9d6e8" stroke-width="2.5"><path d="M50 33L55 43 45 43ZM37 56L63 56 63 67 37 67Z"/></svg>'
        ]
      }
    }
  ]
});
