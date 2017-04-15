var menuState={
  preload : function(){
    // CSW.scale.pageAlignVertically = true;
    // CSW.scale.pageAlignHorizontally = true;
    // CSW.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //
    // CSW.time.advancedTiming = true;
    CSW.stage.backgroundColor = "#000000";
    CSW.world.setBounds(0,0, CSW.configs.GAME_WIDTH, CSW.configs.GAME_HEIGHT);
    CSW.scale.pageAlignVertically = true;
    CSW.scale.pageAlignHorizontally= true;
    CSW.scale.scaleMode= Phaser.ScaleManager.SHOW_ALL;
    CSW.time.advancedTiming= true;
    CSW.physics.startSystem(Phaser.Physics.P2JS);
    CSW.load.atlasJSONHash('assets', 'Assets/Textures/buttons.png', 'Assets/Textures/buttons.json');
    CSW.load.image('player','Assets/Textures/Player/Player.png');
    CSW.load.image('circle_cyan','Assets/Textures/Obstacles/Circle/cyan.png');
    CSW.load.image('circle_pink','Assets/Textures/Obstacles/Circle/pink.png');
    CSW.load.image('circle_purple','Assets/Textures/Obstacles/Circle/purple.png');
    CSW.load.image('circle_yellow','Assets/Textures/Obstacles/Circle/yellow.png');
    CSW.load.image('stripe_cyan','Assets/Textures/Obstacles/Stripes/cyan.png');
    CSW.load.image('stripe_pink','Assets/Textures/Obstacles/Stripes/pink.png');
    CSW.load.image('stripe_purple','Assets/Textures/Obstacles/Stripes/purple.png');
    CSW.load.image('stripe_yellow','Assets/Textures/Obstacles/Stripes/yellow.png');
    CSW.load.image('switch','Assets/Textures/Obstacles/switch.png');
    CSW.load.image('star','Assets/Textures/Obstacles/Star/Star.png');
    CSW.load.physics('circle_physics','Assets/Textures/Obstacles/Circle/circle.json');
    CSW.load.physics('stripe_physics','Assets/Textures/Obstacles/Stripes/stripe.json');

    CSW.load.atlasJSONHash('assets', 'Assets/Textures/buttons.png', 'Assets/Textures/buttons.json');
    CSW.load.image('playbutton','Assets/Textures/play.png');
    CSW.load.image('maxresdefault','Assets/Textures/maxresdefault.png');
    CSW.load.spritesheet('button_like','Assets/Textures/like.png' , 0,0);
    CSW.load.audio('menu','Assets/sound/music.mp3');
    CSW.load.audio('click','Assets/sound/Begin/button.wav');
    CSW.load.audio('dead','Assets/sound/Dead/dead.wav');
    CSW.load.audio('jump','Assets/sound/Gameplay/jump.wav');
    CSW.load.audio('star','Assets/sound/Gameplay/star.wav');
    CSW.load.audio('switch','Assets/sound/Gameplay/colorswitch.wav');

  },

  create : function(){
    var button_play={
      x: CSW.configs.GAME_WIDTH/2,
      y: CSW.configs.GAME_HEIGHT/2+150
    }

    CSW.add.sprite(100, 100, 'maxresdefault');
    CSW.backgroundMusic = CSW.add.audio('menu');
    CSW.backgroundMusic.volume = 1;
    CSW.backgroundMusic.loop = true;
    CSW.backgroundMusic.play();
    // var style = { font: "70px Arial", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: 250, align: "center", backgroundColor: "#000000" };
    // text = CSW.add.text(CSW.configs.GAME_WIDTH/2- 80, 10, "COLOR SWITCH", style);

    button = CSW.add.button(button_play.x, button_play.y, 'playbutton', this.actionOnClick, this, 1, 0, 2);
    button.anchor.setTo(0.5, 0.5);
    // CSW.add.sprite(100, CSW.configs.GAME_HEIGHT- 80, 'assets','top.png');
    // CSW.add.sprite(CSW.configs.GAME_WIDTH-420, CSW.configs.GAME_HEIGHT- 80, 'assets','scoreboard1.png');
    // CSW.add.sprite(CSW.configs.GAME_WIDTH-300, CSW.configs.GAME_HEIGHT- 80, 'assets','star.png');
    // CSW.add.sprite(CSW.configs.GAME_WIDTH-185, CSW.configs.GAME_HEIGHT- 80, 'assets','shop.png');


    new SpinShapeController({x: button_play.x, y: button_play.y},1,0.85);
    new SpinShapeController({x: button_play.x, y: button_play.y},-1,1.08);
    new SpinShapeController({x: button_play.x, y: button_play.y},1,1.39);
    button_like = CSW.add.button(CSW.configs.GAME_WIDTH/2- 30, 875, 'button_like', this.actionOnClick_like, this, 1, 0, 2);


  },

  actionOnClick : function(){
    CSW.click = CSW.add.audio('click');
    CSW.click.volume = 1;
    CSW.click.play();
    CSW.state.start('play');
  },
  // update : function () {
  //
  //   button.angle += 1;
  //
  // }

  actionOnClick_like : function(){
    window.location="http://techkids.vn/";

  }

  // create: function(){
  //
  //   // CSW.state.start('play');
  //
  // }



}
