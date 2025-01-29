
import {  Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventOutput } from '../dto/output/event.output';
import { Add, Create, Delete, Update } from "../dto/input/event.input";




/**
 * Service pour gérer les événements
 * @description Ce service permet d'interagir avec l'API pour gérer les événements
 */


@Injectable({

    providedIn:'root'
})

export class EventService{

    constructor(private http : HttpClient){}

    private apiUrl='api/events'

    /**
     * Récupère tous les événements
     * @returns Un tableau d'événements
     */

        recupererToutLesEvenement(): Observable<EventOutput.Get[]>{

            return this.http.get<EventOutput.Get[]>(this.apiUrl);


            
        }


        ajouterUnEvenement(data:Add): Observable<EventOutput.Create>{


            return this.http.post<EventOutput.Create>(`${this.apiUrl}`, data);
        }



        creerUnEvenement(data:Create): Observable<EventOutput.Create>{

            return this.http.post<EventOutput.Create>(`${this.apiUrl}`, data);
        }


        mettreAJourUnEvenement( data:Update): Observable<EventOutput.Update>{
            
            return this.http.put<EventOutput.Update>(`${this.apiUrl}/${data.id}`, data);
        }


        supprimerUnEvenementt( data:Delete): Observable<EventOutput.Delete>{

            return this.http.delete<EventOutput.Delete>(`${this.apiUrl}/${data.id}`);
        }


        recupererUnEvenementById(id:number): Observable<EventOutput.Get>{

            return this.http.get<EventOutput.Get>(`${this.apiUrl}/${id}`);

        }







    


}