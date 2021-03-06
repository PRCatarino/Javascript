import { Cliente }  from "./Cliente.js";
export class ContaCorrente{
    Agencia;
    _cliente;
    
    set cliente(novoValor){
        if(novoValo instanceof Cliente){
            this.cliente = novoValor;
        };
    };
    get cliente(){
        return this.cliente;
    };

    get saldo(){
        return this.saldo
    }

    _saldo = 0; 
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
     
            };
        };
        depositar(valor){
            if(valor <= 0){
                return;
            };
                this._saldo += valor;
        };
        transferir(valor,conta){
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
        };
    };