import { posts } from "#site/content";
import { MDXContent } from "@/components/ui/mdx-components";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tag } from "@/components/ui/article/tag";
import { sortPosts } from "@/lib/utils";
import { Recomendation } from "@/components/ui/article/recomendation";
import { Date } from "@/components/ui/date";
import NavBar from "@/components/Navbar";

interface PostPageProps {
    params: {
        slug: string[];
    };
}

async function getPostFromParams(params: PostPageProps["params"]) {
    // console.log(await params.slug);
    const gett = await params;
    // const slug = params?.slug.join("/");
    const slug = gett.slug.join("/");

    console.log(slug);
    

    const post = posts.find((post) => post.slugAsParams === slug);

    if (!post) {
        return null;
    }

    return post;
}

export async function generateMetadata({
    params,
}: PostPageProps): Promise<Metadata> {
    const post = await getPostFromParams(params);

    if (!post) {
        return {};
    }

    const ogSearchParams = new URLSearchParams();
    ogSearchParams.set("title", post.title);

    return {
        title: post.title,
        description: post.description,
        authors: { name: siteConfig.author },
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: post.slug,
            images: [
                {
                    url: `/api/og?${ogSearchParams.toString()}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [`/api/og?${ogSearchParams.toString()}`],
        },
    };
}

export async function generateStaticParams(): Promise<
    PostPageProps["params"][]
> {
    return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
    const post = await getPostFromParams(params);
    const latestPosts = sortPosts(posts).slice(0, 5);

    if (!post || !post.published) {
        notFound();
    }

    return (
        <main className="min-h-screen relative dark relative overflow-y-auto overflow-x-hidden">
            <NavBar/>
            <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
                <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 z-10">
                    <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
                        <figure className="aspect-video overflow-hidden rounded-lg">
                            <img src={'/img/blog/' + post.cover} alt="" className="h-full w-full object-cover" />
                        </figure>

                        <ul className="mt-4 flex flex-wrap items-center gap-4 md:gap-6">
                            <li className="relative text-sm before:mr-1 before:content-['\2022'] dark:text-light">
                            <Date dateString={post.date} />
                            </li>
                        </ul>

                        <article className="prose mt-2 dark:prose-invert xl:prose-lg prose-headings:font-medium prose-blockquote:border-primary lg:mt-2">
                            <h1 className="text-white text-3xl fw-bold mb-5">{post.title}</h1>

                            <div className="h-10"></div>
                            <MDXContent code={post.body} />
                        </article>

                        <div className="mt-10 flex flex-wrap justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-5">
                                <h6 className="text-lg font-medium text-dark dark:text-light">Tags:</h6>

                                <div className="flex flex-wrap gap-2">
                                    {post.tags?.map((tag) => (
                                        <Tag tag={tag} key={tag} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:sticky lg:top-24">
                            <h3 className="text-2xl font-semibold leading-tight text-dark dark:text-light lg:text-3xl lg:leading-tight">
                                Latest Post
                            </h3>
                            {latestPosts.map((post) => (
                                post.published && (
                                    <Recomendation
                                        key={post.slug}
                                        slug={post.slug}
                                        title={post.title}
                                        tags={post.tags}
                                        cover={post.cover}
                                    />
                                )
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </main>
    );
}
