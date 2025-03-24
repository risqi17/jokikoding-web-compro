import React from 'react'

type CardArticleProps = {
    title: string;
    url: string;
    image: string;
    timeread: number;
};

const Article: React.FC<CardArticleProps> = ({ title, url, image, timeread }) => {
    return (
        <div className="">
            <div className="relative">
                <a href={url} target="_blank" className="group block aspect-6/4 overflow-hidden rounded-lg">
                    <img src={image} alt="" className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105" />
                </a>

                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    <a href={url} target="_blank" className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white">
                        Development
                    </a>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-medium xl:text-2xl">
                    <a href={url} target="_blank" className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary">
                        {title}
                    </a>
                </h2>

                <ul className="mt-4 flex flex-wrap items-center gap-2">
                    <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                        {timeread} min read
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Article;
