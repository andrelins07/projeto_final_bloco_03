function Home() {
    
    return (
        <>
            <div className="bg-white flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-4xl font-bold'>
                            Seja Bem Vindo a DevFarma!
                        </h2>
                        <p className='text-xl'>
                            Saúde e cuidado, sempre ao seu lado!
                        </p>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/hsc7nu8v6/download.png?updatedAt=1738004479584"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home