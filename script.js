// Attendre que la page soit entièrement chargée
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche le rechargement automatique de la page

        // Récupération des valeurs du formulaire
        const nom = form.querySelector('input[type="text"]').value;
        const experience = form.querySelector('select').options[form.querySelector('select').selectedIndex].text;

        // Message de confirmation dynamique
        alert(`Jërejëf (Merci) ${nom} ! Votre réservation pour "${experience}" a bien été prise en compte. Nous vous contacterons très vite.`);

        // Réinitialisation du formulaire
        form.reset();
    });
});