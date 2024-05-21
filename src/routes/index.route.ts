import connect from '@gandalf-network/connect/dist/connect';
import Eye, { Source } from '@gandalf-network/eyeofsauron';
import { Request, Response, Router } from 'express';
const router: Router = Router();

// returns the url to connect our app to youtube using gandalf
router.get("/connect", async (req: Request, res: Response) => {
    const connectUrl = await connect.generateURL();
    return res.status(200).send({
        success: true,
        connectUrl
    })
})

// 
router.get("/youtube", async (req: Request, res: Response) => {
    const currentUrl = req.query.href; // Gets the current browser URL from frontend affect connecting
    const dataKey = connect.getDataKeyFromURL(String(currentUrl));

    const eye = new Eye({ privateKey: "0x92b44ab814fb4e6a3fb13754e5a98b329a51c3e11c300d976a970305e5d496b4" })

    const { data } = await eye.getActivity({ dataKey: dataKey, source: Source.YouTube, limit: 100, page: 1 })

    return res.status(200).send({
        success: true,
        data
    })
})

export default router;