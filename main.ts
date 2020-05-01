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
function setLevel (objectText: string, followSpeed: number) {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    ObjectGame = objectText
    gotObject = 0
    tiles.placeOnRandomTile(playerSprite, myTiles.tile2)
    for (let value of tiles.getTilesByType(myTiles.tile2)) {
        tiles.setTileAt(value, myTiles.tile5)
    }
    for (let value of tiles.getTilesByType(myTiles.tile1)) {
        questGiverSprite.z = -1
        tiles.placeOnTile(questGiverSprite, value)
        tiles.setTileAt(value, sprites.castle.tilePath5)
    }
    tiles.placeOnRandomTile(objectSprite, myTiles.tile3)
    for (let value of tiles.getTilesByType(myTiles.tile3)) {
        if (levelNumber < 2) {
            tiles.setTileAt(value, sprites.castle.tileGrass2)
        } else {
            tiles.setTileAt(value, sprites.castle.tileDarkGrass2)
        }
        animation.runMovementAnimation(
        objectSprite,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
    for (let value of tiles.getTilesByType(myTiles.tile4)) {
        EnemieSprite = sprites.create(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Enemy)
        animation.runImageAnimation(
        EnemieSprite,
        [img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`,img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c . . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f b 3 b c 3 b c f b b c c c . 
. c b b b b b b c f b c b c c . 
. c b b b b b b c b b c b b c . 
c b 1 b b b 1 b b b c c c b c . 
c b b b b b b b b c c c c c . . 
f b c b b b c b b b b f c . . . 
f b 1 f f f 1 b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . c c . . c c . . . . . . . . 
. . c 3 c c 3 c c c . . . . . . 
. c b 3 b c 3 b c c c . . . . . 
. c b b b b b b b b f f . . . . 
c c b b b b b b b b f f . . . . 
c b 1 b b b 1 b b c f f f . . . 
c b b b b b b b b f f f f . . . 
f b c b b b c b c c b b b . . . 
f b 1 f f f 1 b f c c c c . . . 
. f b b b b b b f b b c c . . . 
c c f b b b b b c c b b c . . . 
c c c f f f f f f c c b b c . . 
. c c c . . . . . . c c c c c . 
. . c c c . . . . . . . c c c c 
. . . . . . . . . . . . . . . . 
`],
        200,
        true
        )
        tiles.placeOnTile(EnemieSprite, value)
        tiles.setTileAt(value, sprites.castle.tileDarkGrass2)
        EnemieSprite.follow(playerSprite, followSpeed)
    }
}
function levelStart () {
    if (levelNumber == 0) {
        game.showLongText("het is een zonnige dag en " + PlayerName + " loopt door het bos. door de bomen ziet ze een ander meisje staan. ze loopt naar het droevige meisje toe", DialogLayout.Full)
        tiles.setTilemap(tiles.createTilemap(
            hex`2b001700111210191210111b141312141b10101c10101010101010101010101b14121313141b10101010101b14121314010b16010b100101130101010b0110010a010a010101140a01010a01010b011c010a1c010a010b0b0b12100103050401130a0114010a01010110010101010b0101120a010a010a01010a140a0a010101010b170b14110b0615070b1101011b0a01140a01100a01131214010a130101101011110101120101010a011c0b0b0b12100a06050901100a011001011b010110010a0101100101010b01100b0b110a011201011b1412141b1b1413100a0607010b1201011001011c01011001010101100a0a0101011001171001011b0a01010a010a01010a1412100807101110010a100b0113010a121b14010a10010114010a100a011001011001010b0101010b01011b11110a1a11130a0101110101140a01010a010b0110010110010a110a0110010111010a1010111110101010120101010a01010b01110a011b01010101010101100101110a01110101100a01110a01100a01010b01011114010b01010101010110010110111110101b010a100a0a11010110010a10010a10010a1117010a010101101b01011c1b141301011c010a010b01010113010114010110010b140101120a0114010b101011111001011b1001011001010a010a120101010101010a01010101010b1001010a010a12010a0a010101010a011b0a0114100101100a0a010101131213010a14010a01010a01010110010a01010113010a0101010a0101011401011211010a10010113141213131201011b0101141b101013131c01011410131301011412131314010a13010b1310010110010b010a0101010b010110010b0a010101010b100a0101010a010b010a010101010101130101141b010a1b0a01010a010101010101110101010101010101110101010a0101010101010a01010b0112010114140101140101141c1b10101010111c111010101b14010111010b1c12141b10101111101b1413141c0b011b120101120a0a01010a010b01010101010a010a010101011001010101010a010a010a010101010a010101141301011301010a01010a01010a0a010101010a01010b0110010a010a010101010b01010b010a010a0a011413010b1313141b10101011101111101011111110140101140a01130a01131214101010111011101b1412131401010a0101010a01010101010a010a0101010a0101010101011201010b0101010101010a01010a010114140101010101010a0101010b01010101010a01010101010b010112010101010a0101010101010b010117101312141b10101111111010101c10101b1412131312141b101b141c141b1010111010101110101011101110`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . 2 . . . . . 2 . . . . . . . 2 . . . . . . . . 2 . . 2 . . . . . . 2 
2 . . . . . 2 . . 2 . . . . . 2 . . . . . . . 2 . . . . . . . . 2 . . . . . . . . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 . . 2 2 2 . . 2 . . 2 2 2 2 . . 2 . . . . . 2 . . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 . . . . 2 . . . . . 2 . . 2 . . 2 . . 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . 2 . . 2 . . 2 . . . . 2 . . . . . 2 . . 2 . . 2 . . . . . . . . . 2 
2 2 . . 2 2 2 . . 2 . . 2 . . 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 . . . . . . . . . 2 
2 2 . . 2 2 . . . 2 . . 2 . . . . . . . 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 . . 2 . . . . . . . 2 . . 2 . . 2 . . 2 . . 2 . . 2 . . . . . . 2 
2 . . . . . . . . 2 . . 2 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 . . 2 . . . . . . 2 
2 . . 2 2 2 2 . . 2 . . . . . . . 2 . . 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 . . . . . 2 . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . 2 . . 2 
2 . . 2 . . . . . 2 2 2 . . 2 . . . . . . . . 2 . . . . . 2 . . . . . . . . . 2 . . 2 
2 . . 2 . . 2 2 2 2 2 2 . . 2 . . 2 2 2 2 2 2 2 . . 2 2 2 2 . . 2 2 2 2 2 . . 2 . . 2 
2 . . 2 . . . . . . . . . . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . 2 . . 2 
2 . . 2 . . . . . . . . . . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . 2 . . 2 
2 . . 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 
2 . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 . . 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles18,sprites.builtin.forestTiles17,sprites.builtin.forestTiles19,sprites.castle.tilePath8,sprites.castle.saplingOak,sprites.castle.saplingPine,sprites.castle.rock1,sprites.castle.rock0,sprites.castle.rock2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.castle.shrub,sprites.builtin.forestTiles0,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles22,sprites.builtin.forestTiles21,sprites.builtin.forestTiles4,sprites.builtin.forestTiles1,sprites.castle.tileDarkGrass3],
            TileScale.Sixteen
        ))
        flavorText = "Maar ik durf niet alleen door het bos "
        warningText = " en raak niet verdwaalt"
        questGiverSprite = sprites.create(img`
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 4 4 f 1 e b b f . 
f f b b f 4 4 4 4 4 4 f b b f f 
f b b f f f e e e e f f f b b f 
. f e e f b d d d d b f e e f . 
. . e 4 c d d d d d d c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`, SpriteKind.questGiver)
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
        setLevel("bal", 10)
    } else if (levelNumber == 1) {
        game.showLongText("" + PlayerName + " loopt verder er ziet verderop een jongen staan. hij lijkt te zoeken naar iets", DialogLayout.Full)
        tiles.setTilemap(tiles.createTilemap(
            hex`2a001300111210191210111213131b1110141312131b10111b12111110131413101b11141b10101b1b141212131214010b16010b100b010b0101010b01010101010a011101010a01011b0101010101010101010a010101131001030504011301010a0101010a0101010a010a01100a0b0a0b0a1b0a0a131212010a0101010a010b12110b0615070b11010112131301011b101110110101100101100101140101130b13010110111110010113100a06050901100a01141c130b011b010b010a0a0b100101110b0b140101121712010110010b010a0114100a0807010b12010b1b1d120a01140a01010a0101110101110b17120a01140b130b0110010101010a1412100a1a10111001011b1c14010b140101101110111101011014121301011001120101110a011001011b11110b0111130b0101101d14010112010a01010a01010b0101010b010101010a140a0111010a110a011b13010a010a010a0101111c1b0a0113010b010a010a0101010a01010a0a010b0114010a110a01110101101201010a010101010111181b01011213121213121312141b10111b01011101011b0a01110a0110010a111b0b0114121313010b11101001011213131213131301010a0b0b140101100a0111010a100b011001011014010a01010a010b01010a01010b01010a010a01120a0b010b1713010a10010111010110010a1b0a0a1b1101010a010a01010a01010a010101010a0b0a0b1401011b1413130a0111010110010b11010a14010114130b01111110101110101b14121313010b10010a140a0a0a010113010a100b01010a0a010101120b0b13120101111e1d1c1c1d1c1d1d1c181201011b01011b010b010a01140b011b01010a0101010a0a120b171213010a10101111101b1b1414121313010a140a011b10111101011b01011b14140101101b14131313121212010b010101010a01010a0101010b010112010a0a010a01010a01010a0b01120a0a010a01010a0b0b13130a0101010a01010b01010a010a01010a130a010b0101010101010a01010113010b010a010a010b1714121213131214141b1b101010101b14121312131214141b101111101b14131212131214141b1010101b14`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . . . . . . . 2 . . . . . 2 . . 2 2 2 . . . . . . . . 2 
2 . . . . . 2 . . 2 2 2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . 2 . . 2 2 2 2 . . 2 
2 . . . . . 2 . . 2 . 2 . . 2 . . . . . . 2 . . 2 . . 2 . . 2 . 2 . . 2 . . . . . 2 
2 . . . . . 2 . . 2 . 2 . . 2 . . . . . . 2 . . 2 . . 2 . . 2 . 2 . . 2 . . . . . 2 
2 2 . . 2 2 2 . . 2 . 2 . . 2 . . 2 2 2 2 2 . . 2 2 2 2 . . 2 . 2 . . 2 . . 2 . . 2 
2 2 . . 2 2 . . . 2 . 2 . . 2 . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . 2 
2 . . . . . . . . 2 . 2 . . 2 . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . 2 
2 . . . . . . . . 2 . 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . 2 2 2 2 . . 2 2 2 . . 2 2 2 2 2 2 2 . . . . . 2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . . . . . . . . . . . . . . . . . . 2 . . 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 . . 2 . . . . . 2 . . 2 . . . . . . . . 2 . . 2 
2 . . 2 . . . . . . . . . . 2 . . 2 . . 2 . . . . . 2 . . 2 . . . . . . . . 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 . . 2 2 2 2 . . 2 . . 2 2 2 . . 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles18,sprites.builtin.forestTiles17,sprites.builtin.forestTiles19,sprites.castle.tilePath8,sprites.castle.saplingOak,sprites.castle.saplingPine,sprites.castle.rock1,sprites.castle.rock0,sprites.castle.rock2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.castle.shrub,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2],
            TileScale.Sixteen
        ))
        flavorText = "Maar ik kan hem niet vinden "
        warningText = " en wees voorzichtig"
        questGiverSprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.questGiver)
        objectSprite = sprites.create(img`
. . . . . 5 5 5 5 5 4 . . . . . 
. . . . 5 1 9 9 9 9 5 4 . . . . 
. . . 5 1 9 9 9 9 9 9 5 4 . . . 
. . . 5 1 9 9 9 9 1 9 5 4 . . . 
. . . 5 1 9 9 9 1 9 9 5 4 . . . 
. . . 5 1 9 9 1 9 9 9 5 4 . . . 
. . . 5 1 9 9 9 9 9 9 5 4 . . . 
. . . 5 1 9 9 9 9 9 9 5 4 . . . 
. . . 5 1 9 9 9 9 9 9 5 4 . . . 
. . . . 5 1 9 9 9 9 5 4 . . . . 
. . . . . 5 5 5 5 5 4 . . . . . 
. . . . . . 5 5 5 4 . . . . . . 
. . . . . . 5 5 4 4 . . . . . . 
. . . . . . 5 5 4 4 . . . . . . 
. . . . . . 5 5 4 4 . . . . . . 
. . . . . . . 5 4 . . . . . . . 
`, SpriteKind.object)
        setLevel("spiegel", 20)
    } else if (levelNumber == 2) {
        game.showLongText("de zon gaat langzaam onder terwijl " + PlayerName + " verder loopt. plots hoort " + PlayerName + " een meisje huilen", DialogLayout.Full)
        tiles.setTilemap(tiles.createTilemap(
            hex`2a001300111210191210111212131b1110141312131b10111b12111113131413101b11141b10101b1b1412121312141c1c161c1d10181c121c1e1c1e1e1e1e1e1b1e1e1e1c1e1b1e1d1e1e1c111e1c1e1e1c1c1e1e1e1813101d0305041c131c1e131e1e1e1e1d1e1e1c111e1c1e1e1c101d1d1e1c1e101d1e1c1e1e1e1e1c1e1e12111e0615071e111c1e141e1e101e1e101e1e101e1e111e1e11171d1e1e1e101e1e1b1413121e1c141313101c0605091c101e1e141e1c111e1e111c1e101e1e101d1e101110101e1c101e1c111e1c131d1e1d1d14101e08071c1d121e1c131d1d101e1c101e1e1c1c1e101e1c1e1e1c1e1e1e101e1e111d1e131e1e1d171412101c1a1011101e1e131d171b1e1e111e1c1c1e1e111c1e1e1d1e1e1c1e111e1c101e1c1213141b101b11111c1c11131e1c1e121314141e1e111e1e1b1e1e101011101e1e101011101e1e101c1e1e1c1e1c1e1b131e1e1e1e1c1e1d1e1c1e1e1e1c1e101e1c141c1d1e1e1c1e1c1e1e1e1c1e1d1e101c1c1e1e1e1d1e10121e1d1e1c1e1e1e1e1e1c1e1e1e1e111c1e121e1e1e1e1e1d1e1e1c1e1c1e1c1e101e1c1213141e1c111b1c1e1413121312141b1010101e1e101e1e13131c1e141b101011101011111e1e101d1e131c1c1e1e10141e1e1b1d1d131e1e1c1e1c1e1e1e1e1e1d1e121e1e141d1d1e1e1c1e1e111e1c1e1e1e141e1e1d1e1b111e1c1b1d1d141e1c10111110101e1e1e1e1e141e1c121d171e1c1e1d1c101e1c1e1e1c1b1c1e1e1e14131e1e111e1e1b1e1e1e1e1e1c1e1d1e141e1c1b1e1e131214141b101e1e101e1e101e1d101e1e1c1e13121e1c111c1c111e1d1e1c1e1c1e1e1e121e1e101c1e131e1c1e1e1e1c1e1c1e1c1b1e1e101e1d1c1e12131c1e101e1e101e1e1213141b101412131c1e101e1c121e1e1e1c1e1e1c1e1e1e141e1c101c1e1e1e12121e1d1e1c1e1c1e1e131d1d1e1e1c1e1e1e1d1e1c1e1312141b1c1e101e1e1d1e121d1e111c1c1d1d13131e1e1e1e1e1e1e1e14171d1d1e1e1e1e1e1e1e1e1e121e1c1e1c1c1b1c1e1e1e13181c111e1e1d1714121213131214141b1b101111101b14121312131214141b101111101b14131212131214141b1110101b14`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . 2 . . . . . . . . 2 . . . . . 2 . . . . . 2 . . . . . . . . . . 2 
2 . . . . . 2 . . 2 . . . . . . . . 2 . . . . . 2 . . . . . 2 . . . . . . . . . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 . . 2 . . 2 . . 2 . . . . . 2 . . 2 2 2 2 . . 2 2 2 
2 . . . . . 2 . . 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 . . 2 . . 2 . . 2 . . . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 . . . . . 2 . . . . . . . . 2 . . 2 . . 2 . . . . 2 
2 2 . . 2 2 2 . . 2 . . 2 . . 2 . . . . . 2 . . . . . . . . 2 . . 2 . . 2 2 2 2 2 2 
2 2 . . 2 2 . . . 2 2 2 2 . . 2 . . 2 . . 2 2 2 2 . . 2 2 2 2 . . 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . 2 . . 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 . . 2 2 . . 2 2 2 2 2 2 2 2 2 . . 2 . . 2 . . . . 2 
2 . . 2 . . 2 . . . . . . . . . . . . 2 . . 2 . . . . . . . 2 . . . . . 2 . . . . 2 
2 . . 2 . . 2 . . 2 2 2 2 2 . . . . . 2 . . 2 . . . . . . . 2 . . . . . 2 . . . . 2 
2 . . 2 . . 2 . . . . . . . . . 2 . . 2 . . 2 2 2 2 2 2 . . 2 . . 2 . . 2 . . . . 2 
2 . . 2 . . 2 . . . . . . . . . 2 . . 2 . . 2 . . . . . . . . . . 2 . . 2 . . . . 2 
2 . . 2 . . 2 . . 2 2 2 2 2 2 2 2 . . 2 . . 2 . . . . . . . . . . 2 . . 2 . . . . 2 
2 . . . . . . . . 2 . . . . . . . . . . . . 2 2 2 2 . . 2 . . . . 2 . . 2 . . . . 2 
2 . . . . . . . . 2 . . . . . . . . . . . . 2 . . . . . 2 . . . . 2 . . 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles18,sprites.builtin.forestTiles17,sprites.builtin.forestTiles19,sprites.castle.tilePath8,sprites.castle.saplingOak,sprites.castle.saplingPine,sprites.castle.rock1,sprites.castle.rock0,sprites.castle.rock2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.castle.shrub,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3],
            TileScale.Sixteen
        ))
        scene.setBackgroundColor(6)
        flavorText = "ik ben hem kwijt geraakt "
        warningText = ", kijk wel uit voor de vleermuizen"
        questGiverSprite = sprites.create(img`
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c 4 4 c c c c f . 
. f f c c 4 4 4 4 c c f f . 
. f f f b f 4 4 f b f f f . 
. f f 4 1 f d d f 1 4 f f . 
. . f f d d d d d d f f . . 
. . e f e 4 4 4 4 e f e . . 
. e 4 f b 3 3 3 3 b f 4 e . 
. 4 d f 3 3 3 3 3 3 c d 4 . 
. 4 4 f 6 6 6 6 6 6 f 4 4 . 
. . . . f f f f f f . . . . 
. . . . f f . . f f . . . . 
`, SpriteKind.questGiver)
        objectSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 b . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 b . 
