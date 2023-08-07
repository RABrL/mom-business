import { SidebarNavItem } from '@/types'

export interface DashboardConfig {
  sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      section: 'Inventario',
      items: [
        {
          title: 'Inventario',
          href: '/inventory',
          icon: 'inventary',
          items: []
        },
        {
          title: 'Ventas',
          href: '/sales',
          icon: 'trending-up',
          items: []
        },
        {
          title: 'Gastos',
          href: '/expenses',
          icon: 'trending-down',
          items: []
        }
      ]
    }
  ]
}
