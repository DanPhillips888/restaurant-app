import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'
// import styles from '../styles/Home.module.css'

export default function Home() {
    const restaurants = [
        {name:"WoodsHill"},
        {name:"Fiorellas"},
        {name:"Karma"}
    ]
  return (
      <div>
    <h1>Restaurant Index Top Page</h1>
    {restaurants.map( item => {
       return ( <>
       <div> 
           <Link as={"/restaurants/"+item.name} href="restaurants/[restaurants]">
               <a>{item.name}</a>
           </Link>
       </div>
       </>)
    })}
    <br/>
      <div> 
        <Link href="/contact">
            <a>Contacts</a>
        </Link>
      </div>
    <br/>
      <div> 
        <Link href="/privacy">
            <a>Privacy Policy</a>
        </Link>
      </div>
    </div>
  )
}