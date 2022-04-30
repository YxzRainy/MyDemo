// 中国地图
(function () {
    var myChart = echarts.init(document.querySelector(".Map .GuiZhou"));
    var uploadedDataURL = "../../GuiZhou.json";

    //geoCoordMap把所有可能出现的城加到数组里面
    var geoCoordMap = {
        '贵阳': [106.713478, 26.578343],
        '遵义': [106.937265, 27.706626],
        '安顺': [105.932188, 26.245544],
        '毕节': [105.28501, 27.301693],
        '铜仁': [109.191555, 27.718346],
        '六盘水': [104.846743, 26.584643],
        '黔南': [107.517156, 26.258219],
        '黔西南': [104.897971, 25.08812],
        '黔东南': [107.977488, 26.583352],
    };

    var Year2010 = {
        "贵阳": 1121.82,
        "遵义": 908.76,
        "毕节": 600.85,
        "六盘水": 500.64,
        "黔南": 356.68,
        "黔东南": 312.6,
        "黔西南": 307.13,
        '铜仁': 293.6,
        '安顺': 232.92,

    };

    var Year2011 = {
        "贵阳": 1383.07,
        "遵义": 1121,
        "毕节": 745,
        "六盘水": 616,
        "黔南": 460,
        "黔东南": 384,
        "黔西南": 375,
        '铜仁': 362,
        '安顺': 286,
    };
    var Year2012 = {
        "贵阳": 1700.3,
        "遵义": 1343.9,
        "毕节": 872.4,
        "六盘水": 738.65,
        "黔南": 530,
        "黔东南": 474.5,
        "黔西南": 458.7,
        '铜仁': 447,
        '安顺': 350.7,
    };
    var Year2013 = {
        "贵阳": 2032.32,
        "遵义": 1558.32,
        "毕节": 1024.67,
        "六盘水": 876.95,
        "黔南": 642.61,
        "黔东南": 584.64,
        "黔西南": 555.43,
        '铜仁': 534.09,
        '安顺': 427.85,
    };
    var Year2014 = {
        "贵阳": 2497.27,
        "遵义": 1874.36,
        "毕节": 1266.70,
        "六盘水": 1042.73,
        "黔南": 801.75,
        "黔东南": 701.71,
        "黔西南": 670.96,
        '铜仁': 647.73,
        '安顺': 520.06,
    }
    var Year2015 = {
        "贵阳": 2891.16,
        "遵义": 2168.34,
        "毕节": 1461.35,
        "六盘水": 1201.08,
        "黔南": 902.91,
        "黔东南": 811.55,
        "黔西南": 801.65,
        '铜仁': 770.89,
        '安顺': 625.41,
    };
    var Year2016 = {
        "贵阳": 3157.7,
        "遵义": 2403.94,
        "毕节": 1625.79,
        "六盘水": 1313.7,
        "黔南": 1023.39,
        "黔东南": 939.05,
        "黔西南": 801.65,
        '铜仁': 856.97,
        '安顺': 701.35,
    };
    var Year2017 = {
        "贵阳": 3537.96,
        "遵义": 2748.59,
        "毕节": 1841.61,
        "六盘水": 1461.71,
        "黔南": 1160.59,
        "黔西南": 1067.6,
        "黔东南": 972.18,
        '铜仁': 969,
        '安顺': 802.46,
    };
    var Year2018 = {
        "贵阳": 3798.45,
        "遵义": 3000.23,
        "毕节": 1921.43,
        "六盘水": 1525.69,
        "黔南": 1313.46,
        "黔西南": 1163.77,
        '铜仁': 1066.52,
        "黔东南": 1036.62,
        '安顺': 849.4,
    };
    var Year2019 = {
        "贵阳": 4039.6,
        "遵义": 3483.32,
        "毕节": 1901.36,
        "黔南": 1518.04,
        "黔西南": 1272.8,
        "六盘水": 1265.7,
        '铜仁': 1249.16,
        "黔东南": 1123.04,
        '安顺': 923.94,
    };
    var Year2020 = {
        "贵阳": 4311.65,
        "遵义": 3720.05,
        "毕节": 2020.39,
        "黔南": 1595.4,
        "黔西南": 1353.4,
        "六盘水": 1339.62,
        '铜仁': 1327.79,
        "黔东南": 1191.52,
        '安顺': 966.74,
    };

    var colors = [
        ["#00FFF3", "#52BDFF", "#FF7D7D", "#72FFAD", "#72FFF2", "#99F7FF", "#D3F7FF", "#86FF97", "#86FFD5", "#A2FFFE", "#fff"],
    ];
    var colorIndex = 0;


    $(function () {
        var year = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
        var MapData = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],

        ];

        /*柱子Y名称*/
        var categoryData = [];
        var barData = [];
        // 柱状图数据
        for (var key in geoCoordMap) {
            MapData[0].push({
                "year": '2010',
                "name": key,
                "value": Year2010[key],
            });
            MapData[1].push({
                "year": '2011',
                "name": key,
                "value": Year2011[key],
            });
            MapData[2].push({
                "year": '2012',
                "name": key,
                "value": Year2012[key],
            });
            MapData[3].push({
                "year": '2013',
                "name": key,
                "value": Year2013[key],
            });
            MapData[4].push({
                "year": '2014',
                "name": key,
                "value": Year2014[key],
            });
            MapData[5].push({
                "year": '2015',
                "name": key,
                "value": Year2015[key],
            });
            MapData[6].push({
                "year": '2016',
                "name": key,
                "value": Year2016[key],
            });
            MapData[7].push({
                "year": '2017',
                "name": key,
                "value": Year2017[key],
            });
            MapData[8].push({
                "year": '2018',
                "name": key,
                "value": Year2018[key],
            });
            MapData[9].push({
                "year": '2019',
                "name": key,
                "value": Year2019[key],
            });
            MapData[10].push({
                "year": '2020',
                "name": key,
                "value": Year2020[key],
            });
        }

        for (var i = 0; i < MapData.length; i++) {
            MapData[i].sort(function sortNumber(a, b) {
                return a.value - b.value
            });
            barData.push([]);
            categoryData.push([]);
            for (var j = 0; j < MapData[i].length; j++) {
                barData[i].push(MapData[i][j].value);
                categoryData[i].push(MapData[i][j].name);
            }
        }

        $.getJSON(uploadedDataURL, function (geoJson) {

            echarts.registerMap('GuiZhou', geoJson);
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };
            // 底部时间轴
            optionXyMap01 = {
                timeline: {
                    data: year,
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 6000,
                    symbol: "pin",
                    left: '3%',
                    right: '10%',
                    bottom: '3%',
                    width: '80%',
                    symbolSize: 12,
                    controlPosition: "right",
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(132,132,132,0.5)'
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#41CFB3',
                            }
                        }
                    },
                    lineStyle: {
                        color: 'rgba(132,132,132,0.3)',

                    },
                    itemStyle: {
                        color: "rgba(132,132,132,0.3"
                    },
                    checkpointStyle: {
                        color: "#41CFB3",
                        symbol: "pin",
                        borderWidth: 0,
                        shadowBlur: 10,
                        shadowColor: "rgba(0, 140,140, 1)",
                        shadowOffsetX: 1,
                        shadowOffsetY: 1
                    },
                    controlStyle: {
                        // 后退
                        showPrevBtn: false,
                        // 前进
                        showNextBtn: false,

                        showPrevBtn: false,
                        // 播放
                        showPlayBtn: false,
                        itemGap: 17,
                        borderWidth: 0,
                        normal: {
                            color: '#008c8c',
                            shadowBlur: 10,
                            shadowColor: "rgba(0, 140,140, 1)",
                            shadowOffsetX: 1,
                            shadowOffsetY: 1

                        },
                        emphasis: {
                            color: '#41CFB3',
                            controlStyle: {
                                color: '#f40',
                            }
                        }
                    },
                    // 时间轴进度条
                    progress: {
                        lineStyle: {
                            color: "#41CFB3",
                            width: 2,
                            shadowBlur: 10,
                            shadowColor: "rgba(0, 140,140, 1)",
                            shadowOffsetX: 1,
                            shadowOffsetY: 1
                        },
                        itemStyle: {
                            color: "#41CFB3",
                            shadowBlur: 10,
                            shadowColor: "rgba(0, 140,140, 1)",
                            shadowOffsetX: 1,
                            shadowOffsetY: 1
                        },
                        label: {
                            color: "#41CFB3",
                            fontWeight: "bold",
                        }

                    },
                    // 时间轴原点hover样式
                    emphasis: {
                        itemStyle: {
                            color: "#41CFB3",
                            shadowBlur: 10,
                            shadowColor: "rgba(0, 140,140, 1)",
                            shadowOffsetX: 1,
                            shadowOffsetY: 1
                        }
                    }

                },
                // 柱状图
                baseOption: {
                    animation: true,
                    animationDuration: 3000,
                    animationEasing: 'cubicInOut',
                    animationDurationUpdate: 2000,
                    animationEasingUpdate: 'cubicInOut',
                    grid: {
                        right: '15%',
                        top: '15%',
                        bottom: '15%',
                        width: '20%'
                    },

                    // 地图
                    geo: {
                        show: true,
                        map: 'GuiZhou',
                        zoom: 1,
                        left: '5%',
                        top: '20%',
                        right: '43%',
                        bottom: '20%',
                        zoom: '0.9',
                        center: [106.713478, 26.578343],

                        label: {
                            fontSize: 0,
                        },

                        itemStyle: {
                            normal: {
                                borderColor: '#84FFFE',
                                borderWidth: 1.3,
                                shadowColor: 'rgba(128, 217, 248, 0.7)',
                                shadowOffsetX: -2,
                                shadowOffsetY: 2,
                                shadowBlur: 10,
                                areaColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.8,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(0, 140, 140, 0.1)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(0, 140, 140, 0.13)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                            },
                            emphasis: {
                                areaColor: '#008c8c',
                            }
                        },
                        emphasis: {
                            itemStyle: {
                                areaColor: '#008c8c',
                            }
                        }
                    },
                },
                options: []

            };

            for (var n = 0; n < year.length; n++) {

                optionXyMap01.options.push({
                    backgroundColor: 'transparent',
                    title:
                        [{
                            text: year[n] + " 年贵州各市州 GDP 数据（亿元）",
                            left: '5%',
                            top: '4%',
                            textStyle: {
                                color: colors[colorIndex][n],
                                fontSize: 18,
                                textShadowColor: "rgba(50, 50 50, 0.1)",
                                textShadowBlur: 3,
                                shadowOffsetX: 1,
                                shadowOffsetY: 1,
                            }
                        }
                        ],
                    xAxis: {
                        type: 'value',
                        scale: true,
                        position: 'top',
                        min: 0,
                        boundaryGap: false,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                        },
                    },
                    yAxis: {
                        type: 'category',
                        nameGap: 16,
                        axisLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        data: categoryData[n]
                    },
                    // 地图
                    series: [
                        {
                            type: 'map',
                            map: 'GuiZhou',
                            geoIndex: 0,
                            aspectScale: 0.75, //长宽比
                            showLegendSymbol: false, // 存在legend时显示
                            data: MapData,

                        },
                        //地图中闪烁的点
                        {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: convertData(MapData[n].sort(function (a, b) {
                                return b.value - a.value;
                            }).slice(0, 20)),
                            symbolSize: function (val) {
                                return val[2] / 120;
                            },

                            rippleEffect: {
                                brushType: 'stroke',
                                scale: 3,
                                number: 3
                            },

                            label: {
                                formatter: '{b}',
                                position: 'right',
                                show: true,
                                textShadowColor: "rgba(0, 0, 0, 1)",
                                textShadowBlur: 3,
                                textShadowOffsetX: 1,
                                textShadowOffsetY: 1,
                                color: colors[colorIndex][n]
                            },

                            itemStyle: {
                                normal: {
                                    color: colors[colorIndex][n],
                                    shadowBlur: 10,
                                    shadowColor: colors[colorIndex][n],

                                }
                            },
                            zlevel: 1
                        },
                        // 柱状图地名
                        {
                            zlevel: 1.5,
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: 'transparent',
                                }
                            },
                            data: barData[n],
                            label: {
                                normal: {
                                    color: colors[colorIndex][n],
                                    show: true,
                                    position: ['-45px', '17px'],
                                    textShadowColor: "rgba(0, 0, 0, 1)",
                                    textShadowBlur: 10,
                                    textShadowOffsetX: 1,
                                    textShadowOffsetY: 1,
                                    textStyle: {
                                        fontSize: 13
                                    },
                                    formatter: function (a, b) {
                                        return a.name
                                    }
                                }
                            }

                        },

                        //横向柱状图柱子
                        {
                            zlevel: 1.5,
                            type: 'bar',
                            barWidth: '10',
                            // 柱子样式
                            itemStyle: {
                                normal: {
                                    color: colors[colorIndex][n],
                                    barBorderRadius: 2,
                                    shadowColor: "rgba(0, 0 0, 0.3)",
                                    shadowBlur: 3,
                                    shadowOffsetX: 1,
                                    shadowOffsetY: 1,
                                }
                            },
                            data: barData[n],
                            // 柱状图左边文字
                            label: {
                                normal: {
                                    color: colors[colorIndex][n],
                                    show: true,
                                    position: 'right',
                                    textShadowColor: "rgba(0, 0, 0, 1)",
                                    textShadowBlur: 10,
                                    textShadowOffsetX: 1,
                                    textShadowOffsetY: 1,
                                    textStyle: {
                                        fontSize: 11,
                                    },
                                    formatter: function (a, b) {
                                        return barData[n]
                                    }

                                }
                            }

                        }
                    ]
                })
            }
            myChart.setOption(optionXyMap01);
        });
    });

    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
