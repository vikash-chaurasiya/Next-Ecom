"use client"
import Craousel from '@/components/Craousel'
import ProductCraousel from '@/components/ProductCraousel'
import SubHeader from '@/components/SubHeader'



export default function Home(){

  return (
    <>
      <main>
        <SubHeader/>
        <Craousel/>
        <ProductCraousel/>
      </main>
    </>
  )
}
