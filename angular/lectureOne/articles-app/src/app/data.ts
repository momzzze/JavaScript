import { Article } from './article.model';
import { data } from './seeds';

export class ArticleData {
    private  articles: Article[];

    constructor() {
        this.articles = data.map(d => new Article(d.title, d.description, d.author, d.imageUrl))
    }

    getData(){
        return this.articles;
    }
}
