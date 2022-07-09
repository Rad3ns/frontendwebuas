import Link from "next/link";
import Navbar from "../component/navbar";
import Head from "next/head";
import Footer from '../component/footer';
function Portfolio(props) {
    return (
    <>
    <Head>
      <title>Portfolio</title>
    </Head>
    <Navbar web={props.data.data[0].navbar.list}/> 

        <section className="hero">
            <div className="container">
                <div className="text-wrapper w-full">
                    <h1 className="title">Portfolio</h1>
                    <p className="description">
                   Raden Dewa Riski RAMADHANI
                   STIKOM PGRI Banyuwangi / Teknik Informatika
                   Soo Hiking
                    </p>

                <div className="portfolio-wrapper">
                    <div className="portfolio-item">
                        <img src="/assets/image/foto 1.jpg" className="portfolio-image" />

                        <h4 className="portfolio-name">Traveler</h4>
                        <div className="portfolio-category">PANTAI</div>
                    </div>

                    <div className="portfolio-item">
                        <img src="/assets/image/foto 2.JPG" className="portfolio-image" />

                        <h4 className="portfolio-name">Gunung</h4>
                        <div className="portfolio-category">SOLO HIKING</div>
                    </div>
                </div>
             </div>
            </div>
        </section>
        <Footer datafoot={props.data.data[0].footer}/>
    </>
    );
}

export default Portfolio;
export async function getServerSideProps() {
    const response = await  fetch('https://backendreactjs.herokuapp.com/')
    const data = await response.json()
  
  
    return {
      props: {data}, // will be passed to the page component as props
    }
  }