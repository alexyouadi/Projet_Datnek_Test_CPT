
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { EventOutput } from "../../dto/output/event.output";
import { Inject, Injectable } from '@angular/core';
import { EventService } from '../../services/event.service';
import { tap } from 'rxjs';
import { AddEvent,  Creates,  DeleteEvent, GetALLEvent, GetByIDEvent, UpdateEvent } from '../actions/event.action';

// definire du model de la stucture des donne de l'etat des evenement 
//qui represente une liste d'evenemet



export interface EventStateModel{

    events: EventOutput.Get[];

}
//creation de l'etat avec par defaut une liste vided'evenement
@State<EventStateModel>({

    name:'events',
    defaults:{

        events:[]
    }
    
})


@Injectable()
export class EventState{

//injection de service 

    constructor( @Inject(EventService) private eventservice:EventService){}

 // Sélecteur pour récupérer tous les événements de l'état
@Selector()

    static GetEvents(state : EventStateModel){
         // Si l'état et la liste des événements existent, on les retourne

       if(state &&state.events){

        return state.events;
       } else{
        console.log('aucun element existe par consequent retourne un tableau vide');
        return [];
       }
    }


    //recuperons un element specifique par sont identifient dans une liste d'evenement
@Selector ()

static getElementById(state : EventStateModel){

    return (id: number)=>{
        return state.events.find(event => event.id===id);
    }
;
    
    
}


 // Action pour ajouter un événement
@Action(AddEvent)

add(contex: StateContext<EventStateModel>, action:AddEvent ){
// Appelle le service pour ajouter l'événement
    return this.eventservice.ajouterUnEvenement(action.payload).pipe(
        tap(

            (result: EventOutput.Create) => {
                 // Met à jour l'état avec le nouvel événement

                const state = contex.getState();


                contex.setState(

                    {
                        ...state,

                        events: [

                            ...state.events, result
                        ]
                    }
                );
            }
        )
    );

}


@Action(Creates)

create( contex: StateContext<EventStateModel>, action : Creates){

    return this.eventservice.creerUnEvenement(action.payload).pipe(

        tap(
            (results: EventOutput.Create) => {

                const state = contex.getState();

                contex.setState(
                    {
                        ...state,

                        events:[

                            ...state.events, results
                        ]
                    }
                );

            }
        )
    );
}



@Action(DeleteEvent)

delete( contex: StateContext<EventStateModel>, action: DeleteEvent){

    return this.eventservice.supprimerUnEvenementt(action.payload).pipe(
        tap(
            () => {

                const state = contex.getState();

                const filterEvent = state.events.filter(

                    e => e.id !== action.payload.id
                )
                contex.setState(
                    {
                        ...state,

                        events: filterEvent
                    }
                );
            }
        
        )
    );
}
    

@Action(UpdateEvent)

update( context:StateContext<EventStateModel>, action:UpdateEvent){


    return this.eventservice.mettreAJourUnEvenement(action.payload).pipe(

        tap(

            (result:EventOutput.Update) => {

                const state = context.getState();
               

        // Trouve l'index de l'événement à mettre à jour
                const recherdelindex = state.events.findIndex(

                    i => i.id === action.payload.id
                );
 // Crée une copie de l'état actuel pour éviter de modifier l'état original
                if(recherdelindex !== -1){

                    

                    const mettreajourlesvaleurs = [...state.events]
 // Met à jour l'événement à l'index trouvé en fusionnant les nouvelles valeurs
                const metttreajour : EventOutput.Get = {

                    ...mettreajourlesvaleurs[recherdelindex],
                    ...result


                };

                mettreajourlesvaleurs[recherdelindex]=metttreajour
 // Met à jour l'état de l'application avec la nouvelle liste d'événements
                context.setState(
                    {
                        ...state,
                        events: mettreajourlesvaleurs
                    }
                );


                }

            }
        )
    );
}


@Action(GetByIDEvent)

getById(context:StateContext<EventStateModel>, action:GetByIDEvent){

    return this.eventservice.recupererUnEvenementById(action.id).pipe(

        tap(
            (req : EventOutput.Get) => {

                const state = context.getState();
                 // Met à jour l'événement correspondant dans l'état
                context.patchState(
                    {
                        events: state.events.map(

                            event => event.id === req.id? req: event
                        )
                    }
                );
            }
        )
    );
}



@Action(GetALLEvent)

getAll( contex : StateContext<EventStateModel>){

    return this.eventservice.recupererToutLesEvenement().pipe(

        tap(

            (result: EventOutput.Get[]) => {

                const state = contex.getState();

                contex.patchState(
                    {
                        ...state,

                        events: result
                    }
                );
            }
        )
    );
}

}
