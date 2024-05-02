class IdwHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = /*html*/ `
        <link rel="stylesheet" href="./css/IdwHeader.css" />
        <header>
            <div>
                <a href="https://www.airbnb.com.ar/">
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
                <div class="menu-item">
                    <span>Mi reserva</span>
                </div>
                <div class="menu-item">
                    <span>Publicá tu propiedad</span>
                </div>
                <div class="menu-item">
                    <span>Ayuda</span>
                </div>
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
