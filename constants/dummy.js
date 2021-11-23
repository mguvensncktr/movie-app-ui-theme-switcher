export const categories = [
    {
        id: 0,
        name: "Genre",
        icon: require('../assets/icons/genre-icon.png')
    },
    {
        id: 1,
        name: "Top IMDB",
        icon: require('../assets/icons/top-imdbs-icon.png')
    },
    {
        id: 2,
        name: "Language",
        icon: require('../assets/icons/language-icon.png')
    },
    {
        id: 3,
        name: "Watched",
        icon: require('../assets/icons/watched-icon.png')
    },
]

export const featured = [
    {
        id: 0,
        name: "Lucifer",
        image: require('../assets/images/lucifer/lucifer.png'),
        imageDetail: require('../assets/images/lucifer/lucifer-detail.png'),
        year: "2021",
        genre1: "Comedy",
        genre2: "Mystery",
        genre3: "Fictional",
        totalEpisode: "8",
        rate: 4.5,
        description: "The series revolves around the story of Lucifer Morningstar (Tom Ellis), the DC Universe's version of the Devil, who abandons Hell for Los Angeles where he runs his own nightclub named Lux and becomes a consultant to the Los Angeles Police Department (LAPD).",
        episodes: [
            {
                id: 0,
                name: "Episode - 1",
                description: "Nothing Ever Changes Around Here",
                image: require('../assets/images/lucifer/lucifer-1.png')
            },
            {
                id: 1,
                name: "Episode - 2",
                description: "Buckets of Baggage",
                image: require('../assets/images/lucifer/lucifer-2.png')
            },
            {
                id: 2,
                name: "Episode - 3",
                description: "Yabba Dabba Do Me",
                image: require('../assets/images/lucifer/lucifer-3.png')
            },
        ]
    },
    {
        id: 1,
        name: "Money Heist : Part 5",
        image: require('../assets/images/money-heist/money-heist.png'),
        imageDetail: require('../assets/images/money-heist/money-heist-detail.png'),
        year: "2021",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Drama",
        totalEpisode: "8",
        rate: 4,
        description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
        episodes: [
            {
                id: 0,
                name: "Episode - 1",
                description: "The End of the Road",
                image: require('../assets/images/money-heist/money-heist-1.png')
            },
            {
                id: 1,
                name: "Episode - 2",
                description: "Do You Believe in Reincarnation?",
                image: require('../assets/images/money-heist/money-heist-2.png')
            },
            {
                id: 2,
                name: "Episode - 3",
                description: "Welcome to the Show of Life",
                image: require('../assets/images/money-heist/money-heist-3.png')
            },
        ]
    },
    {
        id: 2,
        name: "Sex Education",
        image: require('../assets/images/sex-education/sex-education.png'),
        imageDetail: require('../assets/images/sex-education/sex-education-detail.png'),
        year: "2021",
        genre1: "Comedy",
        genre2: "Youth",
        genre3: "Drama",
        totalEpisode: "8",
        rate: 4,
        description: "Sex Education is a British comedy-drama streaming television series created by Laurie Nunn for Netflix. The series follows the lives of the students, staff and parents of the fictitious Moordale Secondary School as they contend with various personal dilemmas, often related to sexual intimacy. It features an ensemble cast that includes Asa Butterfield, Gillian Anderson, Ncuti Gatwa, Emma Mackey, Connor Swindells, Kedar Williams-Stirling, Alistair Petrie, Mimi Keene, and Aimee Lou Wood.",
        episodes: [
            {
                id: 0,
                name: "Episode - 1",
                description: "Episode 1",
                image: require('../assets/images/sex-education/sex-education-1.png')
            },
            {
                id: 1,
                name: "Episode - 2",
                description: "Episode 2",
                image: require('../assets/images/sex-education/sex-education-2.png')
            },
            {
                id: 2,
                name: "Episode - 3",
                description: "Episode 3",
                image: require('../assets/images/sex-education/sex-education-3.png')
            },
        ]
    }
]

const dummyData = { categories, featured };

export default dummyData;
