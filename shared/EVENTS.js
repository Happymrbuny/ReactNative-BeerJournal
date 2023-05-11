import beerDabblerLogo from '../assets/images/beerdabbler-logo.png';
import stPaulSummerBeerFestLogo from '../assets/images/stpaulbeerfest-logo.png';
import allPintsNorthLogo from '../assets/images/allPintsNorth-logo.png';
import hoppedUpCaribouLogo from '../assets/images/HoppedUp-logo.png';

export const EVENTS = [
    {
        id: 0,
        name: 'MN Beer Dabbler',
        image: beerDabblerLogo,
        featured: false,
        description:
            "MN Beer Dabbler description here."
    },
    {
        id: 1,
        name: 'St. Paul Summer Beer Fest',
        image: stPaulSummerBeerFestLogo,
        featured: false,
        description:
            'Join Git Out Expeditions to explore new horizons with a group of other adventurers!'
    },
    {
        id: 2,
        name: 'Mongo Fly Shop',
        image: allPintsNorthLogo,
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
