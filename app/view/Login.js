Ext.define('MLClient.view.Login', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.field.Password'],
    alias: 'widget.login',
    config: {
    	id: 'loginView',
        centered: true,
        height: 325,
        width: '90%',
        modal: true,
        //hidden: true,
        padding: '0 20 0 20',
        layout: {type: 'vbox', align: 'center'},
        items: [
                {
                    xtype: 'fieldset',
                    title: '用户登录',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'username',
                            id: 'username',
                            label: '用户名',
                            required: true
                        },
                        {
                            xtype: 'passwordfield',
                            name: 'password',
                            id: 'password',
                            label: '密码',
                            required: true
                        }
                    ]
                },
                {
                    xtype: 'button',
                    width: 160,
                    height: 40,
                    id: 'btnLogin',
                    ui: 'decline',
                    iconCls: 'user',
                    iconMask: true,
                    text: ' 登录系统 ',
                    handler: function () {
						var usernameProxy = Ext.getCmp('username').getValue();
                        var passwordProxy = Ext.getCmp('password').getValue();
                        if(usernameProxy == '') {
                            Ext.Msg.alert("错误信息", "用户名不能为空.");
                            return;
                        } else if(passwordProxy == '') {
                            Ext.Msg.alert("错误信息", "密码不能为空.");
                            return;
                        }
                        
                        if(usernameProxy=="admin" && passwordProxy=="admin") {
	                        Ext.getCmp('loginView').setHidden(true);
	                    	Ext.Viewport.add(Ext.create('WeiYang.view.Main'));
                        }
                    }
                }
        ]
    }
});