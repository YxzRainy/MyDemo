// 时间轴
(function () {

    var myChart = echarts.init(document.querySelector(".TimeLines"));

    let list = [
        {
            policy_content: '围绕“四新”主攻“四化”\n新经济潜力得到进一步激发\n新经济发展再上新台阶',
            policy_country: '贵州',
            policy_time: '新经济助力高质量发展',
            policy_title: '围绕“四新”主攻“四化”\n新经济潜力得到进一步激发\n新经济发展再上新台阶',
        },
        {
            policy_content: '贵州省大力实施工业倍增行动\n奋力实现工业大突破\n夯实全省工业经济发展基础',
            policy_country: '贵州',
            policy_time: '市场主体明显增多',
            policy_title: '贵州省大力实施工业倍增行动\n奋力实现工业大突破\n夯实全省工业经济发展基础',
        },
        {
            policy_content: '守住速度的底线\n守住收入的底线\n守住脱贫的底线\n守住脱贫的底线',
            policy_country: '贵州',
            policy_time: '守底线',
            policy_title: '守住收入的底线\n守住脱贫的底线\n守住脱贫的底线',
        },
        {
            policy_content: '十二个农业特色优势产业\n各个方面都有显著提升',
            policy_country: '贵州',
            policy_time: '农村产业革命取得重大突破',
            policy_title: '十二个农业特色优势产业\n各个方面都有显著提升',
        },
        {
            policy_content: '打造发展好环境，建设陆海新通道，参与国际大分工 ',
            policy_country: '贵州',
            policy_time: '打造内陆开放新高地',
            policy_title: '打造发展好环境\n建设陆海新通道\n参与国际大分工 ',
        },
        {
            policy_content: '坚持生态产业化、产业生态化，绿色经济“四型',
            policy_country: '贵州',
            policy_time: '生态优先 绿色发展',
            policy_title: '坚持生态产业化\n坚持产业生态化',
        },
        {
            policy_content: '全面深化改革开放，发展活力空前释放',
            policy_country: '贵州',
            policy_time: '改革创新助力发展',
            policy_title: '加快推进“放管服”等改革\n建成了全国第一个覆盖全省的\n电子政务网平台',
        },
        {
            policy_content: '保持了近十年全国领先的经济增速',
            policy_country: '贵州',
            policy_time: '黄金十年',
            policy_title: '保持了近十年全\n国领先的经济增速',
        },
        {
            policy_content: '彻底撕掉千百年来的绝对贫困标签',
            policy_country: '贵州',
            policy_time: '新跨越 奔小康',
            policy_title: '彻底撕掉千百年来的\n绝对贫困标签',
        },

        {
            policy_content: '疫情防控最好的省份之一',
            policy_country: '贵州',
            policy_time: '疫情防控',
            policy_title: '疫情防控最好的省份之一',
        },
        {
            policy_content: '疫情防控最好的省份之一',
            policy_country: '贵州',
            policy_time: '十四五规划未来更加可期',
            policy_title: '牢牢守好发展和生态两条底线\n大力推动新型工业化、新型城镇化\n农业现代化、旅游产业化”',
        },
    ];
    let seriesList = [];
    var yarr = [];
    var linearr = [];
    var linev = { value: -0, symbol: 'none' };

    list.map((item, index) => {
        seriesList.push({
            date: item.policy_time,
            title: item.policy_title,
            content: item.policy_content,
            // country: item.policy_country,
            value: 0,
            label: {
                show: true,
                lineHeight: 20,
                align: index % 2 == 0 ? 'left' : 'right',
                padding: 20,
                position: index % 2 == 0 ? 'left' : 'right',
                formatter: function (params) {
                    return `{bolder|${params.name}}\n${params.data.title}`;
                },
                rich: {
                    bolder: {
                        // 时间轴标题
                        fontWeight: 600,
                        color: '#41CFB3',
                        fontSize: 12.5,
                        textShadowColor: "rgba(0, 0, 0, 1)",
                        textShadowBlur: 10,
                        textShadowOffsetX: 1,
                        textShadowOffsetY: 1,
                    },
                },
            },
        });
    });
    seriesList.map((item, index) => {
        linearr.push({
            value: -0,
        });
        // yarr.push(`${item.date}  ${item.country}`);
        yarr.push(`${item.date} `);

    });
    option = {
        grid: {
            top: '0',
            left: '50%',
            right: '0',
            bottom: '5%',
        },
        tooltip: {
            show: false,
            confine: true,
            backgroundColor: 'rgba(50,50,50,0.8)',
            borderColor: "transparent",

            formatter: function (params) {
                return params.data.content
            },
        },

        xAxis: {
            show: false,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { show: false },
            splitLine: { show: false },
            min: 0,
            max: 0,
        },
        yAxis: {
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    width: 5,
                    // 底部线条
                    color: 'transparent',
                },
            },

            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {

                show: false,
            },
            data: ['', ...yarr, ''],
        },
        // 内容
        series: [
            {
                type: 'line',
                symbolSize: 7,
                animation: true,
                animationDuration: 7000,
                label: {
                    show: true,
                    fontSize: 12,
                    color: "#eee",
                    textShadowColor: "rgba(0, 0, 0, 1)",
                    textShadowBlur: 10,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1,
                    // overflow: "break",
                    width: 150,
                },
                itemStyle: {
                    normal: {
                        color: '#41CFB3',
                        borderColor: 'rgba(0,140,140,0.3)',
                    }
                },
                hoverAnimation: false,
                legendHoverLink: false,
                data: [linev, ...seriesList, linev],
                lineStyle: {
                    // 顶部线条
                    width: 3,
                    shadowBlur: 10,
                    shadowColor: "rgba(0, 140,140, 1)",
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                },
            },
        ],
    };

    // 3. 把配置项给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
