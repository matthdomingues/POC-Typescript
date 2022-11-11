import Joi from "joi";

export const ListSchema = Joi.object({
    item: Joi.string().required(),
    unidade: Joi.number().required(),
    descrição: Joi.string()
})