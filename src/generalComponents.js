export function Nav() {
    return <nav>
    <ul className="navpanel">
        <li key="concepts">
            <button onClick="clickConcepts()" className="btnDropdown">Concepts ▼</button>
            <div id="conceptDropdown" className="dropdown-content">
                <a href="../concepts/difficulty_levels.html">Difficulty Levels</a>
                <a href="../concepts/energy_factor.html">Energy Factor</a>
                <a href="../concepts/block_and_defense.html">Block & Defense</a>
                <a href="../concepts/players_x.html">Players Command</a>
                <a href="../concepts/witches_warlocks.html">Witches & Warlocks</a>
                <a href="../concepts/poison_damage.html">Poison Damage</a>
            </div>
        </li>
        <li key="characters">
            <button onClick="clickCharacters()" className="btnDropdown">Characters ▼</button>
            <div id="characterDropdown" className="dropdown-content">
                <a href="../characters/amazon.html">Amazon</a>
                <a href="../characters/assassin.html">Assassin</a>
                <a href="../characters/barbarian.html">Barbarian</a>
                <a href="../characters/druid.html">Druid</a>
                <a href="../characters/necromancer.html">Necromancer</a>
                <a href="../characters/paladin.html">Paladin</a>
                <a href="../characters/sorceress.html">Sorceress</a>
            </div>
        </li>
        <li key="items">
            <button onClick="clickItems()" className="btnDropdown">Items ▼</button>
            <div id="itemDropdown" className="dropdown-content">
                <a href="../items/base_items.html">Base Items</a>
                <a href="../items/tiered_uniques.html">Tiered Uniques</a>
                <a href="../items/sacred_uniques.html">Sacred Uniques</a>
                <a href="../items/umos.html">Unique Mystic Orbs</a>
                <a href="../items/sets.html">Sets</a>
                <a href="../items/runewords.html">Runewords</a>
                <a href="../items/cube_recipes.html">Cube Recipes</a>
                <a href="../items/gems_runes.html">Gems and Runes</a>
                <a href="../items/jewelwords.html">Jewelwords</a>
                <a href="../items/honorific_shrine.html">Honorific & Crafted</a>
                <a href="../items/shrine_bonuses.html">Shrine Bonuses</a>
                <a href="../items/prefixes_and_suffixes.html">Prefixes & Suffixes</a>
                <a href="../items/oskill_items.html">Items with Oskills</a>
            </div>
        </li>
        <li key="ubers">
            <button onClick="clickUbers()" className="btnDropdown">Uberquests ▼</button>
            <div id="uberDropdown" className="dropdown-content">
                <a href="../uberquests/dungeon_uberquests.html">Dungeon Uberquests</a>
                <a href="../uberquests/summoning_uberquests.html">Summoning Uberquests</a>
                <a href="../uberquests/uberlevels.html">Uberlevels</a>
                <a href="../uberquests/heroic_levels.html">Heroic Levels</a>
                <a href="../uberquests/trophies.html">Trophy Bonuses</a>
            </div>
        </li>
        <li key="challenges">
            <button onClick="clickChallenges()" className="btnDropdown">Challenges ▼</button>
            <div id="challengeDropdown" className="dropdown-content">
                <a href="../challenges/dragon_eggs.html">Dragon's Eggs</a>
                <a href="../challenges/lc1.html">Level Challenge 1</a>
                <a href="../challenges/lc2.html">Level Challenge 2</a>
                <a href="../challenges/ennead.html">Ennead Challenge</a>
                <a href="../challenges/black_road.html">Black Road Challenge</a>
                <a href="../challenges/minigames.html">Minigames</a>
                <a href="../challenges/monster_tokens.html">Monster Tokens</a>
            </div>
        </li>
        <li key="maps">
            <button onClick="clickMaps()" className="btnDropdown">Maps ▼</button>
            <div id="mapDropdown" className="dropdown-content">
                <a href="../maps/map_k3kba.html">Kurast 3000 BA Map</a>
                <a href="../maps/map_tran_athulua.html">Tran Athulua Map</a>
                <a href="../maps/map_fauztinville.html">Fauztinville Map</a>
                <a href="../maps/map_ureh.html">Kingdom of Shadow Map</a>
                <a href="../maps/map_duncraig.html">Duncraig Map</a>
                <a href="../maps/map_vizjun.html">Vizjun Map</a>
            </div>
        </li>
        <li key="misc">
            <button onClick="clickMisc()" className="btnDropdown">Misc ▼</button>
            <div id="miscDropdown" className="dropdown-content">
                <a href="introduction.html">Introduction</a>
                <a href="hirelings.html">Hirelings</a>
                <a href="changelog.html">Changelog</a>
            </div>
        </li>
    </ul>
    </nav>
}