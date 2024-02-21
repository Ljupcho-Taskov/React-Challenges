import logo from "../logo.png";

const Header = () => {
  return (
    <div className="row pt-5">
      <div className="col py-3">
        <nav>
          <img src={logo} alt="" className="img-fluid active" id="showAll" />
          <div>
            <a href="">home</a>
            <a href="">bikes</a>
            <a href="">gear</a>
            <a href="">parts</a>
            <a href="">tires</a>
            <a href="">service-info</a>
            <a href="">catalogues</a>
            <a href="">contact</a>
          </div>
          <div>
            <i className="fas fa-search"></i>
            <i className="fas fa-shopping-bag"></i>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
