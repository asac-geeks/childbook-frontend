import childModel from "./childModel";

export default class postModel {
    constructor(public appUser: childModel, public imageUrl: string, public id: number = 0, public videoSrc: string,videoType:string){}
}