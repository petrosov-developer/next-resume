export interface INavItem {
  label: string
  subLabel?: string
  children?: Array<INavItem>
  href?: string
}

export const navbarTitle = "Matthew Bevan"
export const rainbowMeLink = "https://rainbow.me/valerii.eth"
export const twitterLink = "https://twitter.com/0xvalerii"
export const githubLink = "https://github.com/valerii"
export const linkedInLink = "https://www.linkedin.com/in/valerii/"

export const navItems: Array<INavItem> = [
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Development Blog",
    href: "/blog",
  },
]
