const NOVAVOLT_DB_KEY = "novavolt_local_database_v1";

const NOVAVOLT_INITIAL_DATA = {
  empresa: {
    nombre: "NovaVolt Service",
    telefono: "+507 6000-0000",
    whatsapp: "50760000000",
    correo: "contacto@novavoltservice.demo",
    direccion: "Ciudad de Panama, Panama",
    garantiaDias: 90
  },

  usuarios: [
    {
      id: 1,
      nombre: "Administrador Demo",
      email: "admin@novavolt.demo",
      password: "admin123",
      rol: "admin",
      telefono: "+507 6000-0000",
      creadoEn: "2026-01-10"
    },
    {
      id: 2,
      nombre: "Cliente Demo",
      email: "cliente@novavolt.demo",
      password: "cliente123",
      rol: "cliente",
      telefono: "+507 6111-2222",
      creadoEn: "2026-02-18"
    }
  ],

  categorias: [
    {
      id: 1,
      nombre: "Repuestos para TV",
      slug: "repuestos-tv",
      descripcion: "Tarjetas, fuentes, backlight y componentes para televisores."
    },
    {
      id: 2,
      nombre: "Accesorios",
      slug: "accesorios",
      descripcion: "Controles, cables, soportes y adaptadores."
    },
    {
      id: 3,
      nombre: "Herramientas",
      slug: "herramientas",
      descripcion: "Herramientas de diagnóstico, soldadura y mantenimiento."
    }
  ],

  productos: [
    {
      id: 1,
      categoriaId: 1,
      nombre: "Main Board NV-55Q Pro",
      marca: "NovaPart",
      precio: 145.99,
      precioAnterior: 179.99,
      stock: 12,
      destacado: true,
      oferta: true,
      imagen: "assets/img/products/main-board.jpg",
      descripcion: "Tarjeta principal compatible con televisores Smart TV de 55 pulgadas.",
      garantia: "90 dias"
    },
    {
      id: 2,
      categoriaId: 1,
      nombre: "Fuente de poder LED 220W",
      marca: "VoltCore",
      precio: 89.5,
      precioAnterior: null,
      stock: 18,
      destacado: true,
      oferta: false,
      imagen: "assets/img/products/fuente-led.jpg",
      descripcion: "Fuente de poder estable para equipos LED de gama media.",
      garantia: "90 dias"
    },
    {
      id: 3,
      categoriaId: 2,
      nombre: "Control Smart Universal",
      marca: "LuxRemote",
      precio: 24.99,
      precioAnterior: 34.99,
      stock: 44,
      destacado: false,
      oferta: true,
      imagen: "assets/img/products/control-smart.jpg",
      descripcion: "Control remoto universal para televisores inteligentes.",
      garantia: "30 dias"
    },
    {
      id: 4,
      categoriaId: 2,
      nombre: "Cable HDMI Ultra 2.1",
      marca: "SignalPro",
      precio: 18.75,
      precioAnterior: null,
      stock: 60,
      destacado: false,
      oferta: false,
      imagen: "assets/img/products/hdmi.jpg",
      descripcion: "Cable HDMI 2.1 para 4K, 8K, HDR y audio de alta calidad.",
      garantia: "1 ano"
    },
    {
      id: 5,
      categoriaId: 3,
      nombre: "Kit tecnico de precision",
      marca: "BenchLab",
      precio: 69.99,
      precioAnterior: 84.99,
      stock: 20,
      destacado: true,
      oferta: true,
      imagen: "assets/img/products/kit-tecnico.jpg",
      descripcion: "Kit profesional para mantenimiento y reparacion electronica.",
      garantia: "6 meses"
    }
  ],

  servicios: [
    {
      id: 1,
      nombre: "Reparacion de Smart TV",
      slug: "reparacion-smart-tv",
      precioDesde: 35,
      tiempoEstimado: "24 a 72 horas",
      descripcion: "Diagnostico y reparacion de fuentes, main board, backlight, audio, imagen y sistema Smart."
    },
    {
      id: 2,
      nombre: "Electronica general",
      slug: "electronica-general",
      precioDesde: 25,
      tiempoEstimado: "24 a 96 horas",
      descripcion: "Revision de monitores, consolas, equipos de audio, cargadores y dispositivos domesticos."
    },
    {
      id: 3,
      nombre: "Servicio a domicilio",
      slug: "servicio-domicilio",
      precioDesde: 20,
      tiempoEstimado: "Segun agenda",
      descripcion: "Visita tecnica para revision inicial, instalacion, configuracion y retiro de equipos."
    },
    {
      id: 4,
      nombre: "Instalacion y calibracion",
      slug: "instalacion-calibracion",
      precioDesde: 30,
      tiempoEstimado: "1 a 3 horas",
      descripcion: "Montaje, configuracion y calibracion de televisores, audio y sistemas multimedia."
    }
  ],

  solicitudes: [
    {
      id: 1,
      codigo: "NV-2026-0148",
      cliente: "Cliente Demo",
      email: "cliente@novavolt.demo",
      telefono: "+507 6111-2222",
      equipo: "Smart TV 55 pulgadas",
      marca: "Samtek",
      modelo: "STK-55Q8",
      problema: "No enciende y el indicador parpadea.",
      prioridad: "media",
      estado: "cotizacion",
      cotizacion: 118.75,
      fechaSolicitud: "2026-06-20",
      fechaEstimada: "2026-06-27",
      notas: "Posible falla en fuente de poder. Requiere prueba de voltajes."
    }
  ],

  estadosOrden: [
    {
      clave: "recibido",
      nombre: "Solicitud recibida",
      descripcion: "La solicitud fue registrada correctamente."
    },
    {
      clave: "diagnostico",
      nombre: "Diagnostico tecnico",
      descripcion: "El equipo esta siendo revisado por un tecnico."
    },
    {
      clave: "cotizacion",
      nombre: "Cotizacion enviada",
      descripcion: "Ya existe una estimacion del servicio."
    },
    {
      clave: "reparacion",
      nombre: "En reparacion",
      descripcion: "La reparacion fue aprobada y esta en proceso."
    },
    {
      clave: "listo",
      nombre: "Listo para entrega",
      descripcion: "El equipo esta probado y listo para entregar."
    }
  ],

  testimonios: [
    {
      id: 1,
      nombre: "Mariana Torres",
      ciudad: "Ciudad de Panama",
      calificacion: 5,
      servicio: "Reparacion Smart TV",
      texto: "Atencion rapida, explicacion clara y el televisor quedo funcionando perfecto.",
      verificado: true
    },
    {
      id: 2,
      nombre: "Diego Castillo",
      ciudad: "San Miguelito",
      calificacion: 5,
      servicio: "Instalacion",
      texto: "Instalaron y calibraron mi sala de entretenimiento con un resultado muy profesional.",
      verificado: true
    },
    {
      id: 3,
      nombre: "Laura Mendez",
      ciudad: "La Chorrera",
      calificacion: 4,
      servicio: "Servicio a domicilio",
      texto: "El tecnico llego puntual y me dio una cotizacion honesta antes de reparar.",
      verificado: true
    }
  ],

  faq: [
    {
      id: 1,
      categoria: "reparacion",
      pregunta: "Cuanto tarda una reparacion?",
      respuesta: "Depende del problema y disponibilidad de piezas. Una reparacion comun puede tomar de 24 a 72 horas."
    },
    {
      id: 2,
      categoria: "garantia",
      pregunta: "Que cubre la garantia?",
      respuesta: "Cubre piezas instaladas y mano de obra sobre el mismo fallo durante el periodo indicado."
    },
    {
      id: 3,
      categoria: "domicilio",
      pregunta: "Atienden a domicilio?",
      respuesta: "Si. La demo permite simular una solicitud de visita tecnica y guardar los datos localmente."
    }
  ],

  glosario: [
    {
      id: 1,
      termino: "OLED",
      definicion: "Tecnologia de pantalla donde cada pixel emite su propia luz, permitiendo negros profundos."
    },
    {
      id: 2,
      termino: "QLED",
      definicion: "Tecnologia basada en puntos cuanticos para mejorar brillo y reproduccion de color."
    },
    {
      id: 3,
      termino: "Backlight",
      definicion: "Sistema de iluminacion trasera usado en pantallas LCD y LED."
    },
    {
      id: 4,
      termino: "Main Board",
      definicion: "Tarjeta principal que controla procesamiento, entradas, sistema y funciones del televisor."
    }
  ],

  carrito: [],
  favoritos: [],
  mensajesContacto: [],
  newsletter: [],
  sesion: null
};

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function generateId(collection) {
  if (!Array.isArray(collection) || collection.length === 0) {
    return 1;
  }

  return Math.max(...collection.map((item) => Number(item.id) || 0)) + 1;
}

