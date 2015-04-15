// ------------- View -------------

Ext.define('Infographic.View', {
    extend: 'Ext.panel.Panel',

    title: 'Infographic: Step 1 (polar chart, pie series, "donut" config, series styling)',
    floating: true,
    constrain: true,

    layout: 'absolute',
    width: 990,

    items: [
        {
            xtype: 'polar',

            width: '100%',
            height: 600,

            //theme: 'Midnight', // TODO 1

            store: {
                type: 'unemployment'
            },

            series: [{
                type: 'pie',
                angleField: 'span',

                // TODO 2
                // donut: 93, // percentage of the series radius

                // TODO 3
                // subStyle: { // Use that instead of 'style' config in case a series has multiple sprites.
                //     strokeStyle: 'white'
                // }
            }]
        }
    ]
});

Ext.onReady(function () {
    Ext.create('Infographic.View', {
        renderTo: Ext.getBody()
    });
});