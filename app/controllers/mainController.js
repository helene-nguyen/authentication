//~ Import Debug 
import debug from 'debug'; 
const logger = debug('Controller');
//~ Import modules


async function renderHomePage(req,res) {
    try {
        
        res.render('home');
    } catch (err) {
        logger(err.message);
    }
};

export { renderHomePage };

