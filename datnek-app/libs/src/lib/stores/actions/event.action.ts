import { Add, Create, Delete, Update } from "../../dto/input/event.input";


    export class AddEvent{

        static readonly type: '[Event] Add';

        constructor(public payload:Add){
        }


    }


    export class UpdateEvent{

        static readonly type: '[Event] Update';
        constructor( public payload: Update){}
    }




    export class DeleteEvent{

        static readonly type :'[Event] Delete';
        constructor(public payload:Delete){

        }
    }


    




    export class GetByIDEvent{


        static readonly type: '[Event] GetById';
        constructor( public id: number){

        }
    }



    export class GetALLEvent{

        static readonly type:'[Event] GetAll';
    }


    export class Creates {
        static readonly type = '[Event] Create';
        constructor(public payload: Create) {}
      }


