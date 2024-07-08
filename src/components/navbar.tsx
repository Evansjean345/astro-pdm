const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0">
      <div className="container px-1">
        <a className="navbar-brand font-weight-bolder ms-lg-0 " href="">
          <img
            src="pdm-logo.png"
            alt=""
            style={{ width: "170px", height: "120px", marginTop: "10px" }}
          />
        </a>
        <button
          className="navbar-toggler shadow-none ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                aria-current="page"
                href="/astro-ecommerce/"
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 "
                aria-current="page"
                id="pagesExample"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                Se connecter
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesExample">
                {/* <li>
                  <a className="dropdown-item" href="/astro-ecommerce/landing/">
                    Landing Page
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/astro-ecommerce/product/">
                    Product Page
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/astro-ecommerce/shopping-cart/"
                  >
                    Shopping Cart
                  </a>
                </li>
                 */}
                <li>
                  <a className="dropdown-item" href="/astro-ecommerce/landing/">
                    Mon compte
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/astro-ecommerce/landing/">
                    Mes commandes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/astro-ecommerce/landing/">
                    Se deconnecter
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                aria-current="page"
                href="https://www.creative-tim.com/learning-lab/astro/overview/astro-ecommerce"
              >
                Bibliotheque
              </a>
            </li>
            {/*
             <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                aria-current="page"
                href="https://github.com/creativetimofficial/astro-ecommerce"
              >
                <i className="fab text-lg fa-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                aria-current="page"
                href="https://discord.com/invite/TGZqBvZB"
                rel="nofollow"
                target="_blank"
              >
                <i className="fab text-lg fa-discord"></i>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
