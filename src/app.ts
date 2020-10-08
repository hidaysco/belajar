import {Kernel} from './kernel/kernel'
import {IServices} from './shared/IServices'
export class App{
    kernel: Kernel
    constructor(s: IServices[]){
        this.kernel = new Kernel()
        this.initServices(s)
    }
    protected initServices(s: IServices[]) { 
        s.forEach((services) => { 
            this.kernel.defaultApps.use('/api/v1', services.router);
        })
    }
    listen(){
        this.kernel.appServices()
    }
}
