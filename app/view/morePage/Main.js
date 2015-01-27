/**
 * Created by Ares on 15/1/14.
 */
Ext.define('MLClient.view.morePage.Main',{
    extend: 'Ext.NavigationView',
    alias: 'widget.moreMain',
    config: {
        title: '更多',
        iconCls: 'bookmarks',
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
            title : '更多',
            style : 'background-color: #FFFFFF',
            //scrollable: {
            //    direction: 'vertical',
            //    directionLock: true
            //},
            layout : {
                type : 'vbox',
                align : 'center'
            },
            //更多界面的操作按键
            items : [
                {
                    xtype: 'button',
                    margin: '20 0 30 0',
                    width: '100%',
                    height: 40,
                    ui: 'normal',
                    text: '招聘',
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
                    text: '优惠码兑换',
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
                    text: '服务范围',
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
                    text: '投我们一票',
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
                    text: '用户反馈',
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
                    text: '关于我们',
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