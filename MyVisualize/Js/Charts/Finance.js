// 金融情况
(function () {
    var myChart = echarts.init(document.querySelector(".Finance"));
    var data = [27170.61, 26473.34, 26088.89, 23770.93, 19438.64];
    var className = ['2019', '2018', '2017', '2016', '2015'];
    var colorList = ['#00FFF3', '#FCB2B2', '#52BDFF', '#72FFAD', '#72FFF2'];
    var defaultData = [100, 100, 100, 100, 100, 100];
    option = {
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
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
            formatter: function (params) {
                return params[0].name + '<br/>' +
                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                    // params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
                    params[0].seriesName + ' : ' + params[0].value
            }
        },
        backgroundColor: 'transparent',
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize: 11,
                    color: "#eee",
                    textShadowColor: "rgba(0, 0, 0, 1)",
                    textShadowBlur: 10,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1,
                },
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: className
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    color: "#eee",
                    textShadowColor: "rgba(0, 0, 0, 1)",
                    textShadowBlur: 10,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1,
                },
                formatter: function (value) {
                    return value;
                },
            },
            data: data
        }],
        series: [{
            name: '金融机构人民币存款余额',
            type: 'bar',
            zlevel: 1,
            animationDuration: 6000,
            itemStyle: {
                normal: {
                    barBorderRadius: 2,
                    color: (params) => {
                        return colorList[params.dataIndex]
                    },
                    barBorderRadius: 2,
                    shadowColor: "rgba(0, 0 0, 0.3)",
                    shadowBlur: 3,
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,
                },
            },
            label: {
                show: false,
                position: 'right',
                color: "#eee",
                fontSize: 11
            },

            barWidth: 12,
            data: data,

        },

        ]
    };
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



