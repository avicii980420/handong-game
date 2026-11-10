window.QB_PARTS = window.QB_PARTS || [];
window.QB_PARTS.push({
  owner: 'q4-figure1',
  questions: [
    {
      id: "PD-401",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "位置规律",
      stem: "技术科在查封账本的骑缝处发现一组四格条纹标记，每一格都可能留下一个圆点。前三个标记里圆点的位置在依次变化，请据此推断第四个标记应当画成什么样：",
      options: ["A", "B", "C", "D"],
      answer: 2,
      explanation: "用位置规律：三幅图里格子和分隔线都没有增减，只有圆点在换格，属于元素相同、先看位置的类型。第一幅圆点落在第一格，第二幅在第二格，第三幅在第三格，每往后一幅就向右挪一格。照这个走法，第四幅的圆点应稳稳落在第四格。四个选项里，圆点停在前两格的不符合继续右移，停在第三格的那个与上一幅重复，只有落在最右一格的符合规律。数格子要从左往右依次点，别把边框线误当成一格。",
      tag: "平移",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"15\" y=\"18\" width=\"70\" height=\"18\"/><path d=\"M33 18V36M50 18V36M68 18V36\"/><circle cx=\"24\" cy=\"27\" r=\"4\"/><rect x=\"15\" y=\"44\" width=\"70\" height=\"18\"/><path d=\"M33 44V62M50 44V62M68 44V62\"/><circle cx=\"41\" cy=\"53\" r=\"4\"/><rect x=\"15\" y=\"70\" width=\"70\" height=\"18\"/><path d=\"M33 70V88M50 70V88M68 70V88\"/><circle cx=\"59\" cy=\"79\" r=\"4\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"20\" y=\"40\" width=\"60\" height=\"18\"/><path d=\"M35 40V58M50 40V58M65 40V58\"/><circle cx=\"41\" cy=\"49\" r=\"4\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"20\" y=\"40\" width=\"60\" height=\"18\"/><path d=\"M35 40V58M50 40V58M65 40V58\"/><circle cx=\"24\" cy=\"49\" r=\"4\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"20\" y=\"40\" width=\"60\" height=\"18\"/><path d=\"M35 40V58M50 40V58M65 40V58\"/><circle cx=\"76\" cy=\"49\" r=\"4\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"20\" y=\"40\" width=\"60\" height=\"18\"/><path d=\"M35 40V58M50 40V58M65 40V58\"/><circle cx=\"59\" cy=\"49\" r=\"4\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-402",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "位置规律",
      stem: "门锁内芯的护片上刻着一个折角符号，三幅拓片按固定角度转动。请观察它的转向与每次转过的角度，推断下一幅应当是哪一个：",
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: "用位置规律：三幅图的折角符号形状完全一样，长短两臂的长度也没变，只是整体在转，先看位置。第一幅长臂朝上，第二幅长臂朝右，第三幅长臂朝下，每次绕中心顺时针转九十度，短臂也随之依次朝右、朝下、朝左。因此第四幅应再顺时针转九十度，长臂朝左、短臂朝上。四个选项里，保持原样不动的与第一幅重复，逆时针转的朝向正好相反，转到其他角度的也接不上，只有长臂朝左、折角落在右下的符合推算。判断旋转要盯住长臂，两臂不等长时方向最好认。",
      tag: "旋转",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M8 64L8 36M8 64L31 64\"/><path d=\"M36 41L64 41M36 41L36 64\"/><path d=\"M92 36L92 64M92 36L69 36\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M74 66L26 66M74 66L74 26\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M34 74L34 26M34 74L74 74\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M26 34L74 34M26 34L26 74\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M66 26L66 74M66 26L26 26\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-403",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "位置规律",
      stem: "现场复原图上有一条六格标尺，一枚圆环和一只小三角各占一格。它们按各自方向同时移动，前三次记录如图，请推断第四次记录：",
      options: ["D", "B", "C", "A"],
      answer: 3,
      explanation: "用位置规律：六格标尺和分割线没有变，变的是两个图形各占第几格，先把它们分开跟踪。圆环每次向右挪一格，依次落在第一、二、三格，下一次应到第四格；小三角每次向左挪一格，依次落在第六、五、四格，下一次应到第三格。两者一右一左，是相向而行的反向平移，走到后半程会交叉换位。四个选项里，圆环多走一格、三角没有动、以及两者都停着不动的都不符合，只有圆环进第四格、三角进第三格的这一幅对。两个元素一起动时要分开记，别被它们的相对位置带偏。",
      tag: "反向平移",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M15 12H87V30H15ZM27 12V30M39 12V30M51 12V30M63 12V30M75 12V30\"/><circle cx=\"21\" cy=\"21\" r=\"4\"/><path d=\"M77 24L81 16L85 24Z\"/><path d=\"M15 41H87V59H15ZM27 41V59M39 41V59M51 41V59M63 41V59M75 41V59\"/><circle cx=\"33\" cy=\"50\" r=\"4\"/><path d=\"M65 53L69 45L73 53Z\"/><path d=\"M15 70H87V88H15ZM27 70V88M39 70V88M51 70V88M63 70V88M75 70V88\"/><circle cx=\"45\" cy=\"79\" r=\"4\"/><path d=\"M53 82L57 74L61 82Z\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M19 38H79V62H19ZM29 38V62M39 38V62M49 38V62M59 38V62M69 38V62\"/><circle cx=\"44\" cy=\"50\" r=\"4\"/><path d=\"M50 53L54 45L58 53Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M19 38H79V62H19ZM29 38V62M39 38V62M49 38V62M59 38V62M69 38V62\"/><circle cx=\"64\" cy=\"50\" r=\"4\"/><path d=\"M40 53L44 45L48 53Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M19 38H79V62H19ZM29 38V62M39 38V62M49 38V62M59 38V62M69 38V62\"/><circle cx=\"54\" cy=\"50\" r=\"4\"/><path d=\"M30 53L34 45L38 53Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M19 38H79V62H19ZM29 38V62M39 38V62M49 38V62M59 38V62M69 38V62\"/><circle cx=\"54\" cy=\"50\" r=\"4\"/><path d=\"M40 53L44 45L48 53Z\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-404",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      tech: "位置规律",
      stem: "监控拍下的九宫格键盘上，每次只亮起一个键位。三次亮灯的位置如图，请推断第四次亮灯应当落在哪一格：",
      options: ["C", "B", "A", "D"],
      answer: 2,
      explanation: "用位置规律：先沿九宫格外圈顺时针给八格编号，左上为一、上中为二、右上为三、右中为四、右下为五、下中为六、左下为七、左中为八。三幅图的亮点依次在一号、二号、四号位，第一步走一格，第二步走两格，步长每次加一。照此第三步应走三格，从四号位再走三格到七号位，也就是左下格。四个选项里，亮点停在上中、下中、左中的都不符合步长递增，只有停在左下格的接得上。这类题先把外圈编号固定下来，再算步长，一格一格数最容易偏。",
      tag: "步长递增",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M2 33H32V63H2ZM12 33V63M22 33V63M2 43H32M2 53H32\"/><circle cx=\"7\" cy=\"38\" r=\"3\"/><path d=\"M35 33H65V63H35ZM45 33V63M55 33V63M35 43H65M35 53H65\"/><circle cx=\"50\" cy=\"38\" r=\"3\"/><path d=\"M68 33H98V63H68ZM78 33V63M88 33V63M68 43H98M68 53H98\"/><circle cx=\"93\" cy=\"48\" r=\"3\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M19 19H81V81H19ZM40 19V81M60 19V81M19 40H81M19 60H81\"/><circle cx=\"29\" cy=\"50\" r=\"7\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M19 19H81V81H19ZM40 19V81M60 19V81M19 40H81M19 60H81\"/><circle cx=\"50\" cy=\"71\" r=\"7\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M19 19H81V81H19ZM40 19V81M60 19V81M19 40H81M19 60H81\"/><circle cx=\"29\" cy=\"71\" r=\"7\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M19 19H81V81H19ZM40 19V81M60 19V81M19 40H81M19 60H81\"/><circle cx=\"71\" cy=\"29\" r=\"7\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-405",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "位置规律",
      stem: "一枚刻着折线符号的铅封连做三次处理，三幅拓片按固定方式排成一列。请观察每幅之间发生了什么变化，推断第四幅拓片：",
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: "用位置规律：三幅图线条一模一样，只是朝向不同，先分清是转还是翻。第一幅到第二幅，竖脊从左边跑到右边，长臂仍在高处，是沿竖直轴左右翻面；第二幅到第三幅，竖脊还在右边，长臂却落到了下方，是沿水平轴上下翻面。两次翻面一横一竖交替进行，所以第三幅到第四幅应再沿竖直轴左右翻一次：竖脊回到左边，长臂仍在下方、短臂居中偏上。四个选项里，与第一幅完全相同的、只翻了竖直轴的、以及转了一百八十度的都不符合，只有一个竖脊在左且长臂在下。",
      tag: "翻转",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M2 24L2 76M2 24L32 24M2 48L24 48\"/><path d=\"M65 24L65 76M65 24L35 24M65 48L43 48\"/><path d=\"M98 76L98 24M98 76L68 76M98 52L76 52\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M28 89L28 11M28 89L73 89M28 53L61 53\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M28 11L28 89M28 11L73 11M28 47L61 47\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M73 11L73 89M73 11L28 11M73 47L40 47\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M73 89L73 11M73 89L28 89M73 53L40 53\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-406",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "规律优先级",
      stem: "六边形的每个顶点都是一个泊位，两枚不同形状的筹码贴着顶点同时顺时针移动。前三次记录如图，请推断第四次记录：",
      options: ["D", "B", "C", "A"],
      answer: 3,
      explanation: "用规律优先级：三幅图元素构成完全相同，都是同一个六边形轨道加同样的两枚筹码，所以先按元素相同试位置，数量与样式不必考虑。再分开跟踪：圆形筹码每次顺时针走一个顶点，依次一号、二号、三号，第四幅应到四号；叉形筹码每次顺时针走两个顶点，依次三号、五号、一号，第四幅应到三号。四个选项里，圆形多走一格或少走一格、叉形停错顶点的都不符合，只有一个两枚筹码同时落在四号与三号顶点上。两种速度务必分开记，混在一起数必然乱。",
      tag: "双元素变速",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M17 37L28 44L28 57L17 63L6 57L6 44Z\"/><circle cx=\"17\" cy=\"37\" r=\"3\"/><path d=\"M25 53L31 60M25 60L31 53\"/><path d=\"M50 37L61 44L61 57L50 63L39 57L39 44Z\"/><circle cx=\"61\" cy=\"44\" r=\"3\"/><path d=\"M36 53L42 60M36 60L42 53\"/><path d=\"M83 37L94 44L94 57L83 63L72 57L72 44Z\"/><circle cx=\"94\" cy=\"57\" r=\"3\"/><path d=\"M80 34L86 40M80 40L86 34\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 20L76 35L76 65L50 80L24 65L24 35Z\"/><circle cx=\"50\" cy=\"80\" r=\"6\"/><path d=\"M45 15L56 26M45 26L56 15\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 20L76 35L76 65L50 80L24 65L24 35Z\"/><circle cx=\"24\" cy=\"65\" r=\"6\"/><path d=\"M70 60L81 71M70 71L81 60\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 20L76 35L76 65L50 80L24 65L24 35Z\"/><circle cx=\"50\" cy=\"80\" r=\"6\"/><path d=\"M45 75L56 86M45 86L56 75\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 20L76 35L76 65L50 80L24 65L24 35Z\"/><circle cx=\"50\" cy=\"80\" r=\"6\"/><path d=\"M70 60L81 71M70 71L81 60\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-407",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "位置规律",
      stem: "一张方形门牌的边框内侧留着一个小圆点，圆点沿着四条边依次换位。前三次的位置已经记录，请推断第四次圆点所在的位置：",
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: "用位置规律：方框本身没有变，只有一个圆点在换位置。第一幅圆点贴近上边，第二幅换到右边，第三幅换到下边，走的是顺时针方向，每次换一条边，并且始终落在边的中点附近。所以第四幅应换到左边。四个选项里，仍在上边、仍在右边的都不符合继续顺时针，停在方框右下角上的那个也不对，因为圆点只走边的中点，不会跑到角上。看这类题先定绕行方向，再确认它停在中点还是顶角，两个细节都对上才不会被干扰项骗。",
      tag: "顺时针换边",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"4\" y=\"37\" width=\"26\" height=\"26\"/><circle cx=\"17\" cy=\"42\" r=\"4\"/><rect x=\"37\" y=\"37\" width=\"26\" height=\"26\"/><circle cx=\"58\" cy=\"50\" r=\"4\"/><rect x=\"70\" y=\"37\" width=\"26\" height=\"26\"/><circle cx=\"83\" cy=\"58\" r=\"4\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"22\" y=\"22\" width=\"56\" height=\"56\"/><circle cx=\"33\" cy=\"50\" r=\"8\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"22\" y=\"22\" width=\"56\" height=\"56\"/><circle cx=\"50\" cy=\"33\" r=\"8\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"22\" y=\"22\" width=\"56\" height=\"56\"/><circle cx=\"50\" cy=\"67\" r=\"8\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"22\" y=\"22\" width=\"56\" height=\"56\"/><circle cx=\"68\" cy=\"68\" r=\"5\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-408",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "样式规律",
      stem: "一块九宫格式的丝织残片原本绣着三种花样，如今有一格已经破损。请根据残片上花样的排布，判断破损的一格原来绣的是什么：",
      options: ["D", "B", "C", "A"],
      answer: 3,
      explanation: "用样式规律：先按行列看花样分布。第一排依次是圆、方、三角，第二排是三角、圆、方，第三排前两格是方、三角，同一排三种花样各出现一次，所以第三排缺的是圆。再竖着核对，第三列已有三角和方，同样缺圆，两路结果一致。因此破损格应补回圆形花样。四个选项里，方形和三角在第三排已经用过，菱形在整幅残片上从未出现，都不符合；只有圆形能同时补齐这一排和这一列。遍历类题目先看行、再看列，两个方向都对上才能确认。",
      tag: "遍历",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M20 20H80V80H20ZM40 20V80M60 20V80M20 40H80M20 60H80\"/><circle cx=\"30\" cy=\"30\" r=\"8\"/><rect x=\"42\" y=\"22\" width=\"16\" height=\"16\"/><path d=\"M70 21L78 35L62 35Z\"/><path d=\"M30 41L38 55L22 55Z\"/><circle cx=\"50\" cy=\"50\" r=\"8\"/><rect x=\"62\" y=\"42\" width=\"16\" height=\"16\"/><rect x=\"22\" y=\"62\" width=\"16\" height=\"16\"/><path d=\"M50 61L58 75L42 75Z\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 39L61 50L50 61L39 50Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"39\" y=\"39\" width=\"22\" height=\"22\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 38L60 56L40 56Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"50\" cy=\"50\" r=\"11\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-409",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "样式规律",
      stem: "两行图样按同一条叠合规则生成：每行第三个图形都由前两个图形叠合后重新取舍线条而成。上排已给出完整示例，请补出下排的问号处：",
      options: ["A", "B", "C", "D"],
      answer: 1,
      explanation: "用样式规律：两行图形都由横、竖、斜几种短线拼成，元素相似而不相同，先试加减同异。看上排，第一个图有上横线、斜线和左竖线，第二个图有同位置的斜线、左竖线再加下横线，叠加后斜线与左竖线重合被删掉，剩下上横线与下横线，正是上排第三个图，规则得到验证。下排第一个图有上横线、斜线和右竖线，第二个图有斜线和下横线，删掉重合的斜线后，应留下上横线、右竖线和下横线三条。四个选项里，保留了斜线的、少一条下横线的、以及只剩上横线加下横线的都不对，最后这个恰好是上排的结果，属于照搬示例的陷阱。",
      tag: "去同存异",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M8 20H30V42H8ZM40 20H62V42H40ZM72 20H94V42H72ZM8 62H30V84H8ZM40 62H62V84H40ZM72 62H94V84H72Z\"/><path d=\"M12 26L26 26M12 36L26 26M12 26L12 36\"/><path d=\"M44 36L58 26M44 26L44 36M44 36L58 36\"/><path d=\"M76 26L90 26M76 36L90 36\"/><path d=\"M12 68L26 68M12 78L26 68M26 68L26 78\"/><path d=\"M44 78L58 68M44 78L58 78\"/><path d=\"M76 68L90 68M90 68L90 78M76 78L90 78\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M32 32H68V68H32Z\"/><path d=\"M40 43L60 43M40 57L60 57M40 57L60 43\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M32 32H68V68H32Z\"/><path d=\"M40 43L60 43M60 43L60 57M40 57L60 57\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M32 32H68V68H32Z\"/><path d=\"M40 43L60 43M60 43L60 57\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M32 32H68V68H32Z\"/><path d=\"M40 43L60 43M40 57L60 57\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-410",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "样式规律",
      stem: "档案袋封口的两道压纹可以叠印，叠印后线条会按同一规则取舍。上排是完整的示例，请按同样办法补出下排问号处：",
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: "用样式规律：先看上排，第一个图由上横线、中横线、左竖线组成，第二个图由中横线、左竖线、下横线组成，两图重合的正是中横线与左竖线，保留下来恰好是上排第三个图，说明规则是去异存同。下排第一个图有上横线、中横线和斜线，第二个图有中横线、斜线和右竖线，重合的是中横线与斜线，所以问号处只保留这两条。四个选项里，只剩上横线加右竖线的、多留一条上横线的、以及只剩一条中横线的都不符合；只剩一条中横线的那个漏掉了同样重合的斜线，属于数漏。叠加前把两图线条逐条对上，才能不漏不重。",
      tag: "去异存同",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M8 20H30V42H8ZM40 20H62V42H40ZM72 20H94V42H72ZM8 62H30V84H8ZM40 62H62V84H40ZM72 62H94V84H72Z\"/><path d=\"M12 26L26 26M12 31L26 31M12 26L12 36\"/><path d=\"M44 31L58 31M44 26L44 36M44 36L58 36\"/><path d=\"M76 31L90 31M76 26L76 36\"/><path d=\"M12 68L26 68M12 73L26 73M12 78L26 68\"/><path d=\"M44 73L58 73M44 78L58 68M58 68L58 78\"/><path d=\"M76 73L90 73M76 78L90 68\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M32 32H68V68H32Z\"/><path d=\"M40 50L60 50M40 57L60 43\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M32 32H68V68H32Z\"/><path d=\"M40 43L60 43M60 43L60 57\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M32 32H68V68H32Z\"/><path d=\"M40 50L60 50M40 57L60 43M40 43L60 43\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M32 32H68V68H32Z\"/><path d=\"M40 50L60 50\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-411",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "样式规律",
      stem: "四枚符号章要在一条横带上轮换占位，每天换一次位置，前三天的排列如图。请推断第四天横带上的排列：",
      options: ["D", "B", "C", "A"],
      answer: 3,
      explanation: "用样式规律：三幅图的符号种类完全一样，只是占位在变，属于元素相同的轮换，先数位置。比较相邻两幅，圆形从最左挪到第二位，方形从第二位挪到第三位，三角形挪到最右，最右的菱形绕回最左，也就是整体向右挪一格、末尾绕回开头。照此第四幅应再右移一格：方形到最左，三角形到第二位，菱形到第三位，圆形绕到最右。四个选项里，只是对调了相邻两枚符号、或把某一对符号互换的，都不符合整体轮换；只有一个的排列与推算完全一致。判断轮换先盯住一枚符号看它挪了几位，再验证其余。",
      tag: "遍历",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"20\" cy=\"22\" r=\"6\"/><rect x=\"34\" y=\"16\" width=\"12\" height=\"12\"/><path d=\"M60 16L65 26L55 26Z\"/><path d=\"M80 15L87 22L80 29L73 22Z\"/><path d=\"M20 43L27 50L20 57L13 50Z\"/><circle cx=\"40\" cy=\"50\" r=\"6\"/><rect x=\"54\" y=\"44\" width=\"12\" height=\"12\"/><path d=\"M80 44L85 54L75 54Z\"/><path d=\"M20 72L25 82L15 82Z\"/><path d=\"M40 71L47 78L40 85L33 78Z\"/><circle cx=\"60\" cy=\"78\" r=\"6\"/><rect x=\"74\" y=\"72\" width=\"12\" height=\"12\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"14\" y=\"44\" width=\"12\" height=\"12\"/><path d=\"M40 44L45 54L35 54Z\"/><circle cx=\"60\" cy=\"50\" r=\"6\"/><path d=\"M80 43L87 50L80 57L73 50Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"14\" y=\"44\" width=\"12\" height=\"12\"/><path d=\"M40 43L47 50L40 57L33 50Z\"/><path d=\"M60 44L65 54L55 54Z\"/><circle cx=\"80\" cy=\"50\" r=\"6\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M20 44L25 54L15 54Z\"/><rect x=\"34\" y=\"44\" width=\"12\" height=\"12\"/><path d=\"M60 43L67 50L60 57L53 50Z\"/><circle cx=\"80\" cy=\"50\" r=\"6\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"14\" y=\"44\" width=\"12\" height=\"12\"/><path d=\"M40 44L45 54L35 54Z\"/><path d=\"M60 43L67 50L60 57L53 50Z\"/><circle cx=\"80\" cy=\"50\" r=\"6\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-412",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      tech: "规律优先级",
      stem: "上排三图完整演示了一条叠合规则，下排两图要按同一条规则补出第三图。请补出问号处：",
      options: ["C", "B", "A", "D"],
      answer: 2,
      explanation: "用规律优先级：两组图形都由横、竖、斜几种短线拼成，元素相似而不相同，位置规律先排除，按相似看样式试加减同异。上排第一个图有上横线、斜线和左竖线，第二个图有上横线、斜线和下横线，重合的上横线与斜线被删掉，剩下左竖线和下横线，正是上排第三图；若按去异存同理解，第三图应当只剩上横线加斜线，与示例不符，规则就此锁定为去同存异。下排除去重合的右竖线与斜线后，应剩中横线和上横线。四个选项里，直接照搬重合部分的、只留一条中横线的、多带一条斜线的都不符合。",
      tag: "去同存异",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M8 20H30V42H8ZM40 20H62V42H40ZM72 20H94V42H72ZM8 62H30V84H8ZM40 62H62V84H40ZM72 62H94V84H72Z\"/><path d=\"M12 26L26 26M12 36L26 26M12 26L12 36\"/><path d=\"M44 26L58 26M44 36L58 26M44 36L58 36\"/><path d=\"M76 26L76 36M76 36L90 36\"/><path d=\"M26 68L26 78M12 68L26 78M12 73L26 73\"/><path d=\"M58 68L58 78M44 68L58 78M44 68L58 68\"/><path d=\"M76 73L90 73M76 68L90 68\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M32 32H68V68H32Z\"/><path d=\"M40 50L60 50\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M32 32H68V68H32Z\"/><path d=\"M60 43L60 57M40 43L60 57\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M32 32H68V68H32Z\"/><path d=\"M40 43L60 43M40 50L60 50\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M32 32H68V68H32Z\"/><path d=\"M40 43L60 43M40 50L60 50M40 43L60 57\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-413",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "数量规律",
      stem: "三张圆形滤纸被直线划开。请观察每张被划出的小块数如何变化，推断第四张该处理成哪一项：",
      options: ["A", "C", "B", "D"],
      answer: 2,
      explanation: "用数量规律：先数封闭区域。第一张圆里没有划线，整体算一块；第二张中间一条直径，被分成两块；第三张两条横线，被分成三块。块数依次为一、二、三，每次多一块，所以第四张应被分成四块，也就是要画三条横线。四个选项里，分成两块、三块、五块的都不符合，只有三条横线把圆分成四块的那一个对。数块数只数被线围起来的整块，不要把线条本身或线的端点算进去；划线是平行还是交叉，也会改变块数，看清位置再数。",
      tag: "面数",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"17\" cy=\"50\" r=\"15\"/><circle cx=\"50\" cy=\"50\" r=\"15\"/><path d=\"M35 50H65\"/><circle cx=\"83\" cy=\"50\" r=\"15\"/><path d=\"M69 45H97M69 55H97\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"50\" cy=\"50\" r=\"28\"/><path d=\"M23 44H77M23 56H77\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"50\" cy=\"50\" r=\"28\"/><path d=\"M26 35H74M22 45H78M22 55H78M26 65H74\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"50\" cy=\"50\" r=\"28\"/><path d=\"M25 38H75M22 50H78M25 62H75\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"50\" cy=\"50\" r=\"28\"/><path d=\"M22 50H78\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-414",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "数量规律",
      stem: "现场散落的碎片被逐一登记，每张登记图上把碎片分开摆放。请观察前三张图的碎片数目，推断第四张登记图上应有几块碎片：",
      options: ["D", "B", "C", "A"],
      answer: 3,
      explanation: "用数量规律：先数每幅图里互不相连的独立图形有几个。第一幅只有一整块，第二幅分成两块，第三幅分成三块，块数每次加一，所以第四幅应当是四块互不相连的图形。四个选项里，连成一整块的、只有两块的、以及分成五块的都不符合，只有恰好四块的那一个对。数的时候看线条是否相接：两块贴得很近但只要没有连上，仍算两块；形状、大小各不相同不影响结果，别按形状去凑数。",
      tag: "部分数",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M17 38L28 46L24 60L10 60L6 46Z\"/><path d=\"M41 42L48 54L34 54Z\"/><circle cx=\"58\" cy=\"50\" r=\"7\"/><circle cx=\"74\" cy=\"38\" r=\"6\"/><rect x=\"84\" y=\"35\" width=\"11\" height=\"11\"/><path d=\"M80 56L86 67L74 67Z\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"32\" cy=\"50\" r=\"12\"/><rect x=\"58\" y=\"40\" width=\"20\" height=\"20\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"28\" cy=\"50\" r=\"10\"/><rect x=\"48\" y=\"41\" width=\"18\" height=\"18\"/><path d=\"M78 40L87 55L69 55Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"22\" cy=\"30\" r=\"7\"/><circle cx=\"50\" cy=\"28\" r=\"7\"/><circle cx=\"78\" cy=\"30\" r=\"7\"/><rect x=\"27\" y=\"59\" width=\"14\" height=\"14\"/><path d=\"M66 58L73 70L59 70Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"30\" cy=\"32\" r=\"8\"/><rect x=\"61\" y=\"25\" width=\"15\" height=\"15\"/><path d=\"M32 59L40 73L24 73Z\"/><path d=\"M66 59L75 68L66 77L57 68Z\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-415",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "数量规律",
      stem: "勘验图上每一格都摆着若干小标记。请观察前三格的标记构成，推断下一格应当由几种不同的形状组成：",
      options: ["A", "B", "C", "D"],
      answer: 1,
      explanation: "用数量规律中的素：先分类再计数，不能只数总数。第一格只有圆和三角两种形状，第二格多了方形共三种，第三格又多了菱形共四种，种类数每次加一，所以下一格应当出现五种不同形状。四个选项里，只有三种或四种形状的都不够；有一项虽然摆了六个标记，但形状仍然只有四种，属于总数够了、种类不够的陷阱。数种类时把相同形状归成一类，同一个形状出现两次只算一种，先归类再报数。",
      tag: "元素种类",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"20\" cy=\"22\" r=\"7\"/><circle cx=\"50\" cy=\"22\" r=\"7\"/><path d=\"M80 14L87 26L73 26Z\"/><circle cx=\"14\" cy=\"50\" r=\"7\"/><circle cx=\"38\" cy=\"50\" r=\"7\"/><path d=\"M62 42L69 54L55 54Z\"/><rect x=\"80\" y=\"44\" width=\"12\" height=\"12\"/><circle cx=\"12\" cy=\"78\" r=\"7\"/><circle cx=\"31\" cy=\"78\" r=\"7\"/><path d=\"M50 70L57 82L43 82Z\"/><rect x=\"63\" y=\"72\" width=\"12\" height=\"12\"/><path d=\"M88 71L95 78L88 85L81 78Z\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"22\" cy=\"34\" r=\"7\"/><path d=\"M50 26L57 38L43 38Z\"/><rect x=\"72\" y=\"28\" width=\"12\" height=\"12\"/><path d=\"M36 57L43 64L36 71L29 64Z\"/><circle cx=\"64\" cy=\"64\" r=\"7\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"22\" cy=\"34\" r=\"7\"/><circle cx=\"50\" cy=\"34\" r=\"7\"/><path d=\"M78 26L85 38L71 38Z\"/><rect x=\"16\" y=\"58\" width=\"12\" height=\"12\"/><path d=\"M50 57L57 64L50 71L43 64Z\"/><path d=\"M72 64H84M78 58V70\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"22\" cy=\"34\" r=\"7\"/><path d=\"M50 26L57 38L43 38Z\"/><rect x=\"72\" y=\"28\" width=\"12\" height=\"12\"/><path d=\"M22 57L29 64L22 71L15 64Z\"/><circle cx=\"50\" cy=\"64\" r=\"7\"/><rect x=\"72\" y=\"58\" width=\"12\" height=\"12\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"15\" cy=\"34\" r=\"7\"/><circle cx=\"38\" cy=\"34\" r=\"7\"/><path d=\"M61 26L68 38L54 38Z\"/><rect x=\"78\" y=\"28\" width=\"12\" height=\"12\"/><path d=\"M28 57L35 64L28 71L21 64Z\"/><path d=\"M46 64H58M52 58V70\"/><circle cx=\"76\" cy=\"64\" r=\"7\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-416",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "数量规律",
      stem: "三块证物板上的隔线画法各不相同。请从选项中挑出一块与前三个具有相同特点的板子：",
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: "用数量规律：先数每块板被隔出的小格。第一块正方形里两条竖线，隔出三格；第二块三角形里两条从顶点出发的线，也隔出三格；第三块圆里两条弦，还是三格。三幅图的外形、线条数目都不同，共同点在于封闭区域恒为三块。四个选项中，被隔成两格、四格、五格的都不符合，只有恰好三格的那一块与前三个一致。这类数目不变的题，要把每幅图都数一遍再下结论，只看第一幅就套规律最容易错。",
      tag: "面数恒定",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"4\" y=\"37\" width=\"26\" height=\"26\"/><path d=\"M13 37V63M22 37V63\"/><path d=\"M50 34L64 66L36 66Z\"/><path d=\"M50 34L45 66M50 34L55 66\"/><circle cx=\"83\" cy=\"50\" r=\"15\"/><path d=\"M69 44H97M69 56H97\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"23\" y=\"23\" width=\"54\" height=\"54\"/><path d=\"M23 42H77M23 58H77\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"50\" cy=\"50\" r=\"27\"/><path d=\"M23 50H77\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"23\" y=\"23\" width=\"54\" height=\"54\"/><path d=\"M30 23V77M43 23V77M57 23V77\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"23\" y=\"23\" width=\"54\" height=\"54\"/><path d=\"M28 23V77M38 23V77M47 23V77M57 23V77\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-417",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "数量规律",
      stem: "三张草图的拼法各异。请观察前三张图用到的线段，从四个选项中挑出一张与它们特点相同的：",
      options: ["A", "B", "C", "D"],
      answer: 1,
      explanation: "用数量规律：先数直线段。第一张是六边形，六条边；第二张是正方形加两条内部竖线，四加二也是六条；第三张是两个三角形，三加三仍是六条。三张图围出的区域数分别是一、三、二，并不一致，可见真正稳定的是线段条数。四个选项中，七边形的七条边、六边形加线的七条、正方形加三条线的七条都不符合，只有五边形加一条内部线正好六条。数线段时把每条直线算一条，一条直线被交点分成两段也仍按原来的一条计。",
      tag: "线条数",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M17 37L28 44L28 57L17 63L6 57L6 44Z\"/><rect x=\"38\" y=\"38\" width=\"24\" height=\"24\"/><path d=\"M44 38V62M56 38V62\"/><path d=\"M74 34L81 46L67 46Z\"/><path d=\"M90 50L97 62L83 62Z\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 23L71 33L76 56L62 74L38 74L24 56L29 33Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 23L76 42L66 72L34 72L24 42Z\"/><path d=\"M50 23L50 50\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 23L73 37L73 64L50 77L27 64L27 37Z\"/><path d=\"M50 50H73\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"23\" y=\"23\" width=\"54\" height=\"54\"/><path d=\"M30 23V77M43 23V77M57 23V77\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-418",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "规律优先级",
      stem: "记录图上的多边形与圆总是搭配出现，多边形的形状一幅一变。请观察前三幅的搭配，推断第四幅：",
      options: ["D", "B", "C", "A"],
      answer: 3,
      explanation: "用规律优先级：四幅图元素构成不同，多边形边数在变，所以跳过位置与样式，直接数数量。每幅都额外带一个圆，圆的个数恒为一，无法用来区分选项；真正在变的是多边形边数，依次三、四、五，每次加一，下一幅应为六条边。据此第四幅应是六边形配一个圆。四个选项里，有六边形却不带圆的、七条边带圆的、五条边带圆的都不符合；只按边数挑会剩下两个候选，必须把边数递增与圆恒为一个同时核对，才能定下来。",
      tag: "边数递增",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M15 29L26 49L4 49Z\"/><circle cx=\"25\" cy=\"68\" r=\"6\"/><path d=\"M48 29L61 42L48 55L35 42Z\"/><circle cx=\"58\" cy=\"68\" r=\"6\"/><path d=\"M81 29L93 38L89 53L73 53L69 38Z\"/><circle cx=\"91\" cy=\"68\" r=\"6\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M46 22L69 39L60 65L32 65L23 39Z\"/><circle cx=\"80\" cy=\"76\" r=\"8\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M46 22L67 34L67 58L46 70L25 58L25 34Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M46 22L65 31L69 51L56 68L36 68L23 51L27 31Z\"/><circle cx=\"80\" cy=\"76\" r=\"8\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M46 22L67 34L67 58L46 70L25 58L25 34Z\"/><circle cx=\"80\" cy=\"76\" r=\"8\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-419",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "数量规律",
      stem: "追踪图上的三个图案都能一笔画成（笔尖不离纸、每条线只走一次）。请从选项中挑出一个同样具备这一特点的图案：",
      options: ["A", "B", "C", "D"],
      answer: 1,
      explanation: "用数量规律里的一笔画：判断能否一笔画，数奇点（引出奇数条线的端点或交点），奇点为0个或2个就能一笔画成。三角形三个顶点各引出两条线，奇点为零；五角星每个顶点也是两条线，奇点为零；正方形加一条对角线，只有对角线两端各引出三条线，奇点为2，同样可以一笔画。四个选项里，田字四个边中点各引出三条线，目字也有四个这样的交点，都要两笔；两个分开的正方形各自要一笔，合起来至少两笔；只有日字中间两个交点各引出三条线，奇点为2，可以一笔画成。",
      tag: "一笔画",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M17 37L28 57L6 57Z\"/><path d=\"M50 35L59 62L36 45L64 45L41 62Z\"/><rect x=\"71\" y=\"38\" width=\"24\" height=\"24\"/><path d=\"M71 62L95 38\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"24\" y=\"24\" width=\"52\" height=\"52\"/><path d=\"M24 50H76M50 24V76\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"24\" y=\"24\" width=\"52\" height=\"52\"/><path d=\"M24 50H76\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"24\" y=\"24\" width=\"52\" height=\"52\"/><path d=\"M24 41H76M24 59H76\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"13\" y=\"35\" width=\"30\" height=\"30\"/><rect x=\"57\" y=\"35\" width=\"30\" height=\"30\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-420",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      tech: "数量规律",
      stem: "证物袋里混装着两种标记，每袋一共四枚。三袋的搭配一次比一次不同，请推断第四袋应当装什么：",
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: "用数量规律：把两种标记分开数。第一袋一枚圆、三枚三角；第二袋两枚圆、两枚三角；第三袋三枚圆、一枚三角。圆每次加一枚，三角每次减一枚，两者总数始终是四枚。照此第四袋应是四枚圆、零枚三角。四个选项里，三枚圆的少了一枚；四枚圆加一枚三角的总数变成五枚，与每袋四枚对不上；五枚圆的同样超过总数；只有四枚圆的那一袋同时满足圆递增到四、总数仍为四。两种元素此消彼长时，既要看各自的数量，也要核对总数。",
      tag: "数量此消彼长",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"20\" cy=\"22\" r=\"7\"/><path d=\"M40 13L48 27L32 27Z\"/><path d=\"M60 13L68 27L52 27Z\"/><path d=\"M80 13L88 27L72 27Z\"/><circle cx=\"20\" cy=\"50\" r=\"7\"/><circle cx=\"40\" cy=\"50\" r=\"7\"/><path d=\"M60 41L68 55L52 55Z\"/><path d=\"M80 41L88 55L72 55Z\"/><circle cx=\"20\" cy=\"78\" r=\"7\"/><circle cx=\"40\" cy=\"78\" r=\"7\"/><circle cx=\"60\" cy=\"78\" r=\"7\"/><path d=\"M80 69L88 83L72 83Z\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"20\" cy=\"50\" r=\"8\"/><circle cx=\"40\" cy=\"50\" r=\"8\"/><circle cx=\"60\" cy=\"50\" r=\"8\"/><circle cx=\"80\" cy=\"50\" r=\"8\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"32\" cy=\"50\" r=\"7\"/><circle cx=\"50\" cy=\"50\" r=\"7\"/><circle cx=\"68\" cy=\"50\" r=\"7\"/><circle cx=\"86\" cy=\"50\" r=\"7\"/><path d=\"M14 42L21 54L7 54Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"26\" cy=\"50\" r=\"8\"/><circle cx=\"50\" cy=\"50\" r=\"8\"/><circle cx=\"74\" cy=\"50\" r=\"8\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"14\" cy=\"50\" r=\"7\"/><circle cx=\"32\" cy=\"50\" r=\"7\"/><circle cx=\"50\" cy=\"50\" r=\"7\"/><circle cx=\"68\" cy=\"50\" r=\"7\"/><circle cx=\"86\" cy=\"50\" r=\"7\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-421",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      tech: "数量规律",
      stem: "三张工牌上的圆点按行排列。请观察前三张的排法，推断第四张工牌上圆点该怎么排：",
      options: ["A", "B", "C", "D"],
      answer: 1,
      explanation: "用数量规律：先数圆点总数。第一张一枚，第二张排成上一、下二共三枚，第三张排成一、二、三共六枚。相邻两幅的增量分别是二和三，每次比上一次多加一个，所以第四幅应在一、二、三之后再添一排四个，共十枚。四个选项里，八枚的、九枚的都不够，十二枚的又多于十枚；只有一个排成一、二、三、四四层的正好十枚。数这种堆叠图形时按层加，别一个个点，容易漏掉下一层的第一个。",
      tag: "个数递增",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"17\" cy=\"50\" r=\"4\"/><circle cx=\"50\" cy=\"42\" r=\"4\"/><circle cx=\"44\" cy=\"54\" r=\"4\"/><circle cx=\"56\" cy=\"54\" r=\"4\"/><circle cx=\"83\" cy=\"32\" r=\"4\"/><circle cx=\"78\" cy=\"43\" r=\"4\"/><circle cx=\"88\" cy=\"43\" r=\"4\"/><circle cx=\"73\" cy=\"54\" r=\"4\"/><circle cx=\"83\" cy=\"54\" r=\"4\"/><circle cx=\"93\" cy=\"54\" r=\"4\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"50\" cy=\"24\" r=\"5\"/><circle cx=\"44\" cy=\"38\" r=\"5\"/><circle cx=\"57\" cy=\"38\" r=\"5\"/><circle cx=\"37\" cy=\"52\" r=\"5\"/><circle cx=\"50\" cy=\"52\" r=\"5\"/><circle cx=\"63\" cy=\"52\" r=\"5\"/><circle cx=\"44\" cy=\"66\" r=\"5\"/><circle cx=\"57\" cy=\"66\" r=\"5\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"50\" cy=\"24\" r=\"5\"/><circle cx=\"44\" cy=\"38\" r=\"5\"/><circle cx=\"57\" cy=\"38\" r=\"5\"/><circle cx=\"37\" cy=\"52\" r=\"5\"/><circle cx=\"50\" cy=\"52\" r=\"5\"/><circle cx=\"63\" cy=\"52\" r=\"5\"/><circle cx=\"31\" cy=\"66\" r=\"5\"/><circle cx=\"44\" cy=\"66\" r=\"5\"/><circle cx=\"57\" cy=\"66\" r=\"5\"/><circle cx=\"70\" cy=\"66\" r=\"5\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"44\" cy=\"24\" r=\"5\"/><circle cx=\"57\" cy=\"24\" r=\"5\"/><circle cx=\"37\" cy=\"38\" r=\"5\"/><circle cx=\"50\" cy=\"38\" r=\"5\"/><circle cx=\"63\" cy=\"38\" r=\"5\"/><circle cx=\"31\" cy=\"52\" r=\"5\"/><circle cx=\"44\" cy=\"52\" r=\"5\"/><circle cx=\"57\" cy=\"52\" r=\"5\"/><circle cx=\"70\" cy=\"52\" r=\"5\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"31\" cy=\"30\" r=\"5\"/><circle cx=\"44\" cy=\"30\" r=\"5\"/><circle cx=\"57\" cy=\"30\" r=\"5\"/><circle cx=\"70\" cy=\"30\" r=\"5\"/><circle cx=\"31\" cy=\"44\" r=\"5\"/><circle cx=\"44\" cy=\"44\" r=\"5\"/><circle cx=\"57\" cy=\"44\" r=\"5\"/><circle cx=\"70\" cy=\"44\" r=\"5\"/><circle cx=\"31\" cy=\"58\" r=\"5\"/><circle cx=\"44\" cy=\"58\" r=\"5\"/><circle cx=\"57\" cy=\"58\" r=\"5\"/><circle cx=\"70\" cy=\"58\" r=\"5\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-422",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "属性规律",
      stem: "三枚印章的图案各不相同，却具有同一种几何属性。请从选项中选出一个同样具备该属性的图案：",
      options: ["A", "C", "B", "D"],
      answer: 2,
      explanation: "用属性规律：先看对称。第一枚是等腰三角形，沿中线对折两半重合；第二枚是开口朝下的折线，左右两半也是镜像；第三枚是十字形，同样有一条竖直对称轴。三者的共同属性是轴对称。四个选项里，不规则四边形左右两半合不上；平行四边形虽然绕中心转一百八十度能重合，但沿任何一条直线对折都对不上，属于中心对称而非轴对称，正是最容易误选的干扰；斜放的折角只有一条直角边，也不对称；只有等腰梯形有一条竖直对称轴。判断对称要先找轴，再对折验证。",
      tag: "轴对称",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M17 38L27 56L7 56Z\"/><path d=\"M42 62V38L50 46L58 38V62\"/><path d=\"M71 50H95M83 38V62\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M32 30L66 34L58 72L26 66Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M28 38L66 38L72 68L34 68Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M30 38L70 38L80 70L20 70Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M30 30H70V70\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-423",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "属性规律",
      stem: "三块样板的画法一致。请从选项中挑出一块与前三个画法一致的样板：",
      options: ["A", "B", "C", "D"],
      answer: 2,
      explanation: "用属性规律：先看线条是直是曲。前三块样板的轮廓全部由直线段拼成，三角形、锯齿折线、五边形都没有一处弯曲。四个选项中，圆加一条直线、两个大小圆、圆配一条竖线这三块都含有曲线，只有六边形的轮廓完全由直线段构成，与前三个一致。这类题整体扫一眼有没有弧线就能定大半，再逐块确认；不要被图形大小、线条多少干扰，直线图形画得再圆润也不算曲线。",
      tag: "曲直性",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M15 37L26 57L4 57Z\"/><path d=\"M28 40L36 60L44 40L52 60L60 40L68 60\"/><path d=\"M85 37L97 46L93 61L77 61L73 46Z\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"42\" cy=\"50\" r=\"20\"/><path d=\"M32 64L58 36\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"38\" cy=\"50\" r=\"16\"/><circle cx=\"60\" cy=\"50\" r=\"10\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 24L73 37L73 63L50 76L27 63L27 37Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"34\" cy=\"50\" r=\"14\"/><path d=\"M62 30V70\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-424",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "属性规律",
      stem: "三幅纹样存在同一类几何特征，且这一特征逐幅加强。请观察三幅图的差异，推断第四幅纹样：",
      options: ["D", "B", "C", "A"],
      answer: 3,
      explanation: "用属性规律：数对称轴条数。第一幅是底边较窄的等腰三角形，只有一条竖直对称轴；第二幅是长方形，有横、竖两条；第三幅是等边三角形，有三条。条数依次一、二、三，每次加一，所以第四幅应有四条对称轴，正方形正好符合，横、竖与两条对角线各一条。四个选项里，等腰梯形只有一条，菱形只有两条，正五边形有五条，都不符合；只有正方形是四条。数对称轴要一条条画出来验证，别漏掉斜方向的对角线，否则正方形会被误数成两条。",
      tag: "对称轴数量",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M17 30L29 70L5 70Z\"/><rect x=\"33\" y=\"38\" width=\"34\" height=\"24\"/><path d=\"M83 39L94 59L72 59Z\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M28 38L72 38L82 70L18 70Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 24L75 42L65 71L35 71L25 42Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 20L70 50L50 80L30 50Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><rect x=\"27\" y=\"27\" width=\"46\" height=\"46\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-425",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 1,
      exam: '安徽省考',
      tech: "属性规律",
      stem: "三枚火漆印的画法一致。请从选项中挑出一个与前三个画法一致的图形：",
      options: ["A", "B", "C", "D"],
      answer: 1,
      explanation: "用属性规律：看图形的开闭。前三枚火漆印的轮廓首尾相接，围成完整的一块封闭区域，没有缺口。四个选项中，一段折线、两条平行短线、一个缺口朝右的折角都是开放的，线条没有围合；只有首尾相接成完整轮廓的五边形同样封闭。判断开闭只看轮廓是否闭合，与图形大小、边数多少无关；封闭图形内部可能还有线，也可能没有，都不影响结论。",
      tag: "开闭性",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><circle cx=\"15\" cy=\"50\" r=\"13\"/><rect x=\"38\" y=\"38\" width=\"24\" height=\"24\"/><path d=\"M85 37L96 44L96 57L85 63L74 57L74 44Z\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M20 40L40 30L58 50L78 38\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 24L75 42L65 71L35 71L25 42Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M25 40H75M25 60H75\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M72 28H34V72H72\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-426",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "属性规律",
      stem: "三幅箭形标记的指向按同一节奏改变，请推断第四幅标记应当指向哪里：",
      options: ["A", "B", "C", "D"],
      answer: 0,
      explanation: "用属性规律：先找每幅图的对称轴。第一幅箭尖朝上，对称轴竖直；第二幅箭尖朝右上，对称轴是自左下到右上的斜线；第三幅箭尖朝右，对称轴水平。三条对称轴依次顺时针转过四十五度，所以第四幅的对称轴应自左上斜向右下，也就是箭尖朝右下。四个选项里，箭尖朝上、朝左下、朝左的都不符合；朝左的那个虽然也是水平对称轴，但方向往回走了半圈。看方向变化时把对称轴画出来比只看箭尖更稳，斜向的两幅最容易看反。",
      tag: "对称轴方向",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M17 37L28 57L6 57Z\"/><path d=\"M59 41L53 63L37 47Z\"/><path d=\"M96 50L77 61L77 39Z\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M68 68L25 57L57 25Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 24L73 63L27 63Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M32 68L43 25L75 57Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M24 50L63 27L63 73Z\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-427",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      tech: "属性规律",
      stem: "三枚封签上的图形具有同一种几何性质。请从选项中选出一个同样具备该性质的图形：",
      options: ["A", "B", "C", "D"],
      answer: 2,
      explanation: "用属性规律：先试中心对称。把第一幅折线绕中心转一百八十度，与原图完全重合；第二幅、第三幅折线同样转半圈后重合，而它们沿任何一条直线对折都对不上，可见共同属性是中心对称。四个选项里，开口朝下的折线、等腰梯形、正五边形都只有轴对称，转半圈会上下颠倒；只有平行四边形转半圈后与原图重合。判断时把图在纸上转半圈最容易看：轴对称的图形转半圈会翻个方向，中心对称的不会。平行四边形很容易被误认成轴对称，务必沿对角线试折一次。",
      tag: "中心对称",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M9 38H25L9 62H25\"/><path d=\"M42 62V38L58 62V38\"/><path d=\"M72 38H88V50H72V62H88\"/></g></svg>",
        options: [
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M42 64V36L50 44L58 36V64\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M38 38L62 38L70 62L30 62Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M30 38L68 38L72 62L34 62Z\"/></g></svg>",
          "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M50 25L74 42L65 70L35 70L26 42Z\"/></g></svg>"
        ]
      }
    },
    {
      id: "PD-428",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "属性规律",
      stem: "下列六个图形按从左到右、先上后下依次记为①②③④⑤⑥。请把它们分成两组，每组三个图形各有共同特征：",
      options: ["①②④为一组，③⑤⑥为一组", "①③⑤为一组，②④⑥为一组", "①④⑤为一组，②③⑥为一组", "②③⑤为一组，①④⑥为一组"],
      answer: 1,
      explanation: "用属性规律：六个图形形状差异大，先试对称。①等腰三角形、③圆、⑤等腰梯形都能找到对称轴，沿轴对折可以重合；②是四条边互不相等的四边形，④是两条直角边不等长的直角三角形，⑥是长短两臂不等的折线，都找不到任何一条对折后重合的直线。按轴对称与非轴对称分组，①③⑤一组、②④⑥一组，正好三三分开。四个选项里，把②或⑥放进第一组的、把①或⑤放进第二组的都破坏了这一特征；只有①③⑤与②④⑥的分法两边都自洽。",
      tag: "分组-对称",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M18 15L28 32L8 32Z\"/><path d=\"M38 14L62 17L58 38L40 33Z\"/><circle cx=\"82\" cy=\"26\" r=\"11\"/><path d=\"M8 63L8 85L28 85Z\"/><path d=\"M42 61L58 61L64 85L36 85Z\"/><path d=\"M72 61V85H92\"/></g></svg>"
      }
    },
    {
      id: "PD-429",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 2,
      exam: '安徽省考',
      tech: "数量规律",
      stem: "题干六个图形按从左到右、先上后下的顺序依次标为①至⑥。请将它们分为两类，使同一类的三个图形具备相同特点：",
      options: ["①②③为一组，④⑤⑥为一组", "①③⑤为一组，②④⑥为一组", "①④⑥为一组，②③⑤为一组", "①②⑥为一组，③④⑤为一组"],
      answer: 1,
      explanation: "用数量规律：先数封闭区域。①三角形、③圆、⑤六边形的内部都只有一整块封闭区域；②正方形加上一条对角线，④长方形加一条竖线，⑥圆内加一条弦，都被线切成了两块。按一块与两块分组，①③⑤一组、②④⑥一组。四个选项里，把②或⑥与①③⑤放在一起的、把⑤分到两块的，都无法让同组图形数目一致；只有这一种分法两边都成立。数封闭区域时要注意线条是否真的把图形切穿，只碰到边而没有穿过的线不算分割。",
      tag: "分组-面数",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M18 13L28 30L8 30Z\"/><rect x=\"40\" y=\"14\" width=\"20\" height=\"20\"/><path d=\"M40 14L60 34\"/><circle cx=\"82\" cy=\"24\" r=\"11\"/><rect x=\"11\" y=\"61\" width=\"20\" height=\"24\"/><path d=\"M21 61V85\"/><path d=\"M50 61L60 67L60 78L50 83L40 78L40 67Z\"/><circle cx=\"82\" cy=\"72\" r=\"11\"/><path d=\"M71 72H93\"/></g></svg>"
      }
    },
    {
      id: "PD-430",
      module: '判断推理',
      topic: '图形推理',
      difficulty: 3,
      exam: '安徽省考',
      tech: "属性规律",
      stem: "下面六个图形按从左到右、先上后下依次记为①②③④⑤⑥。请按图形自身的特性把它们分成两组，使每组三图同类：",
      options: ["①②③为一组，④⑤⑥为一组", "①③④为一组，②⑤⑥为一组", "①②④为一组，③⑤⑥为一组", "①④⑤为一组，②③⑥为一组"],
      answer: 0,
      explanation: "用属性规律里的一笔画：数奇点，即引出奇数条线的端点或交点。①三角形三个顶点各引出两条线，奇点为零；②日字中间两个交点各引出三条线，奇点为二；③正方形加对角线，只有对角线两端引出三条线，奇点为二，三者都能一笔画成。④田字的四个边中点各引出三条线，⑤目字同样有四个这样的交点，⑥的竖线中点引出两条斜线、上下两端与两个斜线端共四个奇点，这三幅都要两笔。四个选项里，把④或⑤混进一笔画组的、把③分到两笔组的都无法自洽，只有①②③与④⑤⑥的分法成立。",
      tag: "分组-一笔画",
      figures: {
        stem: "<svg viewBox=\"0 0 100 100\" width=\"96\" height=\"96\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#c9d6e8\" stroke-width=\"2.5\"><path d=\"M18 13L28 30L8 30Z\"/><rect x=\"40\" y=\"14\" width=\"20\" height=\"20\"/><path d=\"M40 24H60\"/><rect x=\"72\" y=\"14\" width=\"20\" height=\"20\"/><path d=\"M72 14L92 34\"/><rect x=\"8\" y=\"62\" width=\"20\" height=\"20\"/><path d=\"M8 72H28M18 62V82\"/><rect x=\"40\" y=\"62\" width=\"20\" height=\"20\"/><path d=\"M40 66H60M40 78H60\"/><path d=\"M82 60V84M82 72L73 63M82 72L91 81\"/></g></svg>"
      }
    }
  ]
});
