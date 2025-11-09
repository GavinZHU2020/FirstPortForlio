export interface PageHeaderProps {
    title: string;
    intro: string;
}
export interface BlogPost {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    slug: string;
    content?: string;
    tags?: string[];
}