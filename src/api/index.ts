import get from './request'

const get_classes = get('/api/classes');


const get_articles = get('/api/articles');

const get_article = get('/api/article');

export { get_classes, get_articles, get_article }