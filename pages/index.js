import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
function Home(props){
  console.log(props)
  return(
    <>
    <Head>
      <title>Home</title>
    </Head>
    <Navbar web={props.data.data[0].navbar.list}/> 

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Halo gess, Saya {props.data.data[0].header.title}</h1>
            <p className="description">{props.data.data[0].header.subtitle}</p>

          <Link href="/contact"><a className="cta">{props.data.data[0].header.button}</a></Link>
          </div>
          <div className='image-wrapper'>
            <img src={props.data.data[0].header.image} />
          </div>
        </div>
      </section> 
    <Footer datafoot={props.data.data[0].footer}/>
    </>
  );
}

export default Home;
export async function getServerSideProps() {
  const response = await  fetch('https://backendreactjs.herokuapp.com/')
  const data = await response.json()


  return {
    props: {data}, // will be passed to the page component as props
  }
}