export type NavbarEntryType = {
  label: string;
  link: string;
};

export type NavbarEntriesType = Array<NavbarEntryType>;
export const NavbarEntries = [
  { label: "Home", link: "/" },
  { label: "Works", link: "/" },
  { label: "About", link: "/" },
  { label: "Projects", link: "/" },
  { label: "Services", link: "/" },
];
