import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3300'
})

export const getProdutos = async () =>{
    const response = await instance.get('/produtos')
    // console.log(response)
    const json = await response.data.produtos
    // console.log(json)
    return json
}

export const getProdutosPorCategoria = async (categoria) =>{
    const response = await instance.get( )
    const json = await response.data.produtos
    console.log(json)
    return json
}

// export const postProduto = async (produto) =>{
//     const response = await instance.post(`/produtos/novo`, produto)
//     const json = await response.data.msg
//     return json
// }

export const postProduto = async (produto) =>{
    const response = await instance.post("/produtos/novo", produto)
    const json = await response.data.msg
    return json
}
