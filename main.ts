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
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . 5 . . . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . f 6 2 5 5 6 f . . . . 
. . . . f 6 6 6 6 1 6 6 f . . . 
. . . . f 6 6 6 6 6 1 6 f . . . 
. . . . f d f d 6 6 6 1 f . . . 
. . . . f d f d 6 6 6 6 f f . . 
. . . . f d 3 d d 6 6 6 f 6 f . 
. . . . . f d d d f f 6 f f . . 
. . . . . . f f 3 3 f f 6 6 f . 
. . . . . f d d d d f f f f . . 
. . . . . f d d d f 3 f . . . . 
. . . . . . f f f d 5 3 f . . . 
. . . . . f f f 3 3 f f . . . . 
. . . . . f f f f f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . 5 . . . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . f 6 2 5 5 6 f . . . . 
. . . . f 6 6 6 6 1 6 6 f . . . 
. . . . f 6 6 6 6 6 1 6 f . . . 
. . . . f d f d 6 6 6 1 f . . . 
. . . . f d f d 6 6 6 6 f f . . 
. . . . f d 3 d d 6 6 6 f 6 f . 
. . . . . f d d d f f 6 f f . . 
. . . . . . f f 3 3 f f 6 6 f . 
. . . . . f 5 3 3 d d f f f . . 
. . . . . f 3 3 3 f d d f . . . 
. . . . . . f 3 5 f f f . . . . 
. . . . . f 3 3 3 3 f . . . . . 
. . . . . . f f f f f . . . . . 
`],
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
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
`,img`
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
`],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . 5 . . . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . f 6 2 5 5 6 f . . . . 
. . . . f 6 6 6 6 1 6 6 f . . . 
. . . . f 6 6 6 6 6 1 6 f . . . 
. . . . f d f d 6 6 6 1 f . . . 
. . . . f d f d 6 6 6 6 f f . . 
. . . . f d 3 d d 6 6 6 f 6 f . 
. . . . . f d d d f f 6 f f . . 
. . . . . . f f 3 3 f f 6 6 f . 
. . . . . f d d d d f f f f . . 
. . . . . f d d d f 3 f . . . . 
. . . . . . f f f d 5 3 f . . . 
. . . . . f f f 3 3 f f . . . . 
. . . . . f f f f f f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . 5 . . . . . . 
. . . . . . f 5 5 5 f . . . . . 
. . . . . f 6 2 5 5 6 f . . . . 
. . . . f 6 6 6 6 1 6 6 f . . . 
. . . . f 6 6 6 6 6 1 6 f . . . 
. . . . f d f d 6 6 6 1 f . . . 
. . . . f d f d 6 6 6 6 f f . . 
. . . . f d 3 d d 6 6 6 f 6 f . 
. . . . . f d d d f f 6 f f . . 
. . . . . . f f 3 3 f f 6 6 f . 
. . . . . f 5 3 3 d d f f f . . 
. . . . . f 3 3 3 f d d f . . . 
. . . . . . f 3 5 f f f . . . . 
. . . . . f 3 3 3 3 f . . . . . 
. . . . . . f f f f f . . . . . 
`],
    100,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 6 6 6 6 6 6 f . . . . 
. . . f 6 1 1 1 6 1 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . f f 6 6 6 6 6 6 6 6 f f . . 
. f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
. . f f f 3 f f f f 5 f f f . . 
. . . f d f 3 3 3 3 d d f . . . 
. . . . f 3 5 3 3 f d d f . . . 
. . . . f 3 3 5 5 3 f f . . . . 
. . . . f f 3 3 f f . . . . . . 
. . . . . . f f . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . f 6 6 6 6 6 6 f . . . . 
. . . f 6 1 1 1 6 1 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . . f 6 6 6 6 6 6 6 6 f . . . 
. . f f 6 6 6 6 6 6 6 6 f f . . 
. f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
. . f f f 5 f f f f 3 f f f . . 
. . . f d d 3 3 3 3 f d f . . . 
. . . f d d f 3 3 5 3 f . . . . 
. . . . f f 3 5 5 3 3 f . . . . 
. . . . . . f f 3 3 f f . . . . 
. . . . . . . . f f . . . . . . 
`],
    100,
    true
    )
})
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`10001000000000000000000000000000000000000000010b010a010b00000000000000000000010302020401000000000000000000000b060505070a000000000000000000000a0805050901000000000000000000000a0106070a0b000000000000000000000d0c06070c0e00000000000000000000000006070000000000000000000000000b030505040a000000000000000000000a060505070b0000000000000000000001080f0f090a000000000000000000000b010a010a01000000000000000000000d0c0c0c0c0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
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
. 2 . . . . . . 2 . . . . . . . 
. 2 . . . . . . 2 . . . . . . . 
. 2 . . . . . . 2 . . . . . . . 
. 2 2 2 2 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles18,sprites.builtin.forestTiles17,sprites.builtin.forestTiles19,sprites.castle.tilePath8],
            TileScale.Sixteen
        ))
mySprite = sprites.create(img`
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
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