b d d c d 5 5 b 5 4 4 4 4 4 4 b 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.object)
        setLevel("eendje", 20)
    } else if (levelNumber == 3) {
        info.startCountdown(60)
        game.showLongText("de zon is onder gegaan wanneer " + PlayerName + " verder loopt. het is donker als " + PlayerName + " een jongen hoort roepen", DialogLayout.Full)
        tiles.setTilemap(tiles.createTilemap(
            hex`13002a00111210191210111213131b1110141312131b10141c1d161c1e101c1c1c1c1c1c1d1d1d1c1c1c101d0305041c131c1e1d1d1c1c1d1c1e1d1c1c111e0615071d111c1d1c1c1c1c1d1c1c1d1c1c101c0605091c101c1d1c1c1c1d1d1c1c1d1d1c101c08071e1d121c1d1c1c1d1e1c1c1c1c1d1c12101d1a1011101c1d1c1d1c1c1c1c1c1d1d1c11111e1c11131c1d1d1c1c1c1c1c1c1c1d1c1c131c1c1c1c1c1d1e1d1d1d1e1d1d1d1c1d1c1c121c1c1d1c1c1c1c1c1c1c1c1c1c1e1c1d1e1c1b1c1c1c1c1c1d1c1c1c1c1c1c1c1d1d1d1c1c141e1e1c1c1c1d1c1c1d1c1c1c1c1c1c1c1c1c111e1d1c1d1d1c1c1c1c1c1d1e1d1c1c1c1c1c131c1c1c1d1d1c1c1c1c1c1c1d1d1c1c1c1c1c121c1d1d1d1e1c1c1c1c1c1c1c1d1c1c1c1c1c131d1d1c1c1c1d1c1e1d1c1c1e1d1c1e1e1e1c121d1d1c1c1c1c1c1c1c1d1d1d1c1c1e1e1e1c131e1d1c1c1d1c1e1c1c1c1c1c1c1c1c1d1c1c121d1d1c1c1d1d1d1d1d1d1c1c1d1c1c1c1d1c001c1c1c1c1c1c1c1c1d1e1d1d1c1d1c1c1d1c001c1d1d1d1c1c1c1c1c1c1c1d1d1c1c1c1c1c001c1c1d1d1d1d1d1e1d1d1d1e1d1c1c1c1c1c001c1c1c1e1c1c1c1c1d1d1d1c1c1c1c1c1c1c001c1d1c1d1d1c1c1c1c1c1c1d1d1d1d1e1d1c001c1d1d1d1d1c1e1e1c1c1c1c1c1c1c1c1d1c001d1e1c1c1c1c1e1e1d1d1d1d1c1c1e1d1d1c001d1d1d1d1c1c1e1c1c1c1c1d1d1d1c1c1c1c001c1c1c1d1c1c1c1c1c1c1c1c1c1d1c1c1c1c001c1c1c1e1c1c1c1d1d1d1c1e1d1d1c1c1c1c001c1c1d1d1d1d1d1e1c1d1d1d1d1c1c1c1c1c001c1e1d1c1d1d1d1c1c1c1c1c1c1c1c1c1c1c001d1d1c1c1c1c1c1c1d1c1d1d1d1d1d1d1d1d001d1c1c1c1e1e1c1d1d1c1c1c1e1c1c1c1d1d001c1d1d1d1e1e1c1d1d1c1c1c1c1c1c1c1e1c001c1d1c1c1c1c1c1c1d1c1d1d1d1c1c1d1d1c001d1d1d1d1d1d1d1d1c1c1d1c1e1d1d1d1c1c131c1e1c1c1c1c1d1c1d1c1d1c1c1c1c1c1c1c1212131c1c1c1c1c1d1d1c1d1e1c1d1c1c1d1c121e1e1c1d1d1d1c1d1d1c1c1d1e1d1c1d1d1c121e1e1d1d1d1d1d1d1e1d1d1d1d1d1d1e1e1c131c1c1c1c1c1c1c1c1c1c1c1c1c1c131e1e1c12121313121c1c1c1c1c1c1c1c1c1c1c1c1c1c`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . . . . 2 
2 . . . . . 2 . . 2 2 2 . . 2 2 . . 2 
2 . . . . . 2 . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . 2 . . . . . 2 . . 2 
2 2 . . 2 2 2 . . 2 . . 2 2 2 2 . . 2 
2 2 . . 2 2 . . . 2 . . . . . 2 . . 2 
2 . . . . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 . . 2 2 2 2 2 . . . . . 2 
2 . . 2 . . . . . . . . 2 2 2 2 . . 2 
2 . . 2 . . . . . . . . . . . . . . 2 
2 . . 2 . . 2 2 2 2 . . . . . . . . 2 
2 . . . . . . . . 2 2 2 . . 2 2 2 2 2 
2 . . . . . . . . . . . . . 2 . . . 2 
2 . . 2 2 2 2 . . . . . . . 2 . . . 2 
2 . . . . . . . . 2 2 2 2 2 2 . . . 2 
2 . . . . . . . . . . . . . 2 2 . . 2 
2 . . 2 2 2 . . . . . . . . . . . . 2 
2 . . . . 2 2 2 2 2 2 . . . . . . . 2 
2 . . . . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 2 2 2 . . . . . . . . 2 
2 . . . . . 2 . . 2 2 2 2 2 2 . . . 2 
2 . . 2 2 2 2 . . . . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . 2 2 2 2 2 2 2 2 
2 . . 2 2 2 2 2 . . . . . . . . . . 2 
2 . . . . . . 2 . . . . . . . . . . 2 
2 . . . . . . 2 . . 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . . . . . . 2 
2 . . . . . . . . . 2 . . . . . . . 2 
2 . . . . . . . . . 2 . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . 2 . . . . . . . 2 
2 . . . . . . 2 . . 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles18,sprites.builtin.forestTiles17,sprites.builtin.forestTiles19,sprites.castle.tilePath8,sprites.castle.saplingOak,sprites.castle.saplingPine,sprites.castle.rock1,sprites.castle.rock0,sprites.castle.rock2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.castle.shrub,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2],
            TileScale.Sixteen
        ))
        flavorText = "hij is weg gerend"
        warningText = ", pas op voor de vleermuizen"
        questGiverSprite = sprites.create(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`, SpriteKind.questGiver)
        objectSprite = sprites.create(img`
. . 4 4 4 . . . . 4 4 4 . . . . 
. 4 5 5 5 e . . e 5 5 5 4 . . . 
4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
. e e 5 5 5 5 5 5 5 5 e e . . . 
. . e 5 f 5 5 5 5 f 5 e . . . . 
. . f 5 5 5 4 4 5 5 5 f . . f f 
. . f 4 5 5 f f 5 5 6 f . f 5 f 
. . . f 6 6 6 6 6 6 4 4 f 5 5 f 
. . . f 4 5 5 5 5 5 5 4 4 5 f . 
. . . f 5 5 5 5 5 4 5 5 f f . . 
. . . f 5 f f f 5 f f 5 f . . . 
. . . f f . . f f . . f f . . . 
`, SpriteKind.object)
        setLevel("hond", 30)
    } else {
        info.stopCountdown()
        game.over(true)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.questGiverPassive, function (sprite, otherSprite) {
    if (gotObject == 1) {
        if (game.ask("heb je hem gevonden?")) {
            game.showLongText("oh bedankt", DialogLayout.Bottom)
            otherSprite.destroy()
            music.powerUp.play()
            levelNumber += 1
            levelStart()
        } else {
            game.showLongText("dat is jammer", DialogLayout.Bottom)
        }
    }
})
function Title () {
    TitleSprite = sprites.create(img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 1 1 3 3 3 3 3 3 3 1 1 1 1 1 1 1 3 3 3 3 3 3 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 3 3 3 3 3 3 1 3 3 3 1 1 3 3 3 3 3 3 3 1 1 1 3 3 1 1 1 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 3 3 3 3 3 3 3 1 3 3 3 1 1 3 3 3 3 3 3 3 1 1 3 3 3 3 1 1 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 1 1 3 3 3 3 3 3 3 1 1 1 1 3 3 3 3 3 3 3 3 3 1 3 3 3 3 1 1 1 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 3 3 3 3 3 3 1 1 3 3 1 3 3 3 3 3 1 1 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 1 1 1 3 3 3 3 3 3 1 3 1 3 1 3 3 3 3 3 1 1 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 1 1 3 3 3 3 3 1 3 3 1 1 3 3 3 3 3 3 1 1 3 3 3 3 1 1 3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 1 1 3 3 3 3 3 1 3 3 3 1 1 3 3 3 3 3 3 1 3 3 3 3 1 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 1 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 1 3 3 3 3 3 1 1 1 3 3 3 1 1 3 3 3 3 3 3 1 3 3 1 1 3 3 3 3 1 3 3 3 3 3 3 3 3 3 1 1 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 1 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 1 1 1 3 3 3 3 3 1 1 3 3 3 3 3 1 1 3 3 3 3 3 3 1 3 1 3 3 3 3 3 3 1 3 3 3 3 3 3 3 1 1 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 1 1 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 1 1 1 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 1 1 3 3 3 3 3 1 3 1 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 3 3 3 3 3 3 3 1 1 1 3 3 3 3 1 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 1 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 3 3 3 1 1 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 1 1 1 1 1 1 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 3 3 3 3 3 1 1 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 1 3 3 3 3 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 1 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 1 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 1 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 1 3 3 3 3 3 3 3 3 3 1 3 3 1 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 1 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 1 3 3 3 3 3 3 3 1 3 1 3 3 3 3 3 3 3 1 1 1 3 1 1 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 1 3 3 1 3 1 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 1 3 3 1 1 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 1 3 3 3 1 1 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 1 3 3 3 3 3 3 1 1 3 3 3 3 3 3 1 3 3 3 3 1 1 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 1 1 3 3 3 3 3 3 1 1 3 3 3 3 3 1 3 3 3 3 3 1 1 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 1 1 3 3 3 3 3 1 3 1 3 3 3 3 3 1 3 3 3 3 3 1 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 1 1 1 3 3 3 3 3 1 3 1 3 3 3 3 1 3 3 3 3 3 3 1 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 1 1 1 3 3 3 1 1 3 1 3 3 3 3 1 3 3 1 3 3 1 1 3 3 3 3 3 3 3 1 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 1 3 1 1 1 1 1 1 3 3 1 1 3 3 1 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 1 1 3 3 1 1 1 1 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`, SpriteKind.Player)
    music.playMelody("G A - G - B B C5 ", 150)
    pause(1000)
    TitleSprite.destroy()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.questGiver, function (sprite, otherSprite) {
    if (gotObject == 0) {
        game.showLongText("Hoi " + PlayerName + " ik zoek mijn " + ObjectGame + ". " + flavorText, DialogLayout.Bottom)
        if (game.ask(" kan je mij helpen? ")) {
            game.showLongText("dank je wel" + warningText, DialogLayout.Bottom)
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
info.onCountdownEnd(function () {
    game.over(false)
})
let TitleSprite: Sprite = null
let warningText = ""
let flavorText = ""
let EnemieSprite: Sprite = null
let objectSprite: Sprite = null
let questGiverSprite: Sprite = null
let gotObject = 0
let ObjectGame = ""
let levelNumber = 0
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
controller.moveSprite(playerSprite)
scene.cameraFollowSprite(playerSprite)
scene.setBackgroundColor(7)
levelNumber = 0
levelStart()
game.onUpdate(function () {
    playerSprite.setImage(img`
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
