export type Author = {
    [author: string]: {
        name: string
        img: string
        bio: string
        links: {
            website?: string
            facebook?: string
            twitter?: string
            instagram?: string
            pinterest?: string
        }
    }
}

const authorsObject: Author = {
    Penci: {
        name: 'Penci',
        img: '/images/authors/penci-avatar.png',
        bio: "Hey there. My name is Penci. I was born with the love for traveling. I also love taking photos with my phone in order to capture moments in my life. It's my pleasure to have you here.",
        links: {
            website: "http://pencidesign.com/",
            facebook: "https://facebook.com/pencidesign",
            twitter: "https://twitter.com/pencidesign",
            instagram: "https://instagram.com/pencidesign",
            pinterest: "https://pinterest.com/pencidesign",
        }
    },
}

export default authorsObject