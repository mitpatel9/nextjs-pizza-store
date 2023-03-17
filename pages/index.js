import Featured from '@/component/Featured'
import PizzaList from '@/component/PizzaList'
import axios from 'axios'
import Head from 'next/head'


export default function Home({allpizzalist}) {

  return (
    <>
    <Head>
      <title>Pizza House</title>
      <meta name='desc' content='created by mit patel'></meta>
      <link rel='icon' href='https://papaspizzacompany.com/wp-content/uploads/2016/08/product-8.png'/>
    </Head>
    <Featured/>
    <PizzaList allpizzalist={allpizzalist}/>
    </>
    
  )
}
//get all pizza
export async function getServerSideProps() {
  const res= await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      allpizzalist: res.data
    }, // will be passed to the page component as props
  }
}