function generateOrderCode() {
  const year = new Date().getFullYear();
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `NV-${year}-${randomNumber}`;
}

function initLocalDB() {
  const existingDB = localStorage.getItem(NOVAVOLT_DB_KEY);

  if (!existingDB) {
    localStorage.setItem(
      NOVAVOLT_DB_KEY,
      JSON.stringify(cloneData(NOVAVOLT_INITIAL_DATA))
    );
  }

  return getLocalDB();
}

function getLocalDB() {
  const storedDB = localStorage.getItem(NOVAVOLT_DB_KEY);

  if (!storedDB) {
    return cloneData(NOVAVOLT_INITIAL_DATA);
  }

  try {
    return JSON.parse(storedDB);
  } catch (error) {
    console.warn("La base local estaba danada. Se reinicio la demo.", error);
    localStorage.setItem(
      NOVAVOLT_DB_KEY,
      JSON.stringify(cloneData(NOVAVOLT_INITIAL_DATA))
    );
    return cloneData(NOVAVOLT_INITIAL_DATA);
  }
}

function saveLocalDB(database) {
  localStorage.setItem(NOVAVOLT_DB_KEY, JSON.stringify(database));
  return database;
}

function getTable(tableName) {
  const database = getLocalDB();
  return database[tableName] || [];
}

