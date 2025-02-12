import NextTopLoader from 'nextjs-toploader'
import React from 'react'

export default function TopLoader() {
  return (
    <>
        <NextTopLoader
            color="#4F46E5"
            initialPosition={0.08}
            crawlSpeed={200}    
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #ea8df7,0 0 5px #ea8df7"
        />
    </>
  )
}