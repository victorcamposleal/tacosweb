// Translation resources for English and Spanish
const resources = {
    en: {
      translation: {
        title: "Watch video",
        description: "Original Tacos",
        button: "Click Me",
        menu_home:"Home",
        menu_servicios:"Services",
        menu_galeria:"Galley",
        menu_nosotros:"About Us",
        menu_contacto:"Contact",
        servicios_titulo:"Our services",
        servicios_subtitulo_1:"Options",
        servicios_subtitulo_2:"for your event",
        servicios_opcion_1:"Taquería",
        servicios_descripcion_1:"Taqueros, foodtruck, transport, taqueria experience",
              servicios_opcion_2:"Table",
        servicios_descripcion_2:"Taqueros, table set, authentic street food taco shop decoration.",
        reseñas_titulo:"CUSTOMERS",
        reseñas_subtitulo:"REVIEWS",
        Galeria_titulo:"Gallery",
        Galeria_subtitulo:"Creating",
        Galeria_subtitulo_2:"Experinces",
        about_titulo:"Us",
        about_subtitulo:"Our",
        about_subtitulo_2:"Team",
         about_subtitulo_3:"book for you event",
         contact_subtitulo:"conact",
         contact_subtitulo_2:"need more information?",
         contact_subtitulo_3:"contact Us",
         contact_subtitulo_4:"Adress",
         contact_subtitulo_5:"Phone",
         contact_subtitulo_6:"Email",
         contact_subtitulo_7:"Hours",
         contact_subtitulo_8:"Monday-Saturday",
         contact_subtitulo_9:"Sunday: cerrado",
         contact_subtitulo_10:"Send Message",

        
      }
    },
    es: {
      translation: {
        title: "Ver vidéo",
        description: "Auténticos tacos mexicanos",
        button: "Haz Clic",
        menu_home:"Home",
        menu_servicios:"Servicios",
        menu_galeria:"Galería",
        menu_nosotros:"Nosotros",
        menu_contacto:"Contacto",
        servicios_titulo:"Nuestros servicios",
        servicios_subtitulo_1:"Opciones",
        servicios_subtitulo_2:"para tu evento",
        servicios_opcion_1:"Taquería",
        servicios_descripcion_1:"Taqueros, foodtruck, transporte, experiencia de taquería",
              servicios_opcion_2:"Mesa",
        servicios_descripcion_2:"Taqueros, montaje mesa, decoración de auténtico puesto tacos.",
        reseñas_titulo:"CLIENTES",
        reseñas_subtitulo:"RESEÑAS",
        Galeria_titulo:"Galería",
        Galeria_subtitulo:"Creando",
        Galeria_subtitulo_2:"Experiencias",
        about_titulo:"Nosotros",
        about_subtitulo:"Nuestro",
        about_subtitulo_2:"Equipo",
         about_subtitulo_3:"Reserva para tu evento",
         contact_subtitulo:"conacto",
         contact_subtitulo_2:"¿Necesitas información?",
         contact_subtitulo_3:"contáctanos",
         contact_subtitulo_4:"Dirección",
         contact_subtitulo_5:"Teléfono",
         contact_subtitulo_6:"Email",
         contact_subtitulo_7:"Horario",
         contact_subtitulo_8:"Lunes-Sábado",
         contact_subtitulo_9:"Domingo: cerrado",
         contact_subtitulo_10:"Enviar Mensaje",



        


      }
    }
  };
  
  // Initialize i18next
  i18next.init({
    lng: "es", // Default language
    debug: true, // Debug mode for development
    resources: resources
  }, function(err, t) {
    // Initialize translations on page load
    updateContent();
  });
  
  // Function to update content based on selected language
  function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      element.innerText = i18next.t(key);
    });
  }
  
  // Function to change language based on dropdown selection
  function changeLanguage() {
    const selectedLanguage = document.getElementById("language").value;
    i18next.changeLanguage(selectedLanguage, updateContent);
  }
  