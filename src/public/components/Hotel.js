class Hotel extends HTMLElement {
    static get observedAttributes() {
        return ["name", "imgSrc"];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        const hotelName = this.getAttribute("name");
        const imgSrc = this.getAttribute("imgSrc");
        this.innerHTML = /*html*/ `
        <link rel="stylesheet" href="./css/Hotel.css" />
        <div class="hotel">
            <div class="image-container">
                <img src="${imgSrc}" alt="hotel" />
                <button class="image-button left"><</button>
                <button class="image-button right">></button>
            </div>
            <div class="hotel-info">
                <div style="display: flex; align-items: flex-end; justify-content: center; gap: 6rem;">
                     <a href="https://www.hotelkilton.com.ar/">${hotelName}</a>
                     <span>✭ 4.50</span>
                </div>
                <p style="margin: 0.25rem; margin-top: 1rem;">Descripción del hotel. Ubicación. Amenities.</p>
            </div>
        </div>;
    `;
    }
}

customElements.define("hotel-component", Hotel);
