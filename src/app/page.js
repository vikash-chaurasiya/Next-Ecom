"use client"
import Craousel from '@/components/Craousel'
import CategoryCarousel from '@/components/CategoryCraousel'
import SubHeader from '@/components/SubHeader'
import ProductCarousel from '@/components/ProductCarousel'



export default function Home(){

  return (
    <>
      <main className='bg-slate-200'>
        <SubHeader/>
        <Craousel/>
        <CategoryCarousel/>
        <ProductCarousel/>
      </main>
    </>
  )
}
