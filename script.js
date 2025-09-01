// LOGIN
document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      const username = document.getElementById('username').value.trim();
      if (username) {
        localStorage.setItem('username', username);
        localStorage.setItem('historial', JSON.stringify([]));
        window.location.href = 'simulador.html';
      }
    });
  }

  // SIMULADOR
  const welcome = document.getElementById('welcome');
  if (welcome) {
    const username = localStorage.getItem('username');
    welcome.textContent = `Bienvenido, ${username}!`;

    // cargar cotizaciones
    fetch('cotizaciones.json')
      .then((res) => res.json())
      .then((cotizaciones) => {
        initSimulador(cotizaciones);
      });
  }

  const clearBtn = document.getElementById('clearHistorial');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      let historial = JSON.parse(localStorage.getItem('historial')) || [];
      if (historial.length === 0) {
        Swal.fire({
          icon: 'info',
          title: 'Historial vacío',
          text: 'No hay más nada en el historial para borrar.',
        });
        return;
      }
      localStorage.removeItem('historial');
      renderHistorial();
      Swal.fire({
        icon: 'success',
        title: 'Historial borrado',
        text: 'El historial se ha eliminado correctamente.',
      });
    });
  }
});

function initSimulador(cotizaciones) {
  document.querySelectorAll('.card').forEach((card) => {
    const front = card.querySelector('.card-front');
    const backBtn = card.querySelector('.back-btn');
    const convertirBtn = card.querySelector('.convertir');
    const input = card.querySelector('.monto');
    const resultado = card.querySelector('.resultado');
    const moneda = card.dataset.moneda;

    front.addEventListener('click', () => {
      card.classList.add('flipped');
    });

    backBtn.addEventListener('click', () => {
      card.classList.remove('flipped');
      input.value = '';
      resultado.textContent = '';
    });

    convertirBtn.addEventListener('click', () => {
      const pesos = parseFloat(input.value);
      if (isNaN(pesos) || pesos <= 0) {
        resultado.textContent = 'Ingrese un monto válido.';
        return;
      }
      const cambio = (pesos / cotizaciones[moneda]).toFixed(2);
      resultado.textContent = `${pesos} ARS = ${cambio} ${moneda}`;
      const date = new Date().toLocaleString();

      // Guardar en historial
      let historial = JSON.parse(localStorage.getItem('historial')) || [];
      historial.push(`${pesos} ARS → ${cambio} ${moneda} ${date}`);
      localStorage.setItem('historial', JSON.stringify(historial));
      renderHistorial();
    });
  });

  renderHistorial();
}

function renderHistorial() {
  const list = document.getElementById('historial-list');
  if (!list) return;
  list.innerHTML = '';
  let historial = JSON.parse(localStorage.getItem('historial')) || [];
  historial.slice(-5).forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

document.querySelectorAll('.monto').forEach((input) => {
  input.addEventListener('input', (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ''); // Eliminar caracteres no numéricos
    if (value) {
      value = (parseFloat(value) / 100).toFixed(2); // Dividir por 100 para agregar el punto decimal
    }
    e.target.value = value; // Actualizar el valor del input
  });
});
