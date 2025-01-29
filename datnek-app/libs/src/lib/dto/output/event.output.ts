
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace EventOutput{


    export interface Create {
        id: number;
        nom: string;
        dateDebut: Date;
        typeEvenement: string;
        meetingLink: string;
        addresse: string;
        heurDebut: string;
        heurFin: string;
        dateFin: string;
        description:string;
        organisateur:string;
        showMenu: boolean; // Ajouter cette propriété
   
     }
   
     export interface Get {
      id: number;
        nom: string;
        dateDebut: Date;
        typeEvenement: string;
        meetingLink: string;
        addresse: string;
        heurDebut: string;
        heurFin: string;
        dateFin: string;
        description:string;
        organisateur:string;
        showMenu: boolean; // Ajouter cette propriété
   
     }
   
     export interface Delete {
       id: number;
     }
   
     export interface Update {
       id: number;
       nom: string;
       dateDebut: Date;
       meetingLink: string;
       addresse: string;
       heurDebut: string;
       heurFin: string;
       dateFin: string;
       description:string;
        organisateur:string;
       typeEvenement: string;
   
     }




}