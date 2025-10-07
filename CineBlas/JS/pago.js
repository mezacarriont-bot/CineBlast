document.addEventListener('DOMContentLoaded', () => {
    // Recuperar el total del carrito guardado en el archivo principal (index.html)
    const finalTotalSpan = document.getElementById('final-total');
    const savedTotal = localStorage.getItem('chocloTotal');

    if (savedTotal) {
        finalTotalSpan.textContent = `S/${savedTotal}`;
    }

    // Elementos de Pago
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const paymentCardDetails = document.getElementById('payment-card-details');
    const paymentYapeDetails = document.getElementById('payment-yape-details');

    // Alternar entre Pago con Tarjeta y Yape
    paymentMethods.forEach(radio => {
        radio.addEventListener('change', (event) => {
            document.querySelectorAll('.payment-details').forEach(detail => detail.classList.remove('active'));

            if (event.target.value === 'card') {
                paymentCardDetails.classList.add('active');
            } else if (event.target.value === 'yape') {
                paymentYapeDetails.classList.add('active');
            }
        });
    });

    // Alternar entre Boleta y Factura
    document.getElementById('btn-boleta').addEventListener('click', () => {
        document.getElementById('btn-boleta').classList.add('active');
        document.getElementById('btn-factura').classList.remove('active');
    });

    document.getElementById('btn-factura').addEventListener('click', () => {
        document.getElementById('btn-factura').classList.add('active');
        document.getElementById('btn-boleta').classList.remove('active');
    });
});