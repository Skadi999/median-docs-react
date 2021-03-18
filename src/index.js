import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/general.css';
import './misc/css/introduction.css';
import menu1 from './img/menu/MXL_menu_033.jpg';
import menu2 from './img/menu/MXL_menu_032.jpg';
import menu3 from './img/menu/MXL_menu_031.jpg';
import menu4 from './img/menu/MXL_menu_026.jpg';
// import './content.js';
import { Nav } from './generalComponents.js';

function App() {
    return (
        <div className="container">
            <Header title="INTRODUCTION"></Header>
            <Nav content={Nav()}></Nav>
            <Introduction></Introduction>
            <div className="spacing"></div>
        </div>
    );
}

function Header(props) {
    console.log(props.title);
    return <header className="header"><h1>+ {props.title} +</h1></header>;
}

// function Nav(props) {
//     return <nav>
//         {props.content}
//     </nav>
// }

function Introduction() {
    return <div className="introductionText">
        <h2>WHAT IS MEDIAN XL?<br /><br /></h2>
        <hr />
        <h6>Overview</h6><br />
        <p>Median XL is the most popular mod, or unofficial modification, for Diablo II Lord of Destruction.<br />
            It modifies the game by replacing character skills, improving items and monsters, and adding new
            uberquests.</p>
        <h6>So is this a cheat?</h6><br />
        <p>Mods are not cheats. A cheat makes the game easier. Median XL turns it into an entirely new game...</p>
        <img src={menu1} alt="Menu 1" />
        <hr />
        <h6>Features</h6><br />
        <p><span className="bold">• New skill trees with 30 brand new skills per class.</span><br />
            Bored with Blessed Hammer? Median XL offers brand new skill trees.<br />
            Each class has 25 main skills, 3 uberskills and 2 challenge reward skills.
            If you ever wanted a crossbow necromancer or summoner barbarian, here is your chance!
        </p>

        <p><span className="bold">• Improved monsters.</span><br />
            When was the last time a frog killed you? The monsters are much more aggressive and dangerous,
            and many have learned various new tricks. From quill rats with homing spikes to invisible templars,
            the monsters will pose a much tougher challenge.
        </p>

        <p><span className="bold">• 29 new uberquests for high level characters.</span><br />
            Forget Battle.net and 'Uber Tristram', Median XL has 21 more uberbosses and 8 special uberlevels for
            high level characters. Defeating them on the highest difficulty yields powerful unique charms.
        </p>

        <p><span className="bold">• New base items. Six quality tiers.</span><br />
            Median XL features many new class-specific items. Additionally, item stats have been rebalanced and
            there are now six tiers of item quality, each with better stats than the last. Rumours persist of even
            stronger Sacred items...
        </p>

        <p><span className="bold">• New and improved gems and runes.</span><br />
            More gems, more runes and the existing gems and runes have been improved. Plentiful random sockets on
            items offer a powerful way to customise your items.
        </p>

        <p><span className="bold">• Enhanced magic and rare items.</span><br />
            Between the improved affix pool and the addition of powerful new affixes including percentage based
            attribute bonuses, rares are a much improved game option.
        </p>

        <p><span className="bold">• An assortment of new uniques and sets.</span><br />
            Median XL features 680 new uniques and 30 new sets. Many of the uniques and all of the sets can only
            drop in special difficult areas.
        </p>

        <p><span className="bold">• An assortment of new runewords.</span><br />
            There are exactly 333 brand new runewords, the vast majority of which only a single rune. You can fill
            the other
            sockets (before you insert the rune) with jewels for your convenience.
        </p>

        <p><span className="bold">• New and improved cube recipes.</span><br />
            Median XL offers many powerful new cube recipes including a revolutionary crafting system.</p>

        <p><span className="bold">• Honorific items.</span><br />
            Create blank items and enchant them yourself. Ever wanted to make your very own uniques? Now you can.
        </p>

        <p><span className="bold">• Special challenges for expert players.</span><br />
            Beating the game is only half the fun! Reach certain milestones in the game to obtain a special reward.
        </p>

        <p><span className="bold">• Rebalanced drop rates to make good items more common.</span><br />
            You may actually see a Zod now.</p>

        <p><span className="bold">• And much more...</span><br /><br /></p>

        <img src={menu2} alt="Menu 2" />
        <hr />

        <h6>Full List of Changes<br />
            <span id="subH6">WARNING: LONG AND BORING</span></h6><br />
        <p><span className="bold">Character class changes</span><br />
            - Replaced all classic LoD skills with 30 new skills per class (210 new skills).<br />
            - Added many item-only skills.<br />
            - Modified various animation speeds to encourage unusual weapons.<br />
            - Characters gain life, mana and stamina at a different rate.<br />
            - Most classes have different favoured weapons (eg. amazons and sceptres).<br />
            - Spell damage is now affected by energy.<br />
            - Some weapons' damage (like Bows) is now increased by your Dexterity.<br />
            - Maximum character level is now 120.</p>

        <p><span className="bold">Item changes</span><br />
            - Added a lot of class-specific items, 5 to 13 per class.<br />
            - Removed exceptional and elite items, added 6 tiers of regular items.<br />
            - All magic and rare items can now randomly spawn with sockets.<br />
            - Improved modifiers on superior items.<br />
            - Scrapped and redesigned the magic and rare affix pool.<br />
            - Added many new item modifiers (eg. +% to attributes, attacker flees).<br />
            - Added 5 new gems and 23 new runes.<br />
            - Existing gems and runes now have different stats.<br />
            - Replaced all unique and runeword items (680 new uniques, 333 runewords).<br />
            - Replaced all sets with 30 high level sets for advanced characters.<br />
            - Removed most classic LoD cube recipes, added lots of new recipes.<br />
            - Added several new item types that serve as cube reagents.<br />
            - Added Honorific items.<br />
            - Rares are much more likely to spawn with good affixes.<br />
            - Rebalanced treasure classes to make high base items more likely to drop.<br />
            - Greatly increased chance to find a high end rune.<br />
            - You can now gamble on any item in the game, except for Sacred items.<br />
            - Quivers can now be magical, rare and unique.<br />
            - Added elixirs, which provide a temporary stat or attribute bonus.<br />
            - Added hidden charms as rewards for beating difficult challenges.</p>

        <p><span className="bold">Monster changes</span><br />
            - Monster behaviour tweaked and enhanced: they're now faster and smarter.<br />
            - Many monsters have various new skills, attacks or special properties.<br />
            - Rebalanced monster statistics.<br />
            - Added Elite monsters with their own attacks and improved statistics.<br />
            - Added even tougher Heroic monsters.<br />
            - Added 25 new superunique encounters throughout the game.<br />
            - Added 22 special uberbosses for established characters.<br />
            - Maximum monster level is now 120 in the regular game; special bosses are 121.</p>

        <p><span className="bold">Level changes</span><br />
            - Repopulated levels with a different selection of monsters.<br />
            - Reduced map size of various large and/or annoying areas.<br />
            - Improved mood lighting in many areas (Direct 3D only).<br />
            - Added several bonus levels associated with the new uberbosses.<br />
            - Added 8 special uberlevels for high level characters.</p>

        <p><span className="bold">Hireling changes</span><br />
            - All hirelings have a different skill set.<br />
            - Hireling stats changed to keep up with the new difficulty.</p>

        <p><span className="bold">Miscellaneous changes</span>
            - Increased inventory and stash size.<br />
            - Added PlugYFixed.ini to support PlugY better (ie. avoid bugs)<br />
            - Healing and mana potions now provide regeneration over time.<br />
            - Added elixirs that provide a temporary boost.<br />
            - Reduced sell price for most items, but increased gold drops.<br />
            - Reduced damage, AR and life bonuses for bosses relative to regular monsters.<br />
            - Disabled bugged or overpowered boss modifiers.<br />
            - Increased or decreased effect durations of various shrines.<br />
            - Changed modifiers and stats on quest items.<br />
            - Several monsters have their own taunts.<br />
            - Many objects now have a coloured light radius.<br />
            - Added new names for Low Quality items.<br />
            - New chest and wall traps.</p>

        <img src={menu3} alt="Menu 3" />
        <hr />

        <h6>New features in Median XL Zeta</h6><br />
        <p>Median XL Zeta, based on Omega 003, mainly focuses on improving quality of life.
        The mod features changes which should make player experience a lot more convenient, while keeping the
        balance of the game intact.
        Among such changes are Oils of Renewal with 50 charges, mass Disenchanting and "Sigging" of Unique&Set
        items, Shrine Vessels and Arcane Clusters to store Shrines and Arcane Crystals respectively, and also a
            much bigger inventory and Horadric Cube.<br />
            Other changes include a fix for the Scroll of Resistances (you now cube it with a certain charm to
            receive the resistance bonus),
            mercenaries being able to wear all equipment excluding a second ring and a new improved
            documentation.<br />
            A lot of unique items with silly names have been renamed, and many items (mostly uniques and charms)
            have gotten new sprites.<br /></p>

        <p>The full list of changes can be found in the changelog on this website.</p>

        <p>Median XL Zeta also comes with devurandom's <a href="https://d2mods.info/forum/viewtopic.php?t=65492">Basemod</a>,
         which features amazing quality
            of life changes
            such as
            ctrl-clicking items to move them to the stash or the Horadric Cube or automatically setting nopickup or
            /players X every time
            you enter the game.</p>

        <p>For players who wish to further modify the game, the txt files for Zeta are available inside the mpq and
        some of them (namely uniqueitems, misc and cubemain) have been cleaned.
        They are now much more readable and do not contain disabled entries.
        </p>

        <p>Most of the ideas for the quality of life features and some of the sprites in the game were taken from
        later versions of Median (Ultimative and Sigma).
        </p>

        <p>Please note that Median XL Zeta is <span className="bold">NOT</span> compatible with save files from any
            other Median XL version.
            Even if you'll be able to log your character, your items will certainly be corrupted.</p>
        <img src={menu4} alt="Menu 4" />
        <hr />
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));
