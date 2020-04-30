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
    if (levelNumber == 0) {
        ObjectGame = "bal"
        tiles.setTilemap(tiles.createTilemap(
            hex`20001000111210101210111213131b1110141312131b10111b12111110131413101b111414010b0a010b10011c0a0101130b0101010b13010a01010a1c011c0a010b1710100103020401130a1301130a130113101c01120111121101100a0b01100b0b11110b0616070b11011101110110010a011001110113011b011101141111141412100a08050901100a120a10011c121101120b010a130b100a140b01010b011312100a0119150b1201120a110b0101010b120111011b0110011301131310141213121011191011100111011c1011111c011101100111011201100a1001010b01121111141a11130a0a010a010a0a011401110b130a1401110a1101111013130112130a010a01010a1313121201110a010a01011001010b1001010b010a0111011412011c121401141213131c0a1001141113131c011110120a11131c110a110a111b011001010b0a01010a01011b0a010a0a01120a01010a0101010a010110011b140a110114111012121313101c111011140a120114121c1311111c10131301101101120a0101010a0a0a01010a0a010a010b100a010a010a010a010a01010b1013011c14121113131c111014131014111c0114011c0114121011101011121412120a0101010a01010a01010a01010a010a0a010b120b01010a01010a0b010a12131411101112141110101111131314111012111b1110131214111b1210111113`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . 2 . . . 2 . . . . . 2 . . . . . 2 . 2 . . . . 2 
2 . . . . . 2 . 2 . 2 . 2 . 2 2 2 . 2 . 2 2 2 . 2 . . . 2 . . 2 
2 . . . . . 2 . 2 . 2 . 2 . . . 2 . 2 . 2 . 2 . 2 . 2 2 2 2 2 2 
2 . . . . . 2 . 2 . 2 . 2 2 2 . 2 . . . 2 . 2 . 2 . . . . . 2 2 
2 . . . . . 2 . 2 . 2 . . . . . 2 . 2 . 2 . 2 . 2 . 2 2 2 2 2 2 
2 2 2 . 2 2 2 . 2 . 2 2 2 2 2 . 2 . 2 . 2 . 2 . 2 . 2 . . . . 2 
2 2 2 . 2 2 . . . . . . . . 2 . 2 . 2 . 2 . 2 . 2 . 2 2 2 2 . 2 
2 . . . . . . 2 2 2 2 . 2 . . . . . 2 . . . 2 . . . . . . 2 . 2 
2 . 2 2 2 . 2 2 2 2 2 . 2 . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 . 2 . 2 
2 . 2 . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . 2 . 2 
2 . 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . 2 . 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles18,sprites.builtin.forestTiles17,sprites.builtin.forestTiles19,sprites.castle.tilePath8,sprites.castle.saplingOak,sprites.castle.saplingPine,sprites.castle.rock1,sprites.castle.rock0,sprites.castle.rock2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.castle.shrub,sprites.builtin.forestTiles0,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles22,sprites.builtin.forestTiles21,sprites.builtin.forestTiles4],
            TileScale.Sixteen
        ))
        tiles.setTilemap(tiles.createTilemap(
            hex`2b001700111210191210111b141312141b10101c10101010101010101010101b14121313141b10101010101b14121314010b16010b100101130101010b0110010a010a010101140a01010a01010b011c010a1c010a010b0b0b12100103050401130a0114010a01010110010101010b0101120a010a010a01010a140a0a010101010b170b14110b0615070b1101011b0a01140a01100a01131214010a130101101011110101120101010a011c0b0b0b12100a06050901100a011001011b010110010a0101100101010b01100b0b110a011201011b1412141b1b1413100a0607010b1201011001011c01011001010101100a0a01010110010a1001011b0a01010a010a01010a1412100807101110010a100b0113010a121b14010a10010114010a100a011001011001010b0101010b01011b11110a1a11130a0101110101140a01010a010b0110010110010a110a0110010111010a1010111110101010120101010a01010b01110a011b01010101010101100101110a01110101100a01110a01100a01010b01011114010b01010101010110010110111110101b010a100a0a11010110010a10010a10010a1101010a010101101b01011c1b141301011c010a010b01010113010114010110010b140101120a0114010b101011111001011b1001011001010a010a120101010101010a01010101010b1001010a010a12010a0a010101010a011b0a0114100101100a0a010101131213010a14010a01010a01010110010a01010113010a0101010a0101011401011211010a10010113141213131201011b0101141b101013131c01011410131301011412131314010a13010b1310010110010b010a0101010b010110010b0a010101010b100a0101010a010b010a010101010101130101141b010a1b0a01010a010101010101110101010101010101110101010a0101010101010a01010b0112010114140101140101141c1b10101010111c111010101b14010111010b1c12141b10101111101b1413141c0b011b120101120a0a01010a010b01010101010a010a010101011001010101010a010a010a010101010a010101141301011301010a01010a01010a0a010101010a01010b0110010a010a010101010b01010b010a010a0a011413010b1313141b10101011101111101011111110140101140a01130a01131214101010111011101b1412131401010a0101010a01010101010a010a0101010a0101010101011201010b0101010101010a01010a010114140101010101010a0101010b01010101010a01010101010b010112010101010a0101010101010b010101101312141b10101111111010101c10101b1412131312141b101b141c141b1010111010101110101011101110`,
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
        scene.setBackgroundColor(6)
        gotObject = 0
        flavorText = "Maar ik durf niet alleen door het bos "
        warningText = " en raak niet verdwaalt"
        tiles.placeOnRandomTile(playerSprite, myTiles.tile2)
        for (let value of tiles.getTilesByType(myTiles.tile2)) {
            tiles.setTileAt(value, myTiles.tile5)
        }
        for (let value of tiles.getTilesByType(myTiles.tile1)) {
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
            questGiverSprite.z = -1
            tiles.placeOnTile(questGiverSprite, value)
            tiles.setTileAt(value, sprites.castle.tilePath5)
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
            animation.runMovementAnimation(
            objectSprite,
            animation.animationPresets(animation.bobbing),
            2000,
            true
            )
        }
    } else if (levelNumber == 1) {
        game.showLongText("" + PlayerName + " loopt verder er ziet verderop een jongen staan. hij lijkt te zoeken naar iets", DialogLayout.Full)
        ObjectGame = "spiegel"
        tiles.setTilemap(tiles.createTilemap(
            hex`20001000111210191210111213131b1110141312131b10111b12111110131413101b111414010b16010b100b010101011110101401010b01010a0101010a01010a010b1010010305040113011411110a01010a1101110113011011111301101412100111110b0615070b110111011410121301100a14011201140b011201010113011412100a08050901100a100a110a0101011001120a140a130101140a14010b011312100a0119010b1201100b110113010b11011301110113010b100112010b0112131210111a1011100111011001120101140a1101100a11010111011313010a01121111140111130b01120a120a11011312011b11100a1b1101010a0112011b0b1213010a010101010113181401100101010b010a01010a010b011001110a120114120113121411100113131401141110141314111011130b01011b0a10011401111b0b01010a010b0a01010a010b0101011301010b011401130111011101120b1b14011314101411111310141013011401110a101114130110011001010a1401101101140a010b010a0a010118110a130b1001010a01110a11010a010a1313101013011012111012111b11141011011301121411100110011313011314100b0b12120b010a010a010a010b01010a011201010a0101010a010114010101010b1712131411101112141110101111131314111012111b1110131214111b1210111113`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . 2 2 2 2 . . . . . . . . . . . . . . . 2 
2 . . . . . 2 . 2 2 2 . . . . 2 . 2 . 2 . 2 2 2 2 . 2 2 2 2 . 2 
2 . . . . . 2 . 2 . 2 2 2 2 . 2 . 2 . 2 . 2 . . 2 . . . 2 . 2 2 
2 . . . . . 2 . 2 . 2 . . . . 2 . 2 . 2 . 2 . . 2 . 2 . . . 2 2 
2 . . . . . 2 . 2 . 2 . 2 . . 2 . 2 . 2 . 2 . . 2 . 2 . . . 2 2 
2 2 2 . 2 2 2 . 2 . 2 . 2 . . 2 . 2 . 2 . 2 . . 2 . 2 2 . . . 2 
2 2 2 . 2 2 . . 2 . 2 . 2 . 2 2 . 2 2 2 . 2 2 . . . . 2 . 2 . 2 
2 . . . . . . . 2 . 2 . 2 . . . . . . . . . . . . 2 . 2 . 2 . 2 
2 . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 2 . . . 2 . 2 . 2 . 2 
2 . . . . . . . . . . . . . . . 2 . . . . 2 . 2 . 2 . 2 . 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 . 2 . 2 2 2 2 . 2 . 2 . . . 2 . 2 
2 . 2 . . . . . . . . . 2 . 2 . 2 . . . . 2 . 2 . . . . 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 . 2 2 2 2 . 2 . 2 2 . 2 2 2 . . 2 
2 . . . . . . . . . . . . . 2 . . . . . . . . . 2 . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles18,sprites.builtin.forestTiles17,sprites.builtin.forestTiles19,sprites.castle.tilePath8,sprites.castle.saplingOak,sprites.castle.saplingPine,sprites.castle.rock1,sprites.castle.rock0,sprites.castle.rock2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.castle.shrub],
            TileScale.Sixteen
        ))
        scene.setBackgroundColor(6)
        gotObject = 0
        flavorText = "Maar ik kan hem niet vinden "
        warningText = " en wees voorzichtig"
        tiles.placeOnRandomTile(playerSprite, myTiles.tile2)
        for (let value of tiles.getTilesByType(myTiles.tile2)) {
            tiles.setTileAt(value, myTiles.tile5)
        }
        for (let value of tiles.getTilesByType(myTiles.tile1)) {
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
            questGiverSprite.z = -1
            tiles.placeOnTile(questGiverSprite, value)
            tiles.setTileAt(value, sprites.castle.tilePath5)
        }
        for (let value of tiles.getTilesByType(myTiles.tile3)) {
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
            tiles.placeOnTile(objectSprite, value)
            tiles.setTileAt(value, sprites.castle.tileGrass2)
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
            tiles.setTileAt(value, sprites.castle.tileGrass2)
            EnemieSprite.follow(playerSprite, 10)
        }
    } else {
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
let EnemieSprite: Sprite = null
let objectSprite: Sprite = null
let questGiverSprite: Sprite = null
let warningText = ""
let flavorText = ""
let gotObject = 0
let ObjectGame = ""
let levelNumber = 0
let playerSprite: Sprite = null
let PlayerName = ""
PlayerName = "Lente"
game.showLongText("het is een zonnige dag en " + PlayerName + " loopt door het bos. door de bomen ziet ze een ander meisje staan. ze loopt naar het huilende meisje toe", DialogLayout.Full)
music.playMelody("G A - G - B B C5 ", 120)
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
levelNumber = 0
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
