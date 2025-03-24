"use client"
import { motion } from "framer-motion";
import { Thumbnail } from "@/components/ui/article/thumbnail";
import { sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import NavBar from "@/components/Navbar";



export default function Home() {
    const latestPosts = sortPosts(posts);
    return (
        <main className="min-h-screen relative dark">
            <NavBar/>

            <div className="relative h-screen overflow-y-auto overflow-x-hidden bg-light text-dark dark:bg-dark-2 dark:text-light">
                <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">

                    <main className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-6 z-[40]">

                        <div className="rounded-2xl mx-auto bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-1 lg:p-10">
                            <div className="">
                                <motion.h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight" initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}>
                                    Blog - Joki Koding
                                </motion.h2> 
                                <p className="mt-4 text-lg dark:text-light">
                                    Panduan lengkap untuk memahami layanan jasa Joki Koding dan cara memulai proyek dengan kami.
                                </p>
                            </div>

                            <div className="mt-10 lg:mt-14">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3">
                                    
                                    {latestPosts.map((post) => (
                                        post.published && (
                                            <Thumbnail 
                                                key={post.slug} 
                                                slug={post.slug}
                                                title={post.title}
                                                description={post.description}
                                                date={post.date}
                                                tags={post.tags}                                            
                                                cover={post.cover}                                            
                                            />
                                        )
                                    ))}
                                </div>

                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </main>
    );
}
