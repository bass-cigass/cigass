
export class Produit {
        id !: number;
        ref !: string;
        libelle !: string;
        quantite !: number;
        unite !: string;
        seuil !: number;
        date_entree !:  Date;
        type !: number;
        projet !: number;
        emplacement !: string;
        date_exp!: Date;
        
        constructor(
            id ?:any,
            ref ?:any,
            libelle ?:any,
            quantite ?:any,
            unite ?:any,
            seuil ?:any,
            date_entree ?:any,
            type ?:any,
            projet ?:any,
            emplacement ?:any,
            date_exp ?: any 
        ){
    
            this.ref= ref;
            this.id= id;
            this.libelle = libelle;
            this.quantite= quantite;
            this.unite= unite;
            this.seuil= seuil;
            this.date_entree =date_entree;
            this.type = type;
            this.projet = projet;
            this.emplacement = emplacement;
            this.date_exp = date_exp
        
        }
    
        
    
    
}
