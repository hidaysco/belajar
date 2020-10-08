import {Router, Request , Response} from 'express'
import {IServices} from '../shared/IServices'

export class userServices implements IServices {
    path = '/users'
    router = Router()
    constructor() {
        this.initRouter()
    }
    private initRouter():void{
        this.router.get(`${this.path}/halo`, this.hello)
    }
    private hello(req: Request, res: Response) {
        res.send('Dayat Gamtenk')
    }
}
