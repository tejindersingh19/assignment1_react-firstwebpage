import Navitems from "./Navitems";



function Header(){
    return (
        <>
  {/* Header and Top NavBAR */}
  <header>
    <h1>Tejinder Singh</h1>
    <nav>
      <Navitems props={{title: `Home`,link:`/`}}/>
      <Navitems props={{title: `About`,link:`/about`}}/>
      <Navitems props={{title: `Skills`,link:`/skills`}}/>
      <Navitems props={{title: `Qualifications`,link:`/quali`}}/>
      <Navitems props={{title: `Projects`,link:`/projects`}}/>
      
    </nav>
  </header>
</>

    );
}

export default Header;