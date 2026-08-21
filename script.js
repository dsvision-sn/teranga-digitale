// Tarifs par personne / destination (en FCFA)
const prices = {
    'lac-rose': 20000,
    'goree': 15000,
    'madeleines': 20000,
    'saloum': 35000,
    'cuisine': 25000 // Ajout de l'Atelier Cuisine Thiébou Dieun
};

// Récupération des éléments HTML
const experienceSelect = document.getElementById('experienceSelect');
const personCountInput = document.getElementById('personCount');
const totalPriceDisplay = document.getElementById('totalPrice');
const bookingForm = document.getElementById('bookingForm');
const toast = document.getElementById('toast');

// Calcul et affichage du prix total
function updatePrice() {
    const selectedExperience = experienceSelect.value;
    const personCount = parseInt(personCountInput.value) || 1;

    if (selectedExperience && prices[selectedExperience]) {
        const total = prices[selectedExperience] * personCount;
        totalPriceDisplay.textContent = total.toLocaleString('fr-FR') + " FCFA";
    } else {
        totalPriceDisplay.textContent = "0 FCFA";
    }
}

// Écouteurs d'événements pour le calcul dynamique du prix
experienceSelect.addEventListener('change', updatePrice);
personCountInput.addEventListener('input', updatePrice);

// Gestion de la soumission du formulaire
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    toast.className = "toast show";

    this.reset();
    totalPriceDisplay.textContent = "0 FCFA";

    setTimeout(function() {
        toast.className = toast.className.replace("toast show", "toast");
    }, 3000);
});

// Gestion des Filtres par Catégorie
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.cards-container .card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (filterValue === 'all' || filterValue === cardCategory) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});

// Mode Sombre / Mode Clair
const themeToggleBtn = document.getElementById('themeToggle');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggleBtn.textContent = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    let theme = 'light';
    if (document.body.classList.contains('dark-theme')) {
        theme = 'dark';
        themeToggleBtn.textContent = '☀️';
    } else {
        themeToggleBtn.textContent = '🌙';
    }

    localStorage.setItem('theme', theme);
});
