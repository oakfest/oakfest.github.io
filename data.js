/***********************************************************************************************************
 |
 | Site data - All site content is in this file. Updates to this file will update the content on the site
 |
 ***********************************************************************************************************/

const data = {
    title: 'Oakfest 2020 ::',
    tagline: `Cordovas w/ Heart of Pine & The Bo Henry Band`,

    pages: [
        'sponsors',
        'faqs'
    ],

    date: "March 14, 2020",
    doors: "3:00pm",
    start: "3:30pm",
    end: "10:00pm",
};

/***********************************************************************************************************
 |
 | About
 |
 ***********************************************************************************************************/

data.about = `
    <p>
        PRESENTED BY WHITEHURST, BLACKBURN & WARREN, ATTORNEYS AT LAW.<br /> 
        The Kiwanis Club of Thomasville invites you to make a difference in the life of a child by
        supporting our annual event and fundraiser, OakFest, which will be held on Saturday, ${data.date}
        from ${data.start} to ${data.end} EST at the Ritz Amphitheater in Downtown Thomasville.
    </p>
    <p>
        Our event is a full day of music, food, and fun! We will have bands from across the southeast,
        featuring ${data.tagline}, local food trucks, plus a beer and wine garden, for all
        your dining needs.
    </p>
    <p>
        As members of the Kiwanis Club, our goal is to serve the children of our community in the best
        ways possible: literacy, scholarships, and financial support to organizations like the Treehouse
        to promote healthy and positive assistance to children.
    </p>
`;

/***********************************************************************************************************
 |
 | SEO
 |
 ***********************************************************************************************************/

data.meta = {
    description: `
        OakFest is back in 2020 with Cordovas, Heart of Pine, and The Bo Henry Band
        The afternoon will be jam packed with all of your favorite local bands.
        Come enjoy food trucks, beer and wine garden, and a great afternoon in Thomasville. 
        All proceeds will go directly to The Treehouse Advocacy Center of Thomas County.`,

    keywords: [
        'Oakfest',
        'Thomasville',
        'GA',
        'Georgia',
        'Music',
        'Festival',
        'Cordovas',
        'Heart of Pine',
        'The Bo Henry Band',
        'Treehouse',
        'Kiwanis',
        'Concert',
        'Food',
        'Beer',
        'Wine',
        'Jam',
        'Band',
    ]
};

/***********************************************************************************************************
 |
 | Rules and FAQs
 |
 ***********************************************************************************************************/

data.faqs = {
    "Tell me about Oakfest!": data.about,

    "What are the dates and hours?": `Saturday ${data.date}. Doors ${data.doors}, First Band ${data.start}, End ${data.end} EST`,

    "How do I get there?": `
        Oakfest will be held at the Ritz Amphitheater 131 S Stevens St, Thomasville, GA 31792<br/>
        
        We will have two ticket gates - one by the amphitheater stage on Stevens Street and one through the open alleyway
        next to Empire Bagel on Jackson Street. If your General Admission includes a t-shirt, you can pick up your shirt at the merchandise table.
        If you did not pre-buy a t-shirt, we have a merchandise table! There are hats, t-shirts, and stickers available for purchase.
        We accept both cash and card for purchases.
    `,

    'Where can I find parking and ATMs?': `
        <a href="https://thomasvillega.com/uploads/groups/3/Attractions/Festivals/Downtown-Parking.jpg" target="_blank">Parking and ATM Map</a>
    `,

    'What can I bring?': {
        'DO BRING:': [
            'Lawn Chairs',
            'Your ticket(s). This can be printed or on your phone.',
            'Sleeves! It will be chilly at night',
            'Blankets for warmth (not for picnicking)',
            'Cash (We accept Visa, MasterCard, American Express, Discover, JCB, or UnionPay. Some vendors may only accept cash)',
            'All of your friends'
        ],

        'DO NOT BRING:': [
            'Coolers, cups, or drinks from outside the venue.',
            'Picnic blankets',
            'Tents',
            'Pets',
            'Drones or aircraft',
            'Fireworks',
            'Weapons of any kind',
            'Illegal substances'
        ]
    },

    'What will be available for food and drink?': `
        There will be multiple food trucks, so you'll have plenty of variety! 
        In order to enjoy beer or wine, you will first need to purchase a drink ticket ($5 each). 
        One ticket=one drink. <br/> 
        We will have a separate table for drink ticket purchases (your ID will be checked at the gate where you
        will receive an additional armband that signifies you are of drinking age).
    `
};

