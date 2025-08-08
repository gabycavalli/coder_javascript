document.querySelectorAll('.flip-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.card').classList.add('flipped');
  });
});

document.querySelectorAll('.back-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.card').classList.remove('flipped');
  });
});

document.querySelectorAll('.convert-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const moneda = btn.dataset.moneda;
    const input = btn.previousElementSibling;
    const monto = parseFloat(input.value);
    const resultadoEl = btn.nextElementSibling.nextElementSibling;

    if (isNaN(monto) || monto <= 0) {
      resultadoEl.textContent = 'Ingrese un monto válido';
      return;
    }

    let tasa;
    switch (moneda) {
      case 'usd':
        tasa = 1340;
        break; // ejemplo fijo
      case 'eur':
        tasa = 1532;
        break;
      case 'brl':
        tasa = 242;
        break;
      case 'lbr':
        tasa = 1780;
        break;
      case 'yen':
        tasa = 8.91;
        break;
      case 'cad':
        tasa = 956;
        break;
    }

    const convertido = monto / tasa;
    resultadoEl.textContent = `${convertido.toFixed(
      2
    )} ${moneda.toUpperCase()}`;
  });
});
