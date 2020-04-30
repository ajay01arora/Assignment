export interface INews
{
    id: number;
    newsTitle : string;
    description : string;
    image_link : string;
    full_news : string;

}

export class News implements INews{

    constructor (newsTitle: string, description : string, image_link : string, full_news)
    {
        this.newsTitle = newsTitle,
        this.description = description,
        this.image_link = image_link,
        this.full_news = full_news 
    }

    id: number;
    newsTitle: string;
    description: string;
    image_link: string;
    full_news: string;
}