function saveTable(tableName, rows) {
  const database = getLocalDB();
  database[tableName] = rows;
  saveLocalDB(database);
  return rows;
}

function insertRow(tableName, row) {
  const rows = getTable(tableName);
  const newRow = {
    id: generateId(rows),
    ...row
  };

  rows.push(newRow);
  saveTable(tableName, rows);

  return newRow;
}

function updateRow(tableName, id, updates) {
  const rows = getTable(tableName);
  const index = rows.findIndex((row) => Number(row.id) === Number(id));

  if (index === -1) {
    return null;
  }

  rows[index] = {
    ...rows[index],
    ...updates
  };

  saveTable(tableName, rows);
  return rows[index];
}

function deleteRow(tableName, id) {
  const rows = getTable(tableName);
  const filteredRows = rows.filter((row) => Number(row.id) !== Number(id));

  saveTable(tableName, filteredRows);
  return filteredRows.length !== rows.length;
}

function findRows(tableName, callback) {
  return getTable(tableName).filter(callback);
}

function findRowById(tableName, id) {
  return getTable(tableName).find((row) => Number(row.id) === Number(id)) || null;
}

const NovaVoltAuth = {
  login(email, password) {
    const database = getLocalDB();
    const user = database.usuarios.find(
      (item) => item.email === email && item.password === password
    );

    if (!user) {
      return {
        ok: false,
        message: "Correo o contrasena incorrectos."
      };
    }

    const safeUser = {
      id: user.id,
      nombre: user.nombre,
      email: user.email,
      rol: user.rol,
      telefono: user.telefono
    };

    database.sesion = {
      ...safeUser,
      iniciadaEn: new Date().toISOString()
    };

    saveLocalDB(database);

    return {
      ok: true,
      user: safeUser
    };
  },

  logout() {
    const database = getLocalDB();
    database.sesion = null;
    saveLocalDB(database);

    return {
      ok: true
    };
  },

  register(data) {
    const database = getLocalDB();
    const exists = database.usuarios.some((user) => user.email === data.email);

    if (exists) {
      return {
        ok: false,
        message: "Este correo ya esta registrado."
      };
    }

    const newUser = {
      id: generateId(database.usuarios),
      nombre: data.nombre,
      email: data.email,
      password: data.password,
      rol: "cliente",
      telefono: data.telefono || "",
      creadoEn: getToday()
    };

    database.usuarios.push(newUser);
    saveLocalDB(database);

    return {
      ok: true,
      user: newUser
    };
  },

  getSession() {
    return getLocalDB().sesion;
  }
};

