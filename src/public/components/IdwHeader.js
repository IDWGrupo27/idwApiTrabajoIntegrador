class IdwHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = /*html*/ `
        <link rel="stylesheet" href="./css/IdwHeader.css" />
        <header>
            <div>
                <a href="./index.html">
                    <div class="logo">
                        <img
                        src="../img/logo.png"
                        alt="IDW alojamiento"
                        height="40"
                    />
                    <h3>IDW alojamiento</h3>
                </div>
                </a>
            </div>

            <div class="header-menu">
                <a class="menu-item" href="./informacionInstitucional.html">
                    <span>Mi reserva</span>
                </a>
                <a class="menu-item" href="./contacto.html">
                    <span>Contacto</span>
                </a>
                <a class="menu-item" href="./informacionInstitucional.html">
                    <span>Información</span>
                </a>
            </div>

            <div class="phone-number">
                <span>Para venta telefónica</span>
                <span class="number">0800-999-1234</span>
            </div>
        </header>
    `;
    }
}

customElements.define("idw-header", IdwHeader);
