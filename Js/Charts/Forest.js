
// 森林覆盖率
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".Forest"));
    // 2.配置
    var colorArr = ["#218de0", "#01cbb3", "#85e647", "#5d5cda", "#05c5b0", "#A4FEDC"];
    var colorAlpha = ['rgba(60,170,211,0.05)', 'rgba(1,203,179,0.05)', 'rgba(133,230,71,0.05)', 'rgba(93,92,218,0.05)', 'rgba(5,197,176,0.05)', 'rgba(164,254,220,0.05)']
    option = {
        backgroundColor: "transparent",
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)",
            padding: [10, 10, 10, 10],
            borderColor: "transparent",
            backgroundColor: 'rgba(50,50,50,0.8)',
            textStyle: {
                fontSize: 11,
                color: "#eee",
                textShadowColor: "rgba(0, 0, 0, 1)",
                textShadowBlur: 10,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
            axisPointer: {
                type: "shadow",
                shadowStyle: {
                    color: "rgba(0, 140, 140, 0.1)"
                }
            },
        },
        polar: {},
        angleAxis: {
            interval: 1,
            type: 'category',
            data: [],
            z: 10,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
        radiusAxis: {
            min: 40,
            max: 120,
            interval: 20,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,

            },
            splitLine: {
                show: false,

            }
        },
        calculable: true,
        series: [{
            type: 'pie',
            radius: ["2%", "5%"],
            hoverAnimation: false,
            animationDuration: 3000,
            top: '-5%',
            right: '3%',
            left: '3%',
            bottom: '10%',
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                name: '',
                value: 0,
                itemStyle: {
                    normal: {
                        width: '1',
                        color: "#41CFB3",
                        shadowColor: "rgba(0, 140 ,140, 0.3)",
                        shadowBlur: 10,
                        shadowOffsetX: 1,
                        shadowOffsetY: 1,
                    }
                }
            }]
        }, {
            type: 'pie',
            radius: ["70%", "75%"],
            hoverAnimation: false,

            labelLine: {
                normal: {
                    show: false,
                    length: 10,
                    length2: 35
                },
                emphasis: {
                    show: false
                }
            },
            name: "",
            data: [{
                name: '',
                value: 0,
                itemStyle: {
                    normal: {
                        color: "transparent"
                    }
                }
            }]
        }, {
            stack: 'a',
            type: 'pie',
            radius: ['15%', '50%'],
            roseType: 'area',
            zlevel: 10,
            top: '-5%',
            right: '3%',
            bottom: '10%',
            left: '3%',
            animationDuration: 6000,
            label: {
                normal: {
                    show: true,
                    formatter: ['{b|{b}}', '{d|{d}%}'].join('\n'),
                    rich: {
                        // 上
                        b: {
                            fontSize: 11,
                            color: "#41CFB3",
                            textShadowColor: "rgba(0, 0, 0, 1)",
                            textShadowBlur: 10,
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 1,
                            lineHeight: 20
                        },
                        // 下
                        d: {
                            fontSize: 11,
                            color: "#eee",
                            textShadowColor: "rgba(0, 0, 0, 1)",
                            textShadowBlur: 10,
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 1,
                            height: 20
                        },
                    },
                    position: 'outside'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 6,
                    length2: 35,
                    lineStyle: {
                        color: '#41CFB3',
                        width: 1.5,
                        shadowBlur: 10,
                        shadowColor: "rgba(0, 140,140, 1)",
                        shadowOffsetX: 1,
                        shadowOffsetY: 1
                    }
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                value: 50,
                name: '2015',
                itemStyle: {
                    borderColor: colorArr[0],
                    borderWidth: 2,
                    shadowBlur: 20,
                    shadowColor: "#41a8f8",
                    shadowOffsetx: 25,
                    shadowOffsety: 20,
                    color: colorAlpha[0]
                }
            },
            {
                value: 52,
                name: '2016',
                itemStyle: {
                    borderColor: colorArr[1],
                    borderWidth: 2,
                    shadowBlur: 20,
                    shadowColor: colorArr[1],
                    shadowOffsetx: 25,
                    shadowOffsety: 20,
                    color: colorAlpha[1]
                }
            },
            {
                value: 55.3,
                name: '2017',
                itemStyle: {
                    borderColor: colorArr[2],
                    borderWidth: 2,
                    shadowBlur: 20,
                    shadowColor: colorArr[2],
                    shadowOffsetx: 25,
                    shadowOffsety: 20,
                    color: colorAlpha[2]
                }
            },
            {
                value: 57,
                name: '2018',
                itemStyle: {
                    borderColor: colorArr[3],
                    borderWidth: 2,
                    shadowBlur: 20,
                    shadowColor: colorArr[3],
                    shadowOffsetx: 25,
                    shadowOffsety: 20,
                    color: colorAlpha[3]
                }
            },
            {
                value: 59.95,
                name: '2019',
                itemStyle: {
                    borderColor: colorArr[4],
                    borderWidth: 2,
                    shadowBlur: 20,
                    shadowColor: colorArr[4],
                    shadowOffsetx: 25,
                    shadowOffsety: 20,
                    color: colorAlpha[4]
                }
            },
            {
                value: 61.51,
                name: '2020',
                itemStyle: {
                    borderColor: colorArr[5],
                    borderWidth: 2,
                    shadowBlur: 20,
                    shadowColor: colorArr[5],
                    shadowOffsetx: 25,
                    shadowOffsety: 20,
                    color: colorAlpha[5]
                }
            }
            ]
        },]
    }
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();