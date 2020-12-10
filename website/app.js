


const button = document.getElementById('gen')
const card = document.getElementById('card')
const expand = document.getElementById('expand')

const wrapper = document.querySelector('.main-container')
const divOne = document.querySelector('.div-one')
const divTwo = document.querySelector('.div-two')

const desc = document.querySelector('.upright-div')
const descRev = document.querySelector('.reversed-div')
const pic = document.querySelector('.pic')


button.addEventListener('click', function() {
    clearCanvas()

    setTimeout(tarot, 1600);
})



const clearCanvas = () => {
    divOne.classList.add('transparent')
    divTwo.classList.add('transparent')
    divTwo.classList.remove('zoom')

}

const showStuff = () => {
   
    divOne.classList.remove('transparent')
    divTwo.classList.remove('transparent')
    divTwo.classList.add('zoom')


}

const majorArcana = () => {

    let x = Math.floor(Math.random() * 22)

    switch(x) {
        case 0:
            card.innerHTML = 'Fool'
            desc.innerHTML = 'Upright: innocence, new beginnings, free spirit'
            descRev.innerHTML = 'Reversed: recklessness, taken advantage of, inconsideration'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg'
            break;
        case 1:
            card.innerHTML = 'The Magician'
            desc.innerHTML = 'Upright: willpower, desire, creation, manifestation'
            descRev.innerHTML = 'Reversed: trickery, illusions, out of touch'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg'
            break;
        case 2:
            card.innerHTML = 'The High Priestess'
            desc.innerHTML = 'Upright: intuitive, unconscious, inner voice'
            descRev.innerHTML = 'Reversed: lack of center, lost inner voice, repressed feelings'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar02.jpg'
            break;
        case 3:
            card.innerHTML = 'The Empress'
            desc.innerHTML = 'Upright: motherhood, fertility, nature'
            descRev.innerHTML = 'Reversed: dependence, smothering, emptiness, nosiness'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar03.jpg'
            break;
        case 4:
            card.innerHTML = 'The Emperor'
            desc.innerHTML = 'Upright: authority, structure, control, fatherhood'
            descRev.innerHTML = 'Reversed: tyranny, rigidity, coldness'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar04.jpg'
            break;
        case 5:
            card.innerHTML = 'The Hierophant'
            desc.innerHTML = 'Upright: tradition, conformity, morality, ethics'
            descRev.innerHTML = 'Reversed: rebellion, subversiveness, new approaches'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar05.jpg'
            break;
        case 6:
            card.innerHTML = 'The Lovers'
            desc.innerHTML = 'Upright: partnerships, duality, union'
            descRev.innerHTML = 'Reversed: loss of balance, one-sidedness, disharmony'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar06.jpg'
            break;
        case 7:
            card.innerHTML = 'The Chariot'
            desc.innerHTML = 'Upright: direction, control, willpower'
            descRev.innerHTML = 'Reversed: lack of control, lack of direction, aggression'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar07.jpg'
            break;
        case 8:
            card.innerHTML = 'Strength' 
            desc.innerHTML = 'Upright: inner strength, bravery, compassion, focus'
            descRev.innerHTML = 'Reversed: self doubt, weakness, insecurity'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar08.jpg'
            break;
        case 9:
            card.innerHTML = 'The Hermit'
            desc.innerHTML = 'Upright: contemplation, search for truth, inner guidance'
            descRev.innerHTML = 'Reversed: loneliness, isolation, lost your way'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar09.jpg'
            break;
        case 10:
            card.innerHTML = 'Wheel of Fortune'
            desc.innerHTML = 'Upright: change, cycles, inevitable fate'
            descRev.innerHTML = 'Reversed: no control, clinging to control, bad luck'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar10.jpg'
            break;
        case 11:
            card.innerHTML = 'Justice' 
            desc.innerHTML =  'Upright: cause and effect, clarity, truth'
            descRev.innerHTML =  'Reversed: dishonesty, unaccountability, unfairness'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar11.jpg'
            break;       
        case 12:
            card.innerHTML = 'The Hanged Man'
            desc.innerHTML = 'Upright: sacrifice, release, martyrdom'
            descRev.innerHTML = 'Reversed: stalling, needless sacrifice, fear of sacrifice'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar12.jpg'
            break;
        case 13:
            card.innerHTML = 'Death' 
            desc.innerHTML = 'Upright: end of cycle, beginnings, change, metamorphosis'
            descRev.innerHTML = 'Reversed: fear of change, holding on, stagnation, decay'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar13.jpg'
            break;
        case 14:
            card.innerHTML = 'Temperance'
            desc.innerHTML = 'Upright: middle path, patience, finding meaning'
            descRev.innerHTML = 'Reversed: extremes, excess, lack of balance'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar14.jpg'
            break;
        case 15:
            card.innerHTML = 'The Devil'
            desc.innerHTML = '<br> Upright: addiction, materialism, playfulness'
            descRev.innerHTML = 'Reversed: freedom, release, restoring control'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar15.jpg'
            break;
        case 16:
            card.innerHTML = 'The Tower' 
            desc.innerHTML = 'Upright: sudden upheaval, broken pride, disaster'
            descRev.innerHTML = 'Reversed: disaster avoided, delayed disaster, fear of suffering'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar16.jpg'
            break;
        case 17:
            card.innerHTML = 'The Star'
            desc.innerHTML = 'Upright: hope, faith, rejuvenation'
            descRev.innerHTML = 'Reversed: faithlessness, discouragement, insecurity'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar17.jpg'
            break;
        case 18:
            card.innerHTML = 'The Moon' 
            desc.innerHTML = 'Upright: unconscious, illusions, intuition'
            descRev.innerHTML = 'Reversed: confusion, fear, misinterpretation'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar18.jpg'
            break;
        case 19:
            card.innerHTML = 'The Sun'
            desc.innerHTML = 'Upright: joy, success, celebration, positivity'
            descRev.innerHTML = 'Reversed: negativity, depression, sadness'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar19.jpg'
            break;
        case 20:
            card.innerHTML = 'Judgement'
            desc.innerHTML = 'Upright: reflection, reckoning, awakening'
            descRev.innerHTML = 'Reversed: lack of self awareness, doubt, self loathing'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar20.jpg'
            break;
        case 21:
            card.innerHTML = 'The World'
            desc.innerHTML = 'Upright: fulfillment, harmony, completion'
            descRev.innerHTML = 'Reversed: incompletion, no closure'
            pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/ar21.jpg'
            break;

    }
}
const minorArcana = () => {


    let x = Math.floor(Math.random() * 4)
    let y = Math.floor(Math.random() * 14)

    if(x == 0) {            // swords
        switch(y) {
            case 0:
                card.innerHTML = 'Ace of Swords'
                desc.innerHTML = 'Upright: breakthrough, clarity, sharp mind'
                descRev.innerHTML = 'Reversed: confusion, brutality, chaos'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/swac.jpg'
                break;
            case 1:
                card.innerHTML = 'Two of Swords'
                desc.innerHTML = 'Upright: difficult choices, indecision, stalemate'
                descRev.innerHTML = 'Reversed: lesser of two evils, no right choice, confusion'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/sw02.jpg'
                break;
            case 2:
                card.innerHTML = 'Three of Swords'
                desc.innerHTML = 'Upright: heartbreak, suffering, grief'
                descRev.innerHTML = 'Reversed: recovery, forgiveness, moving on'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/sw03.jpg'
                break;
            case 3:
                card.innerHTML = 'Four of Swords'
                desc.innerHTML = 'Upright: rest, restoration, contemplation'
                descRev.innerHTML = 'Reversed: restlessness, burnout, stress'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/sw04.jpg'
                break;
            case 4:
                card.innerHTML = 'Five of Swords'
                desc.innerHTML = 'Upright: unbridled ambition, win at all costs, sneakiness'
                descRev.innerHTML = 'Reversed: lingering resentment, desire to reconcile, forgiveness'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/sw05.jpg'
                break;
            case 5:
                card.innerHTML = 'Six of Swords'
                desc.innerHTML = 'Upright: transition, leaving behind, moving on'
                descRev.innerHTML = 'Reversed: emotional baggage, unresolved issues, resisting transition'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/sw06.jpg'
                break;
            case 6:
                card.innerHTML = 'Seven of Swords'
                desc.innerHTML = 'Upright: deception, trickery, tactics and strategy'
                descRev.innerHTML = 'Reversed: coming clean, rethinking approach, deception'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/sw07.jpg'
                break;
            case 7:
                card.innerHTML = 'Eight of Swords'
                desc.innerHTML = 'Upright: imprisonment, entrapment, self-victimization'
                descRev.innerHTML = 'Reversed: self acceptance, new perspective, freedom'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/sw08.jpg'
                break;
            case 8:
                card.innerHTML = 'Nine of Swords'
                desc.innerHTML = 'Upright: anxiety, hopelessness, trauma'
                descRev.innerHTML = 'Reversed: hope, reaching out, despair'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/sw09.jpg'
                break;
            case 9:
                card.innerHTML = 'Ten of Swords'
                desc.innerHTML = 'Upright: failure, collapse, defeat'
                descRev.innerHTML = 'Reversed: can\'t get worse, only upwards, inevitable end'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/sw10.jpg'
                break;
            case 10:
                card.innerHTML = 'Page of Swords'
                desc.innerHTML = 'Upright: curiosity, restlessness, mental energy'
                descRev.innerHTML = 'Reversed: deception, manipulation, all talk'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/swpa.jpg'
                break;
            case 11:
                card.innerHTML = 'Knight of Swords'
                desc.innerHTML = 'Upright: action, impulsiveness, defending beliefs'
                descRev.innerHTML = 'Reversed: no direction, disregard for consequences, unpredictability'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/swkn.jpg'
                break;      
            case 12:
                card.innerHTML = 'Queen of Swords'
                desc.innerHTML = 'Upright: complexity, perceptiveness, clear mindedness'
                descRev.innerHTML = 'Reversed: cold hearted, cruel, bitterness'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/swqu.jpg'
                break;
            case 13:
                card.innerHTML = 'King of Swords'
                desc.innerHTML = 'Upright: head over heart, discipline, truth'
                descRev.innerHTML = 'Reversed: manipulative, cruel, weakness'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/swki.jpg'
                break;
            }
        }
    else if(x == 1) {       // wands
        switch(y) {
            case 0:
                card.innerHTML = 'Ace of Wands'
                desc.innerHTML = 'Upright: creation, willpower, inspiration, desire'
                descRev.innerHTML = 'Reversed: lack of energy, lack of passion, boredom'
                pic.src = 'https://gfx.tarot.com/images/site/decks/universal-waite/full_size/22.jpg'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/waac.jpg'
                break;
            case 1:
                card.innerHTML = 'Two of Wands'
                desc.innerHTML = 'Upright: planning, making decisions, leaving home'
                descRev.innerHTML = 'Reversed: fear of change, playing safe, bad planning'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/wa02.jpg'
                break;
            case 2:
                card.innerHTML = 'Three of Wands'
                desc.innerHTML = 'Upright: looking ahead, expansion, rapid growth'
                descRev.innerHTML = 'Reversed: obstacles, delays, frustration'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/wa03.jpg'
                break;
            case 3:
                card.innerHTML = 'Four of Wands'
                desc.innerHTML = 'Upright: community, home, celebration'
                descRev.innerHTML = 'Reversed: lack of support, transience, home conflicts'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/wa04.jpg'
                break;
            case 4:
                card.innerHTML = 'Five of Wands'
                desc.innerHTML = 'Upright: competition, rivalry, conflict'
                descRev.innerHTML = 'Reversed: avoiding conflict, respecting differences'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/wa05.jpg'
                break;
            case 5:
                card.innerHTML = 'Six of Wands'
                desc.innerHTML = 'Upright: victory, success, public reward'
                descRev.innerHTML = 'Reversed: excess pride, lack of recognition, punishment'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/wa06.jpg'
                break;
            case 6:
                card.innerHTML = 'Seven of Wands'
                desc.innerHTML = 'Upright: perseverance, defensive, maintaining control'
                descRev.innerHTML = 'Reversed: give up, destroyed confidence, overwhelmed'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/wa07.jpg'
                break;
            case 7:
                card.innerHTML = 'Eight of Wands'
                desc.innerHTML = 'Upright: rapid action, movement, quick decisions'
                descRev.innerHTML = 'Reversed: panic, waiting, slowdown'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/wa08.jpg'
                break;
            case 8:
                card.innerHTML = 'Nine of Wands'
                desc.innerHTML = 'Upright: resilience, grit, last stand'
                descRev.innerHTML = 'Reversed: exhaustion, fatigue, questioning motivations'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/wa09.jpg'
                break;
            case 9:
                card.innerHTML = 'Ten of Wands'
                desc.innerHTML = 'Upright: accomplishment, responsibility, burden'
                descRev.innerHTML = 'Reversed: inability to delegate, overstressed, burnt out'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/wa10.jpg'
                break;
            case 10:
                card.innerHTML = 'Page of Wands'
                desc.innerHTML = 'Upright: exploration, excitement, freedom'
                descRev.innerHTML = 'Reversed: lack of direction, procrastination, creating conflict'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/wapa.jpg'
                break;
            case 11:
                card.innerHTML = 'Knight of Wands'
                desc.innerHTML = 'Upright: action, adventure, fearlessness'
                descRev.innerHTML = 'Reversed: anger, impulsiveness, recklessness'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/wakn.jpg'
                break;      
            case 12:
                card.innerHTML = 'Queen of Wands'
                desc.innerHTML = 'Upright: courage, determination, joy'
                descRev.innerHTML = 'Reversed: selfishness, jealousy, insecurities'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/waqu.jpg'
                break;
            case 13:
                card.innerHTML = 'King of Wands'
                desc.innerHTML = 'Upright: big picture, leader, overcoming challenges'
                descRev.innerHTML = 'Reversed: impulsive, overbearing, unachievable expectations'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/waki.jpg'
                break;
            }
        }
    else if(x == 2) {       // cups
        switch(y) {
            case 0:
                card.innerHTML = 'Ace of Cups'
                desc.innerHTML = 'Upright: new feelings, spirituality, intuition'
                descRev.innerHTML = 'Reversed: emotional loss, blocked creativity, emptiness'
                pic.src = 'https://gfx.tarot.com/images/site/decks/universal-waite/full_size/36.jpg'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/cuac.jpg'
                break;
            case 1:
                card.innerHTML = 'Two of Cups'
                desc.innerHTML = 'Upright: unity, partnership, connection'
                descRev.innerHTML = 'Reversed: imbalance, broken communication, tension'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/cu02.jpg'
                break;
            case 2:
                card.innerHTML = 'Three of Cups'
                desc.innerHTML = 'Upright: friendship, community, happiness'
                descRev.innerHTML = 'Reversed: overindulgence, gossip, isolation'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/cu03.jpg'
                break;
            case 3:
                card.innerHTML = 'Four of Cups'
                desc.innerHTML = 'Upright: apathy, contemplation, disconnectedness'
                descRev.innerHTML = 'Reversed: sudden awareness, choosing happiness, acceptance'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/cu04.jpg'
                break;
            case 4:
                card.innerHTML = 'Five of Cups'
                desc.innerHTML = 'Upright: loss, grief, self-pity'
                descRev.innerHTML = 'Reversed: acceptance, moving on, finding peace'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/cu05.jpg'
                break;
            case 5:
                card.innerHTML = 'Six of Cups'
                desc.innerHTML = 'Upright: familiarity, happy memories, healing'
                descRev.innerHTML = 'Reversed: moving forward, leaving home, independence'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/cu06.jpg'
                break;
            case 6:
                card.innerHTML = 'Seven of Cups'
                desc.innerHTML = 'Upright: searching for purpose, choices, daydreaming'
                descRev.innerHTML = 'Reversed: lack of purpose, diversion, confusion'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/cu07.jpg'
                break;
            case 7:
                card.innerHTML = 'Eight of Cups'
                desc.innerHTML = 'Upright: walking away, disillusionment, leaving behind'
                descRev.innerHTML = 'Reversed: avoidance, fear of change, fear of loss'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/cu08.jpg'
                break;
            case 8:
                card.innerHTML = 'Nine of Cups'
                desc.innerHTML = 'Upright: satisfaction, emotional stability, luxury'
                descRev.innerHTML = 'Reversed: lack of inner joy, smugness, dissatisfaction'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/cu09.jpg'
                break;
            case 9:
                card.innerHTML = 'Ten of Cups'
                desc.innerHTML = 'Upright: inner happiness, fulfillment, dreams coming true'
                descRev.innerHTML = 'Reversed: shattered dreams, broken family, domestic disharmony'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/cu10.jpg'
                break;
            case 10:
                card.innerHTML = 'Page of Cups'
                desc.innerHTML = 'Upright: happy surprise, dreamer, sensitivity'
                descRev.innerHTML = 'Reversed: emotional immaturity, insecurity, disappointment'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/cupa.jpg'
                break;
            case 11:
                card.innerHTML = 'Knight of Cups'
                desc.innerHTML = 'Upright: following the heart, idealist, romantic'
                descRev.innerHTML = 'Reversed: moodiness, disappointment'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/cukn.jpg'
                break;      
            case 12:
                card.innerHTML = 'Queen of Cups'
                desc.innerHTML = 'Upright: compassion, calm, comfort'
                descRev.innerHTML = 'Reversed: martyrdom, insecurity, dependence'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/cuqu.jpg'
                break;
            case 13:
                card.innerHTML = 'King of Cups'
                desc.innerHTML = 'Upright: compassion, control, balance'
                descRev.innerHTML = 'Reversed: coldness, moodiness, bad advice'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/cuki.jpg'
                break;
            }
    }
    else if(x == 3) {       // coins
        switch(y) {
            case 0:
                card.innerHTML = 'Ace of Coins'
                desc.innerHTML = 'Upright: opportunity, prosperity, new venture'
                descRev.innerHTML = 'Reversed: lost opportunity, missed chance, bad investment'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/peac.jpg'
                break;
            case 1:
                card.innerHTML = 'Two of Coins'
                desc.innerHTML = 'Upright: balancing decisions, priorities, adapting to change'
                descRev.innerHTML = 'Reversed: loss of balance, disorganized, overwhelmed'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/pe02.jpg'
                break;
            case 2:
                card.innerHTML = 'Three of Coins'
                desc.innerHTML = 'Upright: teamwork, collaboration, building'
                descRev.innerHTML = 'Reversed: lack of teamwork, disorganized, group conflict'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/pe03.jpg'
                break;
            case 3:
                card.innerHTML = 'Four of Coins'
                desc.innerHTML = 'Upright: conservation, frugality, security'
                descRev.innerHTML = 'Reversed: greediness, stinginess, possessiveness'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/pe04.jpg'
                break;
            case 4:
                card.innerHTML = 'Five of Coins'
                desc.innerHTML = 'Upright: need, poverty, insecurity, '
                descRev.innerHTML = 'Reversed: recovery, charity, improvement'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/pe05.jpg'
                break;
            case 5:
                card.innerHTML = 'Six of Coins'
                desc.innerHTML = 'Upright: charity, generosity, sharing'
                descRev.innerHTML = 'Reversed: strings attached, stinginess, power and domination'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/pe06.jpg'
                break;
            case 6:
                card.innerHTML = 'Seven of Coins'
                desc.innerHTML = 'Upright: hard work, perseverance, diligence'
                descRev.innerHTML = 'Reversed: work without results, distractions, lack of rewards'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/pe07.jpg'
                break;
            case 7:
                card.innerHTML = 'Eight of Coins'
                desc.innerHTML = 'Upright: apprenticeship, passion, high standards'
                descRev.innerHTML = 'Reversed: lack of passion, uninspired, no motivation'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/pe08.jpg'
                break;
            case 8:
                card.innerHTML = 'Nine of Coins'
                desc.innerHTML = 'Upright: fruits of labor, rewards, luxury'
                descRev.innerHTML = 'Reversed: reckless spending, living beyond means, false success'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/pe09.jpg'
                break;
            case 9:
                card.innerHTML = 'Ten of Coins'
                desc.innerHTML = 'Upright: legacy, culmination, inheritance'
                descRev.innerHTML = 'Reversed: fleeting success, lack of stability, lack of resources'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/pe10.jpg'
                break;
            case 10:
                card.innerHTML = 'Page of Coins'
                desc.innerHTML = 'Upright: ambition, desire, diligence'
                descRev.innerHTML = 'Reversed: lack of commitment, greediness, laziness'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/pepa.jpg'
                break;
            case 11:
                card.innerHTML = 'Knight of Coins'
                desc.innerHTML = 'Upright: efficiency, hard work, responsibility'
                descRev.innerHTML = 'Reversed: laziness, obsessiveness, work without reward'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/pekn.jpg'
                break;      
            case 12:
                card.innerHTML = 'Queen of Coins'
                desc.innerHTML = 'Upright: practicality, creature comforts, financial security'
                descRev.innerHTML = 'Reversed: self-centeredness, jealousy, smothering'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/pequ.jpg'
                break;
            case 13:
                card.innerHTML = 'King of Coins'
                desc.innerHTML = 'Upright: abundance, prosperity, security'
                descRev.innerHTML = 'Reversed: greed, indulgence, sensuality'
                pic.src = 'https://www.sacred-texts.com/tarot/pkt/img/peki.jpg'
                break;
            }
    }

}
const tarot = () => {
    showStuff()


    let x = Math.floor((Math.random() * 78) + 1)
    let coinFlip = Math.floor(Math.random() * 2)
  
    if(coinFlip == 0) {
        desc.classList.remove('highlighted')
        descRev.classList.add('highlighted')
        pic.classList.add('reversePic')
       
    }
    else {

        desc.classList.add('highlighted')
        descRev.classList.remove('highlighted')
        pic.classList.remove('reversePic')
    }
    
    if (x > 56) {
       majorArcana()

    }
    else {
        minorArcana()
        
    }
} 


