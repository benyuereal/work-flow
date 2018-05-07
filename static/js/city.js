var cities = {
  city: [{"code": 0, "name": "全国"}, {"code": 7428, "name": "金昌"}, {"code": 1, "name": "北京"}, {
    "code": 2,
    "name": "上海"
  }, {"code": 3, "name": "广州"}, {"code": 4, "name": "深圳"}, {"code": 2284, "name": "阳江"}, {
    "code": 2292,
    "name": "莱芜"
  }, {"code": 2296, "name": "荆门"}, {"code": 2299, "name": "黄冈"}, {"code": 2302, "name": "恩施"}, {
    "code": 2307,
    "name": "永州"
  }, {"code": 2315, "name": "松原"}, {"code": 2319, "name": "淮南"}, {"code": 2323, "name": "黄山"}, {
    "code": 2325,
    "name": "阜阳"
  }, {"code": 2328, "name": "六安"}, {"code": 2335, "name": "钦州"}, {"code": 2337, "name": "玉林"}, {
    "code": 2340,
    "name": "河池"
  }, {"code": 2342, "name": "开封"}, {"code": 2344, "name": "鹤壁"}, {"code": 2354, "name": "锦州"}, {
    "code": 2360,
    "name": "景德镇"
  }, {"code": 2363, "name": "赣州"}, {"code": 2364, "name": "吉安"}, {"code": 2371, "name": "攀枝花"}, {
    "code": 2372,
    "name": "泸州"
  }, {"code": 2373, "name": "德阳"}, {"code": 2378, "name": "南充"}, {"code": 2381, "name": "广安"}, {
    "code": 2389,
    "name": "曲靖"
  }, {"code": 2392, "name": "丽江"}, {"code": 2393, "name": "楚雄"}, {"code": 2394, "name": "红河"}, {
    "code": 2395,
    "name": "文山"
  }, {"code": 2397, "name": "西双版纳"}, {"code": 2398, "name": "大理"}, {"code": 2404, "name": "乌海"}, {
    "code": 2421,
    "name": "固原"
  }, {"code": 2422, "name": "三亚"}, {"code": 10304, "name": "白银"}, {"code": 9539, "name": "阿拉尔"}, {
    "code": 9917,
    "name": "海北"
  }, {"code": 8601, "name": "天水"}, {"code": 979, "name": "禹州"}, {"code": 79, "name": "杭州"}, {
    "code": 18,
    "name": "天津"
  }, {"code": 158, "name": "武汉"}, {"code": 483, "name": "西安"}, {"code": 102, "name": "成都"}, {
    "code": 414,
    "name": "长沙"
  }, {"code": 37, "name": "重庆"}, {"code": 172, "name": "南京"}, {"code": 5, "name": "苏州"}, {
    "code": 413,
    "name": "东莞"
  }, {"code": 188, "name": "沈阳"}, {"code": 304, "name": "福州"}, {"code": 606, "name": "厦门"}, {
    "code": 265,
    "name": "济南"
  }, {"code": 669, "name": "南昌"}, {"code": 319, "name": "长春"}, {"code": 222, "name": "佛山"}, {
    "code": 342,
    "name": "郑州"
  }, {"code": 93, "name": "无锡"}, {"code": 122, "name": "青岛"}, {"code": 202, "name": "哈尔滨"}, {
    "code": 241,
    "name": "石家庄"
  }, {"code": 147, "name": "大连"}, {"code": 2053, "name": "海口"}, {"code": 135, "name": "宁波"}, {
    "code": 228,
    "name": "烟台"
  }, {"code": 837, "name": "合肥"}, {"code": 362, "name": "潍坊"}, {"code": 845, "name": "南宁"}, {
    "code": 291,
    "name": "泉州"
  }, {"code": 984, "name": "乌鲁木齐"}, {"code": 910, "name": "珠海"}, {"code": 952, "name": "兰州"}, {
    "code": 541,
    "name": "昆明"
  }, {"code": 740, "name": "太原"}, {"code": 3328, "name": "张家口"}, {"code": 783, "name": "汕头"}, {
    "code": 771,
    "name": "中山"
  }, {"code": 811, "name": "呼和浩特"}, {"code": 330, "name": "温州"}, {"code": 523, "name": "鞍山"}, {
    "code": 450,
    "name": "济宁"
  }, {"code": 497, "name": "嘉兴"}, {"code": 463, "name": "常州"}, {"code": 276, "name": "唐山"}, {
    "code": 1057,
    "name": "绵阳"
  }, {"code": 424, "name": "保定"}, {"code": 722, "name": "惠州"}, {"code": 518, "name": "威海"}, {
    "code": 629,
    "name": "江门"
  }, {"code": 385, "name": "淄博"}, {"code": 556, "name": "洛阳"}, {"code": 1086, "name": "株洲"}, {
    "code": 3359,
    "name": "宿州"
  }, {"code": 914, "name": "衡阳"}, {"code": 2015, "name": "贵阳"}, {"code": 728, "name": "德州"}, {
    "code": 531,
    "name": "金华"
  }, {"code": 700, "name": "吉林"}, {"code": 801, "name": "包头"}, {"code": 652, "name": "沧州"}, {
    "code": 592,
    "name": "南阳"
  }, {"code": 772, "name": "廊坊"}, {"code": 944, "name": "滨州"}, {"code": 1078, "name": "秦皇岛"}, {
    "code": 3177,
    "name": "日照"
  }, {"code": 471, "name": "徐州"}, {"code": 623, "name": "东营"}, {"code": 686, "name": "泰安"}, {
    "code": 505,
    "name": "临沂"
  }, {"code": 1096, "name": "安阳"}, {"code": 403, "name": "台州"}, {"code": 637, "name": "扬州"}, {
    "code": 394,
    "name": "南通"
  }, {"code": 710, "name": "漳州"}, {"code": 572, "name": "邯郸"}, {"code": 927, "name": "揭阳"}, {
    "code": 882,
    "name": "聊城"
  }, {"code": 1005, "name": "平顶山"}, {"code": 2044, "name": "宝鸡"}, {"code": 355, "name": "绍兴"}, {
    "code": 375,
    "name": "大庆"
  }, {"code": 679, "name": "茂名"}, {"code": 2049, "name": "连云港"}, {"code": 831, "name": "湖州"}, {
    "code": 2047,
    "name": "湘潭"
  }, {"code": 1039, "name": "桂林"}, {"code": 791, "name": "湛江"}, {"code": 858, "name": "宜昌"}, {
    "code": 901,
    "name": "肇庆"
  }, {"code": 891, "name": "襄阳"}, {"code": 961, "name": "枣庄"}, {"code": 613, "name": "盐城"}, {
    "code": 2032,
    "name": "十堰"
  }, {"code": 821, "name": "岳阳"}, {"code": 993, "name": "衡水"}, {"code": 1016, "name": "新乡"}, {
    "code": 9984,
    "name": "文昌"
  }, {"code": 10022, "name": "万宁"}, {"code": 10044, "name": "屯昌"}, {"code": 10136, "name": "琼海"}, {
    "code": 10184,
    "name": "陵水"
  }, {"code": 10206, "name": "临高"}, {"code": 10236, "name": "乐东"}, {"code": 10250, "name": "东方"}, {
    "code": 10303,
    "name": "定安"
  }, {"code": 10331, "name": "澄迈"}, {"code": 10353, "name": "昌江"}, {"code": 10367, "name": "保亭"}, {
    "code": 10380,
    "name": "白沙"
  }, {"code": 10394, "name": "儋州"}, {"code": 10417, "name": "铜仁"}, {"code": 10434, "name": "黔西南"}, {
    "code": 10492,
    "name": "黔南"
  }, {"code": 10506, "name": "六盘水"}, {"code": 7921, "name": "丽水"}, {"code": 7951, "name": "宁德"}, {
    "code": 8398,
    "name": "定州"
  }, {"code": 8481, "name": "舟山"}, {"code": 8541, "name": "明港"}, {"code": 8566, "name": "阳春"}, {
    "code": 8582,
    "name": "昌吉"
  }, {"code": 8680, "name": "章丘"}, {"code": 8694, "name": "信阳"}, {"code": 8706, "name": "馆陶"}, {
    "code": 8716,
    "name": "顺德"
  }, {"code": 8760, "name": "阳泉"}, {"code": 8854, "name": "晋中"}, {"code": 8973, "name": "延安"}, {
    "code": 9048,
    "name": "赵县"
  }, {"code": 9061, "name": "鹤岗"}, {"code": 9123, "name": "鄢陵"}, {"code": 9146, "name": "诸城"}, {
    "code": 9193,
    "name": "临猗"
  }, {"code": 9317, "name": "三门峡"}, {"code": 9481, "name": "娄底"}, {"code": 9709, "name": "鄂州"}, {
    "code": 9736,
    "name": "仙桃"
  }, {"code": 9773, "name": "伊春"}, {"code": 9837, "name": "双鸭山"}, {"code": 9848, "name": "七台河"}, {
    "code": 9862,
    "name": "黑河"
  }, {"code": 9878, "name": "大兴安岭"}, {"code": 9918, "name": "济源"}, {"code": 9952, "name": "五指山"}, {
    "code": 13722,
    "name": "三沙"
  }, {"code": 13950, "name": "乐清"}, {"code": 13951, "name": "瑞安"}, {"code": 7452, "name": "哈密"}, {
    "code": 7453,
    "name": "咸阳"
  }, {"code": 7620, "name": "遵义"}, {"code": 2045, "name": "芜湖"}, {"code": 751, "name": "邢台"}, {
    "code": 2247,
    "name": "九江"
  }, {"code": 3434, "name": "孝感"}, {"code": 3222, "name": "吕梁"}, {"code": 693, "name": "泰州"}, {
    "code": 2052,
    "name": "西宁"
  }, {"code": 2048, "name": "三明"}, {"code": 2192, "name": "韶关"}, {"code": 3266, "name": "焦作"}, {
    "code": 6700,
    "name": "赤峰"
  }, {"code": 872, "name": "常德"}, {"code": 3237, "name": "乐山"}, {"code": 3163, "name": "汉中"}, {
    "code": 645,
    "name": "镇江"
  }, {"code": 2054, "name": "银川"}, {"code": 2037, "name": "鄂尔多斯"}, {"code": 3184, "name": "延边"}, {
    "code": 977,
    "name": "许昌"
  }, {"code": 1029, "name": "商丘"}, {"code": 933, "name": "周口"}, {"code": 3350, "name": "晋城"}, {
    "code": 3251,
    "name": "安庆"
  }, {"code": 968, "name": "淮安"}, {"code": 2038, "name": "辽阳"}, {"code": 3198, "name": "正定"}, {
    "code": 2042,
    "name": "克拉玛依"
  }, {"code": 2046, "name": "梧州"}, {"code": 1067, "name": "驻马店"}, {"code": 2039, "name": "马鞍山"}, {
    "code": 1734,
    "name": "黄石"
  }, {"code": 2041, "name": "盘锦"}, {"code": 2248, "name": "萍乡"}, {"code": 3157, "name": "安康"}, {
    "code": 2050,
    "name": "香港"
  }, {"code": 3209, "name": "鹰潭"}, {"code": 3445, "name": "丹东"}, {"code": 2501, "name": "辽源"}, {
    "code": 2055,
    "name": "拉萨"
  }, {"code": 2043, "name": "海拉尔"}, {"code": 2040, "name": "玉溪"}, {"code": 2051, "name": "台湾"}, {
    "code": 3279,
    "name": "瓦房店"
  }, {"code": 3306, "name": "庄河"}, {"code": 3453, "name": "忻州"}, {"code": 3470, "name": "蚌埠"}, {
    "code": 3479,
    "name": "荆州"
  }, {"code": 3489, "name": "牡丹江"}, {"code": 5632, "name": "菏泽"}, {"code": 5633, "name": "宣城"}, {
    "code": 5653,
    "name": "运城"
  }, {"code": 5669, "name": "临汾"}, {"code": 5695, "name": "郴州"}, {"code": 5709, "name": "宜春"}, {
    "code": 5722,
    "name": "抚顺"
  }, {"code": 5733, "name": "渭南"}, {"code": 5756, "name": "怀化"}, {"code": 5772, "name": "沭阳"}, {
    "code": 5845,
    "name": "本溪"
  }, {"code": 5853, "name": "齐齐哈尔"}, {"code": 5898, "name": "营口"}, {"code": 5918, "name": "白城"}, {
    "code": 5928,
    "name": "内江"
  }, {"code": 5942, "name": "榆林"}, {"code": 2350, "name": "宿迁"}, {"code": 6718, "name": "绥化"}, {
    "code": 6729,
    "name": "铁岭"
  }, {"code": 6745, "name": "自贡"}, {"code": 6752, "name": "龙岩"}, {"code": 6760, "name": "承德"}, {
    "code": 2258,
    "name": "其他"
  }, {"code": 6770, "name": "贵港"}, {"code": 6776, "name": "佳木斯"}, {"code": 6788, "name": "张家界"}, {
    "code": 6793,
    "name": "衢州"
  }, {"code": 6803, "name": "资阳"}, {"code": 6921, "name": "长治"}, {"code": 6964, "name": "大同"}, {
    "code": 2303,
    "name": "邵阳"
  }, {"code": 2329, "name": "亳州"}, {"code": 2390, "name": "保山"}, {"code": 7112, "name": "临夏"}, {
    "code": 2380,
    "name": "宜宾"
  }, {"code": 7133, "name": "柳州"}, {"code": 7154, "name": "平凉"}, {"code": 2347, "name": "漯河"}, {
    "code": 7168,
    "name": "库尔勒"
  }, {"code": 2346, "name": "濮阳"}, {"code": 7289, "name": "鸡西"}, {"code": 7303, "name": "清远"}, {
    "code": 2429,
    "name": "莆田"
  }, {"code": 9326, "name": "喀什"}, {"code": 9357, "name": "淮北"}, {"code": 9344, "name": "长葛"}, {
    "code": 9363,
    "name": "黔东南"
  }, {"code": 9389, "name": "梅州"}, {"code": 9399, "name": "澳门"}, {"code": 9409, "name": "昭通"}, {
    "code": 9422,
    "name": "临沧"
  }, {"code": 9432, "name": "迪庆"}, {"code": 9437, "name": "德宏"}, {"code": 9444, "name": "普洱"}, {
    "code": 9462,
    "name": "怒江"
  }, {"code": 9449, "name": "汕尾"}, {"code": 9475, "name": "吐鲁番"}, {"code": 10064, "name": "琼中"}, {
    "code": 9489,
    "name": "和田"
  }, {"code": 9499, "name": "阿克苏"}, {"code": 9519, "name": "克孜勒苏"}, {"code": 9530, "name": "巴音郭楞"}, {
    "code": 9562,
    "name": "五家渠"
  }, {"code": 9615, "name": "日喀则"}, {"code": 9648, "name": "昌都"}, {"code": 9687, "name": "雅安"}, {
    "code": 9704,
    "name": "眉山"
  }, {"code": 9717, "name": "凉山"}, {"code": 9749, "name": "广元"}, {"code": 9764, "name": "甘孜"}, {
    "code": 9799,
    "name": "达州"
  }, {"code": 9811, "name": "巴中"}, {"code": 9817, "name": "阿坝"}, {"code": 9832, "name": "铜川"}, {
    "code": 9854,
    "name": "商洛"
  }, {"code": 9871, "name": "朔州"}, {"code": 9888, "name": "玉树"}, {"code": 9472, "name": "伊犁"}, {
    "code": 9896,
    "name": "黄南"
  }, {"code": 9529, "name": "博尔塔拉"}, {"code": 9902, "name": "海西"}, {"code": 9909, "name": "海东"}, {
    "code": 9936,
    "name": "果洛"
  }, {"code": 9951, "name": "中卫"}, {"code": 9551, "name": "石河子"}, {"code": 9962, "name": "吴忠"}, {
    "code": 9971,
    "name": "石嘴山"
  }, {"code": 9976, "name": "兴安盟"}, {"code": 9559, "name": "图木舒克"}, {"code": 9618, "name": "那曲"}, {
    "code": 9576,
    "name": "山南"
  }, {"code": 9993, "name": "乌兰察布"}, {"code": 10015, "name": "通辽"}, {"code": 9646, "name": "林芝"}, {
    "code": 9678,
    "name": "阿里"
  }, {"code": 10039, "name": "呼伦贝尔"}, {"code": 10070, "name": "巴彦淖尔市"}, {"code": 9688, "name": "遂宁"}, {
    "code": 10083,
    "name": "阿拉善盟"
  }, {"code": 10088, "name": "葫芦岛"}, {"code": 10097, "name": "阜新"}, {"code": 10106, "name": "朝阳"}, {
    "code": 10115,
    "name": "新余"
  }, {"code": 10120, "name": "上饶"}, {"code": 10134, "name": "抚州"}, {"code": 10159, "name": "通化"}, {
    "code": 10171,
    "name": "四平"
  }, {"code": 10179, "name": "白山"}, {"code": 10198, "name": "益阳"}, {"code": 10219, "name": "湘西"}, {
    "code": 10229,
    "name": "巢湖"
  }, {"code": 10260, "name": "池州"}, {"code": 10266, "name": "滁州"}, {"code": 10285, "name": "铜陵"}, {
    "code": 10291,
    "name": "南平"
  }, {"code": 10322, "name": "定西"}, {"code": 10343, "name": "甘南"}, {"code": 10362, "name": "嘉峪关"}, {
    "code": 10387,
    "name": "酒泉"
  }, {"code": 10415, "name": "陇南"}, {"code": 10448, "name": "武威"}, {"code": 10454, "name": "张掖"}, {
    "code": 10461,
    "name": "潮州"
  }, {"code": 10467, "name": "河源"}, {"code": 10475, "name": "庆阳"}, {"code": 10485, "name": "云浮"}, {
    "code": 10524,
    "name": "崇左"
  }, {"code": 10539, "name": "防城港"}, {"code": 10549, "name": "贺州"}, {"code": 10564, "name": "毕节"}, {
    "code": 10513,
    "name": "百色"
  }, {"code": 10536, "name": "北海"}, {"code": 10552, "name": "来宾"}, {"code": 10574, "name": "海南"}, {
    "code": 10761,
    "name": "武夷山"
  }, {"code": 10892, "name": "和县"}, {"code": 10908, "name": "清徐"}, {"code": 11077, "name": "永新"}, {
    "code": 9669,
    "name": "潜江"
  }, {"code": 9617, "name": "咸宁"}, {"code": 9656, "name": "随州"}, {"code": 9605, "name": "神农架"}, {
    "code": 9517,
    "name": "天门"
  }, {"code": 2408, "name": "锡林郭勒"}, {"code": 7468, "name": "安顺"}, {"code": 11201, "name": "张北"}, {
    "code": 11226,
    "name": "霍邱"
  }, {"code": 11263, "name": "台山"}, {"code": 11279, "name": "大丰"}, {"code": 11296, "name": "桐城"}, {
    "code": 11313,
    "name": "垦利"
  }, {"code": 12291, "name": "义乌"}, {"code": 9439, "name": "瑞丽"}, {"code": 18837, "name": "阿勒泰"}, {
    "code": 10273,
    "name": "天长"
  }, {"code": 5645, "name": "宁国"}, {"code": 297, "name": "晋江"}, {"code": 725, "name": "惠东"}, {
    "code": 726,
    "name": "博罗"
  }, {"code": 866, "name": "枝江"}, {"code": 864, "name": "宜都"}, {"code": 7365, "name": "黄梅"}, {
    "code": 2036,
    "name": "丹江口"
  }, {"code": 1095, "name": "攸县"}, {"code": 2128, "name": "湘乡"}, {"code": 826, "name": "汨罗"}, {
    "code": 1091,
    "name": "醴陵"
  }, {"code": 649, "name": "扬中"}, {"code": 2147, "name": "东海"}, {"code": 648, "name": "丹阳"}, {
    "code": 696,
    "name": "泰兴"
  }, {"code": 397, "name": "如皋"}, {"code": 469, "name": "溧阳"}, {"code": 399, "name": "海门"}, {
    "code": 357,
    "name": "诸暨"
  }, {"code": 5333, "name": "余姚"}, {"code": 408, "name": "温岭"}, {"code": 502, "name": "桐乡"}, {
    "code": 500,
    "name": "海宁"
  }, {"code": 5334, "name": "慈溪"}, {"code": 296, "name": "石狮"}, {"code": 293, "name": "南安"}, {
    "code": 699,
    "name": "兴化"
  }, {"code": 615, "name": "东台"}, {"code": 478, "name": "新沂"}, {"code": 402, "name": "如东"}, {
    "code": 400,
    "name": "启东"
  }, {"code": 477, "name": "邳州"}, {"code": 11349, "name": "沛县"}, {"code": 698, "name": "靖江"}, {
    "code": 618,
    "name": "建湖"
  }, {"code": 401, "name": "海安"}, {"code": 834, "name": "长兴"}, {"code": 6738, "name": "象山"}, {
    "code": 14357,
    "name": "嘉善"
  }, {"code": 835, "name": "德清"}, {"code": 369, "name": "寿光"}, {"code": 9684, "name": "改则"}, {
    "code": 18845,
    "name": "塔城"
  }, {"code": 536, "name": "东阳"}, {"code": 233, "name": "龙口"}, {"code": 16, "name": "昆山"}, {
    "code": 12804,
    "name": "燕郊"
  }, {"code": 522, "name": "荣成"}, {"code": 967, "name": "滕州"}, {"code": 284, "name": "迁安市"}, {
    "code": 946,
    "name": "邹平"
  }, {"code": 455, "name": "邹城"}, {"code": 5944, "name": "神木"}, {"code": 689, "name": "新泰"}, {
    "code": 627,
    "name": "广饶"
  }, {"code": 235, "name": "莱州"}, {"code": 690, "name": "肥城"}, {"code": 367, "name": "青州"}, {
    "code": 468,
    "name": "金坛"
  }, {"code": 697, "name": "姜堰"}, {"code": 537, "name": "永康"}, {"code": 407, "name": "临海"}, {
    "code": 9321,
    "name": "灵宝"
  }, {"code": 14486, "name": "宝应县"}, {"code": 10175, "name": "公主岭"}, {"code": 409, "name": "玉环"}, {
    "code": 7576,
    "name": "苍南"
  }, {"code": 3439, "name": "汉川"}, {"code": 7121, "name": "偃师"}, {"code": 6805, "name": "简阳"}, {
    "code": 1010,
    "name": "汝州"
  }, {"code": 5959, "name": "泗阳"}, {"code": 5958, "name": "泗洪"}, {"code": 3180, "name": "莒县"}, {
    "code": 5638,
    "name": "曹县"
  }, {"code": 9706, "name": "仁寿"}, {"code": 8735, "name": "广汉"}, {"code": 836, "name": "安吉"}, {
    "code": 2148,
    "name": "灌云"
  }, {"code": 5636, "name": "单县"}, {"code": 2150, "name": "灌南"}, {"code": 5936, "name": "长垣"}, {
    "code": 7389,
    "name": "杞县"
  }, {"code": 9070, "name": "乐平"}, {"code": 6806, "name": "安岳"}, {"code": 9459, "name": "海丰"}, {
    "code": 428,
    "name": "涿州"
  }, {"code": 935, "name": "项城"}, {"code": 26048, "name": "雄安新区"}, {"code": 3325, "name": "招远"}, {
    "code": 713,
    "name": "龙海"
  }, {"code": 371, "name": "高密"}, {"code": 577, "name": "武安"}, {"code": 656, "name": "任丘"}, {
    "code": 7335,
    "name": "桓台"
  }, {"code": 896, "name": "枣阳"}, {"code": 520, "name": "乳山"}, {"code": 776, "name": "三河"}, {
    "code": 7624,
    "name": "仁怀"
  }, {"code": 237, "name": "蓬莱"}, {"code": 887, "name": "茌平"}, {"code": 884, "name": "临清"}, {
    "code": 6720,
    "name": "安达"
  }, {"code": 6721, "name": "肇东"}, {"code": 382, "name": "肇州"}, {"code": 5735, "name": "韩城"}, {
    "code": 5945,
    "name": "府谷"
  }, {"code": 5947, "name": "靖边"}, {"code": 5948, "name": "定边"}, {"code": 10262, "name": "东至"}, {
    "code": 10232,
    "name": "无为"
  }, {"code": 10390, "name": "敦煌"}, {"code": 650, "name": "句容"}, {"code": 501, "name": "平湖"}, {
    "code": 9904,
    "name": "格尔木"
  }, {"code": 10162, "name": "梅河口"}, {"code": 9085, "name": "扶余"}, {"code": 9084, "name": "长岭"}, {
    "code": 706,
    "name": "桦甸"
  }, {"code": 708, "name": "磐石"}, {"code": 10176, "name": "梨树县"}, {"code": 876, "name": "澧县"}, {
    "code": 5699,
    "name": "桂阳"
  }, {"code": 5698, "name": "资兴"}, {"code": 5701, "name": "永兴"}, {"code": 921, "name": "常宁"}, {
    "code": 5690,
    "name": "祁东"
  }, {"code": 5693, "name": "衡东"}, {"code": 9470, "name": "冷水江"}, {"code": 9471, "name": "涟源"}, {
    "code": 9473,
    "name": "双峰"
  }, {"code": 6955, "name": "邵阳县"}, {"code": 6954, "name": "邵东"}, {"code": 10201, "name": "沅江"}, {
    "code": 10202,
    "name": "南县"
  }, {"code": 8532, "name": "祁阳"}, {"code": 828, "name": "湘阴"}, {"code": 830, "name": "华容"}, {
    "code": 6791,
    "name": "慈利"
  }, {"code": 7362, "name": "武穴"}, {"code": 9119, "name": "钟祥"}, {"code": 9117, "name": "京山"}, {
    "code": 9118,
    "name": "沙洋"
  }, {"code": 3484, "name": "松滋"}, {"code": 9657, "name": "广水"}, {"code": 9623, "name": "赤壁"}, {
    "code": 895,
    "name": "老河口"
  }, {"code": 899, "name": "谷城"}, {"code": 897, "name": "宜城"}, {"code": 898, "name": "南漳"}, {
    "code": 3438,
    "name": "云梦"
  }, {"code": 3442, "name": "安陆"}, {"code": 3437, "name": "大悟"}, {"code": 3436, "name": "孝昌"}, {
    "code": 865,
    "name": "当阳"
  }, {"code": 9624, "name": "嘉鱼"}, {"code": 9660, "name": "随县"}, {"code": 5405, "name": "滑县"}, {
    "code": 1101,
    "name": "林州"
  }, {"code": 3268, "name": "沁阳"}, {"code": 3267, "name": "孟州"}, {"code": 7312, "name": "温县"}, {
    "code": 7391,
    "name": "尉氏"
  }, {"code": 7393, "name": "兰考"}, {"code": 7390, "name": "通许"}, {"code": 11217, "name": "新安"}, {
    "code": 11220,
    "name": "伊川"
  }, {"code": 7122, "name": "孟津"}, {"code": 11219, "name": "宜阳"}, {"code": 1011, "name": "舞钢"}, {
    "code": 1032,
    "name": "永城"
  }, {"code": 1038, "name": "睢县"}, {"code": 939, "name": "鹿邑"}, {"code": 9322, "name": "渑池"}, {
    "code": 942,
    "name": "沈丘"
  }, {"code": 938, "name": "太康"}, {"code": 936, "name": "商水"}, {"code": 9186, "name": "淇县"}, {
    "code": 9185,
    "name": "浚县"
  }, {"code": 7285, "name": "范县"}, {"code": 8698, "name": "固始"}, {"code": 8702, "name": "淮滨"}, {
    "code": 658,
    "name": "河间"
  }, {"code": 657, "name": "黄骅"}, {"code": 659, "name": "沧县"}, {"code": 591, "name": "磁县"}, {
    "code": 14059,
    "name": "涉县"
  }, {"code": 775, "name": "霸州"}, {"code": 5395, "name": "香河"}, {"code": 12803, "name": "固安"}, {
    "code": 283,
    "name": "遵化市"
  }, {"code": 7061, "name": "迁西"}, {"code": 7060, "name": "玉田"}, {"code": 7066, "name": "滦南"}, {
    "code": 755,
    "name": "沙河"
  }, {"code": 12703, "name": "清镇"}, {"code": 6774, "name": "桂平"}, {"code": 9168, "name": "北流"}, {
    "code": 9173,
    "name": "博白"
  }, {"code": 2119, "name": "岑溪"}, {"code": 634, "name": "开平"}, {"code": 9456, "name": "陆丰"}, {
    "code": 6757,
    "name": "上杭"
  }, {"code": 7969, "name": "福安"}, {"code": 7970, "name": "福鼎"}, {"code": 7100, "name": "安溪"}, {
    "code": 7101,
    "name": "永春"
  }, {"code": 2133, "name": "永安"}, {"code": 717, "name": "漳浦"}, {"code": 621, "name": "射阳"}, {
    "code": 620,
    "name": "阜宁"
  }, {"code": 619, "name": "响水"}, {"code": 504, "name": "海盐"}, {"code": 14528, "name": "武义县"}, {
    "code": 359,
    "name": "嵊州"
  }, {"code": 361, "name": "新昌"}, {"code": 6796, "name": "江山"}, {"code": 7575, "name": "平阳"}, {
    "code": 8892,
    "name": "弥勒"
  }, {"code": 547, "name": "安宁"}, {"code": 7533, "name": "宣威"}, {"code": 9694, "name": "射洪"}, {
    "code": 9806,
    "name": "大竹"
  }, {"code": 9804, "name": "宣汉"}, {"code": 9807, "name": "渠县"}, {"code": 7148, "name": "长宁"}, {
    "code": 3225,
    "name": "柳林"
  }, {"code": 3354, "name": "高平"}, {"code": 3353, "name": "泽州"}, {"code": 6928, "name": "襄垣"}, {
    "code": 3227,
    "name": "孝义"
  }, {"code": 5637, "name": "郓城"}, {"code": 949, "name": "博兴"}, {"code": 5641, "name": "东明"}, {
    "code": 5640,
    "name": "巨野"
  }, {"code": 951, "name": "无棣"}, {"code": 734, "name": "齐河"}, {"code": 459, "name": "微山"}, {
    "code": 731,
    "name": "禹城"
  }, {"code": 739, "name": "临邑"}, {"code": 730, "name": "乐陵"}, {"code": 234, "name": "莱阳"}, {
    "code": 733,
    "name": "宁津"
  }, {"code": 885, "name": "高唐"}, {"code": 888, "name": "莘县"}, {"code": 886, "name": "阳谷"}, {
    "code": 890,
    "name": "冠县"
  }, {"code": 514, "name": "平邑"}, {"code": 510, "name": "郯城"}, {"code": 7334, "name": "沂源"}, {
    "code": 460,
    "name": "汶上"
  }, {"code": 462, "name": "梁山"}, {"code": 628, "name": "利津"}, {"code": 7301, "name": "沂南"}, {
    "code": 238,
    "name": "栖霞"
  }, {"code": 691, "name": "宁阳"}, {"code": 692, "name": "东平"}, {"code": 372, "name": "昌邑"}, {
    "code": 370,
    "name": "安丘"
  }, {"code": 373, "name": "昌乐"}, {"code": 374, "name": "临朐"}, {"code": 5635, "name": "鄄城"}, {
    "code": 2071,
    "name": "灯塔"
  }, {"code": 3450, "name": "凤城"}, {"code": 10109, "name": "北票"}, {"code": 6733, "name": "开原"}, {
    "code": 677,
    "name": "进贤"
  }, {"code": 10118, "name": "分宜"}, {"code": 5711, "name": "丰城"}, {"code": 5713, "name": "樟树"}, {
    "code": 5712,
    "name": "高安"
  }, {"code": 3210, "name": "余江"}, {"code": 10137, "name": "南城"}, {"code": 9071, "name": "浮梁"}, {
    "code": 976,
    "name": "盱眙"
  }, {"code": 975, "name": "金湖"}, {"code": 595, "name": "邓州"}, {"code": 603, "name": "新野"}, {
    "code": 8728,
    "name": "同镇全国"
  }]

}
export default cities

