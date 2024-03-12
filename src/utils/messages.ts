const NOT_CORS = 'Not allowed by CORS';
const INVALID_TOKEN = 'Invalid token';
const ROUTE_NOT_FOUND = 'Route not found';

const LOGIN_FAILED = 'Invalid credentials';
const REG_NOT_SAVED = 'Register not saved';
const REG_NOT_FOUND = (data: string) => `${ data } not found`;
const REG_DELETED = 'Register deleted';

export {
    NOT_CORS,
    INVALID_TOKEN,
    ROUTE_NOT_FOUND,
    LOGIN_FAILED,
    REG_NOT_SAVED,
    REG_NOT_FOUND,
    REG_DELETED,
};