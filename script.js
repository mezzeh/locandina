document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('inventory-container');

    // Funzione per recuperare i dati dal file JSON
    async function loadInventory() {
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error('Errore nel caricamento dei dati');
            }
            const data = await response.json();
            renderInventory(data);
        } catch (error) {
            container.innerHTML = '<p>Impossibile caricare l\'inventario al momento.</p>';
            console.error(error);
        }
    }

    // Funzione per renderizzare le card HTML
    function renderInventory(items) {
        container.innerHTML = ''; // Pulisce il contenitore

        items.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            // Applica la classe 'sold' se non è disponibile
            if (!item.disponibile) {
                card.classList.add('sold');
            }

            // Costruisce l'HTML interno della card
            let cardHTML = `
                <h3>${item.modello}</h3>
                <p><strong>Firmware:</strong> ${item.versione_fw}</p>
                <p><strong>Storage:</strong> ${item.storage}</p>
                <p>${item.note}</p>
                <p class="prezzo">${item.prezzo}</p>
            `;

            // Aggiunge il badge se venduta
            if (!item.disponibile) {
                cardHTML += `<div class="badge-sold">VENDUTA</div>`;
            }

            card.innerHTML = cardHTML;
            container.appendChild(card);
        });
    }

    loadInventory();
});
// Gestione dello slider orizzontale
const gallery = document.getElementById('imageGallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Definisci di quanto deve scorrere al click (es. 300px)
const scrollAmount = 320;

nextBtn.addEventListener('click', () => {
    gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});