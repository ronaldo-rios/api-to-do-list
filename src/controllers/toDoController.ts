import { Request, Response } from 'express';
import { ToDo } from '../models/ToDo';

export const all = async (request: Request, response: Response) => {
    const list = await ToDo.findAll();
    response.json({list: list})
}

export const create = async (request: Request, response: Response) => {
    if(request.body.title) {
        let newToDo = await ToDo.create({
            title: request.body.title,
            done: request.body.done ? true : false
        })

        response.status(201).json({item: newToDo})
    }
    else {
        response.json({error: 'Dados não enviados'})
    }
}

export const update = async (request: Request, response: Response) => {
    let id: string = request.params.id;

    //Verification if id exists:
    let todo = await ToDo.findByPk(id);
    if(todo){
        if(request.body.title){
            todo.title = request.body.title;
        }
        if(request.body.done){
            switch(request.body.done.toLowerCase()){
                case '1':
                case 'true':
                    todo.done = true
                    break;
                case '0':
                case 'false':
                    todo.done = false
                    break;              
            }
        }

        await todo.save();
        response.json({item: todo})
    } 
    else {
        response.json({error: 'Tarefa não encontrada :('})
    }
}

export const destroy = async (request: Request, response: Response) => {
    
    let id: string = request.params.id

    // Verification if id exists for Primary Key:
    let todo = await ToDo.findByPk(id);
    if(todo) {
        await todo.destroy();
    }
    
    response.json({})
}