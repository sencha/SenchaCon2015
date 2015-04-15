// ------------- View -------------

Ext.define('Infographic.View', {
    extend: 'Ext.panel.Panel',
    controller: 'infographic',

    title: 'Infographic: Step 7 (cartesian chart, normal and floating axes, "itemhighlight" event)',
    floating: true,
    constrain: true,

    layout: 'absolute',
    width: 990,

    items: [
        {
            xtype: 'polar',

            width: '100%',
            height: 1375,

            insetPadding: '400 0 125 0',

            store: {
                type: 'unemployment'
            },

            sprites: [
                {
                    type: 'rect',
                    x: 50,
                    y: 40,
                    width: 890,
                    height: 100,
                    fillStyle: 'rgba(76, 76, 77, 1.0)'
                },
                {
                    type: 'text',
                    text: 'Changes in U.S. Unemployment',
                    font: 'bold 54px Charter',
                    fillStyle: 'white',
                    x: 70,
                    y: 120
                },
                {
                    type: 'text',
                    text: '2007-2012',
                    font: 'normal 24px Verdana',
                    fillStyle: 'white',
                    x: 730,
                    y: 76
                },
                {
                    type: 'path', // The stripe containing the 'SENCHA INFOGRAPHIC' text.
                    path: 'M0,0 L294,0 L302,8 L302,29.14 C302,29.14 0,29.5 0,29 C0,28.5 0,0 0,0 z',
                    translationX: 34,
                    translationY: 20,
                    fillStyle: '#DDDCD4'
                },
                {
                    type: 'path', // The edge twist of the stripe above.
                    path: 'M0,29.265 L13.5,29.265 L13.5,41.265 z',
                    translationX: 34,
                    translationY: 20,
                    fillStyle: '#9D9D9D'
                },
                {
                    type: 'text',
                    text: 'SENCHA',
                    font: 'normal 12px Verdana',
                    fillStyle: 'rgba(148, 51, 57, 1.0)',
                    x: 60,
                    y: 42
                },
                {
                    type: 'text',
                    text: 'INFOGRAPHIC',
                    font: 'bold 12px Verdana',
                    fillStyle: 'rgba(148, 51, 57, 1.0)',
                    x: 116,
                    y: 42
                },
                {
                    type: 'image', // Sencha leaf logo.
                    src: 'sencha.png',
                    x: 24,
                    y: 10,
                    width: 24,
                    height: 36.5
                },
                {
                    type: 'text',
                    text: 'Forty-three states and the District of Columbia added\n' +
                    'jobs in the past 12 months, but the US has 4.8\n' +
                    'million fewer jobs than it did in 2008. North Dakota\n' +
                    'led the pack with a 7.2 percent increase, but the\n' +
                    'national growth rate was only 1.1 percent. Seven\n' +
                    'states lost jobs.',
                    font: 'normal 20px Charter',
                    textBaseline: 'top',
                    fillStyle: 'black',
                    x: 75,
                    y: 165
                },
                {
                    type: 'text',
                    text: 'Unemployment',
                    font: 'bold 36px Charter',
                    fillStyle: 'rgba(76, 76, 77, 1.0)',
                    textBaseline: 'top',
                    x: 632,
                    y: 165
                },
                {
                    type: 'path', // The legend's up arrow.
                    path: 'M0,6.5 L12.5,0 L25,6.5 L25,21.5 L0,21.5 z',
                    translationX: 748,
                    translationY: 214.5,
                    fillStyle: 'rgba(146, 50, 51, 1.0)'
                },
                {
                    type: 'rect',
                    x: 748,
                    y: 238,
                    width: 25,
                    height: 20,
                    fillStyle: 'rgba(179, 113, 114, 1.0)'
                },
                {
                    type: 'rect',
                    x: 748,
                    y: 260,
                    width: 25,
                    height: 20,
                    fillStyle: 'rgba(126, 135, 142, 1.0)'
                },
                {
                    type: 'rect',
                    x: 748,
                    y: 282,
                    width: 25,
                    height: 20,
                    fillStyle: 'rgba(194, 212, 221, 1.0)'
                },
                {
                    type: 'path', // The legend's down arrow.
                    path: 'M0,15 L12.5,21.5 L25,15 L25,0 L0,0 z',
                    translationX: 748,
                    translationY: 304,
                    fillStyle: 'rgba(114, 166, 185, 1.0)'
                },
                {
                    type: 'text',
                    text: 'rose by more than 1.5%',
                    textAlign: 'right',
                    font: 'normal 13px Charter',
                    fillStyle: 'rgba(56, 54, 54, 1.0)',
                    x: 742,
                    y: 233
                },
                {
                    type: 'text',
                    text: 'rose by 0.5% to 1.5%',
                    textAlign: 'right',
                    font: 'normal 13px Charter',
                    fillStyle: 'rgba(56, 54, 54, 1.0)',
                    x: 742,
                    y: 255
                },
                {
                    type: 'text',
                    text: 'rose by less than 0.5%',
                    textAlign: 'right',
                    font: 'normal 13px Charter',
                    fillStyle: 'rgba(56, 54, 54, 1.0)',
                    x: 742,
                    y: 277
                },
                {
                    type: 'text',
                    text: 'fell by less than 0.5%',
                    textAlign: 'left',
                    font: 'normal 13px Charter',
                    fillStyle: 'rgba(56, 54, 54, 1.0)',
                    x: 778,
                    y: 277
                },
                {
                    type: 'text',
                    text: 'fell by 0.5% to 1.5%',
                    textAlign: 'left',
                    font: 'normal 13px Charter',
                    fillStyle: 'rgba(56, 54, 54, 1.0)',
                    x: 778,
                    y: 298
                },
                {
                    type: 'text',
                    text: 'fell by more than 1.5%',
                    textAlign: 'left',
                    font: 'normal 13px Charter',
                    fillStyle: 'rgba(56, 54, 54, 1.0)',
                    x: 778,
                    y: 318
                },
                {
                    type: 'text',
                    text: 'Roll over a state to learn more.',
                    textAlign: 'center',
                    font: 'bold 17px Charter',
                    fillStyle: 'rgba(77, 77, 78, 1.0)',
                    x: 495,
                    y: 370
                },
                {
                    type: 'rect', // The footer rectangle.
                    x: 50,
                    y: 1300,
                    width: 890,
                    height: 50,
                    fillStyle: 'rgba(76, 76, 77, 1.0)'
                },
                {
                    type: 'text',
                    text: 'Source: Bureau of Labor Statistics',
                    textBaseline: 'top',
                    font: 'normal 12px Tahoma',
                    fillStyle: 'white',
                    x: 60,
                    y: 1310
                },
                {
                    type: 'text',
                    text: 'Sencha infographic by Vitaly Kravchenko\nupdated June 4, 2014',
                    textBaseline: 'top',
                    textAlign: 'right',
                    font: 'normal 12px Tahoma',
                    fillStyle: 'white',
                    x: 930,
                    y: 1310
                }
            ],

            series: [
                {
                    type: 'pie',
                    angleField: 'span',

                    donut: 93,

                    rotation: -Math.PI / 60,

                    subStyle: { // Use that instead of 'style' config in case a series has multiple sprites.
                        strokeStyle: 'white'
                    },

                    renderer: 'onSliceRender2012', // new to v6

                    label: {
                        field: 'label',
                        display: 'inside',
                        orientation: '', // no explicit orientation = horizontal text
                        // 'horizontal' orientation actually places labels perpendicular
                        // to the angle of rotation of the pie slice
                        fillStyle: 'white',
                        fontWeight: 'bold',
                        fontSize: 13,
                        fontFamily: 'Tahoma', // we don't use font shorthand here since theme values will override it

                        renderer: 'onLabelRender2012'
                    }
                },
                {
                    type: 'pie',
                    angleField: 'span',

                    // 'radiusFactor' is a percentage of the original series 'radius'
                    // determined by the chart layout.
                    // The 'radius' config is not meant to be used directly.
                    radiusFactor: 93,
                    // 'donut' is also a percentage of the original series radius
                    // (i.e. it's independent of the 'radiusFactor')
                    donut: 86,

                    rotation: -Math.PI / 60,

                    subStyle: {
                        strokeStyle: 'white'
                    },

                    renderer: 'onSliceRender2011',

                    label: {
                        field: 'label',
                        display: 'inside',
                        orientation: '',
                        fillStyle: 'white',
                        fontSize: 15,
                        fontWeight: 'bold',
                        renderer: 'onLabelRender2011'
                    }
                },
                {
                    type: 'pie',
                    angleField: 'span',

                    radiusFactor: 86,
                    donut: 79,

                    rotation: -Math.PI / 60,

                    subStyle: {
                        strokeStyle: 'white'
                    },

                    renderer: 'onSliceRender2010',

                    label: {
                        field: 'label',
                        display: 'inside',
                        orientation: '',
                        fillStyle: 'white',
                        fontSize: 14,
                        fontWeight: 'bold',
                        renderer: 'onLabelRender2010'
                    }
                },
                {
                    type: 'pie',
                    angleField: 'span',

                    radiusFactor: 79,
                    donut: 73,

                    rotation: -Math.PI / 60,

                    subStyle: {
                        strokeStyle: 'white'
                    },

                    renderer: 'onSliceRender2009',

                    label: {
                        field: 'label',
                        display: 'inside',
                        orientation: '',
                        fillStyle: 'white',
                        fontSize: 13,
                        fontWeight: 'bold',
                        renderer: 'onLabelRender2009'
                    }
                },
                {
                    type: 'pie',
                    angleField: 'span',

                    radiusFactor: 73,
                    donut: 67,

                    rotation: -Math.PI / 60,

                    subStyle: {
                        strokeStyle: 'white'
                    },

                    renderer: 'onSliceRender2008',

                    label: {
                        field: 'label',
                        display: 'inside',
                        orientation: '',
                        fillStyle: 'white',
                        fontSize: 12,
                        fontWeight: 'bold',
                        renderer: 'onLabelRender2008'
                    }
                },
                {
                    type: 'pie',
                    angleField: 'span',

                    radiusFactor: 63, // leave a small gap between between previous series' donut and this series
                    donut: 57,

                    rotation: -Math.PI / 60,

                    subStyle: {
                        strokeStyle: 'white'
                    },

                    renderer: 'onSliceRender2007',

                    label: {
                        field: 'label',
                        display: 'inside',
                        orientation: '',
                        fillStyle: 'white',
                        fontSize: 11,
                        fontWeight: 'bold',
                        renderer: 'onLabelRender2007'
                    }
                }
            ]
        },
        // To minimize redraw time we perform the highlighting in a separate chart,
        // so the larger portion of the infographic is only rendered once.
        {
            xtype: 'polar',

            interactions: ['itemhighlight'],

            animation: false,

            width: '100%',
            height: 1375,

            insetPadding: '400 0 125 0',

            store: {
                type: 'unemployment'
            },

            // Translucent series used for highlighting only.
            series: [
                {
                    type: 'pie',
                    angleField: 'span',

                    donut: 57,

                    rotation: -Math.PI/60,

                    subStyle: {
                        fillStyle: 'none', // not visible unless highlighted
                        strokeStyle: 'none'
                    },

                    // Instead of using the 'highlight' config,
                    // which uses the default highlight style of the series
                    // if set to 'true', or adds to the default highlight style
                    // if given an object, we override the default highlight
                    // style completely by providing our own 'highlightCfg'.
                    highlightCfg: {
                        fillStyle: 'rgba(0,0,0,0.2)'
                    }
                    // Could just as well say:
                    // highlight: {
                    //     fillStyle: 'rgba(0,0,0,0.2)',
                    //     margin: 0 // override the value of default highlight style
                    // }
                },
                {
                    // Dummy series used to render the white ring
                    // where the text "Recession December 2007" is shown.
                    // Displayed above all other series,
                    // including the series used for highlighting.
                    type: 'pie',
                    angleField: 'dummy',

                    radiusFactor: 67,
                    donut: 63,

                    rotation: -Math.PI/60,

                    subStyle: {
                        fillStyle: 'white',
                        strokeStyle: 'none'
                    },

                    // Make a dummy store with a single record for this series
                    // so that only one pie sector (a donut ring) is created,
                    // intead of 50+ sectors (one for each state + separators).
                    store: Ext.create('Ext.data.Store', {
                        fields: ['dummy'],
                        data: [{
                            dummy: 1
                        }]
                    })
                }
            ],

            sprites: { // TODO 5
                id: 'stateName', // the sprite that will show the name of the state selected

                type: 'text',

                fillStyle: 'black',
                text: '',
                textBaseline: 'top',
                textAlign: 'center',
                font: 'bold 30px Charter',
                x: 495,
                y: 650
            },

            listeners: { // TODO 4
                itemhighlight: 'onItemHighlight'
            }
        },
        {
            xtype: 'cartesian', // TODO 1
            reference: 'cartesian',

            width: 350,
            height: 250,

            x: 300,
            y: 700,

            animation: false,

            series: {
                type: 'bar',

                xField: 'year',
                yField: 'percent',

                style: {
                    strokeStyle: 'none',
                    maxBarWidth: 34
                },

                renderer: 'onBarRender' // TODO 6
            },

            axes: [ // TODO 2
                {
                    type: 'numeric',
                    position: 'left',

                    title: {
                        text: 'percent',
                        fontSize: 16,
                        fontFamily: 'Charter'
                    },

                    titleMargin: 16,

                    minimum: -3,
                    maximum: 6
                },
                {
                    type: 'category',
                    position: 'bottom',

                    floating: { // TODO 3
                        alongAxis: 0,
                        value: 0
                    }
                }
            ]
        }
    ]

});

