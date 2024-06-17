let promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
          let resposta = {}
        if(false){
            resposta = {
                    código: 404,
                    erro: 'Objeto não encontrado'
                }
                reject(resposta)        
            }

        resposta = {
            1: {id: 1, nome: 'Caio'}, 2:{ id: 1, nome: 'Leonan'}, 3: { id: 3, nome: 'Rogério'}
        }

            resolve(resposta)
        }, 4000)
    }).then((dados) =>{
        let promessa2 = new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(false){

                } else{
                    reject(resposta)
                }
                resposta = {
                    1: {id: 1, nome:'Vanessa'},
                    2: {id: 2, nome:'Fernanda'},
                    3: {id: 3, nome:'Rafaela'}
                }
                resolve(resposta)
            }, 4000)
            }).then((dados)=>{
                console.log(dados)
            }).catch(erro => {
                console.log(erro)
            })
        })
    
   