import image from '../../Assets/Liberatore.jpeg';
import HelloFriends from '../Moves/HelloFriends';
import RecursiveRampage from '../Moves/RecursiveRampage';
import YouAreWelcomeHere from '../Moves/YouAreWelcomeHere';

const prof = {
    name: "Marc Liberatore",
    attack: 60,
    maxHealth: 210,
    defense: 100,
    moves: [RecursiveRampage, YouAreWelcomeHere, HelloFriends],
    picture: image,
    id: 8,
}

export default prof;