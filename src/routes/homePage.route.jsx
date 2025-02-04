import React from 'react'
import Hero from '../components/home/hero/Hero'
import Views from '../components/home/views/Views'
import Articles from '../components/home/articles/Articles'
import UseCases from '../components/home/use-cases/UseCases'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <Views />
        <Articles />
        <UseCases />
    </div>
  )
}

export default HomePage
