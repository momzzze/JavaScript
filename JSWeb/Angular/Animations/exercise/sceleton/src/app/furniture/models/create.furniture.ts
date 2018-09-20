export class CreateFurnitureModel{
constructor(
    public make:string,
    public model:string,
    public year:number,
    public desription:string,
    public price:number,
    public image:string,
    public material?:string
){}
}