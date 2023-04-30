import bootStrapLogo from '../assets/img/bootstrap-logo.png';
import gitLogo from '../assets/img/git-logo.png';
import mongoLogo from '../assets/img/mongo-logo.png';
import hoppedUpCaribouLogo from '../assets/img/HoppedUpLogo.svg';

export const EVENTS = [
    {
        id: 0,
        name: 'Bootstrap Outfitters',
        image: bootStrapLogo,
        featured: false,
        description:
            "Bootstrap Outfitters supplies you with the gear you need at prices you can't beat."
    },
    {
        id: 1,
        name: 'Git Out Expeditions',
        image: gitLogo,
        featured: false,
        description:
            'Join Git Out Expeditions to explore new horizons with a group of other adventurers!'
    },
    {
        id: 2,
        name: 'Mongo Fly Shop',
        image: mongoLogo,
        featured: false,
        description:
            'Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop.'
    },
    {
        id: 3,
        name: 'Hopped Up Caribou Beer Festival',
        image: hoppedUpCaribouLogo,
        featured: true,
        description:
            'Hopped Up Beer Festival is already the furthest north beer festival in Minnesota, but this year, it may also be one of the funkiest. Held July 14th through 16th at Caribou Highlands Lodge, this year’s festival will feature concerts on Friday and Saturday nights and all day Saturday.'
    }
];
