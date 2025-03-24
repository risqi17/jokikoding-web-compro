import React from 'react'

interface TagProps {
    tag: string;
  }

export function Tag({tag}: TagProps){
    return (
        <a href="#" className="inline-flex items-center justify-center gap-2 rounded border border-light bg-black px-2 py-1 text-center text-xs font-medium leading-none text-dark transition hover:bg-primary hover:text-white dark:border-dark dark:bg-dark-2 dark:text-light/70 dark:hover:bg-primary dark:hover:text-white">
            {tag}
        </a>
    );
}
