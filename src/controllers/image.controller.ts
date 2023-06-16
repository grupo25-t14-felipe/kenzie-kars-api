import { Request, Response } from "express";
import { createImageService } from "../services/image/createImage.service";

const createImageController = async ( req: Request, res: Response ) => {
    const announcementId = req.params.id;
    const data = req.body;

    const image = await createImageService( announcementId, data );

    return res.status(201).json( image );
}

export {
    createImageController
}
