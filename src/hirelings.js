import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/general.css';
import './misc/css/introduction.css';
import sister from './img/hirelings/a1.gif';
import townGuard from './img/hirelings/a2.gif';
import ironWolf from './img/hirelings/a3.gif';
import barbarian from './img/hirelings/a4.gif';
import { Nav } from './generalComponents.js';

function App() {
    return (
        <div className="container">
            <Header title="HIRELINGS"></Header>
            <Nav></Nav>
            <Content></Content>
            <div className="spacing"></div>
        </div>
    );
}

function Content() {
    return <div className="description">
        <h2>HIRELINGS</h2>
            <p>Anyone desperate enough can put up a fight against the demons, but only the exceptionally strong and
                brave will follow plundering maniacs such as yourself into the pits of Hell.<br /></p>

            <h2>CARE AND FEEDING</h2>
            <p><span className="bold">Are mercenaries any good?<br /></span>
                Mercenaries are very adept at destroying the common threats in Sanctuary, provided you 'help them help
                you' with potions and useful items. They may meet the reaper in the uberquests and heroic areas, though,
                unless skillfully supported.<br />
                In Zeta, mercenaries can equip any item excluding a second ring, and therefore they are much stronger
                than their classNameic Median counterparts.<br />
                It would be a great disadvantage not to use them!</p>

            <p><span className="bold">How do I equip my mercenary?<br /></span>
                High defense and resistances will keep your mercenary alive. Defensive statistics are more important
                than sheer damage, because a dead mercenary does zero damage.</p>

            <p><span className="bold">Can I increase the damage of an Act 3 mercenary?<br /></span>
                Act 3 mercenaries have high energy and energy factor, so these statistics are less important. What will
                help a lot is <span className="magic">+x% to Spell Damage</span>, <span className="magic">-x% to Enemy
                    Resistances</span> and <span className="magic">+x to All Skills</span>. If you have elemental
                damage buffs like Bloodlust or Elemental Totem, pile them onto your mercenary as well.</p>

            <div className="mercenary">
                <h3>THE SISTERS</h3>
                <img src={sister} alt="Act 1 Mercenary" />
                <p>Weakened by the prolonged siege, the Sisters of the Sightless Eye may not be in fighting condition.
                    But help them liberate the Monastery and watch them rise and shine.</p>
                <h4>Bonuses</h4>
                <p>Starts with 30 energy, +6 energy per level<br />
                    <span className="bold">Defensive Harmony:</span> slows attackers by 25%, +1% per 5 levels</p>
            </div>
            <h4>Ranger Skills</h4>
            <table>
                <tr>
                    <th>Level</th>
                    <th>Name</th>
                    <th>Effect</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Cascade</td>
                    <td>Shoots arrows at all nearby enemies</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Vanquish</td>
                    <td>Briefly increases physical damage</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>Wraith Arrow</td>
                    <td>Arrow that unleashes homing spirits</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>Broadside</td>
                    <td>Fires a massive stream of arrows at nearby enemies</td>
                </tr>
                <tr>
                    <td><span className="unique">90</span></td>
                    <td><span className="unique">War Spirit</span></td>
                    <td>Adds crushing blow and automatically casts spike novas</td>
                </tr>
            </table>

            <h4>Priestess Skills</h4>
            <table>
                <tr>
                    <th>Level</th>
                    <th>Name</th>
                    <th>Effect</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Spore Shot</td>
                    <td>Arrow that exponentially splits on striking</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Pagan Rites</td>
                    <td>Destroys corpses in flames, healing the caster</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>Vindicate</td>
                    <td>Curse: heals party and increases damage when victim dies</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>Deathstrike</td>
                    <td>The Priestess shoots her bow and calls down an energy blast</td>
                </tr>
                <tr>
                    <td><span className="unique">90</span></td>
                    <td><span className="unique">Tremor</span></td>
                    <td>All visible enemies lose 25% of their current life</td>
                </tr>
            </table>

            <div className="mercenary">
                <h3>THE TOWN GUARD</h3>
                <img src={townGuard} alt="Act 2 Mercenary" />
                <p>Many trade routes converge at Lut Gholein, the jewel of the East. When the demons blocked access over
                    land and the kraken nested in the port, travelling paladins, mystics and warriors were forced to
                    take up arms to defend the city.</p>
                <h4>Bonuses</h4>
                <p>Starts with 20 energy, +4 energy per level<br />
                    <span className="bold">Suppression:</span> crushing blow 25%, +1% per 5 levels<br />
                    <span className="bold">Grit:</span> damage reduced by 25%, +1% per 5 levels</p>
            </div>

            <h4>Exemplar Skills</h4>
            <table>
                <tr>
                    <th>Level</th>
                    <th>Name</th>
                    <th>Effect</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Retaliate</td>
                    <td>Retaliates when struck with a damaging shockwave</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Gorefest</td>
                    <td>Melee attack that causes a fountain of blood</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Lifeblood</td>
                    <td>Slowly regenerates lost life over time</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>King of Blades</td>
                    <td>Automatically launches bouncing blades at nearby enemies</td>
                </tr>
                <tr>
                    <td><span className="unique">90</span></td>
                    <td><span className="unique">Disintegrate</span></td>
                    <td>Massively damaging arcane radius blast around caster</td>
                </tr>
            </table>

            <h4>Shapeshifter Skills</h4>
            <table>
                <tr>
                    <th>Level</th>
                    <th>Name</th>
                    <th>Effect</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Werebear</td>
                    <td>Turn into a bear, increasing life and armour</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Claw Tornado</td>
                    <td>Melee attack that sends out spinning whirlwinds</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Bloodlust</td>
                    <td>Increases all damage of the party</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Pounce</td>
                    <td>Teleport onto an enemy, causing a powerful shockwave</td>
                </tr>
                <tr>
                    <td><span className="unique">90</span></td>
                    <td><span className="unique">Thorn Field</span></td>
                    <td>Melee attack that summons a ripple of spiked thorns</td>
                </tr>
            </table>

            <h4>Fighter Mage Skills</h4>
            <table>
                <tr>
                    <th>Level</th>
                    <th>Name</th>
                    <th>Effect</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Titan Strike</td>
                    <td>Melee attack that heals and increases stats</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Guard Tower</td>
                    <td>Summons a guard tower that shoots arrows at enemies</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Glacial Nova</td>
                    <td>Cast a gigantic nova that completely freezes enemies</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Fortress</td>
                    <td>Summons a ring of guard towers around the caster</td>
                </tr>
                <tr>
                    <td><span className="unique">90</span></td>
                    <td><span className="unique">Chronofield</span></td>
                    <td>Field that slows the movement and attack speed of enemies</td>
                </tr>
            </table>

            <div className="mercenary">
                <h3>THE IRON WOLVES</h3>
                <img src={ironWolf} alt="Act 3 Mercenary" />
                <p>Kehjistan is the wellspring of magic. This is where the first magically attuned hunter-gatherers
                    settled
                    at ley nodes and founded the primeval mage clans. Their distant sons of seventh sons will not give
                    up
                    the ley nodes to the forces of Hell without giving them hell first!</p>
                <h4>Bonuses</h4>
                <p>Starts with 200 energy, +20 energy per level<br />
                    <span className="bold">Unearthly Power:</span> +250 energy factor to spell damage, +5 per level<br />
                    <span className="bold">Warp Armor:</span> total defense +250%, +10% per level</p>
            </div>

            <h4>Bloodmage Skills</h4>
            <table>
                <tr>
                    <th>Level</th>
                    <th>Name</th>
                    <th>Effect</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Flamefront</td>
                    <td>Cast a wave of multiple streaking fireballs</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Punisher</td>
                    <td>Slow moving bolt that deals lethal poison damage</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Gift of Inner Fire</td>
                    <td>Instantly regenerates the party's lost life</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>Pyroblast</td>
                    <td>Giant fireball that explodes in a pool of flame</td>
                </tr>
                <tr>
                    <td><span className="unique">90</span></td>
                    <td><span className="unique">Graveyard</span></td>
                    <td>Periodically shoots punishers at nearby enemies</td>
                </tr>
            </table>

            <h4>Necrolyte Skills</h4>
            <table>
                <tr>
                    <th>Level</th>
                    <th>Name</th>
                    <th>Effect</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Hunting Banshee</td>
                    <td>Spirit that follows random targets before exploding</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Charm</td>
                    <td>Converts enemies to fight other enemies</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Miasma</td>
                    <td>Field of living goo that poisons and weakens enemies</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>Hailstorm</td>
                    <td>Rains deadly cold on target enemy</td>
                </tr>
                <tr>
                    <td><span className="unique">90</span></td>
                    <td><span className="unique">Venomous Spirit</span></td>
                    <td>Casts a powerful homing spirit of lethal poison</td>
                </tr>
            </table>

            <h4>Abjurer Skills</h4>
            <table>
                <tr>
                    <th>Level</th>
                    <th>Name</th>
                    <th>Effect</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Forked Lightning</td>
                    <td>Cast multiple forked lightning bolts</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Banish</td>
                    <td>Curse: reduces monster life by a percentage</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Singularity</td>
                    <td>Massively damaging black hole</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>Supernova</td>
                    <td>Cast a gigantic nova of lightning</td>
                </tr>
                <tr>
                    <td><span className="unique">90</span></td>
                    <td><span className="unique">Superbeast</span></td>
                    <td>Morph into a demon, gain spell damage and speed</td>
                </tr>
            </table>

            <div className="mercenary">
                <h3>THE BARBARIANS</h3>
                <img src={barbarian} alt="Act 5 Mercenary" />
                <p>Considered uncivilised man-beasts by some, sons of the nephalem by others, the only reason why few
                    outsiders from the south have reported their considerable shamanic prowess is because they were
                    usually
                    at the receiving end of it.</p>
                <h4>Bonuses</h4>
                <p>Starts with 10 energy, +2 energy per level<br />
                    <span className="bold">Mountain King:</span> 20% bonus to strength and dexterity, +1% per 2 levels<br />
                </p>
            </div>

            <h4>Barbarian Skills</h4>
            <table>
                <tr>
                    <th>Level</th>
                    <th>Name</th>
                    <th>Effect</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Gift of the Wild</td>
                    <td>Increases all damage of the party</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Thunder Slam</td>
                    <td>Damages and stuns enemies in a radius</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>Shower of Rocks</td>
                    <td>Melee attack that drops rocks that reduce attack rating</td>
                </tr>
                <tr>
                    <td>60</td>
                    <td>Ancients' Hand</td>
                    <td>Melee attack that converts damage done to fire</td>
                </tr>
                <tr>
                    <td><span className="unique">90</span></td>
                    <td><span className="unique">Warband</span></td>
                    <td>Summons a barbarian army</td>
                </tr>
            </table>
            <h3>KNOWN MERCENARY BUGS</h3>
            <p><span className="bold">My mercenary stands there and doesn't do anything!<br /></span>
                This is a bug with mercenary AI in Diablo II. If you walk, the mercenary will also walk, and this
                occasionally causes it to freeze up. To cure this, jump into a town portal.</p>

            <p><span className="bold">My mercenary is slow and does no damage!<br /></span>
                Mercenaries in Median XL gain much of their power from an invisible aura-like effect. You are not
                supposed
                to see how things like this work under the hood, but it does mean that the mercenary needs to attack a
                few
                times until the bonus is activated. Give him some time to warm up and get into the battle mindset!</p>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));