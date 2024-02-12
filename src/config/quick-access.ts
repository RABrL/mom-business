import Icons from '@/components/ui/Icons'

export const QUICK_ACCESS = [
  {
    icon: {
      Icon: Icons.trendingUp,
      background: 'dark:bg-green-900 bg-green-200',
      className: 'dark:text-green-400 text-green-500'
    },
    title: 'Registrar Venta',
    href: '/sales/new',
    hover: 'hover:bg-green-50 dark:hover:bg-green-900'
  },
  {
    icon: {
      Icon: Icons.trendingDown,
      background: 'dark:bg-red-900 bg-red-200',
      className: 'dark:text-red-400 text-red-500'
    },
    title: 'Registrar Gasto',
    href: '/expenses/new',
    hover: 'hover:bg-red-50 dark:hover:bg-red-900'
  },
  {
    icon: {
      Icon: Icons.inventory,
      background: 'dark:bg-blue-900 bg-blue-200',
      className: 'dark:fill-blue-400 fill-blue-500'
    },
    title: 'Ver Inventario',
    href: '/inventory',
    hover: 'hover:bg-blue-50 dark:hover:bg-blue-900'
  }
]
