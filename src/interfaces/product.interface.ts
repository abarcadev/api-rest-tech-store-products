interface FiltersGetAllProductsI {
    name : string;
    limit: number;
    skip : number;
};  

interface BodySaveProductI {
    name       : string;
    description: string;
    price      : string;
}

export {
    FiltersGetAllProductsI,
    BodySaveProductI,
};