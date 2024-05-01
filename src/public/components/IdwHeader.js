class IdwHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = /*html*/ `
        <link rel="stylesheet" href="./css/IdwHeader.css" />
        <header>
            <div class="logo">
                <a href="https://www.airbnb.com.ar/"
                    ><img
                        src="./img/logo.png"
                        alt="IDW alojamiento"
                        height="40"
                /></a>
                <h2>IDW alojamiento</h2>
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
