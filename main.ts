enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const questGiver = SpriteKind.create()
    export const questGiverPassive = SpriteKind.create()
    export const object = SpriteKind.create()
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
    //% blockIdentity=images._tile
    export const tile2 = img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
7 7 6 d d d d d d d d d d 6 7 7 
7 7 7 6 d b d d d 1 d d 6 7 7 7 
7 7 7 6 d d d d d d d d d 6 7 7 
7 7 6 d d d d d d d d d d d 7 7 
7 7 6 d d d d d d d d d d 6 7 7 
7 6 6 d d d 1 d d d d d 6 7 7 7 
7 7 6 d d d d d d b d d 6 7 7 7 
7 7 7 6 d d d d d d d d d 6 7 7 
7 7 7 6 d d d d d d d d d d 7 7 
7 7 7 6 d d d d d 1 d d d d 7 7 
7 7 6 d d d d d d d d d d 6 7 7 
7 7 6 d d d b d d d d d d 6 7 7 
7 7 6 d d d d d d d d d 6 7 7 7 
7 7 7 6 d d d d d d b d d 6 7 7 
7 7 6 d d d d 1 d d d d d d 6 7 
7 7 d d d d d d d d d d d d 7 7 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
7 7 6 d d d d d d d d d d 6 7 7 
7 7 7 6 d b d d d 1 d d 6 7 7 7 
7 7 7 6 d d d d d d d d d 6 7 7 
7 7 6 d d d d d d d d d d d 7 7 
7 7 6 d d d d d d d d d d 6 7 7 
7 6 d d d d 1 d d d d d 6 7 7 7 
7 7 6 d d d d d d b d d 6 7 7 7 
7 7 7 6 d d d d d d d d d 6 7 7 
7 7 7 6 6 d d d d d d d d 7 6 7 
7 7 7 6 d d d d d 1 d d d 7 7 7 
7 7 6 7 d d d d d d d d d 6 7 7 
7 7 6 7 d d b d d d d d d 6 7 7 
7 5 7 7 6 d d d d d d 6 6 7 7 7 
7 5 7 7 7 6 d d d 6 7 7 d 7 7 7 
7 6 7 7 7 7 7 6 6 7 d 7 6 7 7 7 
7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 
`
}
function levelStart () {
    if (true) {
        ObjectGame = "bal"
        tiles.setTilemap(tiles.createTilemap(
            hex`20001000111210101210111213131b1110141312131b10111b12111110131413101b111414010b0a010b10010101010101010101010101010101010101010101010117101001030204011301010101010101010101010101010101010101010101010111110b0616070b1101010101010101010101010101010101010101010101131412100a080509011001010a01010101010101010101010101010101010101011312100a0119150b120101010a01010101010101010101010101010101010101121312101119101110010101010101010101010101010101010101010101010101121111141a11130a01010101010a0101010101010a0a0101010101010101010112130101010101010101010101010101010101010101010101010101010101011412010101010101010a010101010101010a0101010101010101010101010101111b01010101010a0101010101010101010a01010101010101010101010101011b14010101010101010101010101010101010a0a01010101010101010101010110110101010101010a0a0101010a0a01010101010101010101010101010101011013010101010101010101010101010101010101010101010101010101010101121201010101010101010101010101010101010101010101010101010101010112131411101112141110101111131314111012111b1110131214111b1210111113`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles18,sprites.builtin.forestTiles17,sprites.builtin.forestTiles19,sprites.castle.tilePath8,sprites.castle.saplingOak,sprites.castle.saplingPine,sprites.castle.rock1,sprites.castle.rock0,sprites.castle.rock2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.castle.shrub],
            TileScale.Sixteen
        ))
        scene.setBackgroundColor(7)
        gotObject = 0
        tiles.placeOnRandomTile(playerSprite, myTiles.tile2)
        for (let value of tiles.getTilesByType(myTiles.tile2)) {
            tiles.setTileAt(value, sprites.castle.tilePath5)
        }
        for (let value of tiles.getTilesByType(myTiles.tile1)) {
            questGiverSprite = sprites.create(img`
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
            questGiverSprite.z = -1
            tiles.placeOnTile(questGiverSprite, value)
            tiles.setTileAt(value, sprites.castle.tileGrass1)
        }
        for (let value of tiles.getTilesByType(myTiles.tile3)) {
            objectSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.object)
            tiles.placeOnTile(objectSprite, value)
            tiles.setTileAt(value, sprites.castle.tileGrass2)
        }
    } else {
        tiles.setTilemap(tiles.createTilemap(
            hex`20001000111210101210111213131b1110141312131b10111b12111110131413101b111414010b0a010b10010101010101010101010101010101010101010101010117101001030204011301010101010101010101010101010101010101010101010111110b0616070b1101010101010101010101010101010101010101010101131412100a080509011001010a01010101010101010101010101010101010101011312100a0119150b120101010a01010101010101010101010101010101010101121312101119101110010101010101010101010101010101010101010101010101121111141a11130a01010101010a0101010101010a0a0101010101010101010112130101010101010101010101010101010101010101010101010101010101011412010101010101010a010101010101010a0101010101010101010101010101111b01010101010a0101010101010101010a01010101010101010101010101011b14010101010101010101010101010101010a0a01010101010101010101010110110101010101010a0a0101010a0a01010101010101010101010101010101011013010101010101010101010101010101010101010101010101010101010101121201010101010101010101010101010101010101010101010101010101010112131411101112141110101111131314111012111b1110131214111b1210111113`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles18,sprites.builtin.forestTiles17,sprites.builtin.forestTiles19,sprites.castle.tilePath8,sprites.castle.saplingOak,sprites.castle.saplingPine,sprites.castle.rock1,sprites.castle.rock0,sprites.castle.rock2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.castle.shrub],
            TileScale.Sixteen
        ))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.questGiverPassive, function (sprite, otherSprite) {
    if (gotObject == 1) {
        if (game.ask("heb je hem gevonden?")) {
            game.showLongText("oh dank je wel", DialogLayout.Bottom)
            otherSprite.destroy()
            music.powerUp.play()
            levelNumber += 1
            levelStart()
        } else {
            game.showLongText("dat is jammer", DialogLayout.Bottom)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.questGiver, function (sprite, otherSprite) {
    if (gotObject == 0) {
        game.showLongText("Hoi " + PlayerName + " ik zoek mijn " + ObjectGame, DialogLayout.Bottom)
        if (game.ask(" kan je mij helpen? ")) {
            game.showLongText("dank je wel", DialogLayout.Bottom)
        } else {
            game.showLongText("dat is jammer", DialogLayout.Bottom)
        }
        otherSprite.setKind(SpriteKind.questGiverPassive)
    } else {
        game.showLongText("Hoi " + PlayerName + " ik zoek mijn " + ObjectGame, DialogLayout.Bottom)
        if (game.ask("heb je hem gezien?")) {
            game.showLongText("oh dank je wel", DialogLayout.Bottom)
            otherSprite.destroy()
            music.powerUp.play()
            levelNumber += 1
            levelStart()
        } else {
            game.showLongText("dat is jammer", DialogLayout.Bottom)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    otherSprite.destroy()
    gotObject = 1
    music.baDing.play()
})
let levelNumber = 0
let objectSprite: Sprite = null
let questGiverSprite: Sprite = null
let gotObject = 0
let ObjectGame = ""
let playerSprite: Sprite = null
let PlayerName = ""
PlayerName = "Lente"
playerSprite = sprites.create(img`
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
levelStart()
game.onUpdate(function () {
    playerSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 1 5 5 5 1 5 f . . . . 
. . . f 1 5 5 5 5 5 1 5 f . . . 
. . . f 5 5 f f f f 5 1 f . . . 
. . . f 5 f f d d f f 5 f . . . 
. . f 5 f d f d d f d f 5 f . . 
. . f 5 f d 3 d d 3 d f 5 f . . 
. . f 5 5 f d d d d f 5 5 f . . 
. f 5 5 f 3 f f f f 3 f 5 5 f . 
. . f f 3 3 1 3 3 1 3 d f f . . 
. . . f d f 3 1 1 3 f f d f . . 
. . . f d f 3 3 3 3 3 f f . . . 
. . . f f 3 1 3 3 1 3 3 f . . . 
. . . . f f f f f f f f f . . . 
. . . . . . . . . f f . . . . . 
`)
    if (playerSprite.vy < 0) {
        if (playerSprite.y % 2 == 0) {
            playerSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 1 1 1 5 1 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . f f 5 5 5 5 5 5 5 5 f f . . 
. f 5 5 5 f 5 5 5 5 f 5 5 5 f . 
. . f f f 3 f f f f 1 f f f . . 
. . . f d f 3 3 3 3 d d f . . . 
. . . . f 3 1 3 3 f d d f . . . 
. . . . f 3 3 1 1 3 f f . . . . 
. . . . f f 3 3 f f . . . . . . 
. . . . . . f f . . . . . . . . 
`)
        } else {
            playerSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 1 1 1 5 1 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . f f 5 5 5 5 5 5 5 5 f f . . 
. f 5 5 5 f 5 5 5 5 f 5 5 5 f . 
. . f f f 1 f f f f 3 f f f . . 
. . . f d d 3 3 3 3 f d f . . . 
. . . f d d f 3 3 1 3 f . . . . 
. . . . f f 3 1 1 3 3 f . . . . 
. . . . . . f f 3 3 f f . . . . 
. . . . . . . . f f . . . . . . 
`)
        }
    } else if (playerSprite.y % 2 == 0) {
        playerSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 1 5 5 5 1 5 f . . . . 
. . . f 1 5 5 5 5 5 1 5 f . . . 
. . . f 5 5 f f f f 5 1 f . . . 
. . . f 5 f f d d f f 5 f . . . 
. . f 5 f d f d d f d f 5 f . . 
. . f 5 f d 3 d d 3 d f 5 f . . 
. . f 5 5 f d d d d f 5 5 f . . 
. f 5 5 f 3 f f f f 3 f 5 5 f . 
. . f f d 3 1 3 3 1 3 3 f f . . 
. . f d f f 3 1 1 3 f d f . . . 
. . . f f 3 3 3 3 3 f d f . . . 
. . . f 3 3 1 3 3 1 3 f f . . . 
. . . f f f f f f f f f . . . . 
. . . . . f f . . . . . . . . . 
`)
    } else {
    	
    }
    if (playerSprite.vx > 0) {
        if (playerSprite.x % 2 == 0) {
            playerSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 1 5 5 f . . . 
. . . . f 5 5 5 5 5 1 5 f . . . 
. . . . f d f d 5 5 5 1 f . . . 
. . . . f d f d 5 5 5 5 f f . . 
. . . . f d 3 d d 5 5 5 f 5 f . 
. . . . . f d d d f f 5 f f . . 
. . . . . . f f 3 3 f f 5 5 f . 
. . . . . f d d d d f f f f . . 
. . . . . f d d d f 3 f . . . . 
. . . . . . f f f d 1 3 f . . . 
. . . . . f f f 3 3 f f . . . . 
. . . . . f f f f f f f . . . . 
`)
            playerSprite.image.flipX()
        } else {
            playerSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 1 5 5 f . . . 
. . . . f 5 5 5 5 5 1 5 f . . . 
. . . . f d f d 5 5 5 1 f . . . 
. . . . f d f d 5 5 5 5 f f . . 
. . . . f d 3 d d 5 5 5 f 5 f . 
. . . . . f d d d f f 5 f f . . 
. . . . . . f f 3 3 f f 5 5 f . 
. . . . . f 1 3 3 d d f f f . . 
. . . . . f 3 3 3 f d d f . . . 
. . . . . . f 3 1 f f f . . . . 
. . . . . f 3 3 3 3 f . . . . . 
. . . . . . f f f f f . . . . . 
`)
            playerSprite.image.flipX()
        }
    } else if (playerSprite.vx < 0) {
        if (playerSprite.x % 2 == 0) {
            playerSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 1 5 5 f . . . 
. . . . f 5 5 5 5 5 1 5 f . . . 
. . . . f d f d 5 5 5 1 f . . . 
. . . . f d f d 5 5 5 5 f f . . 
. . . . f d 3 d d 5 5 5 f 5 f . 
. . . . . f d d d f f 5 f f . . 
. . . . . . f f 3 3 f f 5 5 f . 
. . . . . f d d d d f f f f . . 
. . . . . f d d d f 3 f . . . . 
. . . . . . f f f d 1 3 f . . . 
. . . . . f f f 3 3 f f . . . . 
. . . . . f f f f f f f . . . . 
`)
        } else {
            playerSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f 5 5 5 5 5 f . . . . 
. . . . f 5 5 5 5 1 5 5 f . . . 
. . . . f 5 5 5 5 5 1 5 f . . . 
. . . . f d f d 5 5 5 1 f . . . 
. . . . f d f d 5 5 5 5 f f . . 
. . . . f d 3 d d 5 5 5 f 5 f . 
. . . . . f d d d f f 5 f f . . 
. . . . . . f f 3 3 f f 5 5 f . 
. . . . . f 1 3 3 d d f f f . . 
. . . . . f 3 3 3 f d d f . . . 
. . . . . . f 3 1 f f f . . . . 
. . . . . f 3 3 3 3 f . . . . . 
. . . . . . f f f f f . . . . . 
`)
        }
    } else {
    	
    }
})
