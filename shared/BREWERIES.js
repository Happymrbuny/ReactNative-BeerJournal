import bentPaddleLogo from '../assets/img/bent-paddle-logo.png';
//Photo by Jonny Caspari on Unsplash
import castleDangerLogo from '../assets/img/castle-danger-logo.png';
// Photo by LoboStudio Hamburg on Unsplash
import summitLogo from '../assets/img/summit-logo.png';
// Photo by Jonathan Gallegos on Unsplash
import surlyLogo from '../assets/img/surly-logo.png';

export const BREWERIES = [
    {
        id: 0,
        name: 'Bent Paddle Brewing Company',
        image: bentPaddleLogo,
        featured: true,
        description:
            'We use the amazing water of Lake Superior along with the talent of our brewers to make some of the freshest and most dependable craft beer possible.'
    },
    {
        id: 1,
        name: 'Castle Danger Brewery',
        image: castleDangerLogo,
        featured: false,
        description:
            'Castle Danger Brewery has been brewing dangerously good ales on the North Shore of Lake Superior since 2011.'
    },
    {
        id: 2,
        name: 'Summit Brewing Co.',
        image: summitLogo,
        featured: false,
        description: `Way back in 1986, before craft brewing was even cool, Summit Brewing Company Founder and President Mark Stutrud set out in St. Paul, Minnesota, to make craft beers inspired by old-world brewing traditions and ingredients.`
    },
    {
        id: 3,
        name: 'Surly Brewing Company',
        image: surlyLogo,
        featured: false,
        description:
            ' From the start, the Twin Cities-based craft brewery has trailblazed the path for the craft beer movement, led by Surly’s efforts to change a Prohibition-era law to allow Minnesota breweries to sell pints of their own beer at their brewery.'
    }
];
