import React, { Suspense } from 'react';


const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <div className='relative flex flex-col justify-center lg:items-center justify-start min-h-screen w-full'>
          {children}
      </div>
    </Suspense>

  )
}

export default HomeLayout