/***********************************************************************************************************
 |
 | Sponsors
 |
 ***********************************************************************************************************/

data.sponsors = [

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // PRESENTING
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
        level: "presenting",
        name: "Whitehurst, Blackburn & Warren\nAttorneys at Law",
        url: "http://wbwattorneys.com/",
        logo: "wbw.svg"
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // PLATINUM
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GOLD
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
        level: "gold",
        name: "Bannister Electric",
        url: "https://www.thomasvillechamber.com/list/member/bannister-s-electric-company-inc-thomasville-1150",
        logo: ""
    },


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SILVER
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////


    {
        level: "silver",
        name: "Allgood Screen Printing & Embroidery",
        url: "https://www.companycasuals.com/allgood/start.jsp",
        logo: "allgood.png",
        tiny: true
    },

    {
        level: "silver",
        name: "Bill's Jewelers",
        url: "https://billsjewelers.com/",
        logo: "bills.png"
    },

    {
        level: "silver",
        name: "CNS\nInternet - Phone - Digital TV",
        url: "https://www.cns-internet.com",
        logo: "cns.png"
    },

    {
        level: "silver",
        name: "Dr. Beth Geer",
        url: "#",
        logo: ""
    },

    {
        level: "silver",
        name: "Southern Elder Law Center\nDale Davidson",
        url: "http://southernelderlaw.com/",
        logo: "elder.png"
    },

    {
        level: "silver",
        name: "Southern Regional Technical College",
        url: "https://southernregional.edu/",
        logo: "srtc.png"
    },

    // BRONZE

    {
        level: "bronze",
        name: "Alexander and Vann",
        url: "https://alexandervann.com/",
        logo: "alex.png"
    },

    {
        level: "bronze",
        name: "Allen & Allen\nFuneral Home and Crematory",
        url: "https://www.allenfh.com/",
        logo: "aa.webp"
    },

    {
        level: "bronze",
        name: "Allen, Mooney, & Barnes",
        url: "http://ambwealth.com/",
        logo: "amb.jpg"
    },

    {
        level: "bronze",
        name: "Ameris Bank",
        url: "https://www.amerisbank.com/",
        logo: "ameris.png"
    },

    {
        level: "bronze",
        name: "Cooper’s Plumbing & Air",
        url: "https://www.amerisbank.com/",
        logo: "coopers.png"
    },

    {
        level: "bronze",
        name: "Danny Hayes\nAttorney at Law",
        url: "http://dannyhayesmylawyer.com/",
        logo: "danny.png"
    },

    {
        level: "bronze",
        name: "Georgia Farm Bureau\nEddie Simmons",
        url: "https://www.gfb.org/",
        logo: "gfb.svg"
    },

    {
        level: "bronze",
        name: "Liberty Towing",
        url: "https://www.facebook.com/libertytowingandrecovery/",
        logo: "liberty.png",
        tiny: true
    },

    {
        level: "bronze",
        name: "McIntosh Clinic",
        url: "http://www.mcintoshclinic.com/",
        logo: "mcintosh.jpg"
    },

    {
        level: "bronze",
        name: "New Hire Solutions",
        url: "http://newhiresolutions.com/",
        logo: "new-hire.png"
    },

    {
        level: "bronze",
        name: "Susie Q's",
        url: "https://susieqsfoods.com/",
        logo: "susie.png"
    },
];

/***********************************************************************************************************
 |
 | Past Sponsors
 |
 ***********************************************************************************************************/

