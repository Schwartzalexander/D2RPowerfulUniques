const uniqueitemsFilename = 'global\\excel\\uniqueitems.txt';
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);
const itemsFilename = 'hd\\items\\items.json';
const items = D2RMM.readJson(itemsFilename);
const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNames = D2RMM.readJson(itemNamesFilename);

const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);

// Skill tree indexes
//
// Amazon
// 0 - Bow & Crossbow
// 1 - Passive & Magic
// 2 - Spear & Javelin
//
// Sorceress
// 3 - Fire
// 4 - Lightning
// 5 - Cold
//
// Necromancer
// 6 - Curses
// 7 - Poison & Bone
// 8 - Summoning
//
// Paladin
// 9 - Offensive Auras
// 10 - Combat Skills
// 11 - Defensive Auras
//
// Barbarian
// 12 - Masteries
// 13 - Combat Skills
// 14 - Warcries
//
// Druid
// 15 - Summoning
// 16 - Shapeshifting
// 17 - Elemental
//
// Assassin
// 18 - Traps
// 19 - Shadow Disciplines
// 20 - Martial Arts


addSorcSkillTreeUniques();
addSkillTreeUniques();
addGeneralUniques();

function addSkillTreeUniques() {
    for (let skillTreeIndex = 0; skillTreeIndex < 21; skillTreeIndex++) {

        // Rings

        addUniqueItem('Peacemaker', 'Nagelring', 'Ring', 15, 50, 'rin', 555555, 100000,
            'skilltab', skillTreeIndex, 3, 3,
            'res-ltng', null, 20, 20,
            'res-all', null, 50, 50,
            'gethit-skill', 38, 10, 50,
            'cast1', null, 10, 50,
            'cast2', null, 10, 40,
            'block', null, 10, 15,
            'block2', null, 10, 15,
            'regen', null, 15, 50,
            'hp/lvl', null, 10, 50,
            'enr', null, 10, 20,
            'nofreeze', null, 1, 1);

        addUniqueItem('Finger of power', 'Nagelring', 'Ring', 10, 75, 'rin', 555555, 100000,
            'skilltab', skillTreeIndex, 3, 3,
            'res-ltng', null, 10, 25,
            'res-all', null, 30, 30,
            'gethit-skill', 38, 10, 50,
            'cast2', null, 30, 40,
            'oskill', 'Battle Command', 25, 25,
            'oskill', 'Battle Cry', 25, 25,
            'oskill', 'Battle Orders', 25, 25,
            'aura', 'Sanctuary', 15, 50,
            'vit/lvl', 5, null, null,
            'move2', null, 15, 50,
            'crush', null, 30, 50);

        addUniqueItem('Finger of intention', 'Nagelring', 'Ring', 15, 25, 'rin', 555555, 100000,
            'skilltab', skillTreeIndex, 1, 1,
            'nofreeze', null, 1, 1,
            'res-ltng', null, 10, 25,
            'res-all', null, 5, 15,
            'gethit-skill', 38, 10, 25,
            'cast1', null, 10, 20,
            'cast2', null, 10, 20,
            'hp/lvl', null, 5, 10,
            'block', null, 10, 15,
            'block2', null, 10, 15,
            'regen', null, 15, 50,
            'enr', null, 10, 20);

        addUniqueItem('Finger of potency', 'Nagelring', 'Ring', 5, 85, 'rin', 555555, 100000,
            'allskills', null, 3, 3,
            'skilltab', skillTreeIndex, 5, 5,
            'crush', null, 50, 50,
            'regen-mana', null, 50, 50,
            'res-ltng', null, 25, 25,
            'res-all', null, 45, 45,
            'gethit-skill', 38, 25, 25,
            'aura', 'Lower Resist', 25, 25,
            'aura', 'Conviction', 25, 25,
            'cast2', null, 50, 50,
            'oskill', 'Fire Mastery', 10, 10,
            'oskill', 'Cold Mastery', 10, 10);

        // Amulets

        addUniqueItem('Necklace of power', 'Nagelring', 'Amulet', 15, 75, 'amu', 555555, 100000,
            'skilltab', skillTreeIndex, 3, 3,
            'gethit-skill', skillTreeIndex, 5, 50,
            'regen', null, 20, 50,
            'vit/lvl', 5, null, null,
            'mag%', null, 20, 50,
            'res-all', null, 30, 55,
            'light', null, 3, 15,
            'cast3', null, 10, 50,
            'red-dmg%', null, 10, 20,
            'block', null, 10, 15,
            'block2', null, 10, 15,
            'dmg-to-mana', null, 10, 20);

        addUniqueItem('Necklace of intention', 'Nagelring', 'Amulet', 15, 35, 'amu', 555555, 100000,
            'skilltab', skillTreeIndex, 2, 2,
            'gethit-skill', skillTreeIndex, 5, 30,
            'regen', null, 10, 25,
            'vit/lvl', 4, null, null,
            'mag%', null, 10, 20,
            'res-all', null, 10, 25,
            'light', null, 1, 10,
            'cast3', null, 5, 25,
            'red-dmg%', null, 5, 10,
            'block', null, 5, 15,
            'block2', null, 5, 15,
            'dmg-to-mana', null, 5, 10);

        addUniqueItem('Necklace of potency', 'Nagelring', 'Amulet', 5, 85, 'amu', 555555, 100000,
            'allskills', null, 3, 3,
            'skilltab', skillTreeIndex, 5, 5,
            'crush', null, 50, 50,
            'regen', null, 30, 30,
            'gethit-skill', skillTreeIndex, 25, 30,
            'res-all', null, 45, 45,
            'res-all-max', null, 25, 25,
            'cast2', null, 50, 50,
            'oskill', 'Battle Command', 25, 25,
            'oskill', 'Battle Cry', 25, 25,
            'oskill', 'Battle Orders', 25, 25,
            'aura', 'Sanctuary', 25, 25);

        // Charms

        let charm1Code = 'c' + (skillTreeIndex < 10 ? '0' : '') + skillTreeIndex;
        addUniqueCharm('Snake-oil flavored rock', 'Annihilus', 'charm', 50, 35, charm1Code, 1, 1,
            'allskills', null, 3, 3,
            'regen', null, 50, 50,
            'enr/lvl', null, 4, 4,
            'gethit-skill', skillTreeIndex / 2 + 11, 5, 30,
            'death-skill', 'Blizzard', 100, 50,
            'death-skill', 'Meteor', 100, 50,
            'death-skill', 'Nova', 100, 50,
            'crush', null, 50, 50,
            'str/lvl', 4, null, null,
            'dex/lvl', 4, null, null)

        let charm2Code = 'z' + (skillTreeIndex < 10 ? '0' : '') + skillTreeIndex;
        addUniqueCharm('Glowing artifact of Tristram', 'Annihilus', 'charm', 50, 35, charm2Code, 1, 1,
            'skilltab', skillTreeIndex, 5, 5,
            'mana%', null, 25, 25,
            'hp%', null, 25, 25,
            'enr/lvl', null, 4, 4,
            'gethit-skill', skillTreeIndex / 2 + 10, 5, 30,
            'abs-fire', null, 50, 50,
            'abs-cold', null, 50, 50,
            'abs-ltng', null, 50, 50,
            'abs-pois', null, 50, 50,
            'res-all-max', null, 25, 25,
            'light', null, 10, 10)
    }
}

