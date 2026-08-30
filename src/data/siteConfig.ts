export const siteConfig = {
  name: 'CÓNDOR Joyería & Relojería',
  shortName: 'CÓNDOR',
  slogan: 'Elegancia, precisión y tradición.',
  description: 'Joyería y relojería CÓNDOR en Lima. Venta de joyas, relojes de alta gama y taller especializado de mantenimiento y reparación. Tradición desde 1943.',
  since: 1943,
  
  contact: {
    phone: '991 656 962',
    phoneDisplay: '+51 991 656 962',
    whatsapp: '51991656962',
    whatsappDefaultMessage: 'Hola, quisiera más información sobre sus servicios y productos.',
    address: 'Tnda. 113 y Módulo Cóndor, Galería Boza, Jr. de la Unión 853, Lima 15001',
    addressShort: 'Galería Boza, Jr. de la Unión 853, Tienda 113, Cercado de Lima',
    schedule: 'Lun. – Sáb. 10:30 – 19:30 · Dom. Cerrado',
    geo: {
      lat: -12.0509,
      lng: -77.0337,
    },
    mapsQuery: 'Joyería y Relojería Condor, Galería Boza, Jr. de la Unión 853, Lima 15001',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Condor+Joyeria+Relojeria+Jiron+de+la+Union+Lima',
  },

  social: {
    facebook: 'https://www.facebook.com/condorjoyeriarelojeria',
    instagram: '', // Agregar cuando tengan
    tiktok: '',    // Agregar cuando tengan
  },

  products: [
    {
      id: 'reloj-1',
      name: 'Cronógrafo Meridian',
      category: 'Relojes',
      price: 'S/ 3,200',
      img: '/images/producto-reloj-1.jpg',
    },
    {
      id: 'reloj-2',
      name: 'Reloj Automático Andes',
      category: 'Relojes',
      price: 'S/ 1,850',
      img: '/images/producto-reloj-2.jpg',
    },
    {
      id: 'joya-1',
      name: 'Anillo Solitario Oro 18k',
      category: 'Joyería',
      price: 'S/ 2,400',
      img: '/images/producto-joya-1.jpg',
    },
    {
      id: 'joya-2',
      name: 'Cadena Cordón Italiano',
      category: 'Joyería',
      price: 'S/ 980',
      img: '/images/producto-joya-2.jpg',
    },
  ],

  services: [
    'Cambio de batería con sellado hermético',
    'Ajuste y cambio de correas (acero, cuero, caucho)',
    'Mantenimiento mecánico y calibración',
    'Reparación general y sustitución de cristales',
    'Diagnóstico técnico en tienda',
  ],
};
