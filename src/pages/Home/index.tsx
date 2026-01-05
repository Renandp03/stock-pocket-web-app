import {LaptopMinimalCheck,PackageOpen, ChartColumnBig} from "lucide-react"

function Home() {
    return (
        <main>
            <section className="mx-auto flex items-center px-10 py-20 w-full bg-[#f5f5f5] mb-20 dark:bg-[#333333]">
                <div>
                    <h1 className="text-3xl font-bold">
                        Stock Pocket
                    </h1>
                    <p className="text-lg">
                        O gerenciador universal para o seu estoque.
                    </p>
                </div>
            </section>
            <section className="mx-auto flex flex-col justify-center px-10 gap-4">
                <h2 className="text-2xl font-bold">
                    Funcionalidades
                </h2>
                <div>
                    <ul className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <li className="flex flex-col justify-center items-center rounded-md bg-[#f5f5f5] p-4 w-full">
                            <LaptopMinimalCheck className="w-8 h-8 text-[#333333]"/>
                            <h3 className="text-lg font-mediun">
                                Gerenciamento de produtos
                            </h3>
                            <p className="text-sm text-[#666666]">
                                Adicione, edite e exclua produtos do seu estoque.
                            </p>
                        </li>
                        <li className="flex flex-col justify-center items-center rounded-md bg-[#f5f5f5] p-4 w-full">
                            <PackageOpen className="w-8 h-8 text-[#333333]"/>
                            <h3 className="text-lg font-mediun">
                                Controle de estoque
                            </h3>
                            <p className="text-sm text-[#666666]">
                                Mantenha o controle de quantidades em estoque.
                            </p>
                        </li>
                        <li className="flex flex-col justify-center items-center rounded-md bg-[#f5f5f5] p-4 w-full">
                            <ChartColumnBig className="w-8 h-8 text-[#333333]"/>
                            <h3 className="text-lg font-mediun">
                                Relatórios e análises
                            </h3>
                            <p className="text-sm text-[#666666]">
                                Obtenha relatórios e análises sobre o desempenho do seu estoque.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Home