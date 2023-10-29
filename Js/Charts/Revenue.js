
// 常住居民人均可支配收入
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".Revenue"));
    // 2.配置
    var option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'axis',
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
        grid: {
            left: '2%',
            right: '5%',
            bottom: '17%',
            top: '16%',
            containLabel: true
        },
        legend: {
            data: ['农村', '城市'],
            left: '5%',
            top: '7%',
            textStyle: {
                fontSize: 11,
                color: "#eee",
                textShadowColor: "rgba(0, 0, 0, 1)",
                textShadowBlur: 10,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
            itemStyle: {
                shadowColor: "rgba(0, 0 0, 0.3)",
                shadowBlur: 3,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
            },
            itemWidth: 15,
            itemHeight: 10,
            itemGap: 20
        },
        xAxis: {
            type: 'category',
            data: ['2015', '2016', '2017', '2018', '2019', '2020'],
            axisLine: {
                show: false,

            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    color: "#eee",
                    textShadowColor: "rgba(0, 0, 0, 1)",
                    textShadowBlur: 10,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1,
                }
            },
        },

        yAxis: [{
            type: 'value',
            axisLine: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,

            },
            axisLine: {
                lineStyle: {
                    color: '#cdd5e2'
                }
            },
        },

        ],
        series: [{
            name: '农村',
            type: 'bar',
            barWidth: '18px',
            animationDuration: 5000,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0ba360'

                    }, {
                        offset: 1,
                        color: '#3cba92',

                    }]),
                    barBorderRadius: 2,
                    shadowColor: "rgba(0, 0 0, 0.3)",
                    shadowBlur: 3,
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,
                },
            },
            label: {
                rotate: 15,
                show: true,
                position: "top",
                fontSize: 10,
                color: "#eee",
                textShadowColor: "rgba(0, 0, 0, 1)",
                textShadowBlur: 10,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
            data: [7387, 8090, 8869, 9716, 10756, 11642]
        },
        {
            name: '城市',
            type: 'bar',
            barWidth: '18px',
            animationDuration: 5000,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00c6fb'
                    }, {
                        offset: 1,
                        color: '#005bea'
                    }]),
                    barBorderRadius: 2,
                    shadowColor: "rgba(0, 0 0, 0.3)",
                    shadowBlur: 3,
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,
                }

            },
            label: {
                rotate: 15,
                show: true,
                position: "top",
                fontSize: 10,
                color: "#eee",
                textShadowColor: "rgba(0, 0, 0, 1)",
                textShadowBlur: 10,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
            data: [24580, 26743, 29080, 31592, 34404, 36096]
        },

        ]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();