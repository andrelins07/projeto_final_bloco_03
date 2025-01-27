function Navbar() {

    return (
        <div className='w-full bg-emerald-700 text-white
        flex justify-center py-4 border-b-4 shadow-md'>
            <div className="container flex justify-between text-lg">
                <h1 className="font-bold text-2xl">DevFarma</h1>
                <ul className='flex gap-8 font-bold'>
                    <li>Produtos</li>
                    <li>Categorias</li>
                    <li>Cadastrar categoria</li>
                </ul>
            </div>
        </div> 
    )
}

export default Navbar