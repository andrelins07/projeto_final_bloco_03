import Categoria from "./Categoria";

export default interface Produto {
    id: number;
    produto: string;
    preco: number;
    categoria?: Categoria;
    quantidadeEstoque: number;
    marca: string;
    precisaReceita: boolean;
}