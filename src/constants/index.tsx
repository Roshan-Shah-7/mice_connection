export type NavLink = {
    label: string;
    href: string;
    hasDropdown?: boolean;
    subLinks?: NavLink[];
};

export type ServiceLink = {
    label: string;
    href: string;
};

export const navLinksLeft: NavLink[] = [
    { label: "About Nepal", href: "/about-nepal" },
    { label: "Tour Packages", href: "/tour-packages" },
    {
        label: "Highlights",
        href: "#",
        hasDropdown: true,
        subLinks: [
            { label: "Managed Experiences", href: "/managed-experiences" },
            { label: "Our Presence", href: "/our-presence" },
        ],
    },
    { label: "Our Services", href: "#", hasDropdown: true },
];

export const navLinksRight: NavLink[] = [
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact" },
];

export const servicesLinks: ServiceLink[] = [
    { label: "Tours and Travels", href: "/tours-&-travels" },
    { label: "Meetings", href: "/meetings" },
    { label: "Incentives", href: "/incentives" },
    { label: "Conferences", href: "/conferences" },
    { label: "Exhibitions", href: "/exhibitions" },
];
