import Router from "koa-router";
import { write, list, read, remove, update } from "./posts.ctrl";

const posts = new Router();

posts.get("/", list);
posts.post("/", write);
posts.get("/:id", read);
posts.delete("/:id", remove);
posts.patch("/:id", update);

export default posts;