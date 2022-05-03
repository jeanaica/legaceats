import { FC } from 'react'
import { Box, Typography } from '@mui/material'

type Props = {
  title?: string
}

const Banner: FC<Props> = ({ title = 'sample' }) => (
  <>
    <Box className='flex-1 flex justify-center mb-5 sm:mb-0'>
      <Typography variant='h3' component='h3'>
        {title}
      </Typography>
    </Box>
    <Box className='flex-1'>
      <img className='object-cover' alt='' src='image/Tofu Sisig.png' />
    </Box>
  </>
)

export default Banner
