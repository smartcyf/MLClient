/**
 * Created by Ares on 15/1/14.
 */
/**
 * Created by Ares on 15/1/14.
 */
Ext.define('MLClient.view.billPage.Main',{
    extend: 'Ext.NavigationView',
    alias: 'widget.billMain',
    requires: ['Ext.List'],
    config: {
        title: '订单',
        iconCls: 'time',
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
            title : '订单管理',
            style : {background: 'white'},
            layout : {
                type : 'vbox',
                align : 'center'
            },
            items : [
                {
                    xtype: "titlebar",
                    docked: 'top',
                    layout: {
                        type:'hbox',
                        pack:'end'
                    },
                    items:[
                        {
                            xtype: 'segmentedbutton',
                            align : 'center',

                            items: [
                                { text: '全部订单', width: 100, pressed: true},
                                { text: '未支付订单', width: 100},
                                { text: '待评价订单', width: 100}
                            ],
                            listeners: {
                                toggle: function(container, button, pressed){
                                    if(pressed==true){
                                        console.log(button.getText())
                                    }
                                }
                            }
                        }

                    ]
                },
                //显示订单列表
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
                                {title: '订单号：100010001'},
                                {title: '订单号：101001110'},
                                {title: '订单号：101011000'},
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

function createBillCell(){

}