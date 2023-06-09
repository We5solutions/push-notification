const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: 'mdi:home-outline',
      
    },
    
    {
      title: 'Messages',
      icon: 'mdi:email-outline',
      path: '/apps/email'
    },
    {
      title: 'Audience',
      icon: 'mdi:message-outline',
      path: '/apps/chat'
    },
    {
      title: 'Delivery',
      icon: 'mdi:calendar-blank-outline',
      path: '/apps/calendar'
    },
    {
      title: 'Settings',
      icon: 'mdi:file-document-outline',
      path: '/apps/calendar'
    }
    
  ]
}

export default navigation
