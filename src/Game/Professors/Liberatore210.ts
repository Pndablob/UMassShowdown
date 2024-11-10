import image from '../../Assets/Liberatore.jpeg';
import HeapHammer from '../Moves/HeapHammer';
import HelloFriends from '../Moves/HelloFriends';
import YouAreWelcomeHere from '../Moves/YouAreWelcomeHere';
import BloomFilter from '../Moves/BloomKiller';

const prof = {
    name: "Marc Liberatore",
    attack: 40,
    maxHealth: 210,
    defense: 100,
    moves: [HeapHammer, YouAreWelcomeHere, HelloFriends, BloomFilter],
    picture: image,
    id: 8,
}

export default prof;