/* 
 * NULL Engine
 * 
 * @module DOOM/player
 * @author kod.connect
 */

$.extend(p_, {

    name        : 'Doomguy',
    health      : 100,
    armor       : 0,
    armortype   : 0,
    weapon      : 'pistol',
    weapons     : { 
        fist    : true,
        pistol  : true
    },
    ammo        : {
        bullets : 50
    },    
    keys        : {},
    powerups    : {},
    weaponSlots : [
        null,
        [ 'fist', 'chainsaw' ],
        'pistol',
        'shotgun',
        'chaingun',
        'rocketlauncher',
        'plasmagun',
        'bfg'
    ]

});

w_.loadNext();