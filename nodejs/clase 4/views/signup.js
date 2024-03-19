document.getElementById('signUpForm').addEventListener('submit',(event)=>{
    event.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    
    console.log(username,password);
    
    fetch('/signup',{
        method:'POST',
        body:JSON.stringify({username,password}),
        headers: {'Content-Type': 'application/json'} 
    })
    .then(response => response.json())
    .then(data =>{
        if (data.success) {
            alert('usuario creado exitosamente!')
            window.location.href='/products'
        }else{
            alert('Algo salio mal... intenta nuevamente')
        }
    })
    .catch((err)=>console.error('Error:',err))
    })
    //2.43.53