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
        reseñas_subtitulo_1:"Authentic and incredible Mexican food, prepared with professionalism and kindness. Perfect for weddings and events (in my case, the late-night snack). Highly recommended. My guests were very satisfied. Thank you, Víctor and Macarena!!!! Muak.",
        reseñas_subtitulo_2:"The most amazing tacos in all of northern Spain. If you want to experience true Mexican flavor, this is your place. The tacos and quesadillas are out of this world, and the sauces are from another dimension. These are the most authentic tacos I’ve had since my last trip to Mexico. A 10 for the food and top marks for the chefs!!!!",
        reseñas_subtitulo_3:"Very tasty tacos and excellent service. The food truck is beautiful, perfect for events.",
        reseñas_subtitulo_4:"100% Mexican tacos. Great atmosphere, great service, and very friendly.",
        reseñas_subtitulo_5:"I'm Mexican living in Cantabria, and I can vouch that the tacos are delicious! They also have Mexican beers, and the atmosphere in the food truck is super cozy. Macarena and Víctor prepare everything with quality ingredients but, most importantly, with love. They take care of you with so much warmth.",
        reseñas_subtitulo_6:"Spectacular. I had heard great things, and they did not disappoint. 100% recommended. The service was excellent. Everything is homemade and very tasty.",
        reseñas_subtitulo_7:"We enjoyed some delicious cochinita pibil tacos and al pastor tacos, both excellent. The taco tortillas were delicious, and the fillings were prepared with great detail. These tacos are made with care and passion, which is evident in every bite. Outstanding service—if you truly love authentic Mexican flavors, you must visit Tacos Norteños.",
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
        reseñas_subtitulo_1:"Auténtica e increíble comida mexicana, con profesionalidad y dulzura. Ideal para bodas y eventos (en mi caso la recena). Muy recomendable. Mis invitados quedaron muy satisfechos.Gracias Víctor y Macarena!!!! Muak",
        reseñas_subtitulo_2:"Los tacos mas brutales de todo el norte de España. si quieres vivir una verdadera experiencia mexicana, este es tu sitio. Los tacos y las quesadillas son una locura y la salsas de otra dimensión. Aquí encontrareis los tacos mas auténticos que he probado desde mi último viaje a México. Un 10 a la comida y una matrícula de honor a los Chefs !!!!",
        reseñas_subtitulo_3:"Tacos muy ricos y trato excelente. El camión es muy bonito, ideal para eventos.",
        reseñas_subtitulo_4:"Tacos 100% mexicanos. Buen ambiente, buen servicio y muy cercanos.",
        reseñas_subtitulo_5:"Soy mexicana viviendo en Cantabria y doy fe de que los tacos están riquisimos! Tienen tambien cervezas mexicanas y el ambiente en el foodtruck es super agusto. Macarena y Victor hacen toda la comida con ingredientes de calidad pero sobre todo con cariño, te atienden con mucho cariño",
        reseñas_subtitulo_6:"Espectaculares. Me habían hablado muy bien y no defraudan. 100% recomendables. Nos han atendido genial. Todo casero y muy rico",
        reseñas_subtitulo_7:"Hemos degustado unos muy deliciosos tacos de cochinita pibil y otros tacos al pastor, ambos excelentes. La tortilla de los tacos estaba muy rica y los guisos preparados con sumo detalle. Tacos elaborados con mucho esmero y gusto, se nota la pasión y el sentimiento que los dueños imprimen a su cocina. Atención inmejorable, si te gusta el sabor mexicano de verdad, el auténtico, debes visitar Tacos Norteños.",
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
  