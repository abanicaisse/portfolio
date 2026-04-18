import { getPayload } from "payload";
import config from "../../payload.config";

export const getPayloadClient = async () => await getPayload({ config });
