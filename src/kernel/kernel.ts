import express from 'express'

export class Kernel {
    defaultApps: express.Application
    constructor(){
        this.defaultApps=express()
    }
    appServices(){
        this.defaultApps.listen(4000,()=>{
            console.log(`service run at ${4000}`)
        })
    }
}