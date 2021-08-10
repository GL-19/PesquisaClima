const formulario = document.getElementsByClassName('busca')[0];
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let input = document.getElementById('searchInput').value;
    let aviso = document.querySelector('.aviso');
    if(input !== '') {
        aviso.innerHTML = "Pesquisa em andamento";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=1120951205be0eef5c1ba0338d1431ef&units=metric&lang=pt_br`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                aviso.innerHTML = null;
                document.querySelector(".resultado").style.display = "block";
                AtualizarInformações(data);  
            })  
            .catch(() => {
                aviso.innerHTML = "Cidade não encontrada"
                document.querySelector(".resultado").style.display = "none";
            });
       
    } else {
        aviso.innerHTML = "Digite o nome da cidade";
    }  
})

function AtualizarInformações(dados) {
    document.querySelector(".titulo").innerHTML = dados.name;
    document.querySelector(".tempInfo").innerHTML = dados.main.temp;
    document.querySelector(".ventoInfo").innerHTML = dados.wind.speed; 
}