function addSorcSkillTreeUniques() {
    for (let skillTreeIndex = 3; skillTreeIndex < 6; skillTreeIndex++) {

        addUniqueItem('Glowing gloves of Tristram', 'Steelrend', null, 5, 75, null, 555555, 100000,
            'allskills', null, 3, 3,
            'skilltab', skillTreeIndex, 3, 3,
            'ac%', null, 300, 300,
            'cast2', null, 70, 70,
            'light', null, 15, 15,
            'res-all', null, 50, 50,
            'nofreeze', null, 1, 1,
            'cast1', null, 50, 50,
            getPierceElementName(skillTreeIndex), null, 20, 20,
            getExtraElementDmgName(skillTreeIndex), null, 20, 20,
            'heal-kill', null, 50, 50,
            'regen', null, 55, 55);

        addUniqueItem('Glowing helm of Tristram', 'Crown of Ages', 'corona', 5, 75, 'urn', 555555, 100000,
            'allskills', null, 3, 3,
            'skilltab', skillTreeIndex, 3, 3,
            'ac%', null, 300, 300,
            'cast2', null, 70, 70,
            'light', null, 15, 15,
            'res-all', null, 50, 50,
            'gethit-skill', skillTreeIndex * 3, 30, 50,
            'cast1', null, 50, 50,
            getPierceElementName(skillTreeIndex), null, 20, 20,
            getExtraElementDmgName(skillTreeIndex), null, 20, 20,
            'heal-kill', null, 50, 50,
            'ac', null, 55, 55);

        addUniqueItem('Glowing helm of Tristram', 'Griffons Eye', 'diadem', 5, 75, 'ci3', 555555, 100000,
            'allskills', null, 3, 3,
            'skilltab', skillTreeIndex, 3, 3,
            'ac%', null, 300, 300,
            'cast2', null, 70, 70,
            'light', null, 15, 15,
            'res-all', null, 50, 50,
            'gethit-skill', skillTreeIndex * 3, 30, 50,
            'cast1', null, 50, 50,
            getPierceElementName(skillTreeIndex), null, 20, 20,
            getExtraElementDmgName(skillTreeIndex), null, 20, 20,
            'heal-kill', null, 50, 50,
            'ac', null, 55, 55);

        addUniqueItem('Glowing boots of Tristram', 'Shadowdancer', 'myrmidon greaves', 5, 75, 'uhb', 555555, 100000,
            'allskills', null, 3, 3,
            'skilltab', skillTreeIndex, 3, 3,
            'ac%', null, 200, 300,
            'cast2', null, 70, 70,
            'light', null, 15, 15,
            'res-all', null, 50, 50,
            'gethit-skill', skillTreeIndex * 3, 30, 50,
            'move2', null, 80, 80,
            getPierceElementName(skillTreeIndex), null, 20, 20,
            getExtraElementDmgName(skillTreeIndex), null, 20, 20,
            'ac', null, 80, 80,
            'regen', null, 55, 55);

        addUniqueItem('Glowing belt of Tristram', 'Verdugo\'s Hearty Cord', 'mithril coil', 5, 75, 'umc', 555555, 100000,
            'allskills', null, 3, 3,
            'skilltab', skillTreeIndex, 3, 3,
            'ac%', null, 300, 300,
            'block2', null, 70, 70,
            'light', null, 15, 15,
            'res-all', null, 50, 50,
            'gethit-skill', skillTreeIndex * 3, 30, 50,
            'balance2', null, 80, 80,
            getPierceElementName(skillTreeIndex), null, 20, 20,
            getExtraElementDmgName(skillTreeIndex), null, 20, 20,
            'heal-kill', null, 50, 50,
            'ac', null, 55, 55);

        addUniqueItem('Glowing belt of Tristram', 'Nosferatu\'s Coil', 'vampirefang belt', 5, 75, 'uvc', 555555, 100000,
            'allskills', null, 3, 3,
            'skilltab', skillTreeIndex, 3, 3,
            'ac%', null, 300, 300,
            'block2', null, 70, 70,
            'light', null, 15, 15,
            'res-all', null, 50, 50,
            'gethit-skill', skillTreeIndex * 3, 30, 50,
            'balance2', null, 80, 80,
            getPierceElementName(skillTreeIndex), null, 20, 20,
            getExtraElementDmgName(skillTreeIndex), null, 20, 20,
            'heal-kill', null, 50, 50,
            'ac', null, 95, 95);

        addUniqueItem('Glowing orb of Tristram', 'Eschuta\'s temper', 'eldritch orb', 5, 75, 'obc', 555555, 100000,
            'allskills', null, 3, 3,
            'skilltab', skillTreeIndex, 4, 4,
            'ac%', null, 300, 300,
            'cast2', null, 70, 70,
            'light', null, 3, 15,
            'res-all', null, 55, 55,
            'nofreeze', null, 1, 1,
            'cast1', null, 50, 50,
            getPierceElementName(skillTreeIndex), null, 20, 20,
            getExtraElementDmgName(skillTreeIndex), null, 20, 20,
            'heal-kill', null, 50, 50,
            'regen', null, 55, 55);

        addUniqueItem('Glowing orb of Tristram', 'The Oculus', 'Swirling Crystal', 5, 75, 'oba', 555555, 100000,
            'allskills', null, 3, 3,
            'skilltab', skillTreeIndex, 4, 4,
            'ac%', null, 300, 300,
            'cast2', null, 70, 70,
            'light', null, 3, 15,
            'res-all', null, 55, 55,
            'nofreeze', null, 1, 1,
            'cast1', null, 50, 50,
            getPierceElementName(skillTreeIndex), null, 20, 20,
            getExtraElementDmgName(skillTreeIndex), null, 20, 20,
            'heal-kill', null, 50, 50,
            'regen', null, 55, 55);

        addUniqueItem('Glowing shield of Tristram', 'Medusa\'s Gaze', 'Pavise', 5, 75, 'xow', 555555, 100000,
            'allskills', null, 3, 3,
            'skilltab', skillTreeIndex, 4, 4,
            'ac%', null, 300, 300,
            'cast2', null, 70, 70,
            'light', null, 15, 15,
            'res-all', null, 55, 55,
            'block', null, 50, 50,
            'cast1', null, 50, 50,
            getPierceElementName(skillTreeIndex), null, 20, 20,
            getExtraElementDmgName(skillTreeIndex), null, 20, 20,
            'heal-kill', null, 50, 50,
            'block2', null, 55, 55);

        addUniqueItem('Glowing shield of Tristram', 'Stormshield', 'Monarch', 5, 75, 'uit', 555555, 100000,
            'allskills', null, 3, 3,
            'skilltab', skillTreeIndex, 4, 4,
            'ac%', null, 300, 300,
            'cast2', null, 70, 70,
            'light', null, 15, 15,
            'res-all', null, 55, 55,
            'block', null, 50, 50,
            'cast1', null, 50, 50,
            getPierceElementName(skillTreeIndex), null, 20, 20,
            getExtraElementDmgName(skillTreeIndex), null, 20, 20,
            'heal-kill', null, 50, 50,
            'block2', null, 55, 55);

        addUniqueItem('Glowing armor of Tristram', 'Leviathan', 'kraken shell', 5, 75, 'uld', 555555, 100000,
            'allskills', null, 3, 3,
            'skilltab', skillTreeIndex, 4, 4,
            'ac%', null, 300, 300,
            'cast2', null, 70, 70,
            'light', null, 15, 15,
            'res-all', null, 55, 55,
            'oskill', 'Jump', 30, 30,
            'cast1', null, 50, 50,
            getPierceElementName(skillTreeIndex), null, 20, 20,
            getExtraElementDmgName(skillTreeIndex), null, 20, 20,
            'heal-kill', null, 50, 50,
            'regen', null, 55, 55);

        addUniqueItem('Glowing armor of Tristram', 'Steel Carapice', 'shadow plate', 5, 75, 'uul', 555555, 100000,
            'allskills', null, 3, 3,
            'skilltab', skillTreeIndex, 4, 4,
            'ac%', null, 300, 300,
            'cast2', null, 70, 70,
            'light', null, 15, 15,
            'res-all', null, 55, 55,
            'mag%', null, 20, 50,
            'ac', null, 150, 150,
            getPierceElementName(skillTreeIndex), null, 20, 20,
            getExtraElementDmgName(skillTreeIndex), null, 20, 20,
            'heal-kill', null, 50, 50,
            'regen', null, 55, 55);
    }
}

