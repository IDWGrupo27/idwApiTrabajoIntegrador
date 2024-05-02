class IdwFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = /*html*/ `
        <link rel="stylesheet" href="./css/IdwFooter.css" />
        <footer>
            <div class="footer">
                <p>&copy; IDW 2024. Todos los derechos resevados.</p>
                <div>
                    <a href="https://www.hotelkilton.com.ar/">Contacto</a> |
                    <a href="https://www.hotelkilton.com.ar/"
                        >Información institucional</a
                    >
                    |
                    <a href="https://www.hotelkilton.com.ar/">Privacidad</a>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define("idw-footer", IdwFooter);
