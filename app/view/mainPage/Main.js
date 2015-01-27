/**
 * Created by Ares on 15/1/14.
 */
Ext.define('MLClient.view.mainPage.Main',{
    extend: 'Ext.NavigationView',
    alias: 'widget.localmain',
    requires: [
        'Ext.Carousel',
        'Ext.Img'
    ],
    config: {
        title: '首页',
        iconCls: 'home',
        useTitleForBackButtonText: 'true',

        navigationBar : {
                ui: 'light',
                margin : '20 0 0 0',
            items : [{
                    iconMask : true,
                    iconCls : 'locate',
                    hidden : false,
                    text : '位置',
                    //ui : 'back',
                    action : 'changeUser',
                    align : 'left'
                },
                {
                    iconMask : true,
                    iconCls : 'star',
                    hidden : false,
                    text : '客服',
                    //ui : 'back',
                    action : 'changeUser',
                    align : 'right'
                }]
        },
        items :[
            {
            xtype : 'container',
            title : 'JOY',
            style : 'background-color: #FFFFFF',
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
            layout : {
                type : 'vbox',
                align : 'center'
            },
            items : [
                {
                    xtype: 'carousel',

                    defaults: {
                        styleHtmlContent: true
                    },
                    width: '100%',
                    height:220,
                    margin: '5 0 0 0',
                    layout : {
                        type : 'vbox',
                        align : 'center'
                    },

                    items: [
                        {
                            xtype: 'image',
                            src: 'resources/tempImages/c1.png',
                            flex: 1,
                            width: '100%',
                            height:220
                        },
                        {
                            xtype: 'image',
                            src: 'resources/tempImages/c2.png',
                            flex: 1,
                            width: '100%',
                            height:220
                        },
                        {
                            xtype: 'image',
                            src: 'resources/tempImages/c3.png',
                            flex: 1,
                            width: '100%',
                            height:220
                        },
                        {
                            xtype: 'image',
                            src: 'resources/tempImages/c4.png',
                            flex: 1,
                            width: '100%',
                            height:220
                        }
                    ]
                },

                {
                    xtype: 'container',
                    layout : {
                        type : 'hbox',
                        align : 'center'
                    },
                    margin: '10 0 10 0',
                    items: [
                        {
                            xtype: 'button',
                            text: '预约美容',
                            width: 165,
                            height: 120,
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'button',
                            text: '美容师',
                            width: 165,
                            height: 120,
                            margin: '0 5 0 5'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout : {
                        type : 'hbox',
                        align : 'center'
                    },
                    margin: '0 0 10 0',
                    items: [
                        {
                            xtype: 'button',
                            text: '预约彩妆',
                            width: 165,
                            height: 120,
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'button',
                            text: '化妆师',
                            width: 165,
                            height: 120,
                            margin: '0 5 0 5'
                        }
                    ]
                }

            ]

        }]
    }
});