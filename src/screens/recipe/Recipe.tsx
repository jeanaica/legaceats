import { FC } from 'react'
import { Box } from '@mui/material'
import Banner from '../../components/Banner'

const Recipe: FC = () => (
  <Box className='pt-5 flex flex-col sm:flex-row-reverse justify-between'>
    <Banner />
  </Box>
)

export default Recipe
