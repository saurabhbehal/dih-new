'use client'
import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import Box from '@mui/material/Box'
import { pagesData } from './pagesData'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import DesignCard from './designCard'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}
interface DesignItem {
  designId: string; heading: string; size: string; image: string; 
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div >
          <div>{children}</div>
          {/* <Typography>{children}</Typography> */}
        </div>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
interface TabsProps {
  id: number
}

export default function BasicTabs({ id }: TabsProps) {
  const [mounted, setMounted] = useState(false)
  const [value, setValue] = useState(id)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }



  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
        >
          {pagesData.map((page, index) => (
            <Link
              key={page.id}
              href={`/types-of-modular-kitchens/${page.slug}`}
              scroll={false}
            >
              <div style={{ whiteSpace: 'nowrap', width: 'max-content' }}>
                <Tab label={page.name} {...a11yProps(index)} />
              </div>
            </Link>
          ))}
        </Tabs>
      </Box>
      {pagesData.map((page, index) => (
        <CustomTabPanel key={page.id} value={value} index={index} >
          <div className="flex items-center p-4">
            <div className="w-1 h-8 rounded bg-green-500 mr-2"></div>
            <h1 className="text-3xl font-bold">{page.heading}</h1>
          </div>
          <p className="text-gray-700 text-sm px-7">{page.desc}</p>
          <div className="flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 mt-16">
              {Array.isArray(page.items) &&
                (page.items as DesignItem[]).map((design) => (
                  <DesignCard key={design.designId} data={design} />
                ))}

            </div>
          </div>
        </CustomTabPanel>
      ))}
    </Box>
  )

}
