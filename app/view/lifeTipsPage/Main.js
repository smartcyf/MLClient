/**
 * Created by Ares on 15/1/14.
 */
Ext.define('MLClient.view.lifeTipsPage.Main',{
    extend: 'Ext.NavigationView',
    alias: 'widget.lifeMain',
    config: {
        title: '生活',
        iconCls: 'team',
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
        items :[{
            xtype : 'container',
            title : '资讯',
            style : 'background-color: #FFFFFF',
            layout : {
                type : 'vbox',
                align : 'center'
            },
            items : [
                //资讯列表
                {
                    xtype: 'container',
                    width:'100%',
                    height: '100%',
                    initialize: function () {
                        var list = Ext.create('Ext.List', {
                            scrollable: {
                                direction: 'vertical',
                                directionLock: true
                            },
                            itemTpl: '{title}',
                            height: '100%',
                            data: [
                                {title: '手足养护的方法'},
                                {title: '精油特性的科普'},
                                {title: '优惠信息'},
                            ],
                            listeners:{
                            }
                        });
                        this.add(list);
                    }
                }
            ]
        }]
    }
});