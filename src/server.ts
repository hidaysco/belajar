import express from 'express'
import {IServices} from './shared/IServices'
import userServices from './services/userServices'
class App{
    _defaultApps: express.Application
    constructor(s: IServices[]){
        this._defaultApps = express()
        this.initHandler(s)
    }
    protected initHandler(s: IServices[]) { 
        s.forEach((controller) => { 
            this._defaultApps.use('/api/v1', controller.router);
        })
    }
}

const app = new App([
   new userServices()
]) 

app._defaultApps.listen(4000, () => { 
    console.log(`aplikasi ini berjalan di port ${4000}`);
})