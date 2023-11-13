class Banco{
    constructor(nome,cnpj,fone,agencia){
        this.nome=nome;
        this.cnpj=cnpj;
        this.fone=fone;
        this.agencia=agencia;
    
    }
    }
    
    let B1 = new Banco ("Santonder", 4080290325400,40289232,8456)
    let B2 = new Banco ("Brodusco",4568792541209,89214567,2549)
    let B3 =  new Banco ("Nibenk",4871234659808,32104761,1264)
    let B4 = new Banco ("Itou",9568473240103,82549876,2446)
    console.log (`${B1.nome} tem ${B1.cnpj} como cnpj ${B1.fone} como telefone e ${B1.agencia} como agencia`)
console.log  (`${B2.nome} tem ${B2.cnpj} como cnpj ${B2.fone} como telefone e ${B2.agencia} como agencia`)
console.log  (`${B3.nome} tem ${B3.cnpj} como cnpj ${B3.fone} como telefone e ${B3.agencia} como agencia`)
console.log  (`${B4.nome} tem ${B4.cnpj} como cnpj ${B4.fone} como telefone e ${B4.agencia} como agencia`)
