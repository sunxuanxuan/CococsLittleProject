cc.Class({
    extends: cc.Component,

    properties: {
        frame:{
            default:null,
            type:cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function () {
        this.node.on('touchstart',function(event){
            var curShape=this.frame.getComponent("frame").curShape;
            curShape.reShape();
            var size=this.node.getContentSize();
            this.node.setContentSize(size.width/2,size.height/2);
        },this);
        this.node.on('touchend',function(){
            var size=this.node.getContentSize();
            this.node.setContentSize(size.width*2,size.height*2);
        },this);
        this.node.on('touchcancel',function(){
            var size=this.node.getContentSize();
            this.node.setContentSize(size.width*2,size.height*2);
        },this)
    },

    start () {

    },

    // update (dt) {},
});
