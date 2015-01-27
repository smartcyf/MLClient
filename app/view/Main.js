Ext.define('MLClient.view.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'MLClient.view.mainPage.Main',
        'MLClient.view.billPage.Main',
        'MLClient.view.myInfoPage.Main',
        'MLClient.view.lifeTipsPage.Main',
        'MLClient.view.morePage.Main',
    ],
    config: {
        id: 'mainView',
        fullscreen: true,
        tabBarPosition: 'bottom',

        ui:'light',

        tabBar:
        {
            ui:'light',
            //选项卡居中
            layout:{
                pack:'center'
            }
        },



        //layout:
        //{
        //    type: 'card',
        //    //显示动画
        //    animation:
        //    {
        //        type: 'fade'
        //    }
        //},

        items: [
            {
                xtype: 'localmain'
            },
            {
                xtype: 'billMain'
            },
            {
                xtype: 'myInfoMain'
            },
            {
                xtype: 'lifeMain'
            },
            {
                xtype: 'moreMain'
            }
        ]
    }
});
