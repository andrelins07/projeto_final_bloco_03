import { Link } from "react-router-dom"

function Navbar() {

    return (
        <div className='w-full bg-emerald-700 text-white
        flex justify-center py-4 border-b-4 shadow-md'>
            <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">DevFarma</Link>
                <ul className='flex gap-8 font-bold'>
                    <li>Produtos</li>
                    <Link to='/categorias' className='hover:underline'><li>Categorias</li></Link>
                    <Link to='/cadastrarcategoria' className='hover:underline'><li>Cadastrar Categoria</li></Link>
                </ul>
            </div>
        </div> 
    )
}

export default Navbar