function addGeneralUniques() {

    // Rings

    addUniqueItem('Rainbow ring', 'Nagelring', 'Ring', 10, 75, 'rin', 555555, 100000,
        'allskills', null, 1, 2,
        'res-fire', null, 10, 40,
        'res-cold', null, 10, 40,
        'res-ltng', null, 10, 40,
        'res-pois', null, 10, 40,
        'res-all', null, 0, 15,
        'gethit-skill', 'Poison Nova', 5, 50,
        'death-skill', 'Blizzard', 100, 50,
        'death-skill', 'Meteor', 100, 50,
        'death-skill', 'Nova', 100, 50);

    addUniqueItem('A caster\'s delight', 'Nagelring', 'Ring', 10, 75, 'rin', 555555, 100000,
        'allskills', null, 3, 3,
        'extra-ltng', null, 10, 20,
        'extra-pois', null, 10, 20,
        'extra-cold', null, 10, 20,
        'extra-fire', null, 10, 20,
        'cast2', null, 50, 70,
        'light', null, 1, 20,
        'pierce-ltng', 0, 10, 20,
        'pierce-pois', 0, 10, 20,
        'pierce-cold', 0, 10, 20,
        'pierce-fire', 0, 10, 20);

    // Amulets

    addUniqueItem('Necklace of might', 'Nagelring', 'Amulet', 15, 75, 'amu', 555555, 100000,
        'allskills', null, 3, 3,
        'extra-ltng', null, 10, 20,
        'extra-pois', null, 10, 20,
        'extra-cold', null, 10, 20,
        'extra-fire', null, 10, 20,
        'cast2', null, 50, 70,
        'light', null, 1, 20,
        'pierce-ltng', 0, 10, 20,
        'pierce-pois', 0, 10, 20,
        'pierce-cold', 0, 10, 20,
        'pierce-fire', 0, 10, 20);
}

