export interface Movie {
    id: number;
    categoryId: number;
    title: string;
    description: string;
    imageUrl: string;
    isPopular: boolean;
    publishDate: Date;
}