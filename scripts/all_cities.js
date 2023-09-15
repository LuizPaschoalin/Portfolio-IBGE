document.addEventListener('DOMContentLoaded', () => {
    const cityTableBody = document.getElementById('cityTableBody');
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
        .then(response => response.json())
        .then(data => {
            data.forEach(cityData => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${cityData.nome}</td>
                    <td>${cityData.microrregiao.mesorregiao.UF.sigla}</td>
                `;
                cityTableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
