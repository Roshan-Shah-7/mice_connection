type NavLink = {
    label: string;
    href: string;
    hasDropdown?: boolean;
};

export const navLinksLeft: NavLink[] = [
    { label: "About Nepal", href: "/about-nepal" },
    { label: "Tour Packages", href: "/tour-packages" },
    { label: "Events", href: "/events" },
    { label: "Our Services", href: "#", hasDropdown: true },
];

export const navLinksRight: NavLink[] = [
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact" },
];

export const servicesLinks = [
    { label: "Meetings", href: "/services/meetings" },
    { label: "Incentives", href: "/services/incentives" },
    { label: "Conferences", href: "/services/conferences" },
    { label: "Exhibitions", href: "/services/exhibitions" },
];
