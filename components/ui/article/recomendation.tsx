import Link from 'next/link';
import React from 'react'
import { Tag } from './tag';

interface RecomendationProps {
    slug: string;
    title: string;
    cover: string;
    tags?: Array<string>;
}

export function Recomendation({ slug, title, cover, tags }: RecomendationProps) {
    return (
        <div className="mt-10">
            <div className="relative">
                <Link href={"/" + slug} className="group block aspect-6/4 overflow-hidden rounded-lg">
                    <img src={'/img/blog/' + cover} alt="" className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105" />
                </Link>

                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {tags?.map((tag) => (
                        <Tag tag={tag} key={tag} />
                    ))}
                </div>
            </div>
            <div className="mt-2">
                <h2 className="text-xl font-medium xl:text-s">
                    <Link href={"/" + slug} className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary">
                        {title}
                    </Link>
                </h2>

                {/* <ul className="mt-4 flex flex-wrap items-center gap-2">
                    <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                        15 min read
                    </li>
                    <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                        Nov 6, 2023
                    </li>
                </ul> */}
            </div>
        </div>
    );
}