function getPierceElementName(skillTreeIndex) {
    switch (skillTreeIndex) {
        case 2:
            return 'pierce-ltng';
        case 3:
            return 'pierce-fire'
        case 4:
            return 'pierce-ltng';
        case 5:
            return 'pierce-cold';
        default:
            return 'pierce-pois';

    }
}

function getExtraElementDmgName(skillTreeIndex) {
    switch (skillTreeIndex) {
        case 2:
            return 'extra-ltng';
        case 3:
            return 'extra-fire'
        case 4:
            return 'extra-ltng';
        case 5:
            return 'extra-cold';
        default:
            return 'extra-pois';

    }
}


function addUniqueItem(itemName, referanceItemName, baseItemName = null, rarity, lvl, code = null, costMult, costAdd,
                       prop1 = null, par1 = null, min1 = null, max1 = null,
                       prop2 = null, par2 = null, min2 = null, max2 = null,
                       prop3 = null, par3 = null, min3 = null, max3 = null,
                       prop4 = null, par4 = null, min4 = null, max4 = null,
                       prop5 = null, par5 = null, min5 = null, max5 = null,
                       prop6 = null, par6 = null, min6 = null, max6 = null,
                       prop7 = null, par7 = null, min7 = null, max7 = null,
                       prop8 = null, par8 = null, min8 = null, max8 = null,
                       prop9 = null, par9 = null, min9 = null, max9 = null,
                       prop10 = null, par10 = null, min10 = null, max10 = null,
                       prop11 = null, par11 = null, min11 = null, max11 = null,
                       prop12 = null, par12 = null, min12 = null, max12 = null) {
    uniqueitems.rows.push({
        ...uniqueitems.rows.find((row) => row.index === referanceItemName),
        index: itemName,
        '*ID': Math.max(...uniqueitems.rows.map((row) => row['*ID'])) + 1,
        version: 0,
        enabled: 1,
        firstLadderSeason: 15,
        lastLadderSeason: 1,
        rarity: rarity,
        nolimit: 1,
        lvl: lvl,
        'lvl req': lvl,
        code,
        '*ItemName': baseItemName ? baseItemName : itemName.toLowerCase(),
        carry1: null,
        'cost mult': costMult,
        'cost add': costAdd,
        chrtransform: null,
        invtransform: null,
        flippyfile: null,
        invfile: null,
        dropsound: null,
        dropsfxframe: null,
        usesound: null,
        prop1, par1, min1, max1,
        prop2, par2, min2, max2,
        prop3, par3, min3, max3,
        prop4, par4, min4, max4,
        prop5, par5, min5, max5,
        prop6, par6, min6, max6,
        prop7, par7, min7, max7,
        prop8, par8, min8, max8,
        prop9, par9, min9, max9,
        prop10, par10, min10, max10,
        prop11, par11, min11, max11,
        prop12, par12, min12, max12,
        diablocloneweight: null,
        '*eol': 0
    });

    pushItemName(itemName);
}

