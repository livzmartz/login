// const botoncerrar = document.getElementById('cerrarsesion')

// const cerrarsesion = async () => {
    
//    const url = `/login/cerrarsesion`;
//     const config = {
//         method: 'GET'
//     };

//     try {
//         const respuesta = await fetch(url, config);
//         const data = await respuesta.json();
//         if(data == true){

//             window.location.href= '/login/'
//         }        
//     } catch (error) {
//         console.log(error);
//     }
// };

// botoncerrar.addEventListener('click', cerrarsesion)

const formLogin = document.querySelector('form');

const closeSessionRequest = async e => {
    e.preventDefault();

    try {
        const url = "/login/API/closeSession"; 
     
        const headers = new Headers();
        headers.append("X-Requested-With", "fetch");

        const config = {
            method: 'GET',
            headers
        };
        
        const respuesta = await fetch(url,config);
        window.location.href = '/login/';

           
        } catch (error) {
        console.log(error);
        }
}

formLogin.addEventListener('submit', closeSessionRequest);
