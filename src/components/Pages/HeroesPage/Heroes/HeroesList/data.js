const query = {
  data: {
    constants: {
      heroes: [
        {
          id: 1,
          name: "npc_dota_hero_antimage",
          displayName: "Anti-Mage",
          shortName: "antimage",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["am", "wei"],
        },
        {
          id: 2,
          name: "npc_dota_hero_axe",
          displayName: "Axe",
          shortName: "axe",
          stats: {
            primaryAttribute: "str",
          },
          aliases: [],
        },
        {
          id: 3,
          name: "npc_dota_hero_bane",
          displayName: "Bane",
          shortName: "bane",
          stats: {
            primaryAttribute: "all",
          },
          aliases: [],
        },
        {
          id: 4,
          name: "npc_dota_hero_bloodseeker",
          displayName: "Bloodseeker",
          shortName: "bloodseeker",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["bs"],
        },
        {
          id: 5,
          name: "npc_dota_hero_crystal_maiden",
          displayName: "Crystal Maiden",
          shortName: "crystal_maiden",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["cm", "rylai", "wolf"],
        },
        {
          id: 6,
          name: "npc_dota_hero_drow_ranger",
          displayName: "Drow Ranger",
          shortName: "drow_ranger",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["Traxex"],
        },
        {
          id: 7,
          name: "npc_dota_hero_earthshaker",
          displayName: "Earthshaker",
          shortName: "earthshaker",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["es", "Raigor"],
        },
        {
          id: 8,
          name: "npc_dota_hero_juggernaut",
          displayName: "Juggernaut",
          shortName: "juggernaut",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["Yurnero"],
        },
        {
          id: 9,
          name: "npc_dota_hero_mirana",
          displayName: "Mirana",
          shortName: "mirana",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["Princess", "Moon", "potm"],
        },
        {
          id: 10,
          name: "npc_dota_hero_morphling",
          displayName: "Morphling",
          shortName: "morphling",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: [],
        },
        {
          id: 11,
          name: "npc_dota_hero_nevermore",
          displayName: "Shadow Fiend",
          shortName: "nevermore",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["sf", "nevermore"],
        },
        {
          id: 12,
          name: "npc_dota_hero_phantom_lancer",
          displayName: "Phantom Lancer",
          shortName: "phantom_lancer",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["pl", "Azwraith"],
        },
        {
          id: 13,
          name: "npc_dota_hero_puck",
          displayName: "Puck",
          shortName: "puck",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["Faerie Dragon", "fd"],
        },
        {
          id: 14,
          name: "npc_dota_hero_pudge",
          displayName: "Pudge",
          shortName: "pudge",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Toy Butcher"],
        },
        {
          id: 15,
          name: "npc_dota_hero_razor",
          displayName: "Razor",
          shortName: "razor",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["Lightning Revenant"],
        },
        {
          id: 16,
          name: "npc_dota_hero_sand_king",
          displayName: "Sand King",
          shortName: "sand_king",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["sk", "Crixalis"],
        },
        {
          id: 17,
          name: "npc_dota_hero_storm_spirit",
          displayName: "Storm Spirit",
          shortName: "storm_spirit",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["ss", "raijin", "thunderkeg"],
        },
        {
          id: 18,
          name: "npc_dota_hero_sven",
          displayName: "Sven",
          shortName: "sven",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Rogue Knight"],
        },
        {
          id: 19,
          name: "npc_dota_hero_tiny",
          displayName: "Tiny",
          shortName: "tiny",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Stone Giant"],
        },
        {
          id: 20,
          name: "npc_dota_hero_vengefulspirit",
          displayName: "Vengeful Spirit",
          shortName: "vengefulspirit",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["vs", "Shendelzare"],
        },
        {
          id: 21,
          name: "npc_dota_hero_windrunner",
          displayName: "Windranger",
          shortName: "windrunner",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["wr", "Lyralei"],
        },
        {
          id: 22,
          name: "npc_dota_hero_zuus",
          displayName: "Zeus",
          shortName: "zuus",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["Lord of Heaven"],
        },
        {
          id: 23,
          name: "npc_dota_hero_kunkka",
          displayName: "Kunkka",
          shortName: "kunkka",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Admiral"],
        },
        {
          id: 25,
          name: "npc_dota_hero_lina",
          displayName: "Lina",
          shortName: "lina",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["slayer"],
        },
        {
          id: 26,
          name: "npc_dota_hero_lion",
          displayName: "Lion",
          shortName: "lion",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["Demon Witch"],
        },
        {
          id: 27,
          name: "npc_dota_hero_shadow_shaman",
          displayName: "Shadow Shaman",
          shortName: "shadow_shaman",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["ss", "Rhasta"],
        },
        {
          id: 28,
          name: "npc_dota_hero_slardar",
          displayName: "Slardar",
          shortName: "slardar",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Slithereen Guard"],
        },
        {
          id: 29,
          name: "npc_dota_hero_tidehunter",
          displayName: "Tidehunter",
          shortName: "tidehunter",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["th", "Leviathan"],
        },
        {
          id: 30,
          name: "npc_dota_hero_witch_doctor",
          displayName: "Witch Doctor",
          shortName: "witch_doctor",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["wd", "Zharvakko"],
        },
        {
          id: 31,
          name: "npc_dota_hero_lich",
          displayName: "Lich",
          shortName: "lich",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["Ethreain"],
        },
        {
          id: 32,
          name: "npc_dota_hero_riki",
          displayName: "Riki",
          shortName: "riki",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["Stealth Assassin", "sa"],
        },
        {
          id: 33,
          name: "npc_dota_hero_enigma",
          displayName: "Enigma",
          shortName: "enigma",
          stats: {
            primaryAttribute: "all",
          },
          aliases: [],
        },
        {
          id: 34,
          name: "npc_dota_hero_tinker",
          displayName: "Tinker",
          shortName: "tinker",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["Boush"],
        },
        {
          id: 35,
          name: "npc_dota_hero_sniper",
          displayName: "Sniper",
          shortName: "sniper",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["Kardel Sharpeye"],
        },
        {
          id: 36,
          name: "npc_dota_hero_necrolyte",
          displayName: "Necrophos",
          shortName: "necrolyte",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["Rotundjere"],
        },
        {
          id: 37,
          name: "npc_dota_hero_warlock",
          displayName: "Warlock",
          shortName: "warlock",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["wl", "Demnok Lannik"],
        },
        {
          id: 38,
          name: "npc_dota_hero_beastmaster",
          displayName: "Beastmaster",
          shortName: "beastmaster",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["bm"],
        },
        {
          id: 39,
          name: "npc_dota_hero_queenofpain",
          displayName: "Queen of Pain",
          shortName: "queenofpain",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["qop", "Akasha"],
        },
        {
          id: 40,
          name: "npc_dota_hero_venomancer",
          displayName: "Venomancer",
          shortName: "venomancer",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["Lesale"],
        },
        {
          id: 41,
          name: "npc_dota_hero_faceless_void",
          displayName: "Faceless Void",
          shortName: "faceless_void",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["fv"],
        },
        {
          id: 42,
          name: "npc_dota_hero_skeleton_king",
          displayName: "Wraith King",
          shortName: "skeleton_king",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["sk", "snk", "wk", "skeleton", "one true king", "Ostarion"],
        },
        {
          id: 43,
          name: "npc_dota_hero_death_prophet",
          displayName: "Death Prophet",
          shortName: "death_prophet",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["dp", "Krobelus"],
        },
        {
          id: 44,
          name: "npc_dota_hero_phantom_assassin",
          displayName: "Phantom Assassin",
          shortName: "phantom_assassin",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["pa", "mortred"],
        },
        {
          id: 45,
          name: "npc_dota_hero_pugna",
          displayName: "Pugna",
          shortName: "pugna",
          stats: {
            primaryAttribute: "int",
          },
          aliases: [],
        },
        {
          id: 46,
          name: "npc_dota_hero_templar_assassin",
          displayName: "Templar Assassin",
          shortName: "templar_assassin",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["ta", "Lanaya"],
        },
        {
          id: 47,
          name: "npc_dota_hero_viper",
          displayName: "Viper",
          shortName: "viper",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["Netherdrake"],
        },
        {
          id: 48,
          name: "npc_dota_hero_luna",
          displayName: "Luna",
          shortName: "luna",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["Moon Rider"],
        },
        {
          id: 49,
          name: "npc_dota_hero_dragon_knight",
          displayName: "Dragon Knight",
          shortName: "dragon_knight",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["dk", "davion", "dragon's blood"],
        },
        {
          id: 50,
          name: "npc_dota_hero_dazzle",
          displayName: "Dazzle",
          shortName: "dazzle",
          stats: {
            primaryAttribute: "all",
          },
          aliases: [],
        },
        {
          id: 51,
          name: "npc_dota_hero_rattletrap",
          displayName: "Clockwerk",
          shortName: "rattletrap",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Rattletrap", "cw"],
        },
        {
          id: 52,
          name: "npc_dota_hero_leshrac",
          displayName: "Leshrac",
          shortName: "leshrac",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["ts"],
        },
        {
          id: 53,
          name: "npc_dota_hero_furion",
          displayName: "Nature's Prophet",
          shortName: "furion",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["np"],
        },
        {
          id: 54,
          name: "npc_dota_hero_life_stealer",
          displayName: "Lifestealer",
          shortName: "life_stealer",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["ls", "Naix"],
        },
        {
          id: 55,
          name: "npc_dota_hero_dark_seer",
          displayName: "Dark Seer",
          shortName: "dark_seer",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["ds", "Ishkafel"],
        },
        {
          id: 56,
          name: "npc_dota_hero_clinkz",
          displayName: "Clinkz",
          shortName: "clinkz",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: [],
        },
        {
          id: 57,
          name: "npc_dota_hero_omniknight",
          displayName: "Omniknight",
          shortName: "omniknight",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Purist Thunderwrath"],
        },
        {
          id: 58,
          name: "npc_dota_hero_enchantress",
          displayName: "Enchantress",
          shortName: "enchantress",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["Aiushtha"],
        },
        {
          id: 59,
          name: "npc_dota_hero_huskar",
          displayName: "Huskar",
          shortName: "huskar",
          stats: {
            primaryAttribute: "str",
          },
          aliases: [],
        },
        {
          id: 60,
          name: "npc_dota_hero_night_stalker",
          displayName: "Night Stalker",
          shortName: "night_stalker",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["ns", "Balanar"],
        },
        {
          id: 61,
          name: "npc_dota_hero_broodmother",
          displayName: "Broodmother",
          shortName: "broodmother",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["bm", "Arachnia"],
        },
        {
          id: 62,
          name: "npc_dota_hero_bounty_hunter",
          displayName: "Bounty Hunter",
          shortName: "bounty_hunter",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["bh"],
        },
        {
          id: 63,
          name: "npc_dota_hero_weaver",
          displayName: "Weaver",
          shortName: "weaver",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["nw", "Skitskurr"],
        },
        {
          id: 64,
          name: "npc_dota_hero_jakiro",
          displayName: "Jakiro",
          shortName: "jakiro",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["thd", "twin headed dragon"],
        },
        {
          id: 65,
          name: "npc_dota_hero_batrider",
          displayName: "Batrider",
          shortName: "batrider",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["br"],
        },
        {
          id: 66,
          name: "npc_dota_hero_chen",
          displayName: "Chen",
          shortName: "chen",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["Holy Knight"],
        },
        {
          id: 67,
          name: "npc_dota_hero_spectre",
          displayName: "Spectre",
          shortName: "spectre",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["Mercurial"],
        },
        {
          id: 68,
          name: "npc_dota_hero_ancient_apparition",
          displayName: "Ancient Apparition",
          shortName: "ancient_apparition",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["aa"],
        },
        {
          id: 69,
          name: "npc_dota_hero_doom_bringer",
          displayName: "Doom",
          shortName: "doom_bringer",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["db"],
        },
        {
          id: 70,
          name: "npc_dota_hero_ursa",
          displayName: "Ursa",
          shortName: "ursa",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["Ulfsaar"],
        },
        {
          id: 71,
          name: "npc_dota_hero_spirit_breaker",
          displayName: "Spirit Breaker",
          shortName: "spirit_breaker",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["sb", "Barathrum"],
        },
        {
          id: 72,
          name: "npc_dota_hero_gyrocopter",
          displayName: "Gyrocopter",
          shortName: "gyrocopter",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["Aurel"],
        },
        {
          id: 73,
          name: "npc_dota_hero_alchemist",
          displayName: "Alchemist",
          shortName: "alchemist",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Razzil"],
        },
        {
          id: 74,
          name: "npc_dota_hero_invoker",
          displayName: "Invoker",
          shortName: "invoker",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["kid"],
        },
        {
          id: 75,
          name: "npc_dota_hero_silencer",
          displayName: "Silencer",
          shortName: "silencer",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["Nortrom"],
        },
        {
          id: 76,
          name: "npc_dota_hero_obsidian_destroyer",
          displayName: "Outworld Destroyer",
          shortName: "obsidian_destroyer",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["od", "Harbinger"],
        },
        {
          id: 77,
          name: "npc_dota_hero_lycan",
          displayName: "Lycan",
          shortName: "lycan",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Banehallow", "wolf"],
        },
        {
          id: 78,
          name: "npc_dota_hero_brewmaster",
          displayName: "Brewmaster",
          shortName: "brewmaster",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["bm", "Mangix"],
        },
        {
          id: 79,
          name: "npc_dota_hero_shadow_demon",
          displayName: "Shadow Demon",
          shortName: "shadow_demon",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["sd"],
        },
        {
          id: 80,
          name: "npc_dota_hero_lone_druid",
          displayName: "Lone Druid",
          shortName: "lone_druid",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["ld", "bear", "Sylla"],
        },
        {
          id: 81,
          name: "npc_dota_hero_chaos_knight",
          displayName: "Chaos Knight",
          shortName: "chaos_knight",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["ck"],
        },
        {
          id: 82,
          name: "npc_dota_hero_meepo",
          displayName: "Meepo",
          shortName: "meepo",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["geomancer", "meepwn"],
        },
        {
          id: 83,
          name: "npc_dota_hero_treant",
          displayName: "Treant Protector",
          shortName: "treant",
          stats: {
            primaryAttribute: "str",
          },
          aliases: [],
        },
        {
          id: 84,
          name: "npc_dota_hero_ogre_magi",
          displayName: "Ogre Magi",
          shortName: "ogre_magi",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["om"],
        },
        {
          id: 85,
          name: "npc_dota_hero_undying",
          displayName: "Undying",
          shortName: "undying",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Dirge"],
        },
        {
          id: 86,
          name: "npc_dota_hero_rubick",
          displayName: "Rubick",
          shortName: "rubick",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["rubick"],
        },
        {
          id: 87,
          name: "npc_dota_hero_disruptor",
          displayName: "Disruptor",
          shortName: "disruptor",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["disruptor"],
        },
        {
          id: 88,
          name: "npc_dota_hero_nyx_assassin",
          displayName: "Nyx Assassin",
          shortName: "nyx_assassin",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["na"],
        },
        {
          id: 89,
          name: "npc_dota_hero_naga_siren",
          displayName: "Naga Siren",
          shortName: "naga_siren",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["naga", "Slithice"],
        },
        {
          id: 90,
          name: "npc_dota_hero_keeper_of_the_light",
          displayName: "Keeper of the Light",
          shortName: "keeper_of_the_light",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["keeper", "ezalor", "kotl"],
        },
        {
          id: 91,
          name: "npc_dota_hero_wisp",
          displayName: "Io",
          shortName: "wisp",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["wisp"],
        },
        {
          id: 92,
          name: "npc_dota_hero_visage",
          displayName: "Visage",
          shortName: "visage",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["visage", "Necrolic"],
        },
        {
          id: 93,
          name: "npc_dota_hero_slark",
          displayName: "Slark",
          shortName: "slark",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["slark"],
        },
        {
          id: 94,
          name: "npc_dota_hero_medusa",
          displayName: "Medusa",
          shortName: "medusa",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["medusa", "gorgon"],
        },
        {
          id: 95,
          name: "npc_dota_hero_troll_warlord",
          displayName: "Troll Warlord",
          shortName: "troll_warlord",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["troll", "jahrakal"],
        },
        {
          id: 96,
          name: "npc_dota_hero_centaur",
          displayName: "Centaur Warrunner",
          shortName: "centaur",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["centaur"],
        },
        {
          id: 97,
          name: "npc_dota_hero_magnataur",
          displayName: "Magnus",
          shortName: "magnataur",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["magnataur", "magnus"],
        },
        {
          id: 98,
          name: "npc_dota_hero_shredder",
          displayName: "Timbersaw",
          shortName: "shredder",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Rizzrack", "Shredder", "Timbersaw"],
        },
        {
          id: 99,
          name: "npc_dota_hero_bristleback",
          displayName: "Bristleback",
          shortName: "bristleback",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Rigwarl", "bb"],
        },
        {
          id: 100,
          name: "npc_dota_hero_tusk",
          displayName: "Tusk",
          shortName: "tusk",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Ymir"],
        },
        {
          id: 101,
          name: "npc_dota_hero_skywrath_mage",
          displayName: "Skywrath Mage",
          shortName: "skywrath_mage",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["sm", "Dragonus"],
        },
        {
          id: 102,
          name: "npc_dota_hero_abaddon",
          displayName: "Abaddon",
          shortName: "abaddon",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["Abaddon"],
        },
        {
          id: 103,
          name: "npc_dota_hero_elder_titan",
          displayName: "Elder Titan",
          shortName: "elder_titan",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["TC", "Cairne", "et"],
        },
        {
          id: 104,
          name: "npc_dota_hero_legion_commander",
          displayName: "Legion Commander",
          shortName: "legion_commander",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Tresdin", "Legion", "lc"],
        },
        {
          id: 105,
          name: "npc_dota_hero_techies",
          displayName: "Techies",
          shortName: "techies",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["Squee", "Spleen", "Spoon"],
        },
        {
          id: 106,
          name: "npc_dota_hero_ember_spirit",
          displayName: "Ember Spirit",
          shortName: "ember_spirit",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["Xin", "Ember", "es"],
        },
        {
          id: 107,
          name: "npc_dota_hero_earth_spirit",
          displayName: "Earth Spirit",
          shortName: "earth_spirit",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["es", "Kaolin", "Earth"],
        },
        {
          id: 108,
          name: "npc_dota_hero_abyssal_underlord",
          displayName: "Underlord",
          shortName: "abyssal_underlord",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["PitLord", "Azgalor", "ul"],
        },
        {
          id: 109,
          name: "npc_dota_hero_terrorblade",
          displayName: "Terrorblade",
          shortName: "terrorblade",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["tb"],
        },
        {
          id: 110,
          name: "npc_dota_hero_phoenix",
          displayName: "Phoenix",
          shortName: "phoenix",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["ph"],
        },
        {
          id: 111,
          name: "npc_dota_hero_oracle",
          displayName: "Oracle",
          shortName: "oracle",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["ora", "Nerif"],
        },
        {
          id: 112,
          name: "npc_dota_hero_winter_wyvern",
          displayName: "Winter Wyvern",
          shortName: "winter_wyvern",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["ww", "Auroth"],
        },
        {
          id: 113,
          name: "npc_dota_hero_arc_warden",
          displayName: "Arc Warden",
          shortName: "arc_warden",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["zet", "aw"],
        },
        {
          id: 114,
          name: "npc_dota_hero_monkey_king",
          displayName: "Monkey King",
          shortName: "monkey_king",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["mk", "Sun Wukong"],
        },
        {
          id: 119,
          name: "npc_dota_hero_dark_willow",
          displayName: "Dark Willow",
          shortName: "dark_willow",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["dw", "Mireska"],
        },
        {
          id: 120,
          name: "npc_dota_hero_pangolier",
          displayName: "Pangolier",
          shortName: "pangolier",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["ar"],
        },
        {
          id: 121,
          name: "npc_dota_hero_grimstroke",
          displayName: "Grimstroke",
          shortName: "grimstroke",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["gs"],
        },
        {
          id: 123,
          name: "npc_dota_hero_hoodwink",
          displayName: "Hoodwink",
          shortName: "hoodwink",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["squirrel", "hw"],
        },
        {
          id: 126,
          name: "npc_dota_hero_void_spirit",
          displayName: "Void Spirit",
          shortName: "void_spirit",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["Void", "VS", "Inai"],
        },
        {
          id: 128,
          name: "npc_dota_hero_snapfire",
          displayName: "Snapfire",
          shortName: "snapfire",
          stats: {
            primaryAttribute: "all",
          },
          aliases: ["snap", "mortimer"],
        },
        {
          id: 129,
          name: "npc_dota_hero_mars",
          displayName: "Mars",
          shortName: "mars",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["mars"],
        },
        {
          id: 131,
          name: "npc_dota_hero_ringmaster",
          displayName: "Ringmaster",
          shortName: "ringmaster",
          stats: {
            primaryAttribute: "int",
          },
          aliases: ["rm", "marionetto", "cogliostro"],
        },
        {
          id: 135,
          name: "npc_dota_hero_dawnbreaker",
          displayName: "Dawnbreaker",
          shortName: "dawnbreaker",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["Dawnbreaker", "Valora"],
        },
        {
          id: 136,
          name: "npc_dota_hero_marci",
          displayName: "Marci",
          shortName: "marci",
          stats: {
            primaryAttribute: "all",
          },
          aliases: [],
        },
        {
          id: 137,
          name: "npc_dota_hero_primal_beast",
          displayName: "Primal Beast",
          shortName: "primal_beast",
          stats: {
            primaryAttribute: "str",
          },
          aliases: ["pb"],
        },
        {
          id: 138,
          name: "npc_dota_hero_muerta",
          displayName: "Muerta",
          shortName: "muerta",
          stats: {
            primaryAttribute: "int",
          },
          aliases: [],
        },
        {
          id: 145,
          name: "npc_dota_hero_kez",
          displayName: "Kez",
          shortName: "kez",
          stats: {
            primaryAttribute: "agi",
          },
          aliases: ["bird samurai", "kestrel"],
        },
      ],
    },
  },
};
const winRatePos1 = {
  data: {
    heroStats: {
      winDay: [
        {
          heroId: 1,
          matchCount: 53686,
          winCount: 26913,
        },
        {
          heroId: 2,
          matchCount: 1109,
          winCount: 546,
        },
        {
          heroId: 3,
          matchCount: 55,
          winCount: 15,
        },
        {
          heroId: 4,
          matchCount: 22126,
          winCount: 11240,
        },
        {
          heroId: 5,
          matchCount: 329,
          winCount: 129,
        },
        {
          heroId: 6,
          matchCount: 51324,
          winCount: 25618,
        },
        {
          heroId: 7,
          matchCount: 1536,
          winCount: 694,
        },
        {
          heroId: 8,
          matchCount: 64694,
          winCount: 34274,
        },
        {
          heroId: 9,
          matchCount: 2307,
          winCount: 1080,
        },
        {
          heroId: 10,
          matchCount: 22389,
          winCount: 10054,
        },
        {
          heroId: 11,
          matchCount: 9142,
          winCount: 4591,
        },
        {
          heroId: 12,
          matchCount: 24776,
          winCount: 10793,
        },
        {
          heroId: 13,
          matchCount: 180,
          winCount: 75,
        },
        {
          heroId: 14,
          matchCount: 9662,
          winCount: 4184,
        },
        {
          heroId: 15,
          matchCount: 5754,
          winCount: 2865,
        },
        {
          heroId: 16,
          matchCount: 314,
          winCount: 137,
        },
        {
          heroId: 17,
          matchCount: 376,
          winCount: 168,
        },
        {
          heroId: 18,
          matchCount: 13605,
          winCount: 6664,
        },
        {
          heroId: 19,
          matchCount: 28213,
          winCount: 14995,
        },
        {
          heroId: 20,
          matchCount: 1005,
          winCount: 502,
        },
        {
          heroId: 21,
          matchCount: 2550,
          winCount: 1041,
        },
        {
          heroId: 22,
          matchCount: 710,
          winCount: 290,
        },
        {
          heroId: 23,
          matchCount: 419,
          winCount: 169,
        },
        {
          heroId: 25,
          matchCount: 2104,
          winCount: 881,
        },
        {
          heroId: 26,
          matchCount: 729,
          winCount: 286,
        },
        {
          heroId: 27,
          matchCount: 467,
          winCount: 168,
        },
        {
          heroId: 28,
          matchCount: 1776,
          winCount: 862,
        },
        {
          heroId: 29,
          matchCount: 2149,
          winCount: 1167,
        },
        {
          heroId: 30,
          matchCount: 504,
          winCount: 233,
        },
        {
          heroId: 31,
          matchCount: 200,
          winCount: 76,
        },
        {
          heroId: 32,
          matchCount: 14171,
          winCount: 7120,
        },
        {
          heroId: 33,
          matchCount: 251,
          winCount: 100,
        },
        {
          heroId: 34,
          matchCount: 229,
          winCount: 108,
        },
        {
          heroId: 35,
          matchCount: 13928,
          winCount: 6682,
        },
        {
          heroId: 36,
          matchCount: 1439,
          winCount: 733,
        },
        {
          heroId: 37,
          matchCount: 363,
          winCount: 158,
        },
        {
          heroId: 38,
          matchCount: 1285,
          winCount: 577,
        },
        {
          heroId: 39,
          matchCount: 779,
          winCount: 348,
        },
        {
          heroId: 40,
          matchCount: 1980,
          winCount: 828,
        },
        {
          heroId: 41,
          matchCount: 22010,
          winCount: 10365,
        },
        {
          heroId: 42,
          matchCount: 17359,
          winCount: 9361,
        },
        {
          heroId: 43,
          matchCount: 255,
          winCount: 118,
        },
        {
          heroId: 44,
          matchCount: 101193,
          winCount: 47380,
        },
        {
          heroId: 45,
          matchCount: 179,
          winCount: 68,
        },
        {
          heroId: 46,
          matchCount: 6789,
          winCount: 3027,
        },
        {
          heroId: 47,
          matchCount: 2839,
          winCount: 1290,
        },
        {
          heroId: 48,
          matchCount: 13872,
          winCount: 6684,
        },
        {
          heroId: 49,
          matchCount: 54475,
          winCount: 29171,
        },
        {
          heroId: 50,
          matchCount: 973,
          winCount: 479,
        },
        {
          heroId: 51,
          matchCount: 142,
          winCount: 64,
        },
        {
          heroId: 52,
          matchCount: 267,
          winCount: 135,
        },
        {
          heroId: 53,
          matchCount: 5470,
          winCount: 2789,
        },
        {
          heroId: 54,
          matchCount: 89631,
          winCount: 51328,
        },
        {
          heroId: 55,
          matchCount: 205,
          winCount: 92,
        },
        {
          heroId: 56,
          matchCount: 4801,
          winCount: 2447,
        },
        {
          heroId: 57,
          matchCount: 137,
          winCount: 56,
        },
        {
          heroId: 58,
          matchCount: 212,
          winCount: 92,
        },
        {
          heroId: 59,
          matchCount: 1390,
          winCount: 655,
        },
        {
          heroId: 60,
          matchCount: 833,
          winCount: 418,
        },
        {
          heroId: 61,
          matchCount: 3687,
          winCount: 1796,
        },
        {
          heroId: 62,
          matchCount: 800,
          winCount: 282,
        },
        {
          heroId: 63,
          matchCount: 12003,
          winCount: 5840,
        },
        {
          heroId: 64,
          matchCount: 1755,
          winCount: 798,
        },
        {
          heroId: 65,
          matchCount: 45,
          winCount: 15,
        },
        {
          heroId: 66,
          matchCount: 34,
          winCount: 12,
        },
        {
          heroId: 67,
          matchCount: 44036,
          winCount: 22210,
        },
        {
          heroId: 68,
          matchCount: 294,
          winCount: 140,
        },
        {
          heroId: 69,
          matchCount: 421,
          winCount: 178,
        },
        {
          heroId: 70,
          matchCount: 29021,
          winCount: 14392,
        },
        {
          heroId: 71,
          matchCount: 674,
          winCount: 285,
        },
        {
          heroId: 72,
          matchCount: 10204,
          winCount: 5007,
        },
        {
          heroId: 73,
          matchCount: 12195,
          winCount: 5835,
        },
        {
          heroId: 74,
          matchCount: 684,
          winCount: 283,
        },
        {
          heroId: 75,
          matchCount: 1472,
          winCount: 713,
        },
        {
          heroId: 76,
          matchCount: 532,
          winCount: 254,
        },
        {
          heroId: 77,
          matchCount: 877,
          winCount: 354,
        },
        {
          heroId: 78,
          matchCount: 75,
          winCount: 29,
        },
        {
          heroId: 79,
          matchCount: 41,
          winCount: 10,
        },
        {
          heroId: 80,
          matchCount: 987,
          winCount: 462,
        },
        {
          heroId: 81,
          matchCount: 7238,
          winCount: 3502,
        },
        {
          heroId: 82,
          matchCount: 1235,
          winCount: 612,
        },
        {
          heroId: 83,
          matchCount: 232,
          winCount: 94,
        },
        {
          heroId: 84,
          matchCount: 972,
          winCount: 412,
        },
        {
          heroId: 85,
          matchCount: 479,
          winCount: 212,
        },
        {
          heroId: 86,
          matchCount: 408,
          winCount: 159,
        },
        {
          heroId: 87,
          matchCount: 86,
          winCount: 30,
        },
        {
          heroId: 88,
          matchCount: 294,
          winCount: 131,
        },
        {
          heroId: 89,
          matchCount: 2611,
          winCount: 1192,
        },
        {
          heroId: 90,
          matchCount: 152,
          winCount: 56,
        },
        {
          heroId: 91,
          matchCount: 145,
          winCount: 57,
        },
        {
          heroId: 92,
          matchCount: 147,
          winCount: 65,
        },
        {
          heroId: 93,
          matchCount: 53516,
          winCount: 26437,
        },
        {
          heroId: 94,
          matchCount: 22876,
          winCount: 12408,
        },
        {
          heroId: 95,
          matchCount: 25814,
          winCount: 13628,
        },
        {
          heroId: 96,
          matchCount: 201,
          winCount: 95,
        },
        {
          heroId: 97,
          matchCount: 9124,
          winCount: 4558,
        },
        {
          heroId: 98,
          matchCount: 336,
          winCount: 125,
        },
        {
          heroId: 99,
          matchCount: 2495,
          winCount: 1150,
        },
        {
          heroId: 100,
          matchCount: 256,
          winCount: 111,
        },
        {
          heroId: 101,
          matchCount: 123,
          winCount: 57,
        },
        {
          heroId: 102,
          matchCount: 7001,
          winCount: 3952,
        },
        {
          heroId: 103,
          matchCount: 186,
          winCount: 99,
        },
        {
          heroId: 104,
          matchCount: 4820,
          winCount: 2356,
        },
        {
          heroId: 105,
          matchCount: 480,
          winCount: 172,
        },
        {
          heroId: 106,
          matchCount: 1692,
          winCount: 763,
        },
        {
          heroId: 107,
          matchCount: 86,
          winCount: 35,
        },
        {
          heroId: 108,
          matchCount: 178,
          winCount: 74,
        },
        {
          heroId: 109,
          matchCount: 8164,
          winCount: 3860,
        },
        {
          heroId: 110,
          matchCount: 107,
          winCount: 61,
        },
        {
          heroId: 111,
          matchCount: 72,
          winCount: 32,
        },
        {
          heroId: 112,
          matchCount: 430,
          winCount: 207,
        },
        {
          heroId: 113,
          matchCount: 1047,
          winCount: 398,
        },
        {
          heroId: 114,
          matchCount: 18742,
          winCount: 8661,
        },
        {
          heroId: 119,
          matchCount: 514,
          winCount: 208,
        },
        {
          heroId: 120,
          matchCount: 214,
          winCount: 81,
        },
        {
          heroId: 121,
          matchCount: 124,
          winCount: 47,
        },
        {
          heroId: 123,
          matchCount: 417,
          winCount: 183,
        },
        {
          heroId: 126,
          matchCount: 562,
          winCount: 231,
        },
        {
          heroId: 128,
          matchCount: 285,
          winCount: 122,
        },
        {
          heroId: 129,
          matchCount: 216,
          winCount: 96,
        },
        {
          heroId: 131,
          matchCount: 71,
          winCount: 25,
        },
        {
          heroId: 135,
          matchCount: 631,
          winCount: 310,
        },
        {
          heroId: 136,
          matchCount: 7487,
          winCount: 3432,
        },
        {
          heroId: 137,
          matchCount: 123,
          winCount: 40,
        },
        {
          heroId: 138,
          matchCount: 5157,
          winCount: 2439,
        },
        {
          heroId: 145,
          matchCount: 7137,
          winCount: 2946,
        },
      ],
    },
  },
};
const winRatePos2 = {
  data: {
    heroStats: {
      winDay: [
        {
          heroId: 1,
          matchCount: 3142,
          winCount: 1704,
        },
        {
          heroId: 2,
          matchCount: 2090,
          winCount: 1097,
        },
        {
          heroId: 3,
          matchCount: 1067,
          winCount: 492,
        },
        {
          heroId: 4,
          matchCount: 4489,
          winCount: 2380,
        },
        {
          heroId: 5,
          matchCount: 931,
          winCount: 427,
        },
        {
          heroId: 6,
          matchCount: 6864,
          winCount: 3318,
        },
        {
          heroId: 7,
          matchCount: 20216,
          winCount: 9935,
        },
        {
          heroId: 8,
          matchCount: 1533,
          winCount: 751,
        },
        {
          heroId: 9,
          matchCount: 3909,
          winCount: 1908,
        },
        {
          heroId: 10,
          matchCount: 6494,
          winCount: 2567,
        },
        {
          heroId: 11,
          matchCount: 35846,
          winCount: 17600,
        },
        {
          heroId: 12,
          matchCount: 685,
          winCount: 306,
        },
        {
          heroId: 13,
          matchCount: 29944,
          winCount: 14832,
        },
        {
          heroId: 14,
          matchCount: 20716,
          winCount: 10163,
        },
        {
          heroId: 15,
          matchCount: 7322,
          winCount: 3832,
        },
        {
          heroId: 16,
          matchCount: 2919,
          winCount: 1479,
        },
        {
          heroId: 17,
          matchCount: 36228,
          winCount: 18317,
        },
        {
          heroId: 18,
          matchCount: 410,
          winCount: 207,
        },
        {
          heroId: 19,
          matchCount: 11569,
          winCount: 5910,
        },
        {
          heroId: 20,
          matchCount: 1564,
          winCount: 813,
        },
        {
          heroId: 21,
          matchCount: 13103,
          winCount: 5849,
        },
        {
          heroId: 22,
          matchCount: 24704,
          winCount: 11999,
        },
        {
          heroId: 23,
          matchCount: 4692,
          winCount: 2207,
        },
        {
          heroId: 25,
          matchCount: 30945,
          winCount: 13428,
        },
        {
          heroId: 26,
          matchCount: 9838,
          winCount: 4792,
        },
        {
          heroId: 27,
          matchCount: 1217,
          winCount: 524,
        },
        {
          heroId: 28,
          matchCount: 3917,
          winCount: 2098,
        },
        {
          heroId: 29,
          matchCount: 1639,
          winCount: 854,
        },
        {
          heroId: 30,
          matchCount: 1838,
          winCount: 945,
        },
        {
          heroId: 31,
          matchCount: 296,
          winCount: 132,
        },
        {
          heroId: 32,
          matchCount: 4301,
          winCount: 2229,
        },
        {
          heroId: 33,
          matchCount: 449,
          winCount: 210,
        },
        {
          heroId: 34,
          matchCount: 27499,
          winCount: 14021,
        },
        {
          heroId: 35,
          matchCount: 52968,
          winCount: 26459,
        },
        {
          heroId: 36,
          matchCount: 36289,
          winCount: 19018,
        },
        {
          heroId: 37,
          matchCount: 646,
          winCount: 327,
        },
        {
          heroId: 38,
          matchCount: 1316,
          winCount: 645,
        },
        {
          heroId: 39,
          matchCount: 53832,
          winCount: 26710,
        },
        {
          heroId: 40,
          matchCount: 1599,
          winCount: 703,
        },
        {
          heroId: 41,
          matchCount: 826,
          winCount: 411,
        },
        {
          heroId: 42,
          matchCount: 1490,
          winCount: 815,
        },
        {
          heroId: 43,
          matchCount: 8072,
          winCount: 3981,
        },
        {
          heroId: 44,
          matchCount: 6525,
          winCount: 3050,
        },
        {
          heroId: 45,
          matchCount: 2589,
          winCount: 1186,
        },
        {
          heroId: 46,
          matchCount: 9829,
          winCount: 4339,
        },
        {
          heroId: 47,
          matchCount: 16351,
          winCount: 8322,
        },
        {
          heroId: 48,
          matchCount: 2153,
          winCount: 1058,
        },
        {
          heroId: 49,
          matchCount: 27300,
          winCount: 15119,
        },
        {
          heroId: 50,
          matchCount: 6152,
          winCount: 3482,
        },
        {
          heroId: 51,
          matchCount: 703,
          winCount: 358,
        },
        {
          heroId: 52,
          matchCount: 14514,
          winCount: 7484,
        },
        {
          heroId: 53,
          matchCount: 9986,
          winCount: 5303,
        },
        {
          heroId: 54,
          matchCount: 892,
          winCount: 467,
        },
        {
          heroId: 55,
          matchCount: 429,
          winCount: 231,
        },
        {
          heroId: 56,
          matchCount: 7787,
          winCount: 4214,
        },
        {
          heroId: 57,
          matchCount: 272,
          winCount: 123,
        },
        {
          heroId: 58,
          matchCount: 1252,
          winCount: 608,
        },
        {
          heroId: 59,
          matchCount: 26805,
          winCount: 13846,
        },
        {
          heroId: 60,
          matchCount: 2408,
          winCount: 1270,
        },
        {
          heroId: 61,
          matchCount: 12280,
          winCount: 6376,
        },
        {
          heroId: 62,
          matchCount: 3326,
          winCount: 1522,
        },
        {
          heroId: 63,
          matchCount: 4292,
          winCount: 2236,
        },
        {
          heroId: 64,
          matchCount: 9219,
          winCount: 4692,
        },
        {
          heroId: 65,
          matchCount: 1138,
          winCount: 512,
        },
        {
          heroId: 66,
          matchCount: 55,
          winCount: 17,
        },
        {
          heroId: 67,
          matchCount: 3065,
          winCount: 1535,
        },
        {
          heroId: 68,
          matchCount: 3567,
          winCount: 1975,
        },
        {
          heroId: 69,
          matchCount: 1440,
          winCount: 673,
        },
        {
          heroId: 70,
          matchCount: 2015,
          winCount: 1031,
        },
        {
          heroId: 71,
          matchCount: 2684,
          winCount: 1256,
        },
        {
          heroId: 72,
          matchCount: 1826,
          winCount: 818,
        },
        {
          heroId: 73,
          matchCount: 5898,
          winCount: 3034,
        },
        {
          heroId: 74,
          matchCount: 74009,
          winCount: 37373,
        },
        {
          heroId: 75,
          matchCount: 11486,
          winCount: 5634,
        },
        {
          heroId: 76,
          matchCount: 26750,
          winCount: 14008,
        },
        {
          heroId: 77,
          matchCount: 1339,
          winCount: 690,
        },
        {
          heroId: 78,
          matchCount: 304,
          winCount: 151,
        },
        {
          heroId: 79,
          matchCount: 258,
          winCount: 108,
        },
        {
          heroId: 80,
          matchCount: 4138,
          winCount: 2169,
        },
        {
          heroId: 81,
          matchCount: 851,
          winCount: 443,
        },
        {
          heroId: 82,
          matchCount: 8348,
          winCount: 4518,
        },
        {
          heroId: 83,
          matchCount: 234,
          winCount: 105,
        },
        {
          heroId: 84,
          matchCount: 7200,
          winCount: 3519,
        },
        {
          heroId: 85,
          matchCount: 1020,
          winCount: 482,
        },
        {
          heroId: 86,
          matchCount: 13935,
          winCount: 6653,
        },
        {
          heroId: 87,
          matchCount: 273,
          winCount: 128,
        },
        {
          heroId: 88,
          matchCount: 4197,
          winCount: 1995,
        },
        {
          heroId: 89,
          matchCount: 215,
          winCount: 109,
        },
        {
          heroId: 90,
          matchCount: 2694,
          winCount: 1308,
        },
        {
          heroId: 91,
          matchCount: 308,
          winCount: 145,
        },
        {
          heroId: 92,
          matchCount: 5523,
          winCount: 3139,
        },
        {
          heroId: 93,
          matchCount: 4032,
          winCount: 2147,
        },
        {
          heroId: 94,
          matchCount: 4992,
          winCount: 2586,
        },
        {
          heroId: 95,
          matchCount: 1332,
          winCount: 669,
        },
        {
          heroId: 96,
          matchCount: 282,
          winCount: 123,
        },
        {
          heroId: 97,
          matchCount: 14569,
          winCount: 7595,
        },
        {
          heroId: 98,
          matchCount: 4009,
          winCount: 1854,
        },
        {
          heroId: 99,
          matchCount: 1275,
          winCount: 572,
        },
        {
          heroId: 100,
          matchCount: 1221,
          winCount: 583,
        },
        {
          heroId: 101,
          matchCount: 3157,
          winCount: 1564,
        },
        {
          heroId: 102,
          matchCount: 1079,
          winCount: 567,
        },
        {
          heroId: 103,
          matchCount: 205,
          winCount: 100,
        },
        {
          heroId: 104,
          matchCount: 6497,
          winCount: 3357,
        },
        {
          heroId: 105,
          matchCount: 2370,
          winCount: 1027,
        },
        {
          heroId: 106,
          matchCount: 38813,
          winCount: 19998,
        },
        {
          heroId: 107,
          matchCount: 2896,
          winCount: 1392,
        },
        {
          heroId: 108,
          matchCount: 405,
          winCount: 204,
        },
        {
          heroId: 109,
          matchCount: 236,
          winCount: 95,
        },
        {
          heroId: 110,
          matchCount: 4052,
          winCount: 2099,
        },
        {
          heroId: 111,
          matchCount: 864,
          winCount: 433,
        },
        {
          heroId: 112,
          matchCount: 3787,
          winCount: 1993,
        },
        {
          heroId: 113,
          matchCount: 13112,
          winCount: 6170,
        },
        {
          heroId: 114,
          matchCount: 11488,
          winCount: 5673,
        },
        {
          heroId: 119,
          matchCount: 2410,
          winCount: 1211,
        },
        {
          heroId: 120,
          matchCount: 5977,
          winCount: 2746,
        },
        {
          heroId: 121,
          matchCount: 562,
          winCount: 273,
        },
        {
          heroId: 123,
          matchCount: 1311,
          winCount: 520,
        },
        {
          heroId: 126,
          matchCount: 11359,
          winCount: 5638,
        },
        {
          heroId: 128,
          matchCount: 1387,
          winCount: 542,
        },
        {
          heroId: 129,
          matchCount: 1297,
          winCount: 649,
        },
        {
          heroId: 131,
          matchCount: 165,
          winCount: 51,
        },
        {
          heroId: 135,
          matchCount: 2111,
          winCount: 1112,
        },
        {
          heroId: 136,
          matchCount: 9162,
          winCount: 4750,
        },
        {
          heroId: 137,
          matchCount: 2621,
          winCount: 1269,
        },
        {
          heroId: 138,
          matchCount: 2374,
          winCount: 1161,
        },
        {
          heroId: 145,
          matchCount: 4995,
          winCount: 2150,
        },
      ],
    },
  },
};
const winRatePos3 = {
  data: {
    heroStats: {
      winDay: [
        {
          heroId: 1,
          matchCount: 1910,
          winCount: 940,
        },
        {
          heroId: 2,
          matchCount: 74068,
          winCount: 37562,
        },
        {
          heroId: 3,
          matchCount: 176,
          winCount: 76,
        },
        {
          heroId: 4,
          matchCount: 3773,
          winCount: 1980,
        },
        {
          heroId: 5,
          matchCount: 389,
          winCount: 185,
        },
        {
          heroId: 6,
          matchCount: 1343,
          winCount: 628,
        },
        {
          heroId: 7,
          matchCount: 28458,
          winCount: 13405,
        },
        {
          heroId: 8,
          matchCount: 2505,
          winCount: 1198,
        },
        {
          heroId: 9,
          matchCount: 1605,
          winCount: 750,
        },
        {
          heroId: 10,
          matchCount: 1132,
          winCount: 433,
        },
        {
          heroId: 11,
          matchCount: 951,
          winCount: 455,
        },
        {
          heroId: 12,
          matchCount: 1134,
          winCount: 495,
        },
        {
          heroId: 13,
          matchCount: 353,
          winCount: 171,
        },
        {
          heroId: 14,
          matchCount: 27472,
          winCount: 13648,
        },
        {
          heroId: 15,
          matchCount: 12283,
          winCount: 6335,
        },
        {
          heroId: 16,
          matchCount: 14189,
          winCount: 6764,
        },
        {
          heroId: 17,
          matchCount: 385,
          winCount: 193,
        },
        {
          heroId: 18,
          matchCount: 3289,
          winCount: 1504,
        },
        {
          heroId: 19,
          matchCount: 14038,
          winCount: 6756,
        },
        {
          heroId: 20,
          matchCount: 2922,
          winCount: 1624,
        },
        {
          heroId: 21,
          matchCount: 5421,
          winCount: 2501,
        },
        {
          heroId: 22,
          matchCount: 1692,
          winCount: 789,
        },
        {
          heroId: 23,
          matchCount: 7654,
          winCount: 3698,
        },
        {
          heroId: 25,
          matchCount: 1085,
          winCount: 434,
        },
        {
          heroId: 26,
          matchCount: 1288,
          winCount: 545,
        },
        {
          heroId: 27,
          matchCount: 805,
          winCount: 357,
        },
        {
          heroId: 28,
          matchCount: 31831,
          winCount: 15832,
        },
        {
          heroId: 29,
          matchCount: 54465,
          winCount: 29958,
        },
        {
          heroId: 30,
          matchCount: 986,
          winCount: 471,
        },
        {
          heroId: 31,
          matchCount: 395,
          winCount: 171,
        },
        {
          heroId: 32,
          matchCount: 3450,
          winCount: 1743,
        },
        {
          heroId: 33,
          matchCount: 4206,
          winCount: 2104,
        },
        {
          heroId: 34,
          matchCount: 516,
          winCount: 241,
        },
        {
          heroId: 35,
          matchCount: 3742,
          winCount: 1653,
        },
        {
          heroId: 36,
          matchCount: 19346,
          winCount: 9779,
        },
        {
          heroId: 37,
          matchCount: 593,
          winCount: 288,
        },
        {
          heroId: 38,
          matchCount: 16226,
          winCount: 7768,
        },
        {
          heroId: 39,
          matchCount: 1863,
          winCount: 890,
        },
        {
          heroId: 40,
          matchCount: 3008,
          winCount: 1342,
        },
        {
          heroId: 41,
          matchCount: 2342,
          winCount: 1083,
        },
        {
          heroId: 42,
          matchCount: 29373,
          winCount: 16213,
        },
        {
          heroId: 43,
          matchCount: 5056,
          winCount: 2564,
        },
        {
          heroId: 44,
          matchCount: 2991,
          winCount: 1319,
        },
        {
          heroId: 45,
          matchCount: 555,
          winCount: 243,
        },
        {
          heroId: 46,
          matchCount: 317,
          winCount: 125,
        },
        {
          heroId: 47,
          matchCount: 9838,
          winCount: 4863,
        },
        {
          heroId: 48,
          matchCount: 788,
          winCount: 348,
        },
        {
          heroId: 49,
          matchCount: 39513,
          winCount: 20573,
        },
        {
          heroId: 50,
          matchCount: 1942,
          winCount: 1006,
        },
        {
          heroId: 51,
          matchCount: 6413,
          winCount: 3265,
        },
        {
          heroId: 52,
          matchCount: 1263,
          winCount: 637,
        },
        {
          heroId: 53,
          matchCount: 5045,
          winCount: 2425,
        },
        {
          heroId: 54,
          matchCount: 9072,
          winCount: 4667,
        },
        {
          heroId: 55,
          matchCount: 11392,
          winCount: 6237,
        },
        {
          heroId: 56,
          matchCount: 1168,
          winCount: 589,
        },
        {
          heroId: 57,
          matchCount: 1479,
          winCount: 637,
        },
        {
          heroId: 58,
          matchCount: 749,
          winCount: 346,
        },
        {
          heroId: 59,
          matchCount: 7227,
          winCount: 3398,
        },
        {
          heroId: 60,
          matchCount: 33846,
          winCount: 17549,
        },
        {
          heroId: 61,
          matchCount: 3161,
          winCount: 1461,
        },
        {
          heroId: 62,
          matchCount: 2284,
          winCount: 1074,
        },
        {
          heroId: 63,
          matchCount: 3118,
          winCount: 1606,
        },
        {
          heroId: 64,
          matchCount: 2291,
          winCount: 1082,
        },
        {
          heroId: 65,
          matchCount: 680,
          winCount: 292,
        },
        {
          heroId: 66,
          matchCount: 54,
          winCount: 20,
        },
        {
          heroId: 67,
          matchCount: 2434,
          winCount: 1138,
        },
        {
          heroId: 68,
          matchCount: 508,
          winCount: 244,
        },
        {
          heroId: 69,
          matchCount: 18808,
          winCount: 8573,
        },
        {
          heroId: 70,
          matchCount: 3071,
          winCount: 1459,
        },
        {
          heroId: 71,
          matchCount: 15532,
          winCount: 7397,
        },
        {
          heroId: 72,
          matchCount: 1087,
          winCount: 495,
        },
        {
          heroId: 73,
          matchCount: 6743,
          winCount: 3328,
        },
        {
          heroId: 74,
          matchCount: 1627,
          winCount: 714,
        },
        {
          heroId: 75,
          matchCount: 1789,
          winCount: 865,
        },
        {
          heroId: 76,
          matchCount: 740,
          winCount: 336,
        },
        {
          heroId: 77,
          matchCount: 5096,
          winCount: 2271,
        },
        {
          heroId: 78,
          matchCount: 2550,
          winCount: 1220,
        },
        {
          heroId: 79,
          matchCount: 100,
          winCount: 39,
        },
        {
          heroId: 80,
          matchCount: 1320,
          winCount: 615,
        },
        {
          heroId: 81,
          matchCount: 15369,
          winCount: 7514,
        },
        {
          heroId: 82,
          matchCount: 489,
          winCount: 220,
        },
        {
          heroId: 83,
          matchCount: 1199,
          winCount: 548,
        },
        {
          heroId: 84,
          matchCount: 10820,
          winCount: 5286,
        },
        {
          heroId: 85,
          matchCount: 10245,
          winCount: 5272,
        },
        {
          heroId: 86,
          matchCount: 1667,
          winCount: 721,
        },
        {
          heroId: 87,
          matchCount: 130,
          winCount: 53,
        },
        {
          heroId: 88,
          matchCount: 2350,
          winCount: 1106,
        },
        {
          heroId: 89,
          matchCount: 304,
          winCount: 152,
        },
        {
          heroId: 90,
          matchCount: 386,
          winCount: 155,
        },
        {
          heroId: 91,
          matchCount: 158,
          winCount: 65,
        },
        {
          heroId: 92,
          matchCount: 4009,
          winCount: 2078,
        },
        {
          heroId: 93,
          matchCount: 3123,
          winCount: 1585,
        },
        {
          heroId: 94,
          matchCount: 1396,
          winCount: 680,
        },
        {
          heroId: 95,
          matchCount: 1748,
          winCount: 841,
        },
        {
          heroId: 96,
          matchCount: 23140,
          winCount: 11444,
        },
        {
          heroId: 97,
          matchCount: 38439,
          winCount: 19190,
        },
        {
          heroId: 98,
          matchCount: 20266,
          winCount: 9223,
        },
        {
          heroId: 99,
          matchCount: 34094,
          winCount: 15572,
        },
        {
          heroId: 100,
          matchCount: 2627,
          winCount: 1177,
        },
        {
          heroId: 101,
          matchCount: 396,
          winCount: 162,
        },
        {
          heroId: 102,
          matchCount: 39677,
          winCount: 23105,
        },
        {
          heroId: 103,
          matchCount: 2400,
          winCount: 1222,
        },
        {
          heroId: 104,
          matchCount: 68159,
          winCount: 35202,
        },
        {
          heroId: 105,
          matchCount: 1127,
          winCount: 478,
        },
        {
          heroId: 106,
          matchCount: 1105,
          winCount: 568,
        },
        {
          heroId: 107,
          matchCount: 1629,
          winCount: 774,
        },
        {
          heroId: 108,
          matchCount: 11201,
          winCount: 5704,
        },
        {
          heroId: 109,
          matchCount: 1686,
          winCount: 794,
        },
        {
          heroId: 110,
          matchCount: 5346,
          winCount: 2699,
        },
        {
          heroId: 111,
          matchCount: 146,
          winCount: 71,
        },
        {
          heroId: 112,
          matchCount: 3382,
          winCount: 1764,
        },
        {
          heroId: 113,
          matchCount: 194,
          winCount: 69,
        },
        {
          heroId: 114,
          matchCount: 2920,
          winCount: 1336,
        },
        {
          heroId: 119,
          matchCount: 567,
          winCount: 261,
        },
        {
          heroId: 120,
          matchCount: 3906,
          winCount: 1746,
        },
        {
          heroId: 121,
          matchCount: 270,
          winCount: 120,
        },
        {
          heroId: 123,
          matchCount: 679,
          winCount: 288,
        },
        {
          heroId: 126,
          matchCount: 906,
          winCount: 453,
        },
        {
          heroId: 128,
          matchCount: 1127,
          winCount: 457,
        },
        {
          heroId: 129,
          matchCount: 27570,
          winCount: 13199,
        },
        {
          heroId: 131,
          matchCount: 180,
          winCount: 67,
        },
        {
          heroId: 135,
          matchCount: 33193,
          winCount: 16791,
        },
        {
          heroId: 136,
          matchCount: 8669,
          winCount: 4008,
        },
        {
          heroId: 137,
          matchCount: 10901,
          winCount: 4975,
        },
        {
          heroId: 138,
          matchCount: 836,
          winCount: 374,
        },
        {
          heroId: 145,
          matchCount: 1520,
          winCount: 633,
        },
      ],
    },
  },
};
const winRatePos4 = {
  data: {
    heroStats: {
      winDay: [
        {
          heroId: 1,
          matchCount: 531,
          winCount: 241,
        },
        {
          heroId: 2,
          matchCount: 2147,
          winCount: 932,
        },
        {
          heroId: 3,
          matchCount: 3222,
          winCount: 1661,
        },
        {
          heroId: 4,
          matchCount: 685,
          winCount: 330,
        },
        {
          heroId: 5,
          matchCount: 16861,
          winCount: 8311,
        },
        {
          heroId: 6,
          matchCount: 910,
          winCount: 378,
        },
        {
          heroId: 7,
          matchCount: 18016,
          winCount: 9109,
        },
        {
          heroId: 8,
          matchCount: 509,
          winCount: 212,
        },
        {
          heroId: 9,
          matchCount: 18805,
          winCount: 9860,
        },
        {
          heroId: 10,
          matchCount: 968,
          winCount: 388,
        },
        {
          heroId: 11,
          matchCount: 1102,
          winCount: 482,
        },
        {
          heroId: 12,
          matchCount: 260,
          winCount: 115,
        },
        {
          heroId: 13,
          matchCount: 753,
          winCount: 334,
        },
        {
          heroId: 14,
          matchCount: 41667,
          winCount: 19796,
        },
        {
          heroId: 15,
          matchCount: 984,
          winCount: 429,
        },
        {
          heroId: 16,
          matchCount: 2446,
          winCount: 1107,
        },
        {
          heroId: 17,
          matchCount: 546,
          winCount: 246,
        },
        {
          heroId: 18,
          matchCount: 600,
          winCount: 262,
        },
        {
          heroId: 19,
          matchCount: 5376,
          winCount: 2634,
        },
        {
          heroId: 20,
          matchCount: 11947,
          winCount: 6329,
        },
        {
          heroId: 21,
          matchCount: 15466,
          winCount: 7011,
        },
        {
          heroId: 22,
          matchCount: 38375,
          winCount: 20345,
        },
        {
          heroId: 23,
          matchCount: 1041,
          winCount: 504,
        },
        {
          heroId: 25,
          matchCount: 7088,
          winCount: 3122,
        },
        {
          heroId: 26,
          matchCount: 41349,
          winCount: 20510,
        },
        {
          heroId: 27,
          matchCount: 29623,
          winCount: 15464,
        },
        {
          heroId: 28,
          matchCount: 1468,
          winCount: 637,
        },
        {
          heroId: 29,
          matchCount: 2370,
          winCount: 1127,
        },
        {
          heroId: 30,
          matchCount: 31456,
          winCount: 16892,
        },
        {
          heroId: 31,
          matchCount: 19895,
          winCount: 10278,
        },
        {
          heroId: 32,
          matchCount: 9790,
          winCount: 4803,
        },
        {
          heroId: 33,
          matchCount: 6286,
          winCount: 3236,
        },
        {
          heroId: 34,
          matchCount: 2589,
          winCount: 1286,
        },
        {
          heroId: 35,
          matchCount: 15509,
          winCount: 7393,
        },
        {
          heroId: 36,
          matchCount: 3210,
          winCount: 1527,
        },
        {
          heroId: 37,
          matchCount: 15755,
          winCount: 8344,
        },
        {
          heroId: 38,
          matchCount: 434,
          winCount: 196,
        },
        {
          heroId: 39,
          matchCount: 5687,
          winCount: 2670,
        },
        {
          heroId: 40,
          matchCount: 21951,
          winCount: 11137,
        },
        {
          heroId: 41,
          matchCount: 1195,
          winCount: 568,
        },
        {
          heroId: 42,
          matchCount: 1224,
          winCount: 575,
        },
        {
          heroId: 43,
          matchCount: 1646,
          winCount: 782,
        },
        {
          heroId: 44,
          matchCount: 1343,
          winCount: 536,
        },
        {
          heroId: 45,
          matchCount: 7466,
          winCount: 3851,
        },
        {
          heroId: 46,
          matchCount: 183,
          winCount: 67,
        },
        {
          heroId: 47,
          matchCount: 2948,
          winCount: 1399,
        },
        {
          heroId: 48,
          matchCount: 656,
          winCount: 285,
        },
        {
          heroId: 49,
          matchCount: 1011,
          winCount: 468,
        },
        {
          heroId: 50,
          matchCount: 13142,
          winCount: 6493,
        },
        {
          heroId: 51,
          matchCount: 14972,
          winCount: 7722,
        },
        {
          heroId: 52,
          matchCount: 2970,
          winCount: 1479,
        },
        {
          heroId: 53,
          matchCount: 18018,
          winCount: 8633,
        },
        {
          heroId: 54,
          matchCount: 821,
          winCount: 368,
        },
        {
          heroId: 55,
          matchCount: 1684,
          winCount: 922,
        },
        {
          heroId: 56,
          matchCount: 2991,
          winCount: 1507,
        },
        {
          heroId: 57,
          matchCount: 1996,
          winCount: 999,
        },
        {
          heroId: 58,
          matchCount: 4461,
          winCount: 2138,
        },
        {
          heroId: 59,
          matchCount: 1656,
          winCount: 727,
        },
        {
          heroId: 60,
          matchCount: 705,
          winCount: 330,
        },
        {
          heroId: 61,
          matchCount: 357,
          winCount: 138,
        },
        {
          heroId: 62,
          matchCount: 23842,
          winCount: 12049,
        },
        {
          heroId: 63,
          matchCount: 6361,
          winCount: 3177,
        },
        {
          heroId: 64,
          matchCount: 37343,
          winCount: 19501,
        },
        {
          heroId: 65,
          matchCount: 2705,
          winCount: 1158,
        },
        {
          heroId: 66,
          matchCount: 600,
          winCount: 258,
        },
        {
          heroId: 67,
          matchCount: 367,
          winCount: 160,
        },
        {
          heroId: 68,
          matchCount: 15717,
          winCount: 8620,
        },
        {
          heroId: 69,
          matchCount: 1464,
          winCount: 661,
        },
        {
          heroId: 70,
          matchCount: 371,
          winCount: 154,
        },
        {
          heroId: 71,
          matchCount: 31573,
          winCount: 15998,
        },
        {
          heroId: 72,
          matchCount: 5406,
          winCount: 2649,
        },
        {
          heroId: 73,
          matchCount: 8254,
          winCount: 4350,
        },
        {
          heroId: 74,
          matchCount: 16643,
          winCount: 7973,
        },
        {
          heroId: 75,
          matchCount: 29584,
          winCount: 15206,
        },
        {
          heroId: 76,
          matchCount: 627,
          winCount: 270,
        },
        {
          heroId: 77,
          matchCount: 283,
          winCount: 131,
        },
        {
          heroId: 78,
          matchCount: 224,
          winCount: 108,
        },
        {
          heroId: 79,
          matchCount: 3779,
          winCount: 1850,
        },
        {
          heroId: 80,
          matchCount: 234,
          winCount: 106,
        },
        {
          heroId: 81,
          matchCount: 937,
          winCount: 415,
        },
        {
          heroId: 82,
          matchCount: 153,
          winCount: 75,
        },
        {
          heroId: 83,
          matchCount: 5856,
          winCount: 2854,
        },
        {
          heroId: 84,
          matchCount: 29650,
          winCount: 15326,
        },
        {
          heroId: 85,
          matchCount: 14949,
          winCount: 7740,
        },
        {
          heroId: 86,
          matchCount: 39920,
          winCount: 19523,
        },
        {
          heroId: 87,
          matchCount: 9634,
          winCount: 4961,
        },
        {
          heroId: 88,
          matchCount: 15709,
          winCount: 7850,
        },
        {
          heroId: 89,
          matchCount: 287,
          winCount: 119,
        },
        {
          heroId: 90,
          matchCount: 2543,
          winCount: 1184,
        },
        {
          heroId: 91,
          matchCount: 4534,
          winCount: 2251,
        },
        {
          heroId: 92,
          matchCount: 1272,
          winCount: 652,
        },
        {
          heroId: 93,
          matchCount: 1645,
          winCount: 778,
        },
        {
          heroId: 94,
          matchCount: 387,
          winCount: 196,
        },
        {
          heroId: 95,
          matchCount: 446,
          winCount: 206,
        },
        {
          heroId: 96,
          matchCount: 904,
          winCount: 423,
        },
        {
          heroId: 97,
          matchCount: 10986,
          winCount: 5566,
        },
        {
          heroId: 98,
          matchCount: 785,
          winCount: 310,
        },
        {
          heroId: 99,
          matchCount: 1919,
          winCount: 881,
        },
        {
          heroId: 100,
          matchCount: 7555,
          winCount: 3514,
        },
        {
          heroId: 101,
          matchCount: 14264,
          winCount: 7088,
        },
        {
          heroId: 102,
          matchCount: 14258,
          winCount: 8189,
        },
        {
          heroId: 103,
          matchCount: 1447,
          winCount: 784,
        },
        {
          heroId: 104,
          matchCount: 1748,
          winCount: 769,
        },
        {
          heroId: 105,
          matchCount: 18763,
          winCount: 8918,
        },
        {
          heroId: 106,
          matchCount: 545,
          winCount: 252,
        },
        {
          heroId: 107,
          matchCount: 4721,
          winCount: 2226,
        },
        {
          heroId: 108,
          matchCount: 1161,
          winCount: 607,
        },
        {
          heroId: 109,
          matchCount: 705,
          winCount: 330,
        },
        {
          heroId: 110,
          matchCount: 9955,
          winCount: 5013,
        },
        {
          heroId: 111,
          matchCount: 4643,
          winCount: 2455,
        },
        {
          heroId: 112,
          matchCount: 24957,
          winCount: 13320,
        },
        {
          heroId: 113,
          matchCount: 484,
          winCount: 219,
        },
        {
          heroId: 114,
          matchCount: 2435,
          winCount: 1017,
        },
        {
          heroId: 119,
          matchCount: 13091,
          winCount: 6394,
        },
        {
          heroId: 120,
          matchCount: 378,
          winCount: 163,
        },
        {
          heroId: 121,
          matchCount: 8439,
          winCount: 4211,
        },
        {
          heroId: 123,
          matchCount: 15603,
          winCount: 7014,
        },
        {
          heroId: 126,
          matchCount: 473,
          winCount: 209,
        },
        {
          heroId: 128,
          matchCount: 7729,
          winCount: 3751,
        },
        {
          heroId: 129,
          matchCount: 959,
          winCount: 473,
        },
        {
          heroId: 131,
          matchCount: 8104,
          winCount: 3807,
        },
        {
          heroId: 135,
          matchCount: 2380,
          winCount: 1228,
        },
        {
          heroId: 136,
          matchCount: 14691,
          winCount: 6380,
        },
        {
          heroId: 137,
          matchCount: 919,
          winCount: 381,
        },
        {
          heroId: 138,
          matchCount: 10070,
          winCount: 4933,
        },
        {
          heroId: 145,
          matchCount: 511,
          winCount: 168,
        },
      ],
    },
  },
};
const winRatePos5 = {
  data: {
    heroStats: {
      winDay: [
        {
          heroId: 1,
          matchCount: 937,
          winCount: 384,
        },
        {
          heroId: 2,
          matchCount: 802,
          winCount: 332,
        },
        {
          heroId: 3,
          matchCount: 4204,
          winCount: 2144,
        },
        {
          heroId: 4,
          matchCount: 603,
          winCount: 279,
        },
        {
          heroId: 5,
          matchCount: 45740,
          winCount: 22473,
        },
        {
          heroId: 6,
          matchCount: 1190,
          winCount: 473,
        },
        {
          heroId: 7,
          matchCount: 7401,
          winCount: 3713,
        },
        {
          heroId: 8,
          matchCount: 844,
          winCount: 375,
        },
        {
          heroId: 9,
          matchCount: 9044,
          winCount: 4608,
        },
        {
          heroId: 10,
          matchCount: 847,
          winCount: 293,
        },
        {
          heroId: 11,
          matchCount: 846,
          winCount: 363,
        },
        {
          heroId: 12,
          matchCount: 524,
          winCount: 211,
        },
        {
          heroId: 13,
          matchCount: 388,
          winCount: 152,
        },
        {
          heroId: 14,
          matchCount: 32032,
          winCount: 14954,
        },
        {
          heroId: 15,
          matchCount: 584,
          winCount: 268,
        },
        {
          heroId: 16,
          matchCount: 1272,
          winCount: 591,
        },
        {
          heroId: 17,
          matchCount: 325,
          winCount: 150,
        },
        {
          heroId: 18,
          matchCount: 613,
          winCount: 265,
        },
        {
          heroId: 19,
          matchCount: 2325,
          winCount: 1065,
        },
        {
          heroId: 20,
          matchCount: 12939,
          winCount: 6620,
        },
        {
          heroId: 21,
          matchCount: 6673,
          winCount: 3005,
        },
        {
          heroId: 22,
          matchCount: 25250,
          winCount: 13147,
        },
        {
          heroId: 23,
          matchCount: 478,
          winCount: 224,
        },
        {
          heroId: 25,
          matchCount: 4416,
          winCount: 1917,
        },
        {
          heroId: 26,
          matchCount: 65629,
          winCount: 32025,
        },
        {
          heroId: 27,
          matchCount: 57684,
          winCount: 29803,
        },
        {
          heroId: 28,
          matchCount: 592,
          winCount: 254,
        },
        {
          heroId: 29,
          matchCount: 1075,
          winCount: 507,
        },
        {
          heroId: 30,
          matchCount: 53855,
          winCount: 28414,
        },
        {
          heroId: 31,
          matchCount: 38285,
          winCount: 19551,
        },
        {
          heroId: 32,
          matchCount: 3285,
          winCount: 1574,
        },
        {
          heroId: 33,
          matchCount: 3610,
          winCount: 1757,
        },
        {
          heroId: 34,
          matchCount: 2276,
          winCount: 1135,
        },
        {
          heroId: 35,
          matchCount: 7113,
          winCount: 3268,
        },
        {
          heroId: 36,
          matchCount: 1767,
          winCount: 825,
        },
        {
          heroId: 37,
          matchCount: 31361,
          winCount: 16272,
        },
        {
          heroId: 38,
          matchCount: 264,
          winCount: 102,
        },
        {
          heroId: 39,
          matchCount: 2625,
          winCount: 1224,
        },
        {
          heroId: 40,
          matchCount: 18775,
          winCount: 9821,
        },
        {
          heroId: 41,
          matchCount: 959,
          winCount: 435,
        },
        {
          heroId: 42,
          matchCount: 716,
          winCount: 340,
        },
        {
          heroId: 43,
          matchCount: 984,
          winCount: 480,
        },
        {
          heroId: 44,
          matchCount: 1943,
          winCount: 749,
        },
        {
          heroId: 45,
          matchCount: 6878,
          winCount: 3393,
        },
        {
          heroId: 46,
          matchCount: 207,
          winCount: 77,
        },
        {
          heroId: 47,
          matchCount: 1674,
          winCount: 804,
        },
        {
          heroId: 48,
          matchCount: 571,
          winCount: 235,
        },
        {
          heroId: 49,
          matchCount: 724,
          winCount: 349,
        },
        {
          heroId: 50,
          matchCount: 24597,
          winCount: 12481,
        },
        {
          heroId: 51,
          matchCount: 11760,
          winCount: 6156,
        },
        {
          heroId: 52,
          matchCount: 1641,
          winCount: 792,
        },
        {
          heroId: 53,
          matchCount: 8878,
          winCount: 4163,
        },
        {
          heroId: 54,
          matchCount: 1109,
          winCount: 471,
        },
        {
          heroId: 55,
          matchCount: 786,
          winCount: 409,
        },
        {
          heroId: 56,
          matchCount: 1235,
          winCount: 604,
        },
        {
          heroId: 57,
          matchCount: 2511,
          winCount: 1280,
        },
        {
          heroId: 58,
          matchCount: 4005,
          winCount: 1799,
        },
        {
          heroId: 59,
          matchCount: 1210,
          winCount: 563,
        },
        {
          heroId: 60,
          matchCount: 268,
          winCount: 118,
        },
        {
          heroId: 61,
          matchCount: 251,
          winCount: 86,
        },
        {
          heroId: 62,
          matchCount: 7460,
          winCount: 3524,
        },
        {
          heroId: 63,
          matchCount: 3038,
          winCount: 1488,
        },
        {
          heroId: 64,
          matchCount: 64964,
          winCount: 33588,
        },
        {
          heroId: 65,
          matchCount: 1640,
          winCount: 710,
        },
        {
          heroId: 66,
          matchCount: 1268,
          winCount: 533,
        },
        {
          heroId: 67,
          matchCount: 892,
          winCount: 402,
        },
        {
          heroId: 68,
          matchCount: 20973,
          winCount: 11337,
        },
        {
          heroId: 69,
          matchCount: 675,
          winCount: 311,
        },
        {
          heroId: 70,
          matchCount: 472,
          winCount: 182,
        },
        {
          heroId: 71,
          matchCount: 8863,
          winCount: 4348,
        },
        {
          heroId: 72,
          matchCount: 2924,
          winCount: 1468,
        },
        {
          heroId: 73,
          matchCount: 6595,
          winCount: 3513,
        },
        {
          heroId: 74,
          matchCount: 8929,
          winCount: 4216,
        },
        {
          heroId: 75,
          matchCount: 26324,
          winCount: 13491,
        },
        {
          heroId: 76,
          matchCount: 387,
          winCount: 163,
        },
        {
          heroId: 77,
          matchCount: 156,
          winCount: 63,
        },
        {
          heroId: 78,
          matchCount: 122,
          winCount: 51,
        },
        {
          heroId: 79,
          matchCount: 5050,
          winCount: 2442,
        },
        {
          heroId: 80,
          matchCount: 158,
          winCount: 64,
        },
        {
          heroId: 81,
          matchCount: 574,
          winCount: 270,
        },
        {
          heroId: 82,
          matchCount: 152,
          winCount: 63,
        },
        {
          heroId: 83,
          matchCount: 8169,
          winCount: 4096,
        },
        {
          heroId: 84,
          matchCount: 32054,
          winCount: 16295,
        },
        {
          heroId: 85,
          matchCount: 13102,
          winCount: 6807,
        },
        {
          heroId: 86,
          matchCount: 25342,
          winCount: 12153,
        },
        {
          heroId: 87,
          matchCount: 20010,
          winCount: 10397,
        },
        {
          heroId: 88,
          matchCount: 5735,
          winCount: 2787,
        },
        {
          heroId: 89,
          matchCount: 322,
          winCount: 143,
        },
        {
          heroId: 90,
          matchCount: 2148,
          winCount: 930,
        },
        {
          heroId: 91,
          matchCount: 14650,
          winCount: 7416,
        },
        {
          heroId: 92,
          matchCount: 662,
          winCount: 316,
        },
        {
          heroId: 93,
          matchCount: 2003,
          winCount: 885,
        },
        {
          heroId: 94,
          matchCount: 455,
          winCount: 220,
        },
        {
          heroId: 95,
          matchCount: 574,
          winCount: 243,
        },
        {
          heroId: 96,
          matchCount: 386,
          winCount: 191,
        },
        {
          heroId: 97,
          matchCount: 7353,
          winCount: 3754,
        },
        {
          heroId: 98,
          matchCount: 361,
          winCount: 136,
        },
        {
          heroId: 99,
          matchCount: 1129,
          winCount: 530,
        },
        {
          heroId: 100,
          matchCount: 4627,
          winCount: 2145,
        },
        {
          heroId: 101,
          matchCount: 10666,
          winCount: 5196,
        },
        {
          heroId: 102,
          matchCount: 21909,
          winCount: 12696,
        },
        {
          heroId: 103,
          matchCount: 1390,
          winCount: 776,
        },
        {
          heroId: 104,
          matchCount: 789,
          winCount: 357,
        },
        {
          heroId: 105,
          matchCount: 13585,
          winCount: 6259,
        },
        {
          heroId: 106,
          matchCount: 267,
          winCount: 117,
        },
        {
          heroId: 107,
          matchCount: 1557,
          winCount: 712,
        },
        {
          heroId: 108,
          matchCount: 681,
          winCount: 332,
        },
        {
          heroId: 109,
          matchCount: 460,
          winCount: 178,
        },
        {
          heroId: 110,
          matchCount: 7163,
          winCount: 3535,
        },
        {
          heroId: 111,
          matchCount: 12057,
          winCount: 6385,
        },
        {
          heroId: 112,
          matchCount: 35336,
          winCount: 18190,
        },
        {
          heroId: 113,
          matchCount: 386,
          winCount: 152,
        },
        {
          heroId: 114,
          matchCount: 1243,
          winCount: 456,
        },
        {
          heroId: 119,
          matchCount: 11648,
          winCount: 5507,
        },
        {
          heroId: 120,
          matchCount: 151,
          winCount: 76,
        },
        {
          heroId: 121,
          matchCount: 10534,
          winCount: 5240,
        },
        {
          heroId: 123,
          matchCount: 10150,
          winCount: 4451,
        },
        {
          heroId: 126,
          matchCount: 238,
          winCount: 91,
        },
        {
          heroId: 128,
          matchCount: 5135,
          winCount: 2478,
        },
        {
          heroId: 129,
          matchCount: 446,
          winCount: 207,
        },
        {
          heroId: 131,
          matchCount: 9313,
          winCount: 4380,
        },
        {
          heroId: 135,
          matchCount: 1151,
          winCount: 603,
        },
        {
          heroId: 136,
          matchCount: 11960,
          winCount: 5011,
        },
        {
          heroId: 137,
          matchCount: 344,
          winCount: 137,
        },
        {
          heroId: 138,
          matchCount: 3951,
          winCount: 1898,
        },
        {
          heroId: 145,
          matchCount: 390,
          winCount: 131,
        },
      ],
    },
  },
};
export {
  query,
  winRatePos1,
  winRatePos2,
  winRatePos3,
  winRatePos4,
  winRatePos5,
};
