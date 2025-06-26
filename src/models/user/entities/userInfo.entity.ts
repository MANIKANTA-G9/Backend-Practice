import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class userInfo{
  @Prop({required:true, type:'string'})
  name:string;

  @Prop()
  age:number;

  @Prop()
  email:string;

  @Prop()
  projects:string[];
}

export const userInfoSchema= SchemaFactory.createForClass(userInfo)