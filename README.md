# 💱 Simulador de Conversión de Divisas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7E018?style=for-the-badge&logo=javascript&logoColor=black)
![SweetAlert2](https://img.shields.io/badge/SweetAlert2-FF69B4?style=for-the-badge&logo=javascript&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-3C873A?style=for-the-badge&logo=google-chrome&logoColor=white)

---

## 📂 **Estructura del Proyecto**

```
simulador/
├── index.html          # Página de inicio (login)
├── simulador.html      # Página principal del simulador
├── style.css           # Estilos del proyecto
├── script.js           # Lógica principal del simulador
├── cotizaciones.json   # Tasas de cambio (debe estar en el servidor)
```

---

## 🚀 **Instalación y Uso**

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/gabycavalli/coder_javascript.git
   ```

2. **Abrir el archivo** `index.html` **en tu navegador**.

3. **Seguir los pasos en la app:**
   - Ingresa tu **nombre** en la página de inicio.
   - Realiza **conversiones** en la página principal.
   - Visualiza y gestiona el **historial** de conversiones.

---

## 🛠️ **Funcionalidades Técnicas**

### 🔄 **Conversión de Divisas**

- La conversión se realiza dividiendo el **monto ingresado** por la **tasa de cambio** correspondiente.
- **Ejemplo:**
  ```bash
  1000 ARS ÷ 350 (USD) = 2.86 USD
  ```

### 🗂️ **Historial**

- Se almacena automáticamente en **localStorage**.
- La interfaz muestra **las últimas 5 conversiones**.
- Opción para **eliminar historial** dinámicamente.

### 🔔 **Alertas con SweetAlert2**

SweetAlert2 se utiliza para mostrar mensajes visuales y atractivos:

- ✅ **Historial vacío**
- 🗑️ **Historial eliminado correctamente**
- 💡 **Información sobre conversiones**

---

## 🌟 **Mejoras Futuras**

- 🔹 Soporte para **más monedas**.
- 🔹 Implementar una **API en tiempo real** para obtener tasas actualizadas.
- 🔹 Mejorar la **validación de datos** ingresados por el usuario.
- 🔹 Optimizar el **diseño responsivo** para dispositivos móviles.

---

## 👨‍💻 **Autor**

**Gabriel Cavalli**  
📅 Proyecto desarrollado en **septiembre 2025**.  
📧 Contacto: [gabriel.cavalli@gmail.com](mailto:gabriel.cavalli@gmail.com)

---

## 📄 **Licencia**

Este proyecto es **de uso libre**.  
Siéntete libre de **modificarlo** y **adaptarlo** a tus necesidades.

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
