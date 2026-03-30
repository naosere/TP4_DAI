# 🐱 HTTP Cats - Servidor con Express

Este proyecto es un servidor básico desarrollado con Node.js y Express que responde con mensajes simples y muestra la hora actual. Además, incluye una página de error 404 personalizada utilizando una imagen de HTTP Cats.

---

## 📦 Requisitos

* Node.js (versión 18 o superior)
* npm (Node Package Manager)

---

## 🚀 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
```

2. Entrar en la carpeta del proyecto:

```bash
cd tu-repo
```

3. Instalar dependencias:

```bash
npm install
```

---

## ▶️ Ejecución

Iniciar el servidor:

```bash
node index.js
```

El servidor se ejecutará en:

```
http://localhost:3000
```

---

## 📌 Rutas disponibles

### `/`

Devuelve un mensaje de bienvenida.

**Respuesta:**

```
Hello World
```

---

### `/hora`

Devuelve la hora actual en formato HH:MM:SS.

**Ejemplo:**

```
14:32:10
```

---

### ❌ Rutas inexistentes

Cualquier ruta no definida devuelve un error 404 con una imagen de HTTP Cats.

---

## 📁 Estructura del proyecto

```
/proyecto
│── index.js
│── package.json
│
├── src
│   └── time.js
│
└── public
    └── 404.jpg
```

---

## 🧠 Tecnologías utilizadas

* Node.js
* Express

---

## 📷 Créditos

Las imágenes de error son provistas por:
https://http.cat/

---

## ✏️ Autor

Proyecto realizado como trabajo práctico.
