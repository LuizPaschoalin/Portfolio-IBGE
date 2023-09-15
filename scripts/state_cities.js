document.addEventListener('DOMContentLoaded', () => {
    const cityTableBody = document.getElementById('cityTableBody');
    const filterInput = document.getElementById('filterInput'); 

    let cityDataList = []; 
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
        .then(response => response.json())
        .then(data => {
            cityDataList = data; 
            renderTable(cityDataList); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

  
    function renderTable(dataList) {
        cityTableBody.innerHTML = ''; 

        dataList.forEach(cityData => {
          
            if (cityData.nome.toLowerCase().includes(filterInput.value.toLowerCase())) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${cityData.nome}</td>
                    <td>${cityData.microrregiao.mesorregiao.UF.sigla}</td>
                `;
                cityTableBody.appendChild(row);
            }
        });
    } 
    filterInput.addEventListener('input', () => {
        renderTable(cityDataList); 
    });
});
