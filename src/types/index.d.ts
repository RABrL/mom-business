import Icons from '@/components/ui/Icons'

type IconsType = keyof typeof Icons
export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: IconsType
  label?: string
  description?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type SidebarNavItem = {
  section?: string
  items: NavItemWithChildren[]
}