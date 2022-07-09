import Link from 'next/link';
import { useRouter } from 'next/router'
function Navbar(props){
  const router = useRouter()

    return(
        <nav className='navbar'>
        <div className='container'>
          <Link href="/"><a className='logo'>RADEN</a></Link>
  
          <ul className='nav-links'>
            {props.web.map((nav,index)=>{
return (  <li key={index}><Link href={nav.link} ><a className={`nav-item ${router.pathname == nav.link ? 'active' : ''}`} >{nav.nama}</a></Link></li>)
            })}
          </ul>
          </div>
        </nav>
    )
}

export default Navbar;
