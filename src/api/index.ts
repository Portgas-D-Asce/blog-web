import get from './request'

const get_category = get('/category');

const get_category_tree = get('/category/tree');

const get_category_abstract = get('/category/abstract');

const get_tag = get('/tag');

const get_tags = get('/tags');

const get_tag_abstract = get('/tag/abstract');

const get_article = get('/article');

const get_article_content = get('/article/content')

export {
    get_category,
    get_category_tree,
    get_category_abstract,
    get_tag,
    get_tags,
    get_tag_abstract,
    get_article,
    get_article_content
}