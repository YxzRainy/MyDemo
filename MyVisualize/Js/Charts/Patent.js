
// 专利授权
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".Patent"));
    // 2.配置
    option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'axis',
            borderColor: "transparent",
            padding: [10, 10, 10, 10],
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
            show: true,
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
            top: '8%',
            left: '5%',
        },
        grid: {
            top: '20%',
            left: '10%',
            right: '5%',
            bottom: '28%',
        },
        xAxis: [{
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },

            axisLabel: {
                fontSize: 11,
                color: "#eee",
                textShadowColor: "rgba(0, 0, 0, 1)",
                textShadowBlur: 10,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
            splitLine: {
                show: false
            },
            boundaryGap: false,
            data: ["2015", "2016", "2017", "2018", "2019", "2020"]//this.$moment(data.times).format("HH-mm") ,

        }],

        yAxis: [{
            type: 'value',
            min: 0,
            splitLine: {
                show: false,

            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,

            },
            axisTick: {
                show: false,
            },
        }],
        series: [
            {
                name: '专利授权个数',
                type: 'line',
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 10,
                animationDuration: 5000,
                lineStyle: {
                    normal: {
                        color: "#008c8c",
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        fontSize: 11,
                        color: "#eee",
                        textShadowColor: "rgba(0, 0, 0, 1)",
                        textShadowBlur: 10,
                        textShadowOffsetX: 1,
                        textShadowOffsetY: 1,
                    }
                },
                itemStyle: {
                    color: "#008c8c",
                    borderColor: "#41CFB3",
                    borderWidth: 1,
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgba(43,193,145,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(43,193,145,0)'
                            }
                        ], false),
                    }
                },
                data: [14115, 10425, 12559, 19456, 24729, 34971]//data.values
            },
            // {
            //     name: '液位异常报警',
            //     type: 'line',
            //     showAllSymbol: true,
            //     symbol: 'circle',
            //     symbolSize: 10,
            //     lineStyle: {
            //         normal: {
            //             color: "#2CABE3",
            //         },
            //     },
            //     label: {
            //         show: true,
            //         position: 'top',
            //         textStyle: {
            //             color: '#2CABE3',
            //         }
            //     },
            //     itemStyle: {
            //         color: "#2CABE3",
            //         borderColor: "#eee",
            //         borderWidth: 2,
            //     },
            //     areaStyle: {
            //         normal: {
            //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //                 {
            //                     offset: 0,
            //                     color: 'rgba(81,150,164,0.3)'
            //                 },
            //                 {
            //                     offset: 1,
            //                     color: 'rgba(81,150,164,0)'
            //                 }
            //             ], false),
            //         }
            //     },
            //     data: [3, 5, 4, 2, 1, 7, 6, 3, 5, 7]//data.values
            // },
        ]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();