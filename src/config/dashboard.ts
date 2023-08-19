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
          icon: 'inventory',
          items: []
        },
        {
          title: 'Ventas',
          href: '/sales',
          icon: 'trendingUp',
          items: []
        },
        {
          title: 'Gastos',
          href: '/expenses',
          icon: 'trendingDown',
          items: []
        }
      ]
    }
  ]
}