const NovaVoltOrders = {
  create(data) {
    const newOrder = insertRow("solicitudes", {
      codigo: generateOrderCode(),
      cliente: data.cliente,
      email: data.email,
      telefono: data.telefono,
      equipo: data.equipo,
      marca: data.marca || "No especificada",
      modelo: data.modelo || "No especificado",
      problema: data.problema,
      prioridad: data.prioridad || "media",
      estado: "recibido",
      cotizacion: null,
      fechaSolicitud: getToday(),
      fechaEstimada: data.fechaEstimada || "",
      notas: "Solicitud creada desde formulario local."
    });

    return newOrder;
  },

  findByCode(code) {
    const normalizedCode = String(code || "").trim().toUpperCase();

    return (
      getTable("solicitudes").find(
        (order) => String(order.codigo).toUpperCase() === normalizedCode
      ) || null
    );
  },

  updateStatus(id, estado) {
    return updateRow("solicitudes", id, { estado });
  }
};

const NovaVoltCart = {
  getItems() {
    const database = getLocalDB();

    return database.carrito.map((item) => {
      const product = database.productos.find(
        (producto) => Number(producto.id) === Number(item.productoId)
      );

      return {
        ...item,
        producto: product || null
      };
    });
  },

  add(productoId, cantidad = 1) {
    const database = getLocalDB();
    const product = database.productos.find(
      (item) => Number(item.id) === Number(productoId)
    );

    if (!product) {
      return {
        ok: false,
        message: "Producto no encontrado."
      };
    }

    const existingItem = database.carrito.find(
      (item) => Number(item.productoId) === Number(productoId)
    );

    if (existingItem) {
      existingItem.cantidad += cantidad;
    } else {
      database.carrito.push({
        id: generateId(database.carrito),
        productoId,
        cantidad,
        agregadoEn: new Date().toISOString()
      });
    }

    saveLocalDB(database);

    return {
      ok: true,
      count: this.count()
    };
  },

  remove(itemId) {
    return deleteRow("carrito", itemId);
  },

  clear() {
    saveTable("carrito", []);
  },

  count() {
    return getTable("carrito").reduce(
      (total, item) => total + Number(item.cantidad || 0),
      0
    );
  },

  total() {
    return this.getItems().reduce((total, item) => {
      if (!item.producto) {
        return total;
      }

      return total + item.producto.precio * item.cantidad;
    }, 0);
  }
};

const NovaVoltContact = {
  sendMessage(data) {
    return insertRow("mensajesContacto", {
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono || "",
      mensaje: data.mensaje,
      leido: false,
      creadoEn: new Date().toISOString()
    });
  },

  subscribe(email) {
    const database = getLocalDB();
    const normalizedEmail = String(email || "").trim().toLowerCase();

    if (!normalizedEmail) {
      return {
        ok: false,
        message: "Correo invalido."
      };
    }

    const exists = database.newsletter.some(
      (item) => item.email.toLowerCase() === normalizedEmail
    );

    if (exists) {
      return {
        ok: false,
        message: "Este correo ya esta suscrito."
      };
    }

    database.newsletter.push({
      id: generateId(database.newsletter),
      email: normalizedEmail,
      creadoEn: new Date().toISOString()
    });

    saveLocalDB(database);

    return {
      ok: true
    };
  }
};

function resetNovaVoltDB() {
  localStorage.removeItem(NOVAVOLT_DB_KEY);
  return initLocalDB();
}

window.NovaVoltDB = {
  key: NOVAVOLT_DB_KEY,
  init: initLocalDB,
  get: getLocalDB,
  save: saveLocalDB,
  getTable,
  saveTable,
  insert: insertRow,
  update: updateRow,
  delete: deleteRow,
  find: findRows,
  findById: findRowById,
  reset: resetNovaVoltDB,
  auth: NovaVoltAuth,
  orders: NovaVoltOrders,
  cart: NovaVoltCart,
  contact: NovaVoltContact
};

document.addEventListener("DOMContentLoaded", () => {
  initLocalDB();
});