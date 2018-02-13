'use strict';
function inventory(arr) {
    let heroData = [];
    for (var i = 0; i < arr.length; i++) {
        let currentHeroTokens = arr[i].split(' / ');
        let currentHeroItems = [];
        let currentHeroName = currentHeroTokens[0];
        let currentHeroLevel = Number(currentHeroTokens[1]);
        
        if (currentHeroTokens.length > 2) {
            currentHeroItems = currentHeroTokens[2].split(", ");
        }
        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}
inventory['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']
//function heroicInventory(arr) {
//    let heroData = [];

//    for (let i = 0; i < arr.length; i++) {
//        let currentHeroArguments = arr[i].split(' / ');
//        let currentHeroItems = [];
//        let currentHeroName = currentHeroArguments[0];
//        let currentHeroLevel = Number(currentHeroArguments[1]);
//        if (currentHeroArguments.length > 2) {
//            currentHeroItems = currentHeroArguments[2].split(", ");
//        }
//        let hero = {
//            name: currentHeroName,
//            level: currentHeroLevel,
//            items: currentHeroItems
//        };
//        heroData.push(hero);
//    }
//    console.log(JSON.stringify(heroData));
//}