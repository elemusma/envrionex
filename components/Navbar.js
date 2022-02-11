import SocialLinks from './SocialLinks'
import Link from 'next/link'
import Image from 'next/image'
import NavbarStyles from '../styles/Navbar.module.css'

function Navbar() {
return (
<>
<div className="secondary-navbar bg-accent-blue pt-1 pb-1 text-white">
<div className="container">
<div className="row">
<div className="col-6">
<SocialLinks />
</div>
<div className="col-6 text-end">
<p className="mb-0">Service Calls: <Link href="tel:+1484.320.8608"><a className="text-white">484.320.8608</a></Link></p>
</div>
</div>
</div>
</div>
<header className={`position-relative`}>

<div className="position-absolute w-100 h-100">
<Image
src="/images/Excellence-highest-level.jpg"
alt="Picture of the author"
//   width={"100%"}
//   height={"100%"}
layout="fill"
className={`img-hero-background ${NavbarStyles.imgHeroBg}`}
/>
</div>
<div className="position-absolute w-100 h-100" style={{top:"0",left:"0",background:"rgb(255,255,255)",
background:"radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(15,40,73,1) 100%)"}}></div>
<div className="position-absolute" style={{top:"0",right:"0"}}>
<Image
src="/images/Celebrating-30-years.png"
alt="Picture of the author"
width={255}
height={255}
className="img-celebrating"
/>
</div>

<div className="nav position-relative pt-5 pb-5">
<div className="container">
<div className="row align-items-center">
<div className="col-md-3 col-6">
<Image
src="/images/Logo-Environex.png"
alt="Environex logo"
width={483}
height={130}
//   layout="fill"
className="logo w-100 h-auto"
/>
</div>
<div className="col-md-9">
<ul className={`list-unstyled d-flex mb-0 position-relative text-white`}>
<li><Link href="/services/"><a className='text-white'>Services</a></Link><span className='text-accent bold px-3'>|</span></li>
<li><Link href="/projects/"><a className='text-white'>Projects</a></Link><span className='text-accent bold px-3'>|</span></li>
<li><Link href="/about/"><a className='text-white'>Who We Are</a></Link><span className='text-accent bold px-3'>|</span></li>
<li><Link href="/insights/"><a className='text-white'>Insights</a></Link><span className='text-accent bold px-3'>|</span></li>
<li><Link href="/contact/"><a className='text-white'>Contact</a></Link></li>
</ul>

</div>
</div>
</div>
</div>

<div className="hero position-relative text-white" style={{paddingTop:"100px",paddingBottom:"200px"}}>
<div className="container">
<div className="row justify-content-end">
<div className="col-md-6">
<h1>EXCELLENCE<br></br>AT THE HIGHEST LEVEL</h1>
<div className="divider"></div>
<div className="row">
    <div className="col-md-9">
<p>Trusted, Reliable &amp; Always Improving, These Are The Difference Makers That Allow Us To Provide Valuable Consistent Service To You.</p>
    </div>
</div>
</div>
</div>
</div>
</div>

</header>
</>
);
}

export default Navbar;
