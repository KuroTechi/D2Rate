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
export { query };
