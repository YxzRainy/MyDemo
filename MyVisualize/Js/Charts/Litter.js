
// 垃圾处理率
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".Litter"));
    // 2.配置
    option = {
        backgroundColor: 'transparent',

        tooltip: {
            trigger: 'axis',
            formatter: '{b} <br/> {c} %',
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
                lineStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)'
                        }, {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)',
                        }, {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)'
                        }],
                        global: false
                    }
                },
            },

        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['无害化处理率'],
            left: '5%',
            top: '10%',
            textStyle: {
                fontSize: 11,
                color: "#eee",
                textShadowColor: "rgba(0, 0, 0, 1)",
                textShadowBlur: 10,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            }
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle:
                {
                    fontSize: 11,
                    color: "#eee",
                    textShadowColor: "rgba(0, 0, 0, 1)",
                    textShadowBlur: 10,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1,
                },
                margin: 8
            },
            axisTick: {
                show: false
            },

            data: ['2015', '2016', '2017', '2018', '2019']
        }, {
            axisPointer: {
                show: false
            },
            axisLine: {
                show: false

            },
            axisTick: {
                show: false
            },

            position: 'bottom',
            offset: 20,
            data: ['', '', '', '', '', '', '', '', '', '', {
                value: '',
                show: false,
            }, '']
        }],
        yAxis: [{
            type: 'value',
            mim: '95',
            max: '80',
            axisTick: {
                show: false
            },

            axisLine: {
                show: false

            },
            axisLabel: {
                show: true

            },

            splitLine: {
                show: false
            }

        }],
        series: [{
            name: '无害化处理率',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            animationDuration: 5000,
            symbolSize: 6,
            label: {
                show: true,
                fontSize: 11,
                color: "#eee",
                textShadowColor: "rgba(0, 0, 0, 1)",
                textShadowBlur: 10,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
            lineStyle: {
                normal: {
                    width: 1.5,
                    color: '#9EFFC3',
                    barBorderRadius: 2,
                    shadowColor: "rgba(0, 0 0, 0.3)",
                    shadowBlur: 3,
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(158, 255, 195, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(158, 255, 195, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#9EFFC3',
                    borderColor: 'rgba(94,234,147,0.27)',
                    borderWidth: 6

                }
            },
            data: [84.7, 88.7, 90.1, 92, 93.1]
        },]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();