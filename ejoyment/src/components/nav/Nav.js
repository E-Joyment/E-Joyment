import {overviewData} from "../../assets/overviewdata.js";
import './Nav.css';
export default function NavBar() {

  const navBar = {};
  overviewData.all.map((product) => {
    if (navBar[product['category']]) {
      navBar[product['category']].push({'id': product['id'], 'name': product['name']});
    } else {
      navBar[product['category']] = [{'id': product['id'], 'name': product['name']}];
    }
  })
  // console.log("navBar",navBar);
  return (
    <section>
      <div className="Navbar">
        <div className="menusContainer">
          <div className="logo">
            <div className="logoA">A</div>
          </div>
          <div className="menusCat" id="menubar">
            <div className="menusName">Kicks</div>
            <div className="menusDropdown" id="menulist">{navBar['Kicks'].map((product)=><div className="menusList">{product['name']}</div>)}</div>
          </div>
          <div className="menusCat" id="menubar">
            <div  className="menusName">Jackets</div>
            <div className="menusDropdown" id="menulist">{navBar['Jackets'].map((product)=><div className="menusList">{product['name']}</div>)}</div>
          </div>
          <div className="menusCat" id="menubar">
            <div className="menusName">Pants</div>
            <div className="menusDropdown" id="menulist">{navBar['Pants'].map((product)=><div className="menusList">{product['name']}</div>)}</div>
          </div>
          <div className="menusCat" id="menubar">
            <div className="menusName">Accessories</div>
            <div className="menusDropdown" id="menulist">{navBar['Accessories'].map((product)=><div className="menusList">{product['name']}</div>)}</div>
          </div>
        </div>
        <div className="iconsContainer">
          <div className="iconInd"><span class="material-symbols-outlined" id="topRightIcon">search</span>Search</div>
          <div className="iconInd"><span class="material-symbols-outlined" id="topRightIcon">favorite</span>Wishlist</div>
          <div className="iconInd"><span class="material-symbols-outlined" id="topRightIcon">local_mall</span>Bag</div>
          <div className="iconInd"><span class="material-symbols-outlined" id="topRightIcon">account_circle</span>Account</div>
        </div>
      </div>
    </section>
  );
}

