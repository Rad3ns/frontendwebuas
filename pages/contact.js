import Link from "next/link";
import Navbar from "../component/navbar";
import Head from "next/head";
import Footer from '../component/footer';
function Contact(props) {
    return (
    <>
    <Head>
      <title>Contact</title>
    </Head>
    <Navbar web={props.data.data[0].navbar.list}/> 

        <section className="hero">
            <div className="container">
                <div className="text-wrapper profile">
                    <h1 className="title">Contact Person</h1>
                    <p className="description">
                  CARI AKU DI ?
                    </p>
                    <ul className="contact-links">
                        <li className="contact-item">Email: dewariskiramadhani2001@gmail.com</li>
                        <li className="contact-item">Phone : +6281558111201</li>
                        <li className="contact-item">Github: https://github.com/Rad3ns</li>
                    </ul>
            <img src="/assets/image/contact.svg" className="profile-image" />
                </div>
            </div>
        </section>
        <Footer datafoot={props.data.data[0].footer}/>
    </>
    );
}

export default Contact;
export async function getServerSideProps() {
    const response = await  fetch('https://backendreactjs.herokuapp.com/')
    const data = await response.json()
  
  
    return {
      props: {data}, // will be passed to the page component as props
    }
  }