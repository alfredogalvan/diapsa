export interface Post {
    id: string | number;
    slug: string;
    title: string;
    excerpt: string;
    content: string | Record<string, unknown>;
    cover_image: string;
    featured: boolean;
    published_at: string;
    seo: Seo;
}

interface Seo {
    title: string;
    description: string;
}

export type Blog = Post;

export interface Announcement extends Post {
    announcement: AnnouncementDetail;
}

interface AnnouncementDetail {
    badge?: string;
    start_date?: string;
    end_date?: string;
    url?: string;
    button_text?: string;
}

export interface SuccessCase extends Post {
    success_case: SuccessCaseDetail;
}

interface SuccessCaseDetail {
    industry: string;
    service: string;
    introduction: string;
    challenge: string;
    results: string;
    economic_impact: string;
    conclusion: string;
    stages: SuccessCaseStage[];
}

interface SuccessCaseStage {
    id: string | number;
    stage_label: string;
    title: string;
    description: string;
    sort_order: number;
}
