// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CardStatisticsCharacter from 'src/@core/components/card-statistics/card-stats-with-image'
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import CrmTotalSales from 'src/views/dashboards/crm/CrmTotalSales'
import CrmWeeklySales from 'src/views/dashboards/crm/CrmWeeklySales'
import CrmTotalGrowth from 'src/views/dashboards/crm/CrmTotalGrowth'
import CrmUpgradePlan from 'src/views/dashboards/crm/CrmUpgradePlan'
import CrmTransactions from 'src/views/dashboards/crm/CrmTransactions'
import CrmRevenueReport from 'src/views/dashboards/crm/CrmRevenueReport'
import CrmSalesOverview from 'src/views/dashboards/crm/CrmSalesOverview'
import CrmMeetingSchedule from 'src/views/dashboards/crm/CrmMeetingSchedule'
import CrmDeveloperMeetup from 'src/views/dashboards/crm/CrmDeveloperMeetup'
import CrmActivityTimeline from 'src/views/dashboards/crm/CrmActivityTimeline'
import ApexLineChart from 'src/views/charts/apex-charts/ApexLineChart'
import ApexAreaChart from 'src/views/charts/apex-charts/ApexAreaChart'

const data = [
  {
    stats: '13.7k',
    title: 'Ratings',
    trendNumber: '+38%',
    chipColor: 'primary',
    chipText: 'Year of 2022',
    src: '/images/cards/pose_f9.png'
  },
  {
    stats: '24.5k',
    trend: 'negative',
    title: 'Sessions',
    trendNumber: '-22%',
    chipText: 'Last Week',
    chipColor: 'secondary',
    src: '/images/cards/pose_m18.png'
  }
]

const CRMDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
       
        <Grid item xs={12} md={12}>
          <CrmTransactions />
        </Grid>
        <Grid item xs={12} md={12}>
    <ApexLineChart />
    </Grid>
    <Grid item xs={12} md={12}>

    <ApexAreaChart />
 
    </Grid>
        
      </Grid>
    </ApexChartWrapper>
  )
}

export default CRMDashboard
