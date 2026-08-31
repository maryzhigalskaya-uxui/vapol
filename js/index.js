var burgerElement = document.querySelector('.burger');
if(burgerElement) {
    burgerElement.addEventListener('click', function() {
        this.classList.toggle("active");
        document.querySelector(".header_menu").classList.toggle("active");
        document.body.classList.toggle("lock");
    });

    const menuLinks = document.querySelectorAll('.header_menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            burgerElement.classList.remove("active");
            document.querySelector(".header_menu").classList.remove("active");
            document.body.classList.remove("lock");

            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

const translations = {
    pl: {
        header: {
            btn: "Dowiedz się więcej"
        },
        nav: {
            home: "Główna",
            about: "O nas",
            services: "Nasze usługi",
            contacts: "Łączność"
        },
        promo: {
            title: "Wszystko dla przemysłu — od dostawy po serwis.",
            btn: "Dowiedz się więcej"
        },
        about: {
            title: "O nas",
            description1: "Vapol Sp. z o.o. to firma działająca w obszarze rozwiązań przemysłowych oraz dostaw sprzętu dla przedsiębiorstw. Pomagamy firmom produkcyjnym utrzymywać stabilną i efektywną pracę, zapewniając dostęp do technologii, komponentów oraz wsparcia technicznego.",
            description2: "Dostarczamy urządzenia przemysłowe, części zamienne i komponenty, a także pomagamy przedsiębiorstwom znajdować optymalne rozwiązania dla ich procesów produkcyjnych. Nasze podejście opiera się na niezawodności dostaw, kompetencjach technicznych oraz długoterminowej współpracy.",
            description3: "Vapol to zaufany partner dla firm, którym zależy na stabilnym funkcjonowaniu produkcji oraz profesjonalnym wsparciu w zakresie urządzeń przemysłowych."
        },
        services: {
            title: "Nasze usługi",
            text1: "Dostawa urządzeń przemysłowych dla przedsiębiorstw i linii produkcyjnych",
            text2: "Dostawa komponentów i części zamiennych do urządzeń przemysłowych",
            text3: "Dobór urządzeń dopasowanych do potrzeb produkcji",
            text4: "Wsparcie techniczne i doradztwo w zakresie rozwiązań przemysłowych",
            text5: "Serwis i obsługa urządzeń przemysłowych",
            text6: "Wsparcie i optymalizacja procesów produkcyjnych",
            text7: "Kompleksowe dostawy sprzętu i komponentów dla przedsiębiorstw",
            text8: "Wsparcie serwisowe i opieka techniczna nad urządzeniami"
        },
        contacts: {
            title: "Łączność",
            text1: "Email: post.vapol@gmail.com",
            text2: "Telegram: +48 513 377 651",
            text3: "WhatsApp: +48 513 377 651",
            text4: "Godziny otwarcia: 8:00 - 16:00"
        },
        form: {
            question: "Masz pytania lub chcesz zamówić usługę?",
            description: "Skorzystaj z danych kontaktowych lub złóż wniosek na stronie internetowej.",
            title: "Zostaw prośbę",
            namePlaceholder: "Twoje imię",
            emailPlaceholder: "Twoja poczta",
            phonePlaceholder: "Twój numer telefonu",
            servicePlaceholder: "Jakiej usługi potrzebujesz?"
        },
        submit: {
            btn: "Wysłać"
        },
        footer: {
            contactNumber: "+48 513 377 651",
            privacy: "Polityka prywatności",
            terms: "Umowa użytkownika",
            dataProcessing: "Przetwarzanie danych osobowych"
        },
        contact: {
            label: "Numer kontaktowy"
        },
        legal: {
            name: "VAPOL spółka z ograniczoną odpowiedzialnością",
            email: "Email: post.vapol@gmail.com",
            address: "ul. Legionowa 10/208  15-099 Bialystok, Polska",
            copyright: "© 2022 VAPOL sp. z o.o."
        },
        modal: {
            applicationTitle: "Zostaw prośbę",
            namePlaceholder: "Twoje imię",
            emailPlaceholder: "Twoja poczta",
            phonePlaceholder: "Twój numer telefonu",
            descriptionPlaceholder: "Jakiej usługi potrzebujesz?",
            submit: "Wysłać"
        }
    },
    en: {
        header: {
            btn: "Learn more"
        },
        nav: {
            home: "Home",
            about: "About",
            services: "Our services",
            contacts: "Contacts"
        },
        promo: {
            title: "Everything for industry – from delivery to service.",
            btn: "Learn more"
        },
        about: {
            title: "About us",
            description1: "Vapol Sp. z o.o. is a company operating in the field of industrial solutions and equipment supply for enterprises. We help manufacturing companies maintain stable and efficient operations by providing access to technology, components, and technical support.",
            description2: "We supply industrial equipment, spare parts, and components, and help companies find optimal solutions for their production processes. Our approach is based on reliable delivery, technical expertise, and long-term partnerships.",
            description3: "Vapol is a trusted partner for companies that care about stable production and professional support for industrial equipment."
        },
        services: {
            title: "Our services",
            text1: "Supply of industrial equipment for enterprises and production lines",
            text2: "Supply of components and spare parts for industrial equipment",
            text3: "Selection of equipment tailored to production needs",
            text4: "Technical support and consulting for industrial solutions",
            text5: "Service and maintenance of industrial equipment",
            text6: "Support and optimization of production processes",
            text7: "Comprehensive supplies of equipment and components for enterprises",
            text8: "Service support and technical care for devices"
        },
        contacts: {
            title: "Contacts",
            text1: "Email: post.vapol@gmail.com",
            text2: "Telegram: +48 513 377 651",
            text3: "WhatsApp: +48 513 377 651",
            text4: "Opening hours: 8:00 - 16:00"
        },
        form: {
            question: "Do you have questions or want to order a service?",
            description: "Use the contact details or submit a request on the website.",
            title: "Leave a request",
            namePlaceholder: "Your name",
            emailPlaceholder: "Your email",
            phonePlaceholder: "Your phone number",
            servicePlaceholder: "What service do you need?"
        },
        submit: {
            btn: "Send"
        },
        footer: {
            contactNumber: "+48 513 377 651",
            privacy: "Privacy policy",
            terms: "User agreement",
            dataProcessing: "Personal data processing"
        },
        contact: {
            label: "Contact number"
        },
        legal: {
            name: "VAPOL limited liability company",
            email: "Email: post.vapol@gmail.com",
            address: "Legionowa Street 10/208 15-099 Białystok, Poland",
            copyright: "© 2023 VAPOL sp. z o.o.",
        },
        modal: {
            applicationTitle: "Leave a request",
            namePlaceholder: "Your name",
            emailPlaceholder: "Your email",
            phonePlaceholder: "Your phone number",
            descriptionPlaceholder: "What service do you need?",
            submit: "Send"
        }
    }
};

let currentLanguage = 'pl';

const headerBTNButton = document.querySelector('.header_btn');
const applicationModal = document.getElementById('applicationModal');
const promoBTNButton = document.querySelector('.promo_btn');
const contactForm = document.getElementById('contactForm');
const applicationForm = document.getElementById('applicationForm');
const langButtons = document.querySelectorAll('.lang-btn');
const closeButtons = document.querySelectorAll('.close');

document.addEventListener('DOMContentLoaded', function() {
    updateLanguage();
    setupEventListeners();
});

function updateLanguage() {
    const t = translations[currentLanguage];

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        const value = getNestedValue(t, key);
        if (value) {
            element.textContent = value;
        }
    });

    document.querySelectorAll('[data-key-placeholder]').forEach(element => {
        const key = element.getAttribute('data-key-placeholder');
        const value = getNestedValue(t, key);
        if (value) {
            element.placeholder = value;
        }
    });

    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLanguage);
    });
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

function setupEventListeners() {

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentLanguage = button.getAttribute('data-lang');
            updateLanguage();
        });
    });

    headerBTNButton.addEventListener('click', () => {
        applicationModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    promoBTNButton.addEventListener('click', () => {
        applicationModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    window.addEventListener('click', (event) => {
        if (event.target === applicationModal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

function validateForm(data) {
    const requiredFields = ['name', 'email', 'phone', 'service'];
    
    for (let field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            alert(`Please fill in the ${field} field.`);
            return false;
        }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    return true;
}

function submitForm(data) {
    return new Promise((resolve, reject) => {

        const subject = encodeURIComponent('Nowa prośba z formularza kontaktowego');
        const body = encodeURIComponent(`
Imię: ${data.name}
Email: ${data.email}
Telefon: ${data.phone}
Usługa: ${data.service}
        `);
        
        const mailtoLink = `mailto:natawest23@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        setTimeout(() => {
            console.log('Form submitted:', data);
            resolve();
        }, 1000);
    });
}

function closeModal() {
    applicationModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}