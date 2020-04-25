export interface INews
{
    newsTitle : string;
    description : string;
    summary : string;
    full_news : string;
}

export class News implements INews{

    constructor (newsTitle: string, description : string, summary : string, full_news)
    {
        this.newsTitle = newsTitle,
        this.description = description,
        this.summary = summary,
        this.full_news = full_news 
    }
    newsTitle: string;
    description: string;
    summary: string;
    full_news: string;
}