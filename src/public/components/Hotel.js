class Hotel extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'imgSrc'];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        const hotelName = this.getAttribute('name');
        const imgSrc = this.getAttribute('imgSrc');
        this.innerHTML = `
        <div class="hotel">
            <img src="${imgSrc}" alt="hotel" />
            <div class="hotel-info">
                <a href="https://www.hotelkilton.com.ar/">${hotelName}</a>
                <p>Descripción del hotel. Ubicación. Puntaje.</p>
            </div>
        </div>;
    `
    }
}

customElements.define("hotel-component", Hotel);