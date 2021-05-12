import childModel from "./childModel";

export default class parentModel {
    constructor(public parentEmail: string, public parentPassword: string, public id: number = 0,public userName:string,public children : childModel[]){}
}