function addUniqueCharm(itemName, referanceItemName, baseItemName = null, rarity, lvl, code = null, costMult, costAdd,
                        prop1 = null, par1 = null, min1 = null, max1 = null,
                        prop2 = null, par2 = null, min2 = null, max2 = null,
                        prop3 = null, par3 = null, min3 = null, max3 = null,
                        prop4 = null, par4 = null, min4 = null, max4 = null,
                        prop5 = null, par5 = null, min5 = null, max5 = null,
                        prop6 = null, par6 = null, min6 = null, max6 = null,
                        prop7 = null, par7 = null, min7 = null, max7 = null,
                        prop8 = null, par8 = null, min8 = null, max8 = null,
                        prop9 = null, par9 = null, min9 = null, max9 = null,
                        prop10 = null, par10 = null, min10 = null, max10 = null,
                        prop11 = null, par11 = null, min11 = null, max11 = null,
                        prop12 = null, par12 = null, min12 = null, max12 = null) {
    addUniqueItem(itemName, referanceItemName, baseItemName, rarity, lvl, code, costMult, costAdd,
        prop1, par1, min1, max1,
        prop2, par2, min2, max2,
        prop3, par3, min3, max3,
        prop4, par4, min4, max4,
        prop5, par5, min5, max5,
        prop6, par6, min6, max6,
        prop7, par7, min7, max7,
        prop8, par8, min8, max8,
        prop9, par9, min9, max9,
        prop10, par10, min10, max10,
        prop11, par11, min11, max11,
        prop12, par12, min12, max12);

    misc.rows.push({
        ...misc.rows.find((row) => row.name === 'Small Charm'),
        name: itemName,
        level: 1,
        code: code,
        unique: 1,
        cost: 0, 'gamble cost': 0,
        GheedMin: 1, GheedMax: 1, GheedMagicMin: 1, GheedMagicMax: 1, GheedMagicLevel: 255,
        PermStoreItem: 1, multibuy: 1, NightmareUpgrade: 'xxx', HellUpgrade: 'xxx',
    });

    items.push({
        [code]: {asset: 'charm/charm_small'},
    });
}


function pushItemName(name) {
    itemNames.push({
        id: D2RMM.getNextStringID(),
        Key: name,
        enUS: name,
        zhTW: name,
        deDE: name,
        esES: name,
        frFR: name,
        itIT: name,
        koKR: name,
        plPL: name,
        esMX: name,
        jaJP: name,
        ptBR: name,
        ruRU: name,
        zhCN: name,
    });
}

D2RMM.writeJson(itemsFilename, items);
D2RMM.writeJson(itemNamesFilename, itemNames);
D2RMM.writeTsv(miscFilename, misc);
D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);
