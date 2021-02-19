import Router from "koa-router";
import checkLoggedIn from "../../lib/checkLoggedIn";
import {
  write,
  list,
  read,
  remove,
  update,
  getPostById,
  checkOwnPost,
} from "./posts.ctrl";

const posts = new Router();

posts.get("/", list);
posts.post("/", checkLoggedIn, write);
posts.get("/:id", getPostById, read);
posts.delete("/:id", checkLoggedIn, getPostById, checkOwnPost, remove);
posts.patch("/:id", checkLoggedIn, getPostById, checkOwnPost, update);

export default posts;
