import { Request, Response } from "express";
import { createImageService } from "../services/image/createImage.service";
import { updateImageService } from "../services/image/updateImage.service";
import { iImage } from "../interfaces/image.interface";

const createImageController = async ( req: Request, res: Response ) => {
    const announcementId = req.params.id;
    const data = req.body;

    const image = await createImageService( announcementId, data );

    return res.status(201).json( image );
}

const updateImageController = async ( req: Request, res: Response ) => {
    const id: string = req.params.imageId;
    const data: iImage = req.body;

    const updatedImage = await updateImageService( id, data );

    res.status(200).json(updatedImage);
}

export {
    createImageController,
    updateImageController
}
