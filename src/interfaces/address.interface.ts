import { addressRequestSchema, addressResponseSchema } from "../schemas/address.schema";

type iAddressRequest = typeof addressRequestSchema
type iAddressResponse = typeof addressResponseSchema

export {
  iAddressRequest,
  iAddressResponse
}