data.pastSponsors = [

    {
        level: "silver",
        name: "Taylor Benefit Resource",
        url: "http://www.tbrtpa.com/",
        logo: "tbr.svg"
    },

    {
        level: "silver",
        name: "Wendy's",
        url: "https://www.wendys.com/",
        logo: "wendys.png"
    },
    {
        level: "silver",
        name: "J. Smith Lanier & Co.\nA Marsh & McLennan Agency LLC company",
        url: "http://www.jsmithlanier.com/",
        logo: "jsmith.jpg"
    },
    {
        level: "silver",
        name: "Cives Steel Company",
        url: "http://www.cives.com/southern",
        logo: "cives.png"
    },
    {
        level: "silver",
        name: "Cleaver Brooks\nComplete Boiler Room Solutions",
        url: "http://www.cleaverbrooks.com/",
        logo: "cleaver.png"
    },
    {
        level: "silver",
        name: "Factor X Fitness",
        url: "https://www.factorxfitness.com/",
        logo: "factor.png"
    },
    {
        level: "silver",
        name: "Long & Company CPA's LLC",
        url: "https://www.longcocpa.com/",
        logo: ""
    },
    {
        level: "bronze",
        name: "Element Style Bar",
        url: "https://www.facebook.com/laurendeeabbey/",
        logo: "element.png"
    },

    {
        level: "bronze",
        name: "Synovus Bank",
        url: "https://synovus.com",
        logo: "synovus.png"
    },

    {
        level: "bronze",
        name: "Caldwell & Langford Insurance",
        url: "http://caldwellandlangford.com/",
        logo: "caldwell.svg"
    },

    {
        level: "bronze",
        name: "Henderson's Restaurant",
        url: "http://hendersonsofthomasville.com/",
        logo: "hendersons.svg"
    },
    {
        level: "bronze",
        name: "Sampson's Paint and Decorating",
        url: "http://paintstore.benjaminmoore.com/stores/us/ga/thomasville/sampsons-paint-decorating-inc?lang=en_CA",
        logo: "sampsons.png",
        tiny: true
    },
    {
        level: "bronze",
        name: "State Farm\nPatrick Scarborough",
        url: "https://www.tvilleinsurance.com/",
        logo: "state-farm.svg"
    },
    {
        level: "bronze",
        name: "AgPro Companies",
        url: "https://www.agprocompanies.com/",
        logo: "agpro.png",
        tiny: true
    },
    {
        level: "bronze",
        name: "Teramore Development",
        url: "http://www.teramore.net/",
        logo: "teramore.png",
        tiny: true
    },
    {
        level: "bronze",
        name: "Nutrien Ag Solutions",
        url: "https://www.nutrienagsolutions.com/",
        logo: "nutrien.png"
    },
    {
        level: "bronze",
        name: "Lanigan & Associates P.C.",
        url: "https://lanigancpa.com/",
        logo: "lanigan.svg"
    },

    {
        level: "bronze",
        name: "The Avenues\nReal Estate Partners",
        url: "http://theavenuesrealestate.com/",
        logo: "avenues.png"
    },
    {
        level: "bronze",
        name: "Potty Man\nPortable Toilet Rentals",
        url: "https://pottyman.net/",
        logo: "pottyman.png"
    },
    {
        level: "bronze",
        name: "TC Federal Bank",
        url: "https://www.tcfederal.com/",
        logo: "tcf.png"
    },
    {
        level: "bronze",
        name: "Thomasville National Bank\nTNB Financial",
        url: "https://tnbank.com/",
        logo: "tnbboth.png"
    },
    {
        level: "bronze",
        name: "Collins Pecan",
        url: "https://www.collinspecan.com/",
        logo: "collins.png"
    },
    {
        level: "bronze",
        name: "Performance Food Group",
        url: "http://www.pfgc.com/",
        logo: "pfg.png"
    },
    {
        level: "bronze",
        name: "Joey's Landscape and Lawn Care Services,\nLLC.",
        url: "http://www.joeyslandscape.com/",
        logo: "jlls.png"
    },
    {
        level: "bronze",
        name: "Network Technology Solutions",
        url: "https://ntsnetworks.com",
        logo: "nts.svg"
    },
    {
        level: "bronze",
        name: "Three Toms Tavern",
        url: "#",
        logo: ""
    },
    {
        level: "bronze",
        name: "The Orr Family",
        url: "#",
        logo: ""
    },
    {
        level: "bronze",
        name: "Ashlyn Williams",
        url: "#",
        logo: ""
    }
];

module.exports = data;