import Joi from "joi";
export var ListSchema = Joi.object({
    item: Joi.string().required(),
    unidade: Joi.number().required(),
    descrição: Joi.string()
});
