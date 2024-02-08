import { Config } from "./config/config.mjs" //a "startup", a serice collection class called Config
import { Server } from "./servers/server.mjs" //a 'base server class', which will contain all of the Express code (so we don't have to work with it)
import { UsersRouter } from "./routers/usersRouter.mjs" //Going to function like our controller, handling routes and passing those
import { UserService } from "./services/userService.mjs" //service to inject that into the router

var config = new Config()
    .setPort(3000)
    .addTransient("UserService", UserService);

var router = new UsersRouter(config);

new Server(config)
    .addRouter("/api/users", new UsersRouter(config))
    .start();