var game = new Phaser.Game(400,600,Phaser.CANVAS);
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	
	
	game.global = {
		highScore: 0
	};
	
	game.state.add('boot',bootState);
	game.state.add('load',loadState);
	game.state.add('menu',menuState);
	game.state.add('lvl1',lvl1State);
	game.state.add('lvl2',lvl2State);
	game.state.add('end',endState);
	
	game.state.start('boot');
