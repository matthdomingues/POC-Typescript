import Joi from "joi";

export const ListSchema = Joi.object({
    item: Joi.string().required(),
    unidade: Joi.number().min(1).required(),
    descrição: Joi.string()
})