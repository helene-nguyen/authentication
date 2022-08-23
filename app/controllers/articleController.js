//~ Import Debug 
import debug from 'debug'; 
const logger = debug('');
//~ Import modules


async function fetchAllArticles(req,res) {
    try {
        res.json({ message: 'ALL ARTICLES' });
    } catch (err) {
        logger(err.message);
    }
};

export { fetchAllArticles };

