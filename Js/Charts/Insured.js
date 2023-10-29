
// 基本医疗保险参保人数
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".Insured"));
    // 2.配置
    var data1 = [709, 1999, 709, 2299, 3299, 2299, 1999, 2999, 1999, 709, 1999, 709];
    var data2 = [1709, 2999, 1799, 3299, 4299, 3299, 2999, 3999, 2999, 1709, 2999, 1709];
    var xData = function () {
        var data = [];
        for (var i = 2015; i < 2021; i++) {
            data.push(i);
        }
        return data;
    }();
    option = {
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
            borderWidth: 0,
            top: '20%',
            left: '5%',
            bottom: '28%',
            textStyle: {
                color: '#fff',
            },
        },
        legend: {
            top: '5%',
            left: '10%',
            textStyle: {
                fontSize: 11,
                color: "#eee",
                textShadowColor: "rgba(0, 0, 0, 1)",
                textShadowBlur: 10,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
            itemWidth: 28,
            itemHeight: 28,
            data: [
                {
                    name: '参保人数',
                    icon:
                        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA1ElEQVR4Xu2WsQ2AMBADP4ghYBtGZxsYAhHEAMQ19tF+g+/PSVqFfy08fwEAA8IJUIFwATgEqQAVCCdABcIF4BagAlQgnAAVCBeAW4AKUIFwAlQgXABuASpABcIJjCtw9O3vfOaquta2f+UYApjO3v8O4P3/e2mfOQEw2jAGpFeg0g9BhwNQZeAlqAi5zzHAfcMqHwYoQu5zDHDfsMqHAYqQ+xwD3Des8mGAIuQ+xwD3Dat8GKAIuc8xwH3DKh8GKELucwxw37DKhwGKkPscA9w3rPI9drIYQbytq9EAAAAASUVORK5CYII=',
                },
                {
                    name: '趋势',
                    icon:
                        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA1UlEQVRYR+2UMQ7CMAxFvxdyFtqVhREpZ+AEnIyRM1RiY2NsOQgTXYzSUlVNm9ZWhwrJnvPjpxfHhI2LNu4PAzADZsAM/I+BT5FnAF8JqBl0cb6sNFu0z/N751+nLisy0ISJb2DkTZBQgukshYjyT+ergxhgEA6NQwUQIcQoH4HPGpgKtwZ+NhYglpq3MhM1F5ZcLDmTBJCE1wImZ0DSvAuvfaKRAU3zJIRySAczUBfZg4GjdMInIZTfNALY3wFy6xaNblGJFpFm42nPGoAZMANmwAx8ASjjyiGj/fCxAAAAAElFTkSuQmCC',
                },
            ],
        },
        xAxis: [
            {
                type: 'category',
                axisLine: {
                    show: false,

                },
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitArea: {
                    show: false,
                },
                axisLabel: {
                    fontSize: 11,
                    color: "#eee",
                    textShadowColor: "rgba(0, 0, 0, 1)",
                    textShadowBlur: 10,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1,
                },
                data: xData,
            },
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,

                },
                splitArea: {
                    show: false,
                },
            },
        ],
        // yAxis: [
        //   {
        //     type: 'value',
        //     show: false,
        //     name: '',
        //     min: 0,
        //     max: 2400,
        //     position: 'right',
        //     axisLine: {
        //       lineStyle: {
        //         color: 'rgba(2, 13, 32, 1)'
        //       }
        //     },
        //     axisLabel: {
        //       formatter: '{value}'
        //     }
        //   },
        //   {
        //     type: 'value',
        //     name: '周转量',
        //     show: false,
        //     min: 0,
        //     max: 2400,
        //     position: 'right',
        //     offset: 80,
        //     axisLine: {
        //       lineStyle: {
        //         color: 'rgba(2, 13, 32, 1)'
        //       }
        //     },
        //     axisLabel: {
        //       formatter: '{value}'
        //     }
        //   },
        //   {
        //     type: 'value',
        //     // name: '单位：人公里',
        //     min: 0,
        //     max: 2400,
        //     position: 'left',
        //     axisLine: {
        //       lineStyle: {
        //         color: '#fff'
        //       }
        //     },
        //     axisLabel: {
        //       formatter: '{value}'
        //     }
        //   }
        // ],
        series: [
            {
                name: '参保人数',
                type: 'bar',
                // "stack": "总量",
                barMaxWidth: 15,
                barGap: '10%',
                animationDuration: 5000,

                itemStyle: {
                    normal: {
                        barBorderRadius: 2,
                        shadowColor: "rgba(0, 0 0, 0.3)",
                        shadowBlur: 3,
                        shadowOffsetX: 1,
                        shadowOffsetY: 1,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#5AEEEB', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#1C504F', // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                    },
                },
                data: data1,
            },
            {
                name: '趋势',
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                animationDuration: 5000,
                label: {
                    show: true,
                    position: "top",
                    fontSize: 11,
                    color: "#eee",
                    textShadowColor: "rgba(0, 0, 0, 1)",
                    textShadowBlur: 10,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1,
                },
                itemStyle: {
                    normal: {
                        color: "#008c8c",
                        borderColor: "#41CFB3",
                        borderWidth: 1,
                    },
                },
                lineStyle: {
                    normal: {
                        width: 1.5,
                        color: {
                            type: 'linear',
                            barBorderRadius: 2,
                            shadowColor: "rgba(0, 0 0, 0.3)",
                            shadowBlur: 3,
                            shadowOffsetX: 1,
                            shadowOffsetY: 1,
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#BDFFBA', // 0% 处的颜色
                                },
                                {
                                    offset: 0.45,
                                    color: '#BAFFD8', // 45% 处的颜色
                                },
                                {
                                    offset: 0.85,
                                    color: '#BAFFEE', // 85% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#BAF8FF', // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                    },
                },
                data: data2,
            },
        ],
    };



    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();