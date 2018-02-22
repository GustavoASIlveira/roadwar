var bootState = {
	preload: function(){
		game.load.image('progressBar','img/progressBar.png');
	},
	
	create: function(){
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
	
		game.state.start('load');
	}
};
