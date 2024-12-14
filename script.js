// Functie om gegevens naar de Discord-webhook te sturen
async function sendToDiscord(formData, webhookUrl) {
    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `Nieuwe sollicitatie ontvangen:\n
            Karakter Naam in Game: ${formData.karakterNaam}\n
            Discord Naam: ${formData.discordNaam}\n
            Leeftijd: ${formData.leeftijd}\n
            Motivatie: ${formData.motivatie}\n
            Ervaring: ${formData.ervaring}\n
            VOG: ${formData.vog}`
        })
    });

    if (!response.ok) {
        alert('Er is iets misgegaan bij het versturen van je gegevens.');
    } else {
        alert('Je sollicitatie is succesvol verstuurd!');
    }
}

// Sollicitatieformulier verzenden
document.getElementById('sollicitatieForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        karakterNaam: event.target.karakterNaam.value,
        discordNaam: event.target.discordNaam.value,
        leeftijd: event.target.leeftijd.value,
        motivatie: event.target.motivatie.value,
        ervaring: event.target.ervaring.value,
        vog: event.target.vog.value
    };

    const webhookUrl = 'https://discordapp.com/api/webhooks/1317509001612627978/KRt5TTXiuG-4cIfykuEFBqIz0_nTPJs9w6shofk0racXjKzFCBUC2QCAHKckvOUm_26a'; // Vul je webhook URL in
    sendToDiscord(formData, webhookUrl);
});


// Toggle functie voor het mobiele menu
const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    navbarToggle.classList.toggle("active");
});




// Functie om gegevens naar de Discord-webhook te sturen
async function sendToDiscord(formData, webhookUrl) {
    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `Nieuwe aanvraag ontvangen:\n
            Naam: ${formData.naam}\n
            Soort aanvraag: ${formData.soortAanvraag}\n
            Omschrijving: ${formData.omschrijving}`
        })
    });

    if (!response.ok) {
        alert('Er is iets misgegaan bij het versturen van je aanvraag.');
    } else {
        alert('Je aanvraag is succesvol verstuurd!');
    }
}

// Aanvraagformulier verzenden
document.getElementById('aanvraagForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        naam: event.target.naam.value,
        email: event.target.email.value,
        soortAanvraag: event.target.soortAanvraag.value,
        omschrijving: event.target.omschrijving.value
    };

    const webhookUrl = 'https://discordapp.com/api/webhooks/1317509001612627978/KRt5TTXiuG-4cIfykuEFBqIz0_nTPJs9w6shofk0racXjKzFCBUC2QCAHKckvOUm_26a'; // Vul je webhook URL in
    sendToDiscord(formData, webhookUrl);
});


