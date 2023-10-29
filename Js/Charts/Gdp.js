// 地区生产总值
(function () {
    var myChart = echarts.init(document.querySelector(".Gdp"));

    data = [
        {
            name: "1949",
            value: 6
        },
        {
            name: "1960",
            value: 22
        },
        {
            name: "1970",
            value: 28
        },
        {
            name: "1980",
            value: 60
        },

        {
            name: "1990",
            value: 260
        },
        {
            name: "2000",
            value: 993
        },
        {
            name: "2010",
            value: 4602
        },
        {
            name: "2020",
            value: 17826
        }
    ];
    xAxisData = [];
    seriesData1 = [];
    sum = 0;
    barTopColor = ["#00FFF3", "#52BDFF", "#FF7D7D", "#72FFAD", "#72FFF2", "#99F7FF", "#D3F7FF", "#86FF97"];
    barBottomColor = ["rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)", "rgba(161, 84, 233, 0.1)", "rgba(161, 84, 233, 0.1)", "rgba(153, 247, 255, 0.1)", "rgba(211, 245,255, 0.1)", "rgba(134, 255, 151, 0.1)"];
    data.forEach(item => {
        xAxisData.push(item.name);
        seriesData1.push(item.value);
        sum += item.value;
    });
    option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: "axis",
            padding: [10, 10, 10, 10],
            borderColor: "transparent",
            backgroundColor: 'rgba(50,50,50,0.8)',
            formatter: "{c}亿元",

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
                },

            },
        },
        grid: {
            top: '25%',
            bottom: '42%',
            left: '3%',
            right: '3%',
        },

        xAxis: {
            data: xAxisData,

            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                margin: 15,
                align: 'center',

                textStyle: {
                    fontSize: 11,
                    color: "#eee",
                    textShadowColor: "rgba(0, 0, 0, 1)",
                    textShadowBlur: 10,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1,
                    rich: {
                        a: {
                            fontSize: 11,
                            color: '#ffffff'
                        },
                        b: {
                            height: 20,
                            fontSize: 11,
                            color: '#999'
                        }
                    }
                }
            },
            interval: 0
        },
        yAxis: {
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false

            }
        },
        series: [{
            name: '柱顶部',
            type: 'pictorialBar',
            symbolSize: [10, 3],
            symbolOffset: [0, -2],
            z: 12,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return barTopColor[params.dataIndex];
                    }
                }
            },
            label: {
                show: true,
                position: 'top',
                fontSize: 11,
                color: "#eee",
                textShadowColor: "rgba(0, 0, 0, 1)",
                textShadowBlur: 10,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
            symbolPosition: 'end',
            data: seriesData1,
        }, {
            name: '柱底部',
            type: 'pictorialBar',
            symbolSize: [10, 3],
            symbolOffset: [0, 2],
            z: 12,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return barTopColor[params.dataIndex];
                    }
                }
            },
            data: seriesData1
        }, {
            name: '第一圈',
            type: 'pictorialBar',
            symbolSize: [20, 4],
            symbolOffset: [0, 3],
            z: 11,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#3ACDC5',
                    borderWidth: 2
                }
            },
            data: seriesData1
        }, {
            name: '第二圈',
            type: 'pictorialBar',

            symbolSize: [25, 7],
            symbolOffset: [0, 6],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: barTopColor[0],
                    borderWidth: 2
                }
            },
            data: seriesData1
        }, {
            type: 'bar',
            animationDuration: 5000,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                offset: 1,
                                color: barTopColor[params.dataIndex]
                            },
                            {
                                offset: 0,
                                color: barBottomColor[params.dataIndex]
                            }
                            ]
                        );
                    },
                    opacity: 0.8
                }
            },
            z: 16,
            silent: true,
            barWidth: 10,
            barGap: '-100%', // Make series be overlap
            data: seriesData1
        }]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
