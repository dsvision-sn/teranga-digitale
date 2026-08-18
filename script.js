// Tarifs par personne / prestation (en FCFA)
const prices = {
    circuit: 25000,
    cuisine: 15000,
    hebergement: 20000
};

// Récupération des éléments HTML
const experienceSelect = document.getElementById('experienceSelect');
const personCountInput = document.getElementById('personCount');
const totalPriceDisplay = document.getElementById('totalPrice');
const bookingForm = document.getElementById('bookingForm');
const toast = document.getElementById('toast');

// Fonction pour calculer et afficher le prix total
function updatePrice() {
    const selectedExperience = experienceSelect.value;
    const personCount = parseInt(personCountInput.value) || 1;

    if (selectedExperience && prices[selectedExperience]) {
        const total = prices[selectedExperience] * personCount;
        // Formatage du prix avec espaces (ex: 30 000 FCFA)
        totalPriceDisplay.textContent = total.toLocaleString('fr-FR') + " FCFA";
    } else {
        totalPriceDisplay.textContent = "0 FCFA";
    }
}

// Écouter les changements sur le sélecteur et le nombre de personnes
experienceSelect.addEventListener('change', updatePrice);
personCountInput.addEventListener('input', updatePrice);

// Gestion de la soumission du formulaire
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Afficher la notification Toast
    toast.className = "toast show";

    // Réinitialiser le formulaire et le prix
    this.reset();
    totalPriceDisplay.textContent = "0 FCFA";

    // Masquer le toast après 3 secondes
    setTimeout(function() {
        toast.className = toast.className.replace("toast show", "toast");
    }, 3000);
});