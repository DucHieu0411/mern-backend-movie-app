import express from "express";
import mediaController from "../controllers/media.controllers.js";

const router = express.Router({ mergeParams: true });

router.get("/search", mediaController.search);

router.get("/genres", mediaController.getGenres);

router.get("/detail/:mediaId", mediaController.getDetail);

router.get("/:mediaCategore", mediaController.getList);

export default router;
