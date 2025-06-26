import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { UserController } from "./user/user.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { UserService } from "./user/user.service";
// import { userInfo } from "os";
// import { userInfoSchema, userInfo } from "./models/user/entities/userInfo.entity";

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Manikanta:8agPAtn0vWwYAFcI@cluster0.j6lznfk.mongodb.net/app?retryWrites=true&w=majority&appName=Cluster0'),
    UserModule
    // MongooseModule.forFeature(UserModule)
    // MongooseModule.forFeature([
    //   {name:userInfo.name,
    //     schema:userInfoSchema
    //   }
    // ])
  ],
  // controllers: [AppController, UserController],
  // providers: [AppService, UserService],
})
export class AppModule {}
