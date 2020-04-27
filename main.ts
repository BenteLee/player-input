enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const questGiver = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.questGiver, function (sprite, otherSprite) {
    game.showLongText("Hoi " + PlayerName + " ik zoek mijn spiegel", DialogLayout.Bottom)
    if (game.ask(" kan je mij helpen? ")) {
        game.showLongText("dank je wel", DialogLayout.Bottom)
    } else {
        game.showLongText("dat is jammer", DialogLayout.Bottom)
    }
    otherSprite.setKind(SpriteKind.Enemy)
})
let questGiver: Sprite = null
let PlayerName = ""
PlayerName = "Lente"
scene.setBackgroundColor(7)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000111112101110121011101000000000001014010b010a010b10101100000000001110010302020401131010000000000012110b0605050715111210000000000013100a0805050901101110000000000014100a0106070a0b1210100000000000101210110607101110111000000000001011111406071113121410100000000012100b030505040a101011100000000010130a06050507151112111000000000111001080f0f090a101010100000000010110b010a010a0b131410100000000010121110111012101110101000000000141010111211111013111000000000001010111010101010101010000000000000000000000000000000000000000000`,
            img`
. 2 2 2 2 2 2 2 2 . . . . . . . 
. 2 . . . . . . 2 . . . . . . . 
. 2 . . . . . . 2 . . . . . . . 
. 2 . . . . . . 2 . . . . . . . 
. 2 . . . . . . 2 . . . . . . . 
. 2 . . . . . . 2 . . . . . . . 
. 2 2 2 . . 2 2 2 . . . . . . . 
. 2 2 2 . . 2 2 2 . . . . . . . 
. 2 . . . . . . 2 . . . . . . . 
. 2 . . . . . 2 2 . . . . . . . 
. 2 . . . . . . 2 . . . . . . . 
. 2 . . . . . . 2 . . . . . . . 
. 2 2 2 2 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles18,sprites.builtin.forestTiles17,sprites.builtin.forestTiles19,sprites.castle.tilePath8,sprites.castle.saplingOak,sprites.castle.saplingPine,sprites.castle.rock1,sprites.castle.rock0,sprites.castle.rock2,myTiles.tile1],
            TileScale.Sixteen
        ))
let playerSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 f f f f 5 5 f . . . 
. . . f 5 f f d d f f 5 f . . . 
. . f 5 f d f d d f d f 5 f . . 
. . f 5 f d 3 d d 3 d f 5 f . . 
. . f 5 5 f d d d d f 5 5 f . . 
. f 5 5 f 3 f f f f 3 f 5 5 f . 
. . f f d 3 1 3 3 1 3 d f f . . 
. . f d d f 3 1 1 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 1 3 3 1 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
playerSprite.say("Hoi Ik ben " + PlayerName, 5000)
controller.moveSprite(playerSprite)
scene.cameraFollowSprite(playerSprite)
for (let value of tiles.getTilesByType(myTiles.tile1)) {
    questGiver = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . f 4 4 f f f f . . . . . . 
. . f 4 5 5 4 5 f b f f . . . . 
. . f 5 5 5 5 4 e 3 3 b f . . . 
. . f e 4 4 4 e 3 3 3 3 b f . . 
. f 3 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e e 3 b e 3 3 3 3 f . . 
. f 3 3 e e e f f 3 3 3 3 f . . 
. . f e e e f b f b b b b f f . 
. . . e 4 4 f 1 e b b b b b f . 
. . . f 4 4 4 4 f b b b b b f . 
. . . f d d d e 4 4 b b b f . . 
. . . f d d d e 4 4 f f f . . . 
. . f d d d b b e e b b f . . . 
. . f b d 1 d 1 d d b f . . . . 
. . . f f f b b f f f . . . . . 
`, SpriteKind.questGiver)
    questGiver.z = -1
    tiles.placeOnTile(questGiver, value)
    tiles.setTileAt(value, sprites.castle.tileGrass1)
}
game.onUpdate(function () {
    playerSprite.setImage(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f 3 3 5 3 3 5 3 d f f . . 
. . . f d f 3 5 5 3 f f d f . . 
. . . f d f 3 3 3 3 3 f f . . . 
. . . f f 3 5 3 3 5 3 3 f . . . 
. . . . f f f f f f f f f . . . 
. . . . . . . . . f f . . . . . 
`)
    if (playerSprite.vy < 0) {
        playerSprite.setImage(img`
. . . . . . . 5 5 . . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 6 6 6 6 6 6 f . . . . 
. . . f 6 1 1 1 6 1 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . f f 6 6 6 6 6 6 6 6 f f . . 
. f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
. . f f f 3 f f f f 3 f f f . . 
. . . f d 5 3 3 3 3 5 d f . . . 
. . f d d f 3 3 3 3 f d d f . . 
. . . f f f 5 3 3 5 f f f . . . 
. . . . f 3 3 5 5 3 3 f . . . . 
. . . . f 3 3 3 3 3 3 f . . . . 
. . . . . f f f f f f . . . . . 
`)
    } else if (playerSprite.y % 2 == 0) {
        playerSprite.setImage(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 3 f f . . 
. . f d f f 3 5 5 3 f d f . . . 
. . . f f 3 3 3 3 3 f d f . . . 
. . . f 3 3 5 3 3 5 3 f f . . . 
. . . f f f f f f f f f . . . . 
. . . . . f f . . . . . . . . . 
`)
    } else {
    	
    }
    if (playerSprite.vx > 0) {
        playerSprite.setImage(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . f 6 2 5 5 6 f . . . . . 
. . . f 6 6 6 6 1 6 6 f . . . . 
. . . f 6 6 6 6 6 1 6 f . . . . 
. . . f d f d 6 6 6 1 f . . . . 
. . . f d f d 6 6 6 6 f f . . . 
. . . f d 3 d d 6 6 6 f 6 f . . 
. . . . f d d d f f 6 f f . . . 
. . . . . f f 5 3 f 6 6 6 f . . 
. . . . f 5 3 3 f f f f f . . . 
. . . . f 3 3 f d f . . . . . . 
. . . . . f 3 f d f . . . . . . 
. . . . f 3 5 3 f d f . . . . . 
. . . . f f 3 3 f f . . . . . . 
. . . . . . f f f . . . . . . . 
`)
        playerSprite.image.flipX()
    } else if (playerSprite.vx < 0) {
        playerSprite.setImage(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . f 6 2 5 5 6 f . . . . . 
. . . f 6 6 6 6 1 6 6 f . . . . 
. . . f 6 6 6 6 6 1 6 f . . . . 
. . . f d f d 6 6 6 1 f . . . . 
. . . f d f d 6 6 6 6 f f . . . 
. . . f d 3 d d 6 6 6 f 6 f . . 
. . . . f d d d f f 6 f f . . . 
. . . . . f f 5 3 f 6 6 6 f . . 
. . . . f 5 3 3 f f f f f . . . 
. . . . f 3 3 f d f . . . . . . 
. . . . . f 3 f d f . . . . . . 
. . . . f 3 5 3 f d f . . . . . 
. . . . f f 3 3 f f . . . . . . 
. . . . . . f f f . . . . . . . 
`)
    } else {
    	
    }
})
