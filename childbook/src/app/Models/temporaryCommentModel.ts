import childModel from "./childModel";

export default class temporaryCommentModel {
    constructor(public appUser: childModel, public body: string, public id: number = 0, public userName: string,public location:string,public dateOfBirth:Date, ){}
}