// ------------- Controller -------------

Ext.define('Infographic.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.infographic',

    onItemHighlight: function (chart, item) {
        // The 'item' parameter here is an object that holds information
        // about the highlighted item, like its 'index', the 'series' it belongs to,
        // the associated store 'record' and its 'field'.

        var cartesianChart = this.lookupReference('cartesian'),
            store = cartesianChart.getStore(),
            record = item.record,
            recordData = record.data,
            label = record.get('label'),
            storeData;

        if (!label || label === 'year') {
            // Don't highlight the sectors that separate the regions
            // and the sector that shows the year.
            item.series.setAttributesForItem(item, {
                highlighted: false
            });
        } else {
            // Update the text of the sprite that shows the name of the state
            // selected in the pie chart.
            chart.getSurface('chart').get('stateName').setAttributes({
                text: record.get('state')
            });

            storeData = [
                {year: '2007', percent: recordData.y2007},
                {year: '2008', percent: recordData.y2008},
                {year: '2009', percent: recordData.y2009},
                {year: '2010', percent: recordData.y2010},
                {year: '2011', percent: recordData.y2011},
                {year: '2012', percent: recordData.y2012}
            ];

            // Display unemployment changes for the highlighted state inside the cartesian chart.
            if (store.isEmptyStore) {
                cartesianChart.setStore({
                    fields: ['year', 'percent'],
                    data: storeData
                });
            } else {
                store.setData(storeData);
            }
        }
    },

    onBarRender: function (sprite, config, data, index) {
        var percent = data.store.getAt(index).get('percent');

        return {
            fillStyle: this.getStateColor(percent)
        };
    }

}, function () {
    Ext.apply(this.prototype, {

        onSliceRender2012: function (sprite, config, data, index) {
            return this.onSliceRender('y2012', sprite, config, data, index);
        },

        onLabelRender2012: function (text) {
            if (text === 'year') {
                return {
                    text: '2012',
                    font: 'bold 16px sans-serif'
                };
            }
        },

        onSliceRender2011: function (sprite, config, data, index) {
            return this.onSliceRender('y2011', sprite, config, data, index);
        },

        onLabelRender2011: function (text) {
            return this.onLabelRender('2011', text);
        },

        onSliceRender2010: function (sprite, config, data, index) {
            return this.onSliceRender('y2010', sprite, config, data, index);
        },

        onLabelRender2010: function (text) {
            return this.onLabelRender('2010', text);
        },

        onSliceRender2009: function (sprite, config, data, index) {
            return this.onSliceRender('y2009', sprite, config, data, index);
        },

        onLabelRender2009: function (text) {
            return this.onLabelRender('2009', text);
        },

        onSliceRender2008: function (sprite, config, data, index) {
            return this.onSliceRender('y2008', sprite, config, data, index);
        },

        onLabelRender2008: function (text) {
            return this.onLabelRender('2008', text);
        },

        onSliceRender2007: function (sprite, config, data, index) {
            return this.onSliceRender('y2007', sprite, config, data, index);
        },

        onLabelRender2007: function (text) {
            return this.onLabelRender('2007', text);
        },

        // -------------------------------------------------------------------------

        onSliceRender: function (field, sprite, config, data, index) {
            var record = data.store.getAt(index),
                label = record.get('label'),
                unemploymentChange = record.get(field),
                style = {};

            if (label === '') {
                style.fillStyle = 'none';
                style.strokeStyle = 'none';
            } else if (label === 'year') {
                style.fillStyle = 'rgba(70, 70, 69, 1.0)';
            } else {
                style.fillStyle = this.getStateColor(unemploymentChange);
            }
            return style;
        },

        onLabelRender: function (year, text) {
            return text === 'year' ? {
                text: year
            } : {
                hidden: true
            };
        },

        // Returns color based on percentage change in unemployment.
        getStateColor: function (unemployment) {
            if (unemployment < -1.5) {
                return 'rgba(114, 166, 185, 1.0)';
            } else if (unemployment < -0.5) {
                return 'rgba(194, 212, 221, 1.0)';
            } else if (unemployment < 0.5) {
                return 'rgba(126, 135, 142, 1.0)';
            } else if (unemployment < 1.5) {
                return 'rgba(179, 113, 114, 1.0)';
            } else {
                return 'rgba(146, 50, 51, 1.0)';
            }
        }
    });
});

Ext.onReady(function () {
    Ext.draw.TextMeasurer.precise = true;

    Ext.create('Infographic.View', {
        renderTo: Ext.getBody()
    });
});