/**
 * Created by Ares on 15/1/14.
 */
Ext.define('MLClient.view.myInfoPage.Main',{
    extend: 'Ext.NavigationView',
    alias: 'widget.myInfoMain',
    config: {
        title: '我的',
        iconCls: 'user',
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
            title : '我的信息',
            style : 'background-color: #FFFFFF',
            layout : {
                type : 'vbox',
                align : 'center'
            },
            items : [
                //我的信息界面按键
                {
                    xtype: 'button',
                    margin: '5 0 20 0',
                    width: '100%',
                    height: 60,
                    ui: 'normal',
                    text: '登录',
                    listeners: {
                        tap: function() {
                            console.log(this.getText())
                        }
                    }
                },
                {
                    xtype: 'button',
                    margin: '1 1 0 0',
                    width: '100%',
                    height: 40,
                    ui: 'normal',
                    text: '优惠券',
                    listeners: {
                        tap: function() {
                            console.log(this.getText())
                        }
                    }
                },
                {
                    xtype: 'button',
                    margin: '1 1 0 0',
                    width: '100%',
                    height: 40,
                    ui: 'normal',
                    text: '我的收藏',
                    listeners: {
                        tap: function() {
                            console.log(this.getText())
                        }
                    }
                },
                {
                    xtype: 'button',
                    margin: '1 1 0 0',
                    width: '100%',
                    height: 40,
                    ui: 'normal',
                    text: '常用地址',
                    listeners: {
                        tap: function() {
                            console.log(this.getText())
                        }
                    }
                }
            ]

        }